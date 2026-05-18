import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Package, Layers, ExternalLink, ArrowRight, GitBranch } from 'lucide-react';

export interface MenuProps {
  isMenuOpen?: boolean;
  setMenuOpen?: (open: boolean) => void;
}

export const Menu: React.FC<MenuProps> = ({
  isMenuOpen = false,
  setMenuOpen = () => { }
}) => {
  const location = useLocation();
  const [version, setVersion] = useState('v1.1.1');

  // Fetch latest package version from npm registry
  useEffect(() => {
    fetch('https://registry.npmjs.org/@unburn/ui/latest')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.version) {
          setVersion(`v${data.version}`);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch package version:', err);
      });
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, setMenuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  const navLinks = [
    { to: '/', label: 'Introduction', desc: 'Crafted design philosophy & principles.' },
    { to: '/installation', label: 'Installation', desc: 'Quick setup and variables styling.' },
    { to: '/components', label: 'Components', desc: 'Browse the interactive components.' },
    { to: '/examples', label: 'Examples', desc: 'Pre-designed premium application templates.' },
  ];

  return (
    <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}>
      <div className="menu-overlay-glow" />

      <div className="menu-overlay-container">
        <div className="menu-brand-panel">
          <div className="menu-brand-header">
            <span className="brand-badge">UNBURN UI</span>
            <span className="version-badge">{version}</span>
          </div>

          <div className="menu-brand-main">
            <div className="brand-icon-wrapper">
              <Layers size={36} className="brand-logo-icon" />
            </div>
            <h3 className="brand-panel-title">Minimalist UI Crafted with Precision.</h3>
            <p className="brand-panel-desc">
              Zero bloat. Absolute control. Decoupled styles built for developers who care about speed and design aesthetics.
            </p>
          </div>

          <div className="menu-brand-footer">
            <a href="https://github.com/unburn/ui" target="_blank" rel="noreferrer" className="brand-social-link">
              <GitBranch size={16} />
              <span>github</span>
              <ExternalLink size={12} className="link-arrow" />
            </a>
            <a href="https://www.npmjs.com/package/@unburn/ui" target="_blank" rel="noreferrer" className="brand-social-link">
              <Package size={16} />
              <span>npm</span>
              <ExternalLink size={12} className="link-arrow" />
            </a>
          </div>
        </div>

        <div className="menu-nav-panel">
          <div className="mobile-menu-header">
            <span className="brand-badge">UNBURN UI</span>
            <span className="version-badge">{version}</span>
          </div>

          <nav className="menu-overlay-content">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="menu-overlay-link"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="menu-link-left">
                  <span className="menu-overlay-link-number">0{index + 1}</span>
                  <div className="menu-link-text-group">
                    <span className="menu-overlay-link-text">{link.label}</span>
                    <span className="menu-overlay-link-desc">{link.desc}</span>
                  </div>
                </div>
                <ArrowRight className="menu-link-arrow" size={20} />
              </NavLink>
            ))}
          </nav>

          <div className="mobile-menu-socials">
            <a href="https://github.com/unburn/ui" target="_blank" rel="noreferrer" className="brand-social-link">
              <GitBranch size={16} />
              <span>github</span>
            </a>
            <a href="https://www.npmjs.com/package/@unburn/ui" target="_blank" rel="noreferrer" className="brand-social-link">
              <Package size={16} />
              <span>npm</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
