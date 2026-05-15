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
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  classNames?: {
    root?: string;
    image?: string;
    status?: string;
    fallback?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    image?: React.CSSProperties;
    status?: React.CSSProperties;
    fallback?: React.CSSProperties;
  };
}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, fallback, showStatus = false, status = 'online', size = 'md', color, style, classNames, styles, ...props }, ref) => {
    const [hasError, setHasError] = React.useState(false);

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
        style={{ ...style, ...colorStyle, ...styles?.root }}
        className={cn(
          'unburn-avatar', 
          `size-${size}`,
          className,
          classNames?.root
        )} 
        {...props}
      >
        <div className="unburn-avatar-inner">
          {src && !hasError ? (
            <img 
              src={src} 
              alt={alt || 'Avatar'} 
              className={cn("unburn-avatar-img", classNames?.image)} 
              style={styles?.image}
              onError={() => setHasError(true)}
            />
          ) : (
            <div 
              className={cn("unburn-avatar-fallback", classNames?.fallback)}
              style={styles?.fallback}
            >
              {fallback || <User size={20} />}
            </div>
          )}
        </div>
        {showStatus && (
          <span 
            className={cn('unburn-avatar-status', status, classNames?.status)} 
            style={styles?.status}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
