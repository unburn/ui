const resolveToAbsoluteColor = (colorStr: string, parentEl: HTMLElement): string => {
  if (!colorStr || colorStr === 'transparent' || colorStr === 'rgba(0, 0, 0, 0)') {
    return 'transparent';
  }
  try {
    const container = (parentEl && parentEl.nodeType === Node.ELEMENT_NODE) ? parentEl : document.body;
    const temp = document.createElement('div');
    temp.style.color = colorStr;
    container.appendChild(temp);
    const resolved = window.getComputedStyle(temp).color;
    container.removeChild(temp);
    return resolved;
  } catch {
    return colorStr;
  }
};

const parseColor = (colorStr: string, el?: HTMLElement): { color: string; opacity: number } => {
  if (!colorStr || colorStr === 'transparent' || colorStr === 'rgba(0, 0, 0, 0)') {
    return { color: 'rgb(0, 0, 0)', opacity: 0 };
  }
  
  let resolvedColor = colorStr;
  if (el) {
    resolvedColor = resolveToAbsoluteColor(colorStr, el);
  }
  
  if (!resolvedColor || resolvedColor === 'transparent' || resolvedColor === 'rgba(0, 0, 0, 0)') {
    return { color: 'rgb(0, 0, 0)', opacity: 0 };
  }
  
  // Parse modern color(color-space R G B / A) formats
  const colorSpaceMatch = resolvedColor.match(/color\(\s*[\w-]+\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?\s*\)/);
  if (colorSpaceMatch) {
    const r = Math.round(parseFloat(colorSpaceMatch[1]) * 255);
    const g = Math.round(parseFloat(colorSpaceMatch[2]) * 255);
    const b = Math.round(parseFloat(colorSpaceMatch[3]) * 255);
    const a = colorSpaceMatch[4] !== undefined ? parseFloat(colorSpaceMatch[4]) : 1;
    return {
      color: `rgb(${r}, ${g}, ${b})`,
      opacity: a
    };
  }
  
  // Parse standard rgba(...) formats
  const rgbaMatch = resolvedColor.match(/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/);
  if (rgbaMatch) {
    return {
      color: `rgb(${rgbaMatch[1]}, ${rgbaMatch[2]}, ${rgbaMatch[3]})`,
      opacity: parseFloat(rgbaMatch[4])
    };
  }
  
  return { color: resolvedColor, opacity: 1 };
};

const parseBoxShadow = (shadowStr: string, el: HTMLElement): { x: number; y: number; blur: number; spread: number; color: string; opacity: number }[] => {
  if (!shadowStr || shadowStr === 'none') return [];
  
  const shadowParts: string[] = [];
  let currentPart = '';
  let parenDepth = 0;
  for (let i = 0; i < shadowStr.length; i++) {
    const char = shadowStr[i];
    if (char === '(') parenDepth++;
    else if (char === ')') parenDepth--;
    
    if (char === ',' && parenDepth === 0) {
      shadowParts.push(currentPart.trim());
      currentPart = '';
    } else {
      currentPart += char;
    }
  }
  if (currentPart.trim()) {
    shadowParts.push(currentPart.trim());
  }
  
  const results: { x: number; y: number; blur: number; spread: number; color: string; opacity: number }[] = [];
  
  for (const part of shadowParts) {
    let colorPart: string;
    let numericPart: string;
    
    const colorMatch = part.match(/(?:rgba?|color)\([^)]+\)/);
    if (colorMatch) {
      colorPart = colorMatch[0];
      numericPart = part.replace(colorPart, '').trim();
    } else {
      const words = part.split(/\s+/);
      const firstWord = words[0];
      const lastWord = words[words.length - 1];
      if (firstWord.startsWith('#') || !firstWord.includes('px')) {
        colorPart = firstWord;
        numericPart = words.slice(1).join(' ');
      } else {
        colorPart = lastWord;
        numericPart = words.slice(0, -1).join(' ');
      }
    }
    
    const numbers = numericPart.split(/\s+/).map(w => parseFloat(w) || 0);
    const x = numbers[0] || 0;
    const y = numbers[1] || 0;
    const blur = numbers[2] || 0;
    const spread = numbers[3] || 0;
    
    const parsedColor = parseColor(colorPart, el);
    if (parsedColor.color !== 'none') {
      results.push({
        x,
        y,
        blur,
        spread,
        color: parsedColor.color,
        opacity: parsedColor.opacity
      });
    }
  }
  
  return results;
};

