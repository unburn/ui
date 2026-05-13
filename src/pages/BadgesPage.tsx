import React from 'react';
import { Badge } from '../components/ui/Badge';
import { Showcase } from '../components/layout/Showcase';
import { Shield, Zap, Star, Check } from 'lucide-react';

export const BadgesPage: React.FC = () => {
  return (
    <>
      <h2 className="section-title">Badges</h2>

      <Showcase
        title="01. VARIANTS"
        code={`import { Badge } from '@unburn/ui';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      <Badge variant="filled">Filled</Badge>
      <Badge variant="outlined">Outlined</Badge>
      <Badge variant="duo">Duo</Badge>
      <Badge variant="glass">Glass</Badge>
    </div>
  );
}`}
      >
        <Badge variant="filled">Filled</Badge>
        <Badge variant="outlined">Outlined</Badge>
        <Badge variant="duo">Duo</Badge>
        <Badge variant="glass">Glass</Badge>
      </Showcase>

      <Showcase
        title="02. SIZES"
        code={`import { Badge } from '@unburn/ui';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
      <Badge size="sm">Small</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  );
}`}
      >
        <Badge size="sm">Small</Badge>
        <Badge size="default">Default</Badge>
        <Badge size="lg">Large</Badge>
      </Showcase>

      <Showcase
        title="03. WITH ICONS"
        code={`import { Badge } from '@unburn/ui';
import { Shield, Star, Check } from 'lucide-react';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      <Badge icon={<Shield size={12} />} variant="filled">Verified</Badge>
      <Badge icon={<Star size={12} />} variant="duo" iconPosition="right">Premium</Badge>
      <Badge icon={<Check size={12} />} variant="outlined" size="sm">Success</Badge>
    </div>
  );
}`}
      >
        <Badge icon={<Shield size={12} />} variant="filled">Verified</Badge>
        <Badge icon={<Star size={12} />} variant="duo" iconPosition="right">Premium</Badge>
        <Badge icon={<Check size={12} />} variant="outlined" size="sm">Success</Badge>
      </Showcase>

      <Showcase
        title="04. STATUS BADGES"
        code={`import { Badge } from '@unburn/ui';
import { Zap } from 'lucide-react';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      <Badge variant="duo" style={{ color: 'var(--color-green)', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>Online</Badge>
      <Badge variant="duo" style={{ color: 'var(--color-red)', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.2)' }}>Offline</Badge>
      <Badge variant="duo" icon={<Zap size={12} />} style={{ color: 'var(--color-orange)', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderColor: 'rgba(249, 115, 22, 0.2)' }}>Urgent</Badge>
    </div>
  );
}`}
      >
        <Badge variant="duo" style={{ color: 'var(--color-green)', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>Online</Badge>
        <Badge variant="duo" style={{ color: 'var(--color-red)', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderColor: 'rgba(239, 68, 68, 0.2)' }}>Offline</Badge>
        <Badge variant="duo" icon={<Zap size={12} />} style={{ color: 'var(--color-orange)', backgroundColor: 'rgba(249, 115, 22, 0.1)', borderColor: 'rgba(249, 115, 22, 0.2)' }}>Urgent</Badge>
      </Showcase>
    </>
  );
};
