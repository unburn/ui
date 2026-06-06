import React, { useState, useRef } from 'react';
import { CodeBlock } from '../../../package/components/CodeBlock/CodeBlock';
import { domToSvg } from '../../utils/figma';

interface ShowcaseProps {
  title: string;
  description?: string;
  code?: string;
  children: React.ReactNode;
}

export const Showcase: React.FC<ShowcaseProps> = ({ title, description, code, children }) => {
  const [showCode, setShowCode] = useState(false);
  const [figmaCopied, setFigmaCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleCopyToFigma = async () => {
    if (!contentRef.current) return;
    try {
      const svgString = domToSvg(contentRef.current, title);
      await navigator.clipboard.writeText(svgString);
      setFigmaCopied(true);
      setTimeout(() => setFigmaCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy component to Figma:', err);
    }
  };

  return (
    <div className="showcase-block">
      <div className="showcase-header">
        <div className="showcase-title-row">
          <span className="showcase-title">{title}</span>
          <div className="showcase-line"></div>
        </div>
        {description && <p className="showcase-description">{description}</p>}
      </div>
      <div className="showcase-preview">
        <div className="showcase-content" ref={contentRef}>
          {children}
        </div>

        {code && (
          <div className={`showcase-code-wrapper ${showCode ? 'open' : ''}`}>
            <CodeBlock
              code={code}
              language="tsx"
              variant="outlined"
              className="showcase-code-inner"
              style={{
                borderRadius: 0,
                border: "0px"
              }}
            />
          </div>
        )}

        {code && (
          <div className="showcase-code-footer" style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
            <button
              className={`view-code-btn ${showCode ? 'active' : ''}`}
              onClick={() => setShowCode(!showCode)}
            >
              {showCode ? 'HIDE CODE' : 'VIEW CODE'}
            </button>
            <button
              className="view-code-btn"
              onClick={handleCopyToFigma}
            >
              {figmaCopied ? 'COPIED!' : 'COPY TO FIGMA'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
