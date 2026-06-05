import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '../../../package/lib/utils';
import './Header.css';

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  className
}) => {
  const location = useLocation();
  const isDocsRoute = location.pathname.startsWith('/docs');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleState = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsSidebarOpen(customEvent.detail.isOpen);
    };
    window.addEventListener('docs-sidebar-state', handleState);
    return () => window.removeEventListener('docs-sidebar-state', handleState);
  }, []);

  useEffect(() => {
    if (!isDocsRoute) {
      const timer = setTimeout(() => {
        setIsSidebarOpen(false);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isDocsRoute]);

  return (
    <header className={cn("unburn-header", className)}>
      <div className="header-container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {isDocsRoute && (
            <button
              className={cn("docs-sidebar-mobile-hamburger", isSidebarOpen && "is-open")}
              onClick={() => window.dispatchEvent(new CustomEvent('toggle-docs-sidebar'))}
              aria-label="Toggle sidebar navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner line-top" />
                <div className="hamburger-inner line-bottom" />
              </div>
            </button>
          )}
          <div className="unburn-logo" style={{ cursor: "pointer" }} onClick={() => window.location.href = "/"}>
            <svg width="25" height="25" viewBox="0 0 184 169" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0 96.4999C-4.70757e-06 136.541 32.4593 169 72.5 169H110.766C150.807 169 183.266 136.541 183.266 96.5V72.5C183.266 32.4594 150.807 1.1526e-05 110.766 5.63239e-06L72.5 0C32.4594 -5.89357e-06 7.52923e-06 32.4593 2.82167e-06 72.5L0 96.4999ZM107.545 10.974L73.5259 10.974C46.2524 10.974 24.1428 33.0836 24.1428 60.3571C24.1428 87.6306 46.2524 109.74 73.5259 109.74H107.545C134.819 109.74 156.928 87.6306 156.928 60.3571C156.928 33.0836 134.819 10.974 107.545 10.974Z" fill="var(--accent-color)" />
            </svg>
            <span>unburn/ui</span>
          </div>
        </div>
      </div>
    </header>
  );
};
