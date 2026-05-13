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
        style={{ ...style, ...colorStyle }}
        className={cn(
          'unburn-alert',
          `unburn-alert-${status}`,
          variant === 'duo' && 'unburn-alert-duo',
          className
        )}
        {...props}
      >
        <div className="unburn-alert-content">
          {icon && <div className="unburn-alert-icon">{icon}</div>}
          <div className="unburn-alert-text">
            <div className="unburn-alert-title">{title}</div>
            {description && <div className="unburn-alert-description">{description}</div>}
          </div>
        </div>
        {actions && <div className="unburn-alert-actions">{actions}</div>}
      </div>
    );
  }
);

Alert.displayName = 'Alert';
