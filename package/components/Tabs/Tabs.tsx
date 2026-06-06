import React, { useState, useEffect, useRef, type HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';
import './Tabs.css';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  children: React.ReactNode;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: TabItem[];
  defaultTab?: string;
  activeTab?: string;
  onChange?: (tabId: string) => void;
  size?: 'sm' | 'default' | 'lg';
  classNames?: {
    root?: string;
    tabList?: string;
    tab?: string;
    activeTab?: string;
    panel?: string;
    indicator?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    tabList?: React.CSSProperties;
    tab?: React.CSSProperties;
    panel?: React.CSSProperties;
  };
}

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      items,
      defaultTab,
      activeTab: controlledActive,
      onChange,
      size = 'default',
      className,
      classNames,
      style,
      styles,
      ...props
    },
    ref
  ) => {
    const [internalActive, setInternalActive] = useState(
      defaultTab ?? items[0]?.id
    );

    const isControlled = controlledActive !== undefined;
    const active = isControlled ? controlledActive : internalActive;

    const listRef = useRef<HTMLDivElement>(null);
    const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({
      left: 0,
      width: 0,
      height: 0,
      top: 0,
      opacity: 0,
    });

    useEffect(() => {
      const updateIndicator = () => {
        const list = listRef.current;
        if (!list) return;

        const activeEl = list.querySelector('.unburn-tab-active') as HTMLElement;
        if (activeEl) {
          setIndicatorStyle({
            left: `${activeEl.offsetLeft}px`,
            width: `${activeEl.offsetWidth}px`,
            height: `${activeEl.offsetHeight}px`,
            top: `${activeEl.offsetTop}px`,
            opacity: 1,
          });
        } else {
          setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
        }
      };

      updateIndicator();

      window.addEventListener('resize', updateIndicator);
      return () => {
        window.removeEventListener('resize', updateIndicator);
      };
    }, [active, items]);

    const handleSelect = (id: string) => {
      if (!isControlled) setInternalActive(id);
      onChange?.(id);
    };

    const activeItem = items.find((t) => t.id === active);

    return (
      <div
        ref={ref}
        style={{ ...style, ...styles?.root }}
        className={cn('unburn-tabs', `unburn-tabs-${size}`, className, classNames?.root)}
        {...props}
      >
        <div
          ref={listRef}
          className={cn(
            'unburn-tabs-list',
            'unburn-glass',
            classNames?.tabList
          )}
          role="tablist"
          style={styles?.tabList}
        >
          <div
            className={cn('unburn-tab-indicator', classNames?.indicator)}
            style={indicatorStyle}
          />

          {items.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              disabled={tab.disabled}
              aria-selected={active === tab.id}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              onClick={() => !tab.disabled && handleSelect(tab.id)}
              className={cn(
                'unburn-tab',
                active === tab.id && 'unburn-tab-active',
                active === tab.id && classNames?.activeTab,
                classNames?.tab
              )}
              style={styles?.tab}
            >
              {tab.icon && <span className="unburn-tab-icon">{tab.icon}</span>}
              {tab.label}
            </button>
          ))}
        </div>

        {activeItem && (
          <div
            key={active}
            id={`panel-${active}`}
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            className={cn('unburn-tabs-panel', classNames?.panel)}
            style={styles?.panel}
          >
            {activeItem.children}
          </div>
        )}
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';
