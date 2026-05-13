import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { HomePage } from './pages/HomePage';
import { ButtonsPage } from './pages/ButtonsPage';
import { AvatarsPage } from './pages/AvatarsPage';
import { AlertsPage } from './pages/AlertsPage';
import { AccordionsPage } from './pages/AccordionsPage';
import { BadgesPage } from './pages/BadgesPage';
import { DockPage } from './pages/DockPage';
import { ComponentsPage } from './pages/ComponentsPage';
import { Dock } from './components/layout/Dock';

type Theme = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [accent, setAccent] = useState('green');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Dynamic Favicon
  useEffect(() => {
    const svg = `<svg width="379" height="379" viewBox="0 0 379 379" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M189.5 379C84.8421 379 0 294.158 0 189.5C0 84.8421 84.8421 0 189.5 0C294.158 0 379 84.8421 379 189.5C379 294.158 294.158 379 189.5 379Z" fill="#ffffff"/>
      <path d="M225.326 117.621H187.173V214.258C187.173 219.601 185.963 224.365 183.543 228.549C181.124 232.733 177.751 236.01 173.426 238.379C169.153 240.749 164.158 241.933 158.443 241.933C152.728 241.933 147.708 240.749 143.383 238.379C139.058 236.01 135.685 232.733 133.265 228.549C130.897 224.365 129.713 219.601 129.713 214.258V117.621H91.4828V217.509C91.4828 229.053 94.2631 239.11 99.8238 247.68C105.385 256.2 113.185 262.803 123.225 267.492C133.265 272.129 145.005 274.448 158.443 274.448C171.727 274.448 183.389 272.129 193.429 267.492C203.469 262.803 211.296 256.2 216.908 247.68C222.52 239.11 225.326 229.053 225.326 217.509V117.621ZM287.517 272.482V117.621H249.287V272.482H287.517Z" fill="#000000"/>
    </svg>`;
    
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (link) {
      link.href = `data:image/svg+xml,${encodeURIComponent(svg)}`;
    }
  }, [accent, theme]);

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
  }, [accent]);

  return (
    <Router>
      <div className="unburn-app">
        <Header
          className="glass"
        />

        <div className="unburn-layout">
          <Sidebar
            isMobileMenuOpen={isMenuOpen}
            setIsMobileMenuOpen={setIsMenuOpen}
          />

          <main className="unburn-main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/components" element={<ComponentsPage />} />
              <Route path="/components/buttons" element={<ButtonsPage />} />
              <Route path="/components/avatars" element={<AvatarsPage />} />
              <Route path="/components/alerts" element={<AlertsPage />} />
              <Route path="/components/accordions" element={<AccordionsPage />} />
              <Route path="/components/badges" element={<BadgesPage />} />
              <Route path="/components/dock" element={<DockPage />} />
            </Routes>
          </main>
        </div>

        <Dock
          isMenuOpen={isMenuOpen}
          onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
          theme={theme}
          onThemeToggle={toggleTheme}
          position='bottom'
          accent={accent}
          onAccentCycle={() => {
            const colors = ['red', 'orange', 'blue', 'green', 'purple', theme === 'dark' ? 'white' : 'black'];
            const currentIndex = colors.indexOf(accent);
            const nextIndex = (currentIndex + 1) % colors.length;
            setAccent(colors[nextIndex]);
          }}
        />

        <footer className="unburn-footer">
          &copy; 2026 UNBURN UI. ALL RIGHTS RESERVED.
        </footer>
      </div>
    </Router>
  );
}

export default App;
