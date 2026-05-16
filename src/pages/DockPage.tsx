import React, { useState } from 'react';
import { Dock } from '../components/ui/Dock';
import { Showcase } from '../components/layout/Showcase';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Props } from '../components/layout/Props';
import { Plus, Search, Home } from 'lucide-react';

export const DockPage: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [accent, setAccent] = useState('red');
  const [demoOpen1, setDemoOpen1] = useState(false);
  const [demoOpen2, setDemoOpen2] = useState(false);

  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Dock</h2>
        <p className="section-description">
          A premium, fixed-position navigation control that houses system actions like theme toggling, accent customization, and custom menu triggers.
        </p>
      </div>

      <Showcase
        title="PREVIEW"
        code={`import React, { useState } from 'react';
import { Dock } from '@unburn/ui';

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [accent, setAccent] = useState('red');

  return (
    <Dock
      isMenuOpen={isOpen}
      onMenuToggle={() => setIsOpen(!isOpen)}
      theme={theme}
      onThemeToggle={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
      accent={accent}
      onAccentCycle={() => setAccent(accent === 'red' ? 'blue' : 'red')}
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
            onAccentCycle={() => setAccent(accent === 'red' ? 'blue' : 'red')}
            className="showcase-dock"
          />
        </div>
      </Showcase>

      <div className="section-usage">
        <h3 className="section-subtitle">Usage</h3>
        <CodeBlock
          language="tsx"
          code={`import { Dock } from '@unburn/ui';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {children}
      <Dock 
        isMenuOpen={isOpen}
        onMenuToggle={() => setIsOpen(!isOpen)}
        theme="dark"
        accent="red"
      />
    </>
  );
}`}
        />
      </div>

      <div className="section-examples">
        <h3 className="section-subtitle">Examples</h3>

        <Showcase
          title="SIZES"
          description="The Dock is available in three sizes: small, default, and large."
          code={`import { Dock } from '@unburn/ui';

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      <Dock size="sm" isMenuOpen={false} theme="dark" accent="red" />
      <Dock size="default" isMenuOpen={false} theme="dark" accent="blue" />
      <Dock size="lg" isMenuOpen={false} theme="dark" accent="green" />
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', width: '100%' }}>
            <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
              <Dock size="sm" isMenuOpen={false} onMenuToggle={() => { }} theme="dark" onThemeToggle={() => { }} accent="red" onAccentCycle={() => { }} className="showcase-dock" />
            </div>
            <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
              <Dock size="default" isMenuOpen={false} onMenuToggle={() => { }} theme="dark" onThemeToggle={() => { }} accent="blue" onAccentCycle={() => { }} className="showcase-dock" />
            </div>
            <div style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
              <Dock size="lg" isMenuOpen={false} onMenuToggle={() => { }} theme="dark" onThemeToggle={() => { }} accent="green" onAccentCycle={() => { }} className="showcase-dock" />
            </div>
          </div>
        </Showcase>

        <Showcase
          title="CUSTOM ACTIONS"
          description="Pass custom buttons as children to extend the dock's functionality."
          code={`import { Dock } from '@unburn/ui';
import { Home, Search, Plus } from 'lucide-react';

export default function Example() {
  return (
    <Dock isMenuOpen={false} theme="dark" accent="red">
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
          title="CONFIGURATION"
          description="Selectively show or hide built-in toggles for theme, accent, and the hide handle."
          code={`import { Dock } from '@unburn/ui';

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      <Dock showThemeToggle={false} isMenuOpen={false} theme="dark" accent="purple" />
      <Dock showAccentToggle={false} isMenuOpen={false} theme="dark" accent="orange" />
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', width: '100%' }}>
            <div style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
              <Dock
                showThemeToggle={false}
                isMenuOpen={false}
                onMenuToggle={() => { }}
                theme="dark"
                onThemeToggle={() => { }}
                accent="purple"
                onAccentCycle={() => { }}
                className="showcase-dock"
              />
            </div>
            <div style={{ height: '100px', position: 'relative', overflow: 'hidden' }}>
              <Dock
                showAccentToggle={false}
                isMenuOpen={false}
                onMenuToggle={() => { }}
                theme="dark"
                onThemeToggle={() => { }}
                accent="orange"
                onAccentCycle={() => { }}
                className="showcase-dock"
              />
            </div>
          </div>
        </Showcase>
      </div>

      <Props
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
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for sub-elements.' },
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