const parseLinearGradient = (gradientStr: string, el: HTMLElement): { x1: string; y1: string; x2: string; y2: string; stops: { offset: string; color: string; opacity: number }[] } | null => {
  if (!gradientStr || gradientStr === 'none' || !gradientStr.includes('linear-gradient')) return null;
  
  const match = gradientStr.match(/linear-gradient\((.+)\)/i);
  if (!match) return null;
  
  const content = match[1];
  
  const parts: string[] = [];
  let currentPart = '';
  let parenDepth = 0;
  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    if (char === '(') parenDepth++;
    else if (char === ')') parenDepth--;
    
    if (char === ',' && parenDepth === 0) {
      parts.push(currentPart.trim());
      currentPart = '';
    } else {
      currentPart += char;
    }
  }
  if (currentPart.trim()) {
    parts.push(currentPart.trim());
  }
  
  if (parts.length < 2) return null;
  
  const directionPart = parts[0];
  let colorStopsStartIdx = 0;
  
  let x1 = '0%', y1 = '0%', x2 = '0%', y2 = '100%';
  
  if (directionPart.includes('to right')) {
    x1 = '0%'; y1 = '0%'; x2 = '100%'; y2 = '0%';
    colorStopsStartIdx = 1;
  } else if (directionPart.includes('to left')) {
    x1 = '100%'; y1 = '0%'; x2 = '0%'; y2 = '0%';
    colorStopsStartIdx = 1;
  } else if (directionPart.includes('to top')) {
    x1 = '0%'; y1 = '100%'; x2 = '0%'; y2 = '0%';
    colorStopsStartIdx = 1;
  } else if (directionPart.includes('to bottom')) {
    x1 = '0%'; y1 = '0%'; x2 = '0%'; y2 = '100%';
    colorStopsStartIdx = 1;
  } else if (directionPart.includes('deg')) {
    colorStopsStartIdx = 1;
  }
  
  const stops: { offset: string; color: string; opacity: number }[] = [];
  const colorStopParts = parts.slice(colorStopsStartIdx);
  
  colorStopParts.forEach((stopPart, idx) => {
    let colorPart: string;
    let offsetPart: string;
    
    const colorMatch = stopPart.match(/(?:rgba?|color)\([^)]+\)/);
    if (colorMatch) {
      colorPart = colorMatch[0];
      offsetPart = stopPart.replace(colorPart, '').trim();
    } else {
      const words = stopPart.split(/\s+/);
      const firstWord = words[0];
      const lastWord = words[words.length - 1];
      if (firstWord.startsWith('#') || !firstWord.includes('%')) {
        colorPart = firstWord;
        offsetPart = words.slice(1).join(' ');
      } else {
        colorPart = lastWord;
        offsetPart = words.slice(0, -1).join(' ');
      }
    }
    
    const parsedColor = parseColor(colorPart, el);
    let offset = offsetPart;
    if (!offset) {
      offset = `${Math.round((idx / (colorStopParts.length - 1)) * 100)}%`;
    }
    
    if (parsedColor.color !== 'none') {
      stops.push({
        offset,
        color: parsedColor.color,
        opacity: parsedColor.opacity
      });
    }
  });
  
  if (stops.length === 0) return null;
  return { x1, y1, x2, y2, stops };
};

