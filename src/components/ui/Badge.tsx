import React from 'react';
import { cn } from '../../lib/utils';
import './Badge.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'filled' | 'outlined' | 'duo' | 'glass';
  size?: 'sm' | 'default' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  color?: string;
  classNames?: {
    root?: string;
    icon?: string;
    text?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    icon?: React.CSSProperties;
    text?: React.CSSProperties;
  };
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'filled',
  size = 'default',
  icon,
  iconPosition = 'left',
  color,
  className,
  classNames,
  styles,
  style,
  ...props
}) => {
  // Predefined colors from base.css mapping
  const colorMap: Record<string, string> = {
    red: 'var(--color-red)',
    orange: 'var(--color-orange)',
    blue: 'var(--color-blue)',
    green: 'var(--color-green)',
    purple: 'var(--color-purple)',
    black: 'var(--color-black)',
    white: 'var(--color-white)',
  };

  const resolvedColor = color ? (colorMap[color] || color) : undefined;
  const accentTextStyle = resolvedColor ? {
    '--accent-color': resolvedColor,
    '--accent-text': color === 'white' || color === 'orange' || color === 'green' ? 'black' : 'white'
  } as React.CSSProperties : {};

  return (
    <div
      className={cn(
        'unburn-badge',
        `badge-${variant}`,
        `badge-${size}`,
        className,
        classNames?.root
      )}
      style={{ ...style, ...accentTextStyle, ...styles?.root }}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span 
          className={cn("badge-icon-left", classNames?.icon)}
          style={styles?.icon}
        >
          {icon}
        </span>
      )}
      <span 
        className={cn("badge-text", classNames?.text)}
        style={styles?.text}
      >
        {children}
      </span>
      {icon && iconPosition === 'right' && (
        <span 
          className={cn("badge-icon-right", classNames?.icon)}
          style={styles?.icon}
        >
          {icon}
        </span>
      )}
    </div>
  );
};
