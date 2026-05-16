import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Avatar } from '../components/ui/Avatar';
import { Badge } from '../components/ui/Badge';
import { CheckCircle2, ChevronDown } from 'lucide-react';

const ComponentCard = ({ title, description, path, preview }: { title: string, description: string, path: string, preview: React.ReactNode }) => (
  <Link to={path} className="component-catalog-card">
    <div className="catalog-preview-area">
      <div className="catalog-preview-content">
        {preview}
      </div>
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

        {/* BUTTONS */}
        <ComponentCard
          title="Buttons"
          description="Versatile triggers with loading states and icons."
          path="/components/buttons"
          preview={<Button variant="filled">Action</Button>}
        />

        {/* AVATARS */}
        <ComponentCard
          title="Avatars"
          description="User profile indicators with status support."
          path="/components/avatars"
          preview={<Avatar src="https://avatars.githubusercontent.com/u/197804266" showStatus status="online" />}
        />

        {/* BADGES */}
        <ComponentCard
          title="Badges"
          description="Status labels with soft geometry and icons."
          path="/components/badges"
          preview={<Badge variant="duo" icon={<CheckCircle2 size={12} />}>Verified</Badge>}
        />

        {/* ALERTS */}
        <ComponentCard
          title="Alerts"
          description="Contextual feedback and system notifications."
          path="/components/alerts"
          preview={
            <div style={{
              width: '140px',
              padding: '12px',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-color)' }}></div>
              <div style={{ flex: 1, height: '4px', background: 'var(--border-color)', borderRadius: '2px' }}></div>
            </div>
          }
        />

        {/* ACCORDIONS */}
        <ComponentCard
          title="Accordions"
          description="Smooth collapsible sections for structured content."
          path="/components/accordions"
          preview={
            <div style={{
              width: '140px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <div style={{
                height: '32px',
                background: 'var(--bg-glass)',
                border: '1px solid var(--accent-color)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
                justifyContent: 'space-between',
                backdropFilter: 'blur(10px)',
              }}>
                <div style={{ width: '40%', height: '4px', background: 'var(--accent-color)', borderRadius: '2px' }}></div>
                <ChevronDown size={14} color="var(--accent-color)" />
              </div>
              <div style={{
                height: '32px',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 12px',
                justifyContent: 'space-between',
                opacity: 1
              }}>
                <div style={{ width: '30%', height: '4px', background: 'var(--text-main)', borderRadius: '2px' }}></div>
                <ChevronDown size={14} color="var(--text-main)" />
              </div>
            </div>
          }
        />

        {/* DOCK */}
        <ComponentCard
          title="Dock"
          description="Advanced, position-aware navigation system."
          path="/components/dock"
          preview={
            <div style={{
              padding: '8px',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-color)',
              borderRadius: '100px',
              display: 'flex',
              gap: '8px',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--accent-color)' }}></div>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--text-muted)', opacity: 0.2 }}></div>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--text-muted)', opacity: 0.1 }}></div>
            </div>
          }
        />

        {/* CHECKBOX */}
        <ComponentCard
          title="Checkbox"
          description="Premium selection control with support for labels and descriptions."
          path="/components/checkbox"
          preview={
            <div style={{
              width: '130px',
              padding: '12px',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  background: 'var(--accent-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <div style={{ width: '8px', height: '4px', borderBottom: '2px solid var(--accent-text)', borderLeft: '2px solid var(--accent-text)', transform: 'rotate(-45deg) translateY(-1px)' }}></div>
                </div>
                <div style={{ flex: 1, height: '4px', background: 'var(--accent-color)', opacity: 0.3, borderRadius: '2px' }}></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.2 }}>
                <div style={{ width: '18px', height: '18px', borderRadius: '4px', border: '1px solid var(--text-main)' }}></div>
                <div style={{ width: '60%', height: '4px', background: 'var(--text-main)', borderRadius: '2px' }}></div>
              </div>
            </div>
          }
        />

        {/* SWITCH */}
        <ComponentCard
          title="Switch"
          description="Premium toggle control with liquid animations."
          path="/components/switch"
          preview={
            <div style={{
              width: '48px',
              height: '26px',
              borderRadius: '100px',
              background: 'var(--accent-color)',
              padding: '3px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)'
            }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'var(--accent-text)',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}></div>
            </div>
          }
        />

        {/* SELECT */}
        <ComponentCard
          title="Select"
          description="Premium dropdown selection menu with glassmorphism."
          path="/components/select"
          preview={
            <div style={{
              width: '140px',
              padding: '10px 14px',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-color)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-color)' }}></div>
                <div style={{ width: '50px', height: '4px', background: 'var(--border-color)', borderRadius: '2px' }}></div>
              </div>
              <ChevronDown size={14} color="var(--text-muted)" />
            </div>
          }
        />

        {/* INPUTS */}
        <ComponentCard
          title="Inputs"
          description="Rich text fields with support for icons, labels, and validation."
          path="/components/inputs"
          preview={
            <div style={{
              width: '140px',
              padding: '12px 16px',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{ width: '14px', height: '14px', borderRadius: '50%', border: '2px solid var(--accent-color)' }}></div>
              <div style={{ width: '1px', height: '14px', background: 'var(--accent-color)' }}></div>
              <div style={{ flex: 1, height: '4px', background: 'var(--border-color)', borderRadius: '2px' }}></div>
            </div>
          }
        />

        {/* TEXTAREA */}
        <ComponentCard
          title="Textarea"
          description="Multi-line text fields for extended content and feedback."
          path="/components/textarea"
          preview={
            <div style={{
              width: '140px',
              padding: '16px',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              backdropFilter: 'blur(10px)',
              position: 'relative',
            }}>
              <div style={{ width: '100%', height: '4px', background: 'var(--accent-color)', borderRadius: '2px' }}></div>
              <div style={{ width: '80%', height: '4px', background: 'var(--border-color)', borderRadius: '2px', opacity: 0.6 }}></div>
              <div style={{ width: '40%', height: '4px', background: 'var(--border-color)', borderRadius: '2px', opacity: 0.3 }}></div>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                width: '8px',
                height: '8px',
                borderRight: '2px solid var(--accent-color)',
                borderBottom: '2px solid var(--accent-color)',
                opacity: 0.3
              }}></div>
            </div>
          }
        />

        {/* CODE BLOCK */}
        <ComponentCard
          title="Code Block"
          description="Premium code preview with integrated copy and header."
          path="/components/code-block"
          preview={
            <div style={{
              width: '140px',
              padding: '12px',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-color)',
              borderLeft: '4px solid var(--accent-color)',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{ width: '30%', height: '6px', background: 'var(--accent-color)', borderRadius: '3px', opacity: 0.4 }}></div>
              <div style={{ width: '90%', height: '4px', background: 'var(--border-color)', borderRadius: '2px', opacity: 0.4 }}></div>
              <div style={{ width: '70%', height: '4px', background: 'var(--border-color)', borderRadius: '2px', opacity: 0.2 }}></div>
            </div>
          }
        />

        {/* DROPZONE */}
        <ComponentCard
          title="Dropzone"
          description="Premium drag & drop uploader with real-time file management."
          path="/components/dropzone"
          preview={
            <div style={{
              width: '130px',
              height: '90px',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'var(--accent-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderTop: '2px solid var(--accent-text)',
                  borderRight: '2px solid var(--accent-text)',
                  transform: 'rotate(-45deg) translateY(2px) translateX(-2px)'
                }}></div>
              </div>
              <div style={{ width: '60px', height: '4px', background: 'var(--border-color)', borderRadius: '2px', opacity: 0.5 }}></div>
            </div>
          }
        />
      </div>
    </div>
  );
};