const parseRadialGradient = (gradientStr: string, el: HTMLElement): { cx: string; cy: string; r: string; stops: { offset: string; color: string; opacity: number }[] } | null => {
  if (!gradientStr || gradientStr === 'none' || !gradientStr.includes('radial-gradient')) return null;
  
  const match = gradientStr.match(/radial-gradient\((.+)\)/i);
  if (!match) return null;
  
  const content = match[1];
  
  const parts: string[] = [];
  let currentPart = '';
  let parenDepth = 0;
  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    if (char === '(') parenDepth++;
    else if (char === ')') parenDepth--;
    
    if (char === ',' && parenDepth === 0) {
      parts.push(currentPart.trim());
      currentPart = '';
    } else {
      currentPart += char;
    }
  }
  if (currentPart.trim()) {
    parts.push(currentPart.trim());
  }
  
  if (parts.length < 2) return null;
  
  const firstPart = parts[0];
  let colorStopsStartIdx = 0;
  let cx = '50%', cy = '50%', r = '50%';
  
  if (firstPart.includes('circle') || firstPart.includes('ellipse') || firstPart.includes('at')) {
    colorStopsStartIdx = 1;
    const atMatch = firstPart.match(/at\s+([^\s]+)\s*([^\s]*)/);
    if (atMatch) {
      const xPos = atMatch[1];
      const yPos = atMatch[2] || atMatch[1];
      if (xPos === 'center') cx = '50%';
      else if (xPos === 'left') cx = '0%';
      else if (xPos === 'right') cx = '100%';
      else if (xPos.endsWith('%') || xPos.endsWith('px')) cx = xPos;
      
      if (yPos === 'center') cy = '50%';
      else if (yPos === 'top') cy = '0%';
      else if (yPos === 'bottom') cy = '100%';
      else if (yPos.endsWith('%') || yPos.endsWith('px')) cy = yPos;
    }
  }
  
  const stops: { offset: string; color: string; opacity: number }[] = [];
  const colorStopParts = parts.slice(colorStopsStartIdx);
  
  colorStopParts.forEach((stopPart, idx) => {
    let colorPart: string;
    let offsetPart: string;
    
    const colorMatch = stopPart.match(/(?:rgba?|color)\([^)]+\)/);
    if (colorMatch) {
      colorPart = colorMatch[0];
      offsetPart = stopPart.replace(colorPart, '').trim();
    } else {
      const words = stopPart.split(/\s+/);
      const firstWord = words[0];
      const lastWord = words[words.length - 1];
      if (firstWord.startsWith('#') || !firstWord.includes('%')) {
        colorPart = firstWord;
        offsetPart = words.slice(1).join(' ');
      } else {
        colorPart = lastWord;
        offsetPart = words.slice(0, -1).join(' ');
      }
    }
    
    const parsedColor = parseColor(colorPart, el);
    let offset = offsetPart;
    if (!offset) {
      offset = `${Math.round((idx / (colorStopParts.length - 1)) * 100)}%`;
    }
    
    if (parsedColor.color !== 'none') {
      stops.push({
        offset,
        color: parsedColor.color,
        opacity: parsedColor.opacity
      });
    }
  });
  
  if (stops.length === 0) return null;
  
  if (stops.length > 0) {
    const lastStopOffset = stops[stops.length - 1].offset;
    if (lastStopOffset.endsWith('%')) {
      r = lastStopOffset;
    }
  }
  
  return { cx, cy, r, stops };
};

const parseBackgroundImageUrl = (bgImageStr: string): string | null => {
  if (!bgImageStr || bgImageStr === 'none') return null;
  const trimmed = bgImageStr.trim();
  if (trimmed.startsWith('url(') && trimmed.endsWith(')')) {
    let urlContent = trimmed.substring(4, trimmed.length - 1).trim();
    if ((urlContent.startsWith('"') && urlContent.endsWith('"')) ||
        (urlContent.startsWith("'") && urlContent.endsWith("'"))) {
      urlContent = urlContent.substring(1, urlContent.length - 1).trim();
    }
    return urlContent;
  }
  return null;
};

const getFirstTextNode = (node: Node): string => {
  if (node.nodeType === Node.TEXT_NODE) {
    const val = node.nodeValue?.trim();
    if (val) return val;
  }
  if (node.nodeType === Node.ELEMENT_NODE) {
    const el = node as HTMLElement;
    const tagName = el.tagName.toLowerCase();
    if (tagName === 'svg' || tagName === 'style' || tagName === 'script') {
      return '';
    }
    for (let i = 0; i < el.childNodes.length; i++) {
      const text = getFirstTextNode(el.childNodes[i]);
      if (text) return text;
    }
  }
  return '';
};

