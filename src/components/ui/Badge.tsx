import React from 'react';
import { cn } from '../../lib/utils';
import './Badge.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'filled' | 'outlined' | 'duo' | 'glass';
  size?: 'sm' | 'default' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'filled',
  size = 'default',
  icon,
  iconPosition = 'left',
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'unburn-badge',
        `badge-${variant}`,
        `badge-${size}`,
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="badge-icon-left">{icon}</span>}
      <span className="badge-text">{children}</span>
      {icon && iconPosition === 'right' && <span className="badge-icon-right">{icon}</span>}
    </div>
  );
};
