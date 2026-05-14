import React from 'react';
import { Terminal, Layers, Palette, Zap, Copy, Check } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText('npm install @unburn/ui');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="home-page">
      <div className="viewport-glow"></div>
      <section className="hero-section">
        <h1 className="hero-title">
          Minimalist UI<br /><span className="hero-accent">Crafted with Precision.</span>
        </h1>
        <p className="hero-subtitle">
          A premium collection of softly-rounded components designed to make your web apps look stunning instantly.
        </p>
      </section>

      <div className="home-content">
        <h2 className="section-title">Quick Start</h2>
        <div className="quick-start-box">
          <Terminal size={18} style={{ color: 'var(--accent-color)' }} />
          <code>npm install @unburn/ui</code>
          <button
            onClick={handleCopy}
            style={{
              marginLeft: '2rem',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              padding: '4px 8px',
              borderLeft: '1px solid var(--border-color)'
            }}
          >
            {copied ? <Check size={14} style={{ color: 'var(--color-green)' }} /> : <Copy size={14} />}
            {copied ? 'COPIED' : 'COPY'}
          </button>
        </div>

        <h2 className="section-title" style={{ marginTop: '6rem' }}>Core Philosophy</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div className="feature-card">
            <Layers size={24} style={{ marginBottom: '1rem', color: 'var(--accent-color)' }} />
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Sub-Component Styling</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              Every element within a component is exposed. Use <code>styles</code> and <code>classNames</code> for total design control.
            </p>
          </div>
          <div className="feature-card">
            <Palette size={24} style={{ marginBottom: '1rem', color: 'var(--accent-color)' }} />
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Dynamic Theming</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              Built with CSS variables at its core. Switch entire brand identities and themes in real-time with zero friction.
            </p>
          </div>
          <div className="feature-card">
            <Zap size={24} style={{ marginBottom: '1rem', color: 'var(--accent-color)' }} />
            <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Technical Anatomy</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
              Blueprint-grade documentation showing the skeletal structure of components for precise implementation.
            </p>
          </div>
        </div>

        <h2 className="section-title" style={{ marginTop: '6rem' }}>Supported Components</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
          {['Buttons', 'Avatars', 'Alerts', 'Accordions', 'Badges', 'Dock', 'Code Block', 'Inputs', 'Modals'].map(comp => (
            <div key={comp} className="component-grid-item">
              {comp}
              {['Inputs', 'Modals'].includes(comp) ?
                <span style={{ fontSize: '10px', opacity: 0.5 }}>Coming Soon</span> :
                <span style={{ color: 'var(--accent-color)' }}>Ready</span>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