const getBorderRadius = (style: CSSStyleDeclaration, width: number, height: number): { rx: number; ry: number } => {
  const radiusStr = style.borderTopLeftRadius || style.borderRadius || '';
  if (!radiusStr || radiusStr === '0' || radiusStr === '0px') {
    return { rx: 0, ry: 0 };
  }

  if (radiusStr.endsWith('%')) {
    const pct = parseFloat(radiusStr) || 0;
    const rx = (width * pct) / 100;
    const ry = (height * pct) / 100;
    return { rx, ry };
  }

  const pxVal = parseFloat(radiusStr) || 0;
  if (pxVal <= 0) {
    return { rx: 0, ry: 0 };
  }

  const maxRadius = Math.min(width, height) / 2;
  const clamped = Math.min(pxVal, maxRadius);
  return { rx: clamped, ry: clamped };
};

const getLineHeight = (style: CSSStyleDeclaration, fontSize: number): number => {
  const lh = style.lineHeight;
  if (!lh || lh === 'normal') {
    return fontSize * 1.4;
  }
  if (lh.endsWith('px')) {
    return parseFloat(lh) || fontSize * 1.4;
  }
  const factor = parseFloat(lh);
  if (!isNaN(factor)) {
    return fontSize * factor;
  }
  return fontSize * 1.4;
};

const wrapText = (text: string, maxW: number, style: CSSStyleDeclaration, parent: HTMLElement): string[] => {
  const words = text.split(/\s+/);
  if (words.length <= 1 || maxW <= 0) return [text];
  
  const lines: string[] = [];
  let currentLine = words[0];
  
  const tempSpan = document.createElement('span');
  tempSpan.style.fontFamily = style.fontFamily;
  tempSpan.style.fontSize = style.fontSize;
  tempSpan.style.fontWeight = style.fontWeight;
  tempSpan.style.letterSpacing = style.letterSpacing;
  tempSpan.style.textTransform = style.textTransform;
  tempSpan.style.visibility = 'hidden';
  tempSpan.style.position = 'absolute';
  tempSpan.style.whiteSpace = 'nowrap';
  parent.appendChild(tempSpan);
  
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const testLine = currentLine + ' ' + word;
    tempSpan.textContent = testLine;
    const testWidth = tempSpan.getBoundingClientRect().width;
    if (testWidth > maxW) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  }
  lines.push(currentLine);
  parent.removeChild(tempSpan);
  return lines;
};

