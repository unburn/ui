import React, { type HTMLAttributes, forwardRef } from 'react';
import { User } from 'lucide-react';
import { cn } from '../../lib/utils';
import { getAccentVariables, resolveColor } from '../../lib/colors';
import './Avatar.css';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  showStatus?: boolean;
  statusColor?: string;
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
  ({ className, src, alt, fallback, showStatus = false, statusColor, size = 'md', color, style, classNames, styles, ...props }, ref) => {
    const [hasError, setHasError] = React.useState(false);

    const accentStyle = getAccentVariables(color);
    const statusVars = statusColor ? { 
      '--status-color': resolveColor(statusColor) 
    } as React.CSSProperties : {};

    return (
      <div
        ref={ref}
        style={{ ...style, ...accentStyle, ...styles?.root }}
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
            className={cn('unburn-avatar-status', classNames?.status)}
            style={{ ...statusVars, ...styles?.status }}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';
