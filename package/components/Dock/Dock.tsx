"use client";

import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import './Dock.css';
import { cn } from '../../lib/utils';
import { Button } from '../Button/Button';

export interface DockProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  showHideToggle?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
  classNames?: {
    root?: string;
    container?: string;
    trigger?: string;
    actionBtn?: string;
    collapseBtn?: string;
    expandBtn?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    container?: React.CSSProperties;
    trigger?: React.CSSProperties;
    actionBtn?: React.CSSProperties;
    collapseBtn?: React.CSSProperties;
    expandBtn?: React.CSSProperties;
  };
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Dock: React.FC<DockProps> = ({
  isMenuOpen,
  onMenuToggle,
  showHideToggle = true,
  position = 'bottom',
  className,
  classNames,
  styles,
  style,
  children
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn('unburn-dock-wrapper', `unburn-pos-${position}`, isCollapsed && 'unburn-collapsed', className, classNames?.root)}
      style={{ ...style, ...styles?.root }}
    >
      <div
        className={cn("unburn-dock", classNames?.container)}
        style={styles?.container}
      >
        <Button
          className={cn('unburn-dock-trigger', isMenuOpen && 'unburn-open', classNames?.trigger)}
          style={styles?.trigger}
          onClick={onMenuToggle}
          aria-label="Toggle Navigation"
        >
          <div className="unburn-trigger-icon-wrapper">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </div>
        </Button>

        {children}

        {showHideToggle && (
          <Button
            className={cn(classNames?.collapseBtn)}
            style={styles?.collapseBtn}
            onClick={() => setIsCollapsed(true)}
            aria-label="Hide Dock"
          >
            {position === 'bottom' && <ChevronDown size={20} />}
            {position === 'top' && <ChevronUp size={20} />}
            {position === 'left' && <ChevronLeft size={20} />}
            {position === 'right' && <ChevronRight size={20} />}
          </Button>
        )}
      </div>

      {showHideToggle && (
        <Button
          className={cn("unburn-dock-expand-btn", classNames?.expandBtn)}
          style={styles?.expandBtn}
          onClick={() => setIsCollapsed(false)}
          aria-label="Show Dock"
        >
          {position === 'bottom' && <ChevronUp size={20} />}
          {position === 'top' && <ChevronDown size={20} />}
          {position === 'left' && <ChevronRight size={20} />}
          {position === 'right' && <ChevronLeft size={20} />}
        </Button>
      )}
    </div>
  );
};

