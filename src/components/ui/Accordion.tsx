import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import './Accordion.css';

export interface AccordionItemProps {
  id: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItemProps[];
  allowMultiple?: boolean;
  className?: string;
  variant?: 'default' | 'bordered' | 'duo';
  color?: string;
  classNames?: {
    root?: string;
    item?: string;
    header?: string;
    content?: string;
    icon?: string;
    title?: string;
    subtitle?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    item?: React.CSSProperties;
    header?: React.CSSProperties;
    content?: React.CSSProperties;
    icon?: React.CSSProperties;
    title?: React.CSSProperties;
    subtitle?: React.CSSProperties;
  };
  style?: React.CSSProperties;
}

export const Accordion: React.FC<AccordionProps> = ({ 
  items, 
  allowMultiple = false, 
  className,
  variant = 'default',
  color,
  classNames,
  styles,
  style
}) => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) =>
        prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
      );
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

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
  const colorStyle = resolvedColor ? { '--accent-color': resolvedColor } as React.CSSProperties : {};

  return (
    <div 
      className={cn(
        'unburn-accordion', 
        variant === 'bordered' && 'unburn-accordion-bordered',
        variant === 'duo' && 'unburn-accordion-duo',
        className,
        classNames?.root
      )}
      style={{ ...colorStyle, ...style, ...styles?.root }}
    >
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        return (
          <div
            key={item.id}
            className={cn("unburn-accordion-item", classNames?.item)}
            style={styles?.item}
            data-state={isOpen ? 'open' : 'closed'}
          >
            <button
              className={cn("unburn-accordion-header", classNames?.header)}
              style={styles?.header}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
            >
              <div className="unburn-accordion-header-content">
                {item.icon && <span>{item.icon}</span>}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <span className={cn(classNames?.title)} style={styles?.title}>
                    {item.title}
                  </span>
                  {item.subtitle && (
                    <span 
                      className={cn("unburn-accordion-subtitle", classNames?.subtitle)}
                      style={styles?.subtitle}
                    >
                      {item.subtitle}
                    </span>
                  )}
                </div>
              </div>
              <ChevronDown 
                className={cn("unburn-accordion-icon", classNames?.icon)} 
                size={16} 
                style={styles?.icon}
              />
            </button>
            {isOpen && (
              <div 
                className={cn("unburn-accordion-content", classNames?.content)}
                style={styles?.content}
              >
                <div className="unburn-accordion-content-inner">
                  {item.content}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
