"use client";

import React, { useState, useEffect, forwardRef, useId, useRef, useCallback } from 'react';
import { cn } from '../../lib/utils';
import './Slider.css';
import { getAccentVariables } from '../../lib/colors';
import { Tooltip } from '../Tooltip/Tooltip';

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange' | 'size'> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  onChangeEnd?: (value: number) => void;
  label?: React.ReactNode;
  description?: React.ReactNode;
  size?: 'sm' | 'default' | 'lg';
  color?: string;
  showTooltip?: boolean;
  classNames?: {
    root?: string;
    header?: string;
    label?: string;
    description?: string;
    container?: string;
    track?: string;
    thumb?: string;
    tooltip?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    header?: React.CSSProperties;
    label?: React.CSSProperties;
    description?: React.CSSProperties;
    container?: React.CSSProperties;
    track?: React.CSSProperties;
    thumb?: React.CSSProperties;
    tooltip?: React.CSSProperties;
  };
}

export const Slider = forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      className,
      value: controlledValue,
      defaultValue,
      min = 0,
      max = 100,
      step = 1,
      onChange,
      onChangeEnd,
      disabled = false,
      label,
      description,
      size = 'default',
      color,
      showTooltip = false,
      classNames,
      styles,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const sliderId = id || generatedId;

    const [valueState, setValueState] = useState<number>(() => {
      if (controlledValue !== undefined) return controlledValue;
      if (defaultValue !== undefined) return defaultValue;
      return min;
    });

    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const isChangingRef = useRef(false);

    useEffect(() => {
      if (controlledValue !== undefined) {
        setValueState(controlledValue);
      }
    }, [controlledValue]);

    const percentage = Math.min(Math.max(((valueState - min) / (max - min)) * 100, 0), 100);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      const nextValue = parseFloat(e.target.value);
      
      if (controlledValue === undefined) {
        setValueState(nextValue);
      }
      
      onChange?.(nextValue);
    };

    const handleDragStart = () => {
      if (disabled) return;
      setIsDragging(true);
      isChangingRef.current = true;
    };

    const handleDragEnd = useCallback(() => {
      if (disabled) return;
      setIsDragging(false);
      if (isChangingRef.current) {
        onChangeEnd?.(valueState);
        isChangingRef.current = false;
      }
    }, [disabled, onChangeEnd, valueState]);

    // Ensure we trigger onChangeEnd if user stops dragging outside of the element
    useEffect(() => {
      const handleGlobalMouseUp = () => {
        if (isDragging) {
          handleDragEnd();
        }
      };

      if (isDragging) {
        window.addEventListener('mouseup', handleGlobalMouseUp);
        window.addEventListener('touchend', handleGlobalMouseUp);
      }

      return () => {
        window.removeEventListener('mouseup', handleGlobalMouseUp);
        window.removeEventListener('touchend', handleGlobalMouseUp);
      };
    }, [isDragging, handleDragEnd]);

    const accentStyle = getAccentVariables(color);

    // Precise thumb scaling adjustments for alignment math
    const getThumbSize = () => {
      switch (size) {
        case 'sm': return 14;
        case 'lg': return 24;
        default: return 18;
      }
    };

    const thumbSize = getThumbSize();
    
    // exact thumb center positioning math: calc(percentage% + (0.5 - percentage/100) * thumbSize)
    // we subtract 16px (half of 32px tooltip width) or adjust offset to center the tooltip accurately
    const tooltipPosition = `calc(${percentage}% + ${(0.5 - percentage / 100) * thumbSize}px)`;

    const showTooltipContainer = showTooltip && !disabled && (isHovered || isDragging);

    return (
      <div
        className={cn(
          "unburn-slider-root",
          disabled && "unburn-slider-disabled",
          classNames?.root
        )}
        style={{ ...styles?.root, ...accentStyle }}
      >
        {(label || description) && (
          <div className={cn("unburn-slider-header", classNames?.header)} style={styles?.header}>
            {label && (
              <label
                htmlFor={sliderId}
                className={cn("unburn-slider-label", classNames?.label)}
                style={styles?.label}
              >
                {label}
              </label>
            )}
            {description && (
              <p
                className={cn("unburn-slider-description", classNames?.description)}
                style={styles?.description}
              >
                {description}
              </p>
            )}
          </div>
        )}

        <div
          className={cn(
            "unburn-slider-container",
            `unburn-slider-container-${size}`,
            isDragging && "unburn-slider-container-active",
            classNames?.container
          )}
          style={styles?.container}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <input
            ref={ref}
            type="range"
            id={sliderId}
            min={min}
            max={max}
            step={step}
            value={valueState}
            disabled={disabled}
            onChange={handleChange}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
            className={cn(
              "unburn-slider-input",
              `unburn-slider-input-${size}`,
              className,
              classNames?.track
            )}
            style={{
              ...styles?.track,
              '--slider-progress': `${percentage}%`
            } as React.CSSProperties}
            {...props}
          />

          <Tooltip
            content={valueState}
            visible={showTooltipContainer}
            position="top"
            color={color}
            className={classNames?.tooltip}
            styles={{ bubble: styles?.tooltip }}
            style={{ left: tooltipPosition }}
          />
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';
