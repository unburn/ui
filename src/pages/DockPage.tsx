import React, { useState } from 'react';
import { Dock } from '../components/layout/Dock';
import { Showcase } from '../components/layout/Showcase';
import { ApiReference } from '../components/layout/ApiReference';
import { ComponentAnatomy } from '../components/layout/ComponentAnatomy';
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

      <ComponentAnatomy 
        parts={[
          { key: 'root', label: 'Main Wrapper', description: 'The absolute/fixed positioned outer container.' },
          { key: 'container', label: 'Dock Body', description: 'The glassmorphic container holding the buttons.' },
          { key: 'trigger', label: 'Main Trigger', description: 'The prominent MENU/CLOSE button.' },
          { key: 'actionBtn', label: 'Action Button', description: 'Standard buttons for theme, accent, and custom actions.' },
          { key: 'collapseBtn', label: 'Hide Trigger', description: 'The arrow button used to collapse the dock.' },
          { key: 'expandBtn', label: 'Show Trigger', description: 'The floating button shown when the dock is hidden.' },
        ]}
      >
        <div style={{ height: '80px', position: 'relative' }}>
          <Dock 
            isMenuOpen={false} 
            onMenuToggle={() => {}} 
            theme="dark" 
            onThemeToggle={() => {}} 
            accent="blue" 
            onAccentCycle={() => {}} 
            style={{ position: 'relative', bottom: 0, left: 0, transform: 'none' }}
          />
        </div>
      </ComponentAnatomy>

      <ApiReference 
        props={[
          { name: 'isMenuOpen', type: 'boolean', required: true, description: 'Controls whether the main menu is active.' },
          { name: 'onMenuToggle', type: 'function', required: true, description: 'Callback when the menu button is clicked.' },
          { name: 'theme', type: "'light' | 'dark'", required: true, description: 'The current UI theme.' },
          { name: 'onThemeToggle', type: 'function', required: true, description: 'Callback when the theme toggle is clicked.' },
          { name: 'accent', type: 'string', required: true, description: 'The current accent color.' },
          { name: 'onAccentCycle', type: 'function', required: true, description: 'Callback to cycle through accent colors.' },
          { name: 'position', type: "'top' | 'bottom' | 'left' | 'right'", defaultValue: "'bottom'", description: 'The screen edge where the dock is anchored.' },
          { name: 'size', type: "'sm' | 'default' | 'lg'", defaultValue: "'default'", description: 'The overall size of the dock.' },
          { name: 'showThemeToggle', type: 'boolean', defaultValue: 'true', description: 'Whether to show the theme toggle button.' },
          { name: 'showAccentToggle', type: 'boolean', defaultValue: 'true', description: 'Whether to show the accent cycle button.' },
          { name: 'showHideToggle', type: 'boolean', defaultValue: 'true', description: 'Whether to show the collapse/expand button.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for sub-elements (root, container, trigger, actionBtn, collapseBtn, expandBtn).' },
          { name: 'styles', type: 'object', description: 'Custom inline styles for sub-elements.' },
        ]}
      />

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
