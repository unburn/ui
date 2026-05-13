import React, { type HTMLAttributes, forwardRef } from 'react';
import { User } from 'lucide-react';
import { cn } from '../../lib/utils';
import './Avatar.css';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  showStatus?: boolean;
  status?: 'online' | 'offline' | 'dnd' | 'idle';
  color?: string;
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, fallback, showStatus = false, status = 'online', color, style, ...props }, ref) => {
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
      '--border-color': resolvedColor 
    } as React.CSSProperties : {};

    return (
      <div 
        ref={ref} 
        style={{ ...style, ...colorStyle }}
        className={cn(
          'unburn-avatar', 
          className
        )} 
        {...props}
      >
        <div className="unburn-avatar-inner">
          {src ? (
            <img src={src} alt={alt || 'Avatar'} className="unburn-avatar-img" />
          ) : (
            fallback || <User size={20} />
          )}
        </div>
        {showStatus && <span className={cn('unburn-avatar-status', status)} />}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
