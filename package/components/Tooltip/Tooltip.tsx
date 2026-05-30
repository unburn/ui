"use client";

import React, { useState, forwardRef } from 'react';
import { cn } from '../../lib/utils';
import './Tooltip.css';
import { getAccentVariables } from '../../lib/colors';

export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
  content: React.ReactNode;
  children?: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  visible?: boolean;
  color?: string;
  variant?: 'filled' | 'outlined' | 'duo';
  disabled?: boolean;
  classNames?: {
    root?: string;
    trigger?: string;
    bubble?: string;
    arrow?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    trigger?: React.CSSProperties;
    bubble?: React.CSSProperties;
    arrow?: React.CSSProperties;
  };
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      className,
      style,
      content,
      children,
      position = 'top',
      visible: controlledVisible,
      color,
      variant = 'filled',
      disabled = false,
      classNames,
      styles,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const showTooltip = (controlledVisible !== undefined ? controlledVisible : isHovered) && !disabled;
    const accentStyle = getAccentVariables(color);

    // Standalone controlled mode (used by slider thumb and custom offset layouts)
    if (!children) {
      if (!showTooltip) return null;
      return (
        <div
          ref={ref}
          className={cn(
            "unburn-tooltip-bubble",
            "unburn-tooltip-bubble-standalone",
            `unburn-tooltip-bubble-${position}`,
            `unburn-tooltip-bubble-${variant}`,
            className,
            classNames?.bubble
          )}
          style={{ ...style, ...styles?.bubble, ...accentStyle }}
          {...props}
        >
          <span className="unburn-tooltip-content">{content}</span>
          <div className={cn("unburn-tooltip-arrow", classNames?.arrow)} style={styles?.arrow} />
        </div>
      );
    }

    // Uncontrolled trigger wrapping mode
    return (
      <div
        ref={ref}
        className={cn("unburn-tooltip-root", className, classNames?.root)}
        style={{ ...style, ...styles?.root, ...accentStyle }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        {...props}
      >
        <div 
          className={cn("unburn-tooltip-trigger", classNames?.trigger)} 
          style={styles?.trigger}
        >
          {children}
        </div>
        
        {showTooltip && (
          <div
            className={cn(
              "unburn-tooltip-bubble",
              `unburn-tooltip-bubble-${position}`,
              `unburn-tooltip-bubble-${variant}`,
              classNames?.bubble
            )}
            style={{ ...styles?.bubble, ...accentStyle }}
          >
            <span className="unburn-tooltip-content">{content}</span>
            <div className={cn("unburn-tooltip-arrow", classNames?.arrow)} style={styles?.arrow} />
          </div>
        )}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';
