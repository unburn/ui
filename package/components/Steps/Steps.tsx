"use client";

import React, { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';
import './Steps.css';

export interface StepItem {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export interface StepsProps extends HTMLAttributes<HTMLDivElement> {
  items?: StepItem[];
  classNames?: {
    root?: string;
    step?: string;
    marker?: string;
    connector?: string;
    title?: string;
    description?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    step?: React.CSSProperties;
    marker?: React.CSSProperties;
    connector?: React.CSSProperties;
    title?: React.CSSProperties;
    description?: React.CSSProperties;
  };
}

export const Steps = forwardRef<HTMLDivElement, StepsProps>(
  (
    {
      items,
      children,
      className,
      classNames,
      style,
      styles,
      ...props
    },
    ref
  ) => {
    const childArray = items
      ? items.map((item, i) => (
          <div
            key={i}
            className={cn('unburn-step', classNames?.step)}
            style={styles?.step}
          >
            <div className="unburn-step-left">
              <div
                className={cn('unburn-step-marker', classNames?.marker)}
                style={styles?.marker}
              >
                {i + 1}
              </div>
              {i < items.length - 1 && (
                <div
                  className={cn('unburn-step-connector', classNames?.connector)}
                  style={styles?.connector}
                />
              )}
            </div>
            <div className="unburn-step-content">
              <div
                className={cn('unburn-step-title', classNames?.title)}
                style={styles?.title}
              >
                {item.title}
              </div>
              {item.description && (
                <div
                  className={cn('unburn-step-description', classNames?.description)}
                  style={styles?.description}
                >
                  {item.description}
                </div>
              )}
              {item.children && (
                <div className="unburn-step-body">{item.children}</div>
              )}
            </div>
          </div>
        ))
      : children;

    return (
      <div
        ref={ref}
        style={{ ...style, ...styles?.root }}
        className={cn('unburn-steps', className, classNames?.root)}
        {...props}
      >
        {childArray}
      </div>
    );
  }
);

Steps.displayName = 'Steps';
