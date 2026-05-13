import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Avatar } from '../components/ui/Avatar';
import { Badge } from '../components/ui/Badge';
import { CheckCircle2, ChevronDown } from 'lucide-react';

const ComponentCard = ({ title, description, path, preview }: { title: string, description: string, path: string, preview: React.ReactNode }) => (
  <Link to={path} className="component-catalog-card">
    <div className="catalog-preview-area">
      {preview}
    </div>
    <div className="catalog-info-area">
      <h3 className="catalog-title">{title}</h3>
      <p className="catalog-desc">{description}</p>
    </div>
  </Link>
);

export const ComponentsPage: React.FC = () => {
  return (
    <div className="components-page">
      <h1 className="hero-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
        Explore<br /><span className="hero-accent">The Collection.</span>
      </h1>
      <p className="hero-subtitle" style={{ marginBottom: '4rem' }}>
        A visual gallery of all premium components available in the @unburn/ui design system.
      </p>

      <div className="component-catalog-grid">
        <ComponentCard
          title="Buttons"
          description="Versatile triggers with loading states and icons."
          path="/components/buttons"
          preview={<Button variant="filled">Action</Button>}
        />
        <ComponentCard
          title="Avatars"
          description="User profile indicators with status support."
          path="/components/avatars"
          preview={<Avatar src="https://avatars.githubusercontent.com/u/197804266" showStatus status="online" />}
        />
        <ComponentCard
          title="Badges"
          description="Status labels with soft geometry and icons."
          path="/components/badges"
          preview={<Badge variant="duo" icon={<CheckCircle2 size={12} />}>Verified</Badge>}
        />
        <ComponentCard
          title="Alerts"
          description="Contextual feedback and system notifications."
          path="/components/alerts"
          preview={
            <div style={{
              padding: '0.75rem 1.5rem',
              background: 'var(--bg-glass)',
              border: '1px solid var(--accent-color)',
              borderRadius: '100px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.8rem',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                width: '10px',
                height: '10px',
                background: 'var(--accent-color)',
                borderRadius: '50%',
                boxShadow: '0 0 15px var(--accent-color)'
              }}></div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                color: 'var(--text-main)'
              }}>ALERT</span>
            </div>
          }
        />
        <ComponentCard
          title="Accordions"
          description="Smooth collapsible sections for structured content."
          path="/components/accordions"
          preview={
            <div style={{ width: '70%', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{
                height: '36px',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 1.2rem',
                justifyContent: 'space-between',
                backdropFilter: 'blur(8px)'
              }}>
                <div style={{ width: '40%', height: '2px', background: 'var(--accent-color)' }}></div>
                <ChevronDown size={14} color="var(--accent-color)" />
              </div>
              <div style={{
                height: '36px',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 1.2rem',
                justifyContent: 'space-between',
                opacity: 0.3,
                backdropFilter: 'blur(8px)'
              }}>
                <div style={{ width: '30%', height: '2px', background: 'var(--text-main)' }}></div>
                <ChevronDown size={14} />
              </div>
            </div>
          }
        />
        <ComponentCard
          title="Dock"
          description="Advanced, position-aware navigation system."
          path="/components/dock"
          preview={
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '0.5rem',
              borderRadius: '100px',
              display: 'flex',
              gap: '0.5rem',
              border: '1px solid var(--border-color)'
            }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--accent-color)' }}></div>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--text-muted)', opacity: 0.3 }}></div>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--text-muted)', opacity: 0.3 }}></div>
            </div>
          }
        />
      </div>
    </div>
  );
};
