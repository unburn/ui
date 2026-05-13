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
}

export const Accordion: React.FC<AccordionProps> = ({ 
  items, 
  allowMultiple = false, 
  className,
  variant = 'default',
  color
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
        className
      )}
      style={colorStyle}
    >
      {items.map((item) => {
        const isOpen = openItems.includes(item.id);
        return (
          <div
            key={item.id}
            className="unburn-accordion-item"
            data-state={isOpen ? 'open' : 'closed'}
          >
            <button
              className="unburn-accordion-header"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
            >
              <div className="unburn-accordion-header-content">
                {item.icon && <span>{item.icon}</span>}
                <div>
                  <span>{item.title}</span>
                  {item.subtitle && (
                    <span className="unburn-accordion-subtitle">{item.subtitle}</span>
                  )}
                </div>
              </div>
              <ChevronDown className="unburn-accordion-icon" size={16} />
            </button>
            {isOpen && (
              <div className="unburn-accordion-content">
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
