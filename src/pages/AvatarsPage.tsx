import React from 'react';
import { Avatar } from '../components/ui/Avatar';
import { Showcase } from '../components/layout/Showcase';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Props } from '../components/layout/Props';

export const AvatarsPage: React.FC = () => {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Avatars</h2>
        <p className="section-description">
          Visual representations of users or entities, with support for status indicators, fallback initials, and custom branding.
        </p>
      </div>

      <Showcase
        title="PREVIEW"
        code={`import { Avatar } from '@unburn/ui';

export default function Example() {
  return (
    <Avatar
      src="https://avatars.githubusercontent.com/u/197804266"
      showStatus
      status="online"
    />
  );
}`}
      >
        <Avatar
          src="https://avatars.githubusercontent.com/u/197804266"
          showStatus
          status="online"
        />
      </Showcase>

      <div className="section-usage">
        <h3 className="section-subtitle">Usage</h3>
        <CodeBlock
          language="tsx"
          code={`import { Avatar } from '@unburn/ui';

export default function Example() {
  return <Avatar src="/path/to/image.jpg" alt="User" />;
}`}
        />
      </div>

      <div className="section-examples">
        <h3 className="section-subtitle">Examples</h3>

        <Showcase
          title="STATUS INDICATORS"
          description="Avatars can show a small status badge indicating user availability."
          code={`import { Avatar } from '@unburn/ui';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '1.5rem' }}>
      <Avatar showStatus status="online" />
      <Avatar showStatus status="idle" />
      <Avatar showStatus status="dnd" />
      <Avatar showStatus status="offline" />
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Avatar showStatus status="online" />
            <Avatar showStatus status="idle" />
            <Avatar showStatus status="dnd" />
            <Avatar showStatus status="offline" />
          </div>
        </Showcase>

        <Showcase
          title="SIZES"
          description="Avatars come in five sizes from extra small to extra large."
          code={`import { Avatar } from '@unburn/ui';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
      <Avatar size="xs" src="https://avatars.githubusercontent.com/u/197804266" />
      <Avatar size="sm" src="https://avatars.githubusercontent.com/u/197804266" />
      <Avatar size="md" src="https://avatars.githubusercontent.com/u/197804266" />
      <Avatar size="lg" src="https://avatars.githubusercontent.com/u/197804266" />
      <Avatar size="xl" src="https://avatars.githubusercontent.com/u/197804266" />
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Avatar size="xs" src="https://avatars.githubusercontent.com/u/197804266" />
            <Avatar size="sm" src="https://avatars.githubusercontent.com/u/197804266" />
            <Avatar size="md" src="https://avatars.githubusercontent.com/u/197804266" />
            <Avatar size="lg" src="https://avatars.githubusercontent.com/u/197804266" />
            <Avatar size="xl" src="https://avatars.githubusercontent.com/u/197804266" />
          </div>
        </Showcase>

        <Showcase
          title="FALLBACKS & COLORS"
          description="Custom colors and initials fallbacks for when images are unavailable."
          code={`import { Avatar } from '@unburn/ui';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '1.5rem' }}>
      <Avatar color="blue" fallback="JD" />
      <Avatar color="orange" fallback="AS" />
      <Avatar color="green" fallback="TH" />
      <Avatar color="red" fallback="RR" />
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Avatar color="blue" fallback="JD" />
            <Avatar color="orange" fallback="AS" />
            <Avatar color="green" fallback="TH" />
            <Avatar color="red" fallback="RR" />
          </div>
        </Showcase>
      </div>

      <Props
        props={[
          { name: 'src', type: 'string', description: 'The source URL for the avatar image.' },
          { name: 'alt', type: 'string', defaultValue: "'Avatar'", description: 'Accessible description for the image.' },
          { name: 'fallback', type: 'ReactNode', description: 'Content to show if src is missing (e.g., initials or icon).' },
          { name: 'showStatus', type: 'boolean', defaultValue: 'false', description: 'Whether to show the status indicator.' },
          { name: 'status', type: "'online' | 'offline' | 'dnd' | 'idle'", defaultValue: "'online'", description: 'The current status of the user.' },
          { name: 'size', type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'", defaultValue: "'md'", description: 'The size of the avatar.' },
          { name: 'color', type: 'string', description: 'Custom accent color for the avatar fallback.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for sub-elements (root, image, status, fallback).' },
          { name: 'styles', type: 'object', description: 'Custom inline styles for sub-elements.' },
        ]}
      />
    </>
  );
};
