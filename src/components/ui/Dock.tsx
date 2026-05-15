"use client";

import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import './Dock.css';
import { cn } from '../../lib/utils';

export interface DockProps {
  isMenuOpen: boolean;
  onMenuToggle: () => void;
  theme: 'light' | 'dark';
  onThemeToggle: () => void;
  accent: string;
  onAccentCycle: () => void;
  showThemeToggle?: boolean;
  showAccentToggle?: boolean;
  showHideToggle?: boolean;
  position?: 'top' | 'bottom' | 'left' | 'right';
  size?: 'sm' | 'default' | 'lg';
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
  theme,
  onThemeToggle,
  onAccentCycle,
  showThemeToggle = true,
  showAccentToggle = true,
  showHideToggle = true,
  position = 'bottom',
  size = 'default',
  className,
  classNames,
  styles,
  style,
  children
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn('unburn-dock-wrapper', `size-${size}`, `pos-${position}`, isCollapsed && 'collapsed', className, classNames?.root)}
      style={{ ...style, ...styles?.root }}
    >
      <div
        className={cn("unburn-dock", classNames?.container)}
        style={styles?.container}
      >
        <button
          className={cn('dock-trigger', isMenuOpen && 'open', classNames?.trigger)}
          style={styles?.trigger}
          onClick={onMenuToggle}
          aria-label="Toggle Navigation"
        >
          <div className="trigger-inner">
            <span className="trigger-text">{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
            <div className="trigger-icon">
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </div>
          </div>
        </button>

        {showThemeToggle && (
          <button
            className={cn("dock-action-btn", classNames?.actionBtn)}
            style={styles?.actionBtn}
            onClick={onThemeToggle}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}

        {showAccentToggle && (
          <button
            className={cn("dock-action-btn", classNames?.actionBtn)}
            style={styles?.actionBtn}
            onClick={onAccentCycle}
            aria-label="Cycle Accent Color"
          >
            <div
              className="accent-preview"
              style={{ backgroundColor: 'var(--accent-color)' }}
            />
          </button>
        )}

        {children}

        {showHideToggle && (
          <button
            className={cn("dock-collapse-btn", classNames?.collapseBtn)}
            style={styles?.collapseBtn}
            onClick={() => setIsCollapsed(true)}
            aria-label="Hide Dock"
          >
            {position === 'bottom' && <ChevronDown size={20} />}
            {position === 'top' && <ChevronUp size={20} />}
            {position === 'left' && <ChevronLeft size={20} />}
            {position === 'right' && <ChevronRight size={20} />}
          </button>
        )}
      </div>

      {showHideToggle && (
        <button
          className={cn("dock-expand-btn", classNames?.expandBtn)}
          style={styles?.expandBtn}
          onClick={() => setIsCollapsed(false)}
          aria-label="Show Dock"
        >
          {position === 'bottom' && <ChevronUp size={20} />}
          {position === 'top' && <ChevronDown size={20} />}
          {position === 'left' && <ChevronRight size={20} />}
          {position === 'right' && <ChevronLeft size={20} />}
        </button>
      )}
    </div>
  );
};
