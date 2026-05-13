import React, { type ButtonHTMLAttributes, forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import './Button.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined' | 'duo';
  size?: 'sm' | 'default' | 'lg';
  loading?: boolean;
  opacityLevel?: '25' | '50' | '75' | '100';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  color?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'filled',
      size = 'default',
      loading = false,
      opacityLevel = '100',
      icon,
      iconPosition = 'left',
      color,
      children,
      disabled,
      style,
      ...props
    },
    ref
  ) => {
    const isIconOnly = (icon || loading) && !children;

    // Predefined colors from index.css mapping
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
      <button
        ref={ref}
        disabled={disabled || loading}
        style={{ ...style, ...accentTextStyle }}
        className={cn(
          'unburn-btn',
          `unburn-btn-${variant}`,
          `unburn-btn-${size}`,
          `unburn-btn-opacity-${opacityLevel}`,
          isIconOnly && 'unburn-btn-icon-only',
          className
        )}
        {...props}
      >
        {loading && <Loader2 className={cn("unburn-btn-loading-icon", !isIconOnly && "unburn-btn-icon-left")} size={16} />}
        {!loading && icon && iconPosition === 'left' && (
          <span className={cn(!isIconOnly && "unburn-btn-icon-left")}>{icon}</span>
        )}
        {children}
        {!loading && icon && iconPosition === 'right' && (
          <span className={cn(!isIconOnly && "unburn-btn-icon-right")}>{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
