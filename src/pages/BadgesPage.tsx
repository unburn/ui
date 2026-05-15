import React from 'react';
import { Badge } from '../components/ui/Badge';
import { Showcase } from '../components/layout/Showcase';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Props } from '../components/layout/Props';
import { Shield, Zap, Star, Check } from 'lucide-react';

export const BadgesPage: React.FC = () => {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Badges</h2>
        <p className="section-description">
          Small status descriptors used to highlight item properties, status, or counts.
        </p>
      </div>

      <Showcase
        title="PREVIEW"
        code={`<Badge variant="filled">New</Badge>`}
      >
        <Badge variant="filled">New</Badge>
      </Showcase>

      <div className="section-usage">
        <h3 className="section-subtitle">Usage</h3>
        <CodeBlock
          language="tsx"
          code={`import { Badge } from '@unburn/ui';

export default function Example() {
  return <Badge>Status</Badge>;
}`}
        />
      </div>

      <div className="section-examples">
        <h3 className="section-subtitle">Examples</h3>

        <Showcase
          title="VARIANTS"
          description="Badges come in four styles: filled, outlined, duo, and glass."
          code={`<Badge variant="filled">Filled</Badge>
<Badge variant="outlined">Outlined</Badge>
<Badge variant="duo">Duo</Badge>
<Badge variant="glass">Glass</Badge>`}
        >
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Badge variant="filled">Filled</Badge>
            <Badge variant="outlined">Outlined</Badge>
            <Badge variant="duo">Duo</Badge>
            <Badge variant="glass">Glass</Badge>
          </div>
        </Showcase>

        <Showcase
          title="SIZES"
          description="Available in small, default, and large sizes."
          code={`<Badge size="sm">Small</Badge>
<Badge size="default">Default</Badge>
<Badge size="lg">Large</Badge>`}
        >
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <Badge size="sm">Small</Badge>
            <Badge size="default">Default</Badge>
            <Badge size="lg">Large</Badge>
          </div>
        </Showcase>

        <Showcase
          title="WITH ICONS"
          description="Add icons to badges for better visual identification."
          code={`import { Shield, Star, Check } from 'lucide-react';

<Badge icon={<Shield size={12} />}>Verified</Badge>
<Badge icon={<Star size={12} />} iconPosition="right">Premium</Badge>`}
        >
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Badge icon={<Shield size={12} />} variant="filled">Verified</Badge>
            <Badge icon={<Star size={12} />} variant="duo" iconPosition="right">Premium</Badge>
            <Badge icon={<Check size={12} />} variant="outlined" size="sm">Success</Badge>
          </div>
        </Showcase>

        <Showcase
          title="STATUS COLORS"
          description="Apply custom brand colors to badges."
          code={`<Badge variant="duo" style={{ color: 'var(--color-green)', ... }}>Online</Badge>`}
        >
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Badge variant="duo" style={{ color: 'var(--color-green)', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>Online</Badge>
            <Badge variant="duo" style={{ color: 'var(--color-red)', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.2)' }}>Offline</Badge>
            <Badge variant="duo" icon={<Zap size={12} />} style={{ color: 'var(--color-orange)', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderColor: 'rgba(249, 115, 22, 0.2)' }}>Urgent</Badge>
          </div>
        </Showcase>
      </div>

      <Props 
        props={[
          { name: 'variant', type: "'filled' | 'outlined' | 'duo' | 'glass'", defaultValue: "'filled'", description: 'The visual style of the badge.' },
          { name: 'size', type: "'sm' | 'default' | 'lg'", defaultValue: "'default'", description: 'The size of the badge.' },
          { name: 'icon', type: 'ReactNode', description: 'Optional icon to display inside the badge.' },
          { name: 'iconPosition', type: "'left' | 'right'", defaultValue: "'left'", description: 'Position of the icon relative to the text.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for sub-elements (root, icon, text).' },
          { name: 'styles', type: 'object', description: 'Custom inline styles for sub-elements.' },
        ]}
      />
    </>
  );
};
