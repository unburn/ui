import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

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
    { to: '/', label: 'Introduction' },
    { to: '/examples', label: 'Examples' },
    { to: '/installation', label: 'Installation' },
    { to: '/components', label: 'Components' },
  ];

  return (
    <>
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}>
        <nav className="menu-overlay-content">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="menu-overlay-link"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="menu-overlay-link-number">0{index + 1}</span>
              <span className="menu-overlay-link-text">{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};