export const domToSvg = (element: HTMLElement, showcaseTitle: string): string => {
  const rootRect = element.getBoundingClientRect();
  const gradients: string[] = [];
  
  const traverse = (node: Node): string => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement;
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      
      const x = rect.left - rootRect.left;
      const y = rect.top - rootRect.top;
      const width = rect.width;
      const height = rect.height;
      
      if (width === 0 || height === 0 || style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
        return '';
      }
      
      let svgContent = '';
      let hasBg = false;
      let hasBorder = false;
      let hasShadows = false;
      
      if (el !== element) {
        let bg = parseColor(style.backgroundColor, el);
        const { rx, ry } = getBorderRadius(style, width, height);
        const border = parseColor(style.borderTopColor || style.borderColor, el);
        const borderWidth = parseFloat(style.borderTopWidth) || parseFloat(style.borderWidth) || 0;
        const shadows = parseBoxShadow(style.boxShadow, el);
        
        hasBg = bg.color !== 'none' && bg.opacity > 0;
        
        const gradient = parseLinearGradient(style.backgroundImage, el);
        if (gradient) {
          const gradientId = `grad-${Math.random().toString(36).substring(2, 9)}`;
          let stopElements = '';
          gradient.stops.forEach(stop => {
            stopElements += `      <stop offset="${stop.offset}" stop-color="${stop.color}" stop-opacity="${stop.opacity}" />\n`;
          });
          
          gradients.push(`  <linearGradient id="${gradientId}" x1="${gradient.x1}" y1="${gradient.y1}" x2="${gradient.x2}" y2="${gradient.y2}">\n${stopElements}  </linearGradient>`);
          
          bg = { color: `url(#${gradientId})`, opacity: 1 };
          hasBg = true;
        }

        const radialGradient = parseRadialGradient(style.backgroundImage, el);
        if (radialGradient) {
          const gradientId = `grad-${Math.random().toString(36).substring(2, 9)}`;
          let stopElements = '';
          radialGradient.stops.forEach(stop => {
            stopElements += `      <stop offset="${stop.offset}" stop-color="${stop.color}" stop-opacity="${stop.opacity}" />\n`;
          });
          
          gradients.push(`  <radialGradient id="${gradientId}" cx="${radialGradient.cx}" cy="${radialGradient.cy}" r="${radialGradient.r}">\n${stopElements}  </radialGradient>`);
          
          bg = { color: `url(#${gradientId})`, opacity: 1 };
          hasBg = true;
        }

        const imageUrl = parseBackgroundImageUrl(style.backgroundImage);
        if (imageUrl) {
          const elementOpacity = parseFloat(style.opacity) || 1;
          let opacityAttr = '';
          if (elementOpacity < 1) {
            opacityAttr = ` opacity="${elementOpacity}"`;
          }
          const escapedUrl = imageUrl
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
          svgContent += `  <image x="${x}" y="${y}" width="${width}" height="${height}" href="${escapedUrl}"${opacityAttr} />\n`;
        }
        
        hasBorder = borderWidth > 0 && border.color !== 'none' && border.opacity > 0;
        hasShadows = shadows.length > 0;
        
        if (hasShadows) {
          for (let i = shadows.length - 1; i >= 0; i--) {
            const shadow = shadows[i];
            const sx = x + shadow.x - shadow.spread;
            const sy = y + shadow.y - shadow.spread;
            const sw = width + 2 * shadow.spread;
            const sh = height + 2 * shadow.spread;
            const sRx = rx > 0 ? rx + shadow.spread : 0;
            const sRy = ry > 0 ? ry + shadow.spread : 0;
            
            let rxAttr = '';
            if (sRx > 0 || sRy > 0) {
              rxAttr = `rx="${sRx}" ry="${sRy}"`;
            }
            
            let fillAttr = `fill="${shadow.color}"`;
            if (shadow.opacity < 1) {
              fillAttr += ` fill-opacity="${shadow.opacity}"`;
            }
            
            const elementOpacity = parseFloat(style.opacity) || 1;
            let opacityAttr = '';
            if (elementOpacity < 1) {
              opacityAttr = ` opacity="${elementOpacity}"`;
            }
            
            svgContent += `  <rect x="${sx}" y="${sy}" width="${sw}" height="${sh}" ${fillAttr} ${rxAttr} ${opacityAttr} />\n`;
          }
        }
        
        if (hasBg || hasBorder) {
          let rectAttrs = '';
          if (hasBg) {
            rectAttrs += `fill="${bg.color}"`;
            if (bg.opacity < 1) {
              rectAttrs += ` fill-opacity="${bg.opacity}"`;
            }
          } else {
            rectAttrs += `fill="none"`;
          }
          
          if (hasBorder) {
            rectAttrs += ` stroke="${border.color}" stroke-width="${borderWidth}"`;
            if (border.opacity < 1) {
              rectAttrs += ` stroke-opacity="${border.opacity}"`;
            }
          }
          
          let rxAttr = '';
          if (rx > 0 || ry > 0) {
            rxAttr = `rx="${rx}" ry="${ry}"`;
          }
          
          const elementOpacity = parseFloat(style.opacity) || 1;
          let opacityAttr = '';
          if (elementOpacity < 1) {
            opacityAttr = ` opacity="${elementOpacity}"`;
          }
          
          svgContent += `  <rect x="${x}" y="${y}" width="${width}" height="${height}" ${rectAttrs} ${rxAttr} ${opacityAttr} />\n`;
        }
      }
      
      if (el.tagName.toLowerCase() === 'svg') {
        const clone = el.cloneNode(true) as SVGElement;
        clone.setAttribute('x', x.toString());
        clone.setAttribute('y', y.toString());
        clone.setAttribute('width', width.toString());
        clone.setAttribute('height', height.toString());
        
        const strokeColor = parseColor(style.color, el);
        const replaceCurrentColor = (node: Element) => {
          if (node.getAttribute('stroke') === 'currentColor') {
            node.setAttribute('stroke', strokeColor.color);
            if (strokeColor.opacity < 1) {
              node.setAttribute('stroke-opacity', strokeColor.opacity.toString());
            }
          }
          if (node.getAttribute('fill') === 'currentColor') {
            node.setAttribute('fill', strokeColor.color);
            if (strokeColor.opacity < 1) {
              node.setAttribute('fill-opacity', strokeColor.opacity.toString());
            }
          }
          for (let i = 0; i < node.children.length; i++) {
            replaceCurrentColor(node.children[i]);
          }
        };
        replaceCurrentColor(clone);
        
        const elementOpacity = parseFloat(style.opacity) || 1;
        if (elementOpacity < 1) {
          svgContent += `  <g opacity="${elementOpacity}">\n    ${new XMLSerializer().serializeToString(clone)}\n  </g>\n`;
        } else {
          svgContent += `  ${new XMLSerializer().serializeToString(clone)}\n`;
        }
        return svgContent;
      }
      
      if (el.tagName.toLowerCase() === 'img') {
        const img = el as HTMLImageElement;
        const elementOpacity = parseFloat(style.opacity) || 1;
        let opacityAttr = '';
        if (elementOpacity < 1) {
          opacityAttr = ` opacity="${elementOpacity}"`;
        }
        svgContent += `  <image x="${x}" y="${y}" width="${width}" height="${height}" href="${img.src}" ${opacityAttr} />\n`;
        return svgContent;
      }
      
      let childrenContent = '';
      el.childNodes.forEach((child) => {
        childrenContent += traverse(child);
      });
      
      svgContent += childrenContent;
      
      const isDirectChild = el.parentElement === element;
      const isComponent = (hasBg || hasBorder || hasShadows) && el.childNodes.length > 0;
      
      if (isDirectChild || isComponent) {
        let groupName: string;
        if (isDirectChild) {
          groupName = showcaseTitle;
        } else {
          groupName = getFirstTextNode(el).trim();
          if (groupName.includes('\n')) {
            groupName = groupName.split('\n')[0].trim();
          }
          if (groupName.length > 40) {
            groupName = groupName.substring(0, 37) + '...';
          }
          
          if (!groupName) {
            const classes = Array.from(el.classList);
            const componentClass = classes.find(c => c.startsWith('unburn-'));
            if (componentClass) {
              groupName = componentClass.replace('unburn-', '').replace('-', ' ');
              groupName = groupName.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            } else {
              groupName = el.tagName.charAt(0).toUpperCase() + el.tagName.slice(1).toLowerCase();
            }
          }
        }
        
        const escapedGroupId = groupName
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&apos;');
        
        return `<g id="${escapedGroupId}">\n${svgContent}</g>\n`;
      }
      
      return svgContent;
    } else if (node.nodeType === Node.TEXT_NODE) {
      const text = node.nodeValue?.trim();
      if (!text) return '';
      
      const parent = node.parentElement;
      if (!parent) return '';
      
      try {
        const range = document.createRange();
        range.selectNodeContents(node);
        const rect = range.getBoundingClientRect();
        
        const style = window.getComputedStyle(parent);
        const fontSize = parseFloat(style.fontSize) || 14;
        const textColor = parseColor(style.color, parent);
        const fontFamily = style.fontFamily.replace(/"/g, "'");
        const fontWeight = style.fontWeight;
        const textTransform = style.textTransform;
        const textAlign = style.textAlign;
        const whiteSpace = style.whiteSpace;
        
        let transformedText = text;
        if (textTransform === 'uppercase') {
          transformedText = transformedText.toUpperCase();
        } else if (textTransform === 'lowercase') {
          transformedText = transformedText.toLowerCase();
        } else if (textTransform === 'capitalize') {
          transformedText = transformedText.replace(/\b\w/g, c => c.toUpperCase());
        }
        
        const parentRect = parent.getBoundingClientRect();
        const maxW = parentRect.width - (parseFloat(style.paddingLeft) || 0) - (parseFloat(style.paddingRight) || 0);
        
        const lines = (whiteSpace === 'nowrap') ? [transformedText] : wrapText(transformedText, maxW, style, parent);
        const lineHeight = getLineHeight(style, fontSize);
        const yStart = rect.top - rootRect.top + (fontSize * 0.78);
        
        // Check if the text is horizontally centered in any of its parent containers
        let isCentered = false;
        let centeringParent = parent;
        let tempEl = parent;
        while (tempEl && tempEl !== element) {
          const tempRect = tempEl.getBoundingClientRect();
          if (tempRect.width > rect.width + 4) {
            const leftGap = rect.left - tempRect.left;
            const rightGap = tempRect.right - rect.right;
            if (Math.abs(leftGap - rightGap) <= 3) {
              isCentered = true;
              centeringParent = tempEl;
              break;
            }
          }
          tempEl = tempEl.parentElement as HTMLElement;
        }
        
        let anchor = 'start';
        let xCoord = rect.left - rootRect.left;
        
        if (textAlign === 'center' || isCentered) {
          anchor = 'middle';
          const centerRect = isCentered ? centeringParent.getBoundingClientRect() : parentRect;
          xCoord = centerRect.left - rootRect.left + centerRect.width / 2;
        } else if (textAlign === 'right') {
          anchor = 'end';
          xCoord = parentRect.left - rootRect.left + parentRect.width - (parseFloat(style.paddingRight) || 0);
        }
        
        let tspanContent = '';
        lines.forEach((line, idx) => {
          const escapedLine = line
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
          
          const dy = idx === 0 ? 0 : lineHeight;
          tspanContent += `  <tspan x="${xCoord}" dy="${dy}">${escapedLine}</tspan>\n`;
        });
        
        let textAttrs = `fill="${textColor.color}"`;
        if (textColor.opacity < 1) {
          textAttrs += ` fill-opacity="${textColor.opacity}"`;
        }
        
        const elementOpacity = parseFloat(style.opacity) || 1;
        if (elementOpacity < 1) {
          textAttrs += ` opacity="${elementOpacity}"`;
        }
        
        if (anchor !== 'start') {
          textAttrs += ` text-anchor="${anchor}"`;
        }
        
        return `  <text x="${xCoord}" y="${yStart}" ${textAttrs} font-family="${fontFamily}" font-size="${fontSize}px" font-weight="${fontWeight}">\n  ${tspanContent}  </text>\n`;
      } catch {
        return '';
      }
    }
    return '';
  };
  
  const getContainerBg = (): { color: string; opacity: number; rx: number; ry: number } => {
    let bgElement: HTMLElement | null = element;
    let bg = parseColor(window.getComputedStyle(bgElement).backgroundColor, bgElement);
    while (bgElement && (bg.color === 'none' || bg.opacity === 0)) {
      bgElement = bgElement.parentElement;
      if (bgElement) {
        bg = parseColor(window.getComputedStyle(bgElement).backgroundColor, bgElement);
      }
    }
    let rx = 0, ry = 0;
    if (bgElement) {
      const elStyle = window.getComputedStyle(bgElement);
      const elRect = bgElement.getBoundingClientRect();
      const radius = getBorderRadius(elStyle, elRect.width, elRect.height);
      rx = radius.rx;
      ry = radius.ry;
    }
    return { ...bg, rx, ry };
  };

  const bg = getContainerBg();
  let bgRect = '';
  if (bg.color !== 'none' && bg.opacity > 0) {
    let rectAttrs = `fill="${bg.color}"`;
    if (bg.opacity < 1) {
      rectAttrs += ` fill-opacity="${bg.opacity}"`;
    }
    if (bg.rx > 0 || bg.ry > 0) {
      rectAttrs += ` rx="${bg.rx}" ry="${bg.ry}"`;
    }
    bgRect = `  <rect width="${rootRect.width}" height="${rootRect.height}" ${rectAttrs} />\n`;
  }
  
  const content = traverse(element);

  const componentName = document.querySelector('.section-header .section-title')?.textContent?.trim() || 'Component';
  const escapedComponentName = componentName
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

  let defsBlock = '';
  if (gradients.length > 0) {
    defsBlock = `<defs>\n${gradients.join('\n')}\n</defs>\n`;
  }

  return `<svg id="${escapedComponentName}" xmlns="http://www.w3.org/2000/svg" width="${rootRect.width}" height="${rootRect.height}" viewBox="0 0 ${rootRect.width} ${rootRect.height}">\n${defsBlock}${bgRect}${content}</svg>`;
};
