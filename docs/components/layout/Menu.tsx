import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface MenuProps {
  isMenuOpen?: boolean;
  setMenuOpen?: (open: boolean) => void;
}

export const Menu: React.FC<MenuProps> = ({
  isMenuOpen = false,
  setMenuOpen = () => { }
}) => {
  const location = useLocation();

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
      <div className="menu-overlay-container unburn-glass">
        <div className="menu-nav-panel">
          <nav className="menu-overlay-content">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="menu-overlay-link"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="active-indicator" />
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
        </div>
      </div>
    </div>
  );
};
