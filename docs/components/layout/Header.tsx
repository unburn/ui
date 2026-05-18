import React from 'react';
import { Box, Star } from 'lucide-react';
import { cn } from '../../../package/lib/utils';
import { Badge } from '../../../package/components/Badge/Badge';
import './Header.css';

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({
  className
}) => {
  return (
    <header className={cn("unburn-header", className)}>
      <div className="header-container">
        <div className="unburn-logo" style={{ cursor: "pointer" }} onClick={() => window.location.href = "/"}>
          <svg width="29" height="29" viewBox="0 0 379 379" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M189.5 379C84.8421 379 0 294.158 0 189.5C0 84.8421 84.8421 4.09344e-06 189.5 4.09344e-06C294.158 4.09344e-06 379 84.8421 379 189.5C379 294.158 294.158 379 189.5 379Z" fill="var(--accent-color)" />
            <path d="M225.326 117.621H187.173V214.258C187.173 219.601 185.963 224.365 183.543 228.549C181.124 232.733 177.751 236.01 173.426 238.379C169.153 240.749 164.158 241.933 158.443 241.933C152.728 241.933 147.708 240.749 143.383 238.379C139.058 236.01 135.685 232.733 133.265 228.549C130.897 224.365 129.713 219.601 129.713 214.258V117.621H91.4828V217.509C91.4828 229.053 94.2631 239.11 99.8238 247.68C105.385 256.2 113.185 262.803 123.225 267.492C133.265 272.129 145.005 274.448 158.443 274.448C171.727 274.448 183.389 272.129 193.429 267.492C203.469 262.803 211.296 256.2 216.908 247.68C222.52 239.11 225.326 229.053 225.326 217.509V117.621ZM287.517 272.482V117.621H249.287V272.482H287.517Z" fill="var(--bg-main)" />
          </svg>
          <span>unburn/ui</span>
          <Badge size="sm" variant="duo" style={{ marginLeft: '0.5rem', opacity: 0.8 }}>BETA</Badge>
        </div>
        <div className="unburn-header-actions">
          <a
            href="https://github.com/unburn/ui"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link-btn"
          >
            <div className="github-icon-wrapper">
              <Box size={16} />
            </div>
            <div className="github-divider"></div>
            <div className="github-star-wrapper">
              <Star size={14} fill="currentColor" />
              <span>STAR</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};
