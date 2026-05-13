import React, { useState } from 'react';
import { Dock } from '../components/layout/Dock';
import { Showcase } from '../components/layout/Showcase';
import { Plus, Search, Home } from 'lucide-react';

export const DockPage: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [accent, setAccent] = useState('red');
  const [demoOpen1, setDemoOpen1] = useState(false);
  const [demoOpen2, setDemoOpen2] = useState(false);

  return (
    <>
      <h2 className="section-title">Dock</h2>

      <Showcase
        title="01. DEFAULT DOCK"
        code={`import { Dock } from '@unburn/ui';

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dock 
      isMenuOpen={isOpen}
      onMenuToggle={() => setIsOpen(!isOpen)}
      theme="dark"
      onThemeToggle={() => {}}
      accent="red"
      onAccentCycle={() => {}}
    />
  );
}`}
      >
        <div style={{ height: '120px', position: 'relative', width: '100%', overflow: 'hidden' }}>
          <Dock
            isMenuOpen={demoOpen1}
            onMenuToggle={() => setDemoOpen1(!demoOpen1)}
            theme={theme}
            onThemeToggle={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
            accent={accent}
            onAccentCycle={() => setAccent('blue')}
            className="showcase-dock"
          />
        </div>
      </Showcase>

      <Showcase
        title="02. CUSTOM ACTIONS"
        code={`import { Dock } from '@unburn/ui';
import { Home, Search, Plus } from 'lucide-react';

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dock 
      isMenuOpen={isOpen}
      onMenuToggle={() => setIsOpen(!isOpen)}
      theme="dark"
      onThemeToggle={() => {}}
      accent="blue"
      onAccentCycle={() => {}}
      showThemeToggle={false}
    >
      <button className="dock-action-btn"><Home size={20} /></button>
      <button className="dock-action-btn"><Search size={20} /></button>
      <button className="dock-action-btn"><Plus size={20} /></button>
    </Dock>
  );
}`}
      >
        <div style={{ height: '120px', position: 'relative', width: '100%', overflow: 'hidden' }}>
          <Dock
            isMenuOpen={demoOpen2}
            onMenuToggle={() => setDemoOpen2(!demoOpen2)}
            theme={theme}
            onThemeToggle={() => { }}
            accent={accent}
            onAccentCycle={() => { }}
            showThemeToggle={false}
            className="showcase-dock"
          >
            <button className="dock-action-btn"><Home size={20} /></button>
            <button className="dock-action-btn"><Search size={20} /></button>
            <button className="dock-action-btn"><Plus size={20} /></button>
          </Dock>
        </div>
      </Showcase>

      <Showcase
        title="03. SIZES"
        code={`import { Dock } from '@unburn/ui';

export default function Example() {
  return (
    <>
      <Dock size="sm" ... />
      <Dock size="default" ... />
      <Dock size="lg" ... />
    </>
  );
}`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', width: '100%' }}>
          <div style={{ height: '120px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
            <Dock size="sm" isMenuOpen={false} onMenuToggle={() => { }} theme="dark" onThemeToggle={() => { }} accent="red" onAccentCycle={() => { }} className="showcase-dock" />
          </div>
          <div style={{ height: '140px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
            <Dock size="default" isMenuOpen={false} onMenuToggle={() => { }} theme="dark" onThemeToggle={() => { }} accent="blue" onAccentCycle={() => { }} className="showcase-dock" />
          </div>
          <div style={{ height: '160px', position: 'relative', overflow: 'hidden' }}>
            <Dock size="lg" isMenuOpen={false} onMenuToggle={() => { }} theme="dark" onThemeToggle={() => { }} accent="green" onAccentCycle={() => { }} className="showcase-dock" />
          </div>
        </div>
      </Showcase>

      <Showcase
        title="04. HIDE OPTION"
        code={`import { Dock } from '@unburn/ui';

export default function Example() {
  return (
    <>
      {/* Hide option disabled */}
      <Dock showHideToggle={false} ... />
      
      {/* Hide option enabled (default) */}
      <Dock showHideToggle={true} ... />
    </>
  );
}`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', width: '100%' }}>
          <div style={{ height: '140px', position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
            <Dock showHideToggle={false} isMenuOpen={false} onMenuToggle={() => { }} theme="dark" onThemeToggle={() => { }} accent="purple" onAccentCycle={() => { }} className="showcase-dock" />
          </div>
          <div style={{ height: '140px', position: 'relative', overflow: 'hidden' }}>
            <Dock showHideToggle={true} isMenuOpen={false} onMenuToggle={() => { }} theme="dark" onThemeToggle={() => { }} accent="blue" onAccentCycle={() => { }} className="showcase-dock" />
          </div>
        </div>
      </Showcase>

      <style>{`
        .showcase-dock {
          position: absolute !important;
          bottom: 0.5rem !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          display: flex !important;
          z-index: 1 !important;
          margin-bottom: 0 !important;
        }

        .showcase-dock.collapsed {
          bottom: -4rem !important;
        }
      `}</style>
    </>
  );
};
