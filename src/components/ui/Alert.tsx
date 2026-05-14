import React, { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';
import './Alert.css';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  status?: 'success' | 'info' | 'warning' | 'error' | 'default';
  variant?: 'outlined' | 'duo';
  icon?: React.ReactNode;
  title: string;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  color?: string;
  classNames?: {
    root?: string;
    icon?: string;
    title?: string;
    description?: string;
    actions?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    icon?: React.CSSProperties;
    title?: React.CSSProperties;
    description?: React.CSSProperties;
    actions?: React.CSSProperties;
  };
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      status = 'default',
      variant = 'outlined',
      icon,
      title,
      description,
      actions,
      color,
      style,
      classNames,
      styles,
      ...props
    },
    ref
  ) => {
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
    const colorStyle = resolvedColor ? { 
      '--accent-color': resolvedColor,
      ...(status === 'default' && { '--border-color': resolvedColor })
    } as React.CSSProperties : {};

    return (
      <div
        ref={ref}
        style={{ ...style, ...colorStyle, ...styles?.root }}
        className={cn(
          'unburn-alert',
          `unburn-alert-${status}`,
          variant === 'duo' && 'unburn-alert-duo',
          className,
          classNames?.root
        )}
        {...props}
      >
        <div className="unburn-alert-content">
          {icon && (
            <div 
              className={cn("unburn-alert-icon", classNames?.icon)}
              style={styles?.icon}
            >
              {icon}
            </div>
          )}
          <div className="unburn-alert-text">
            <div 
              className={cn("unburn-alert-title", classNames?.title)}
              style={styles?.title}
            >
              {title}
            </div>
            {description && (
              <div 
                className={cn("unburn-alert-description", classNames?.description)}
                style={styles?.description}
              >
                {description}
              </div>
            )}
          </div>
        </div>
        {actions && (
          <div 
            className={cn("unburn-alert-actions", classNames?.actions)}
            style={styles?.actions}
          >
            {actions}
          </div>
        )}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
