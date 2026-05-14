import React from 'react';
import { Avatar } from '../components/ui/Avatar';
import { Showcase } from '../components/layout/Showcase';
import { ApiReference } from '../components/layout/ApiReference';
import { ComponentAnatomy } from '../components/layout/ComponentAnatomy';

export const AvatarsPage: React.FC = () => {
  return (
    <>
      <h2 className="section-title">Avatar</h2>

      <Showcase
        title="01. AVATAR"
        code={`import { Avatar } from '@unburn/ui';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Avatar />
      <Avatar fallback="KP" style={{ backgroundColor: 'var(--text-main)', color: 'var(--bg-main)' }} />
      <Avatar src="https://avatars.githubusercontent.com/u/197804266" showStatus />
    </div>
  );
}`}
      >
        <Avatar />
        <Avatar fallback="KP" style={{ backgroundColor: 'var(--text-main)', color: 'var(--bg-main)' }} />
        <Avatar src="https://avatars.githubusercontent.com/u/197804266" showStatus />
      </Showcase>

      <Showcase
        title="02. STATUS VARIANTS"
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
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Avatar showStatus status="online" />
          <Avatar showStatus status="idle" />
          <Avatar showStatus status="dnd" />
          <Avatar showStatus status="offline" />
        </div>
      </Showcase>
      <Showcase
        title="03. COLORS"
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
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Avatar color="blue" fallback="JD" />
          <Avatar color="orange" fallback="AS" />
          <Avatar color="green" fallback="TH" />
          <Avatar color="red" fallback="RR" />
        </div>
      </Showcase>

      <ComponentAnatomy 
        parts={[
          { key: 'root', label: 'Main Container', description: 'The outer wrapper holding the avatar and status.' },
          { key: 'image', label: 'Avatar Image', description: 'The <img> element displaying the user profile.' },
          { key: 'status', label: 'Status Badge', description: 'The small colored circle indicating user status.' },
          { key: 'fallback', label: 'Fallback Container', description: 'The content shown when the image fails to load.' },
        ]}
      >
        <Avatar 
          src="https://avatars.githubusercontent.com/u/197804266" 
          showStatus 
          status="online" 
        />
      </ComponentAnatomy>

      <ApiReference 
        props={[
          { name: 'src', type: 'string', description: 'The source URL for the avatar image.' },
          { name: 'alt', type: 'string', defaultValue: "'Avatar'", description: 'Accessible description for the image.' },
          { name: 'fallback', type: 'ReactNode', description: 'Content to show if src is missing (e.g., initials or icon).' },
          { name: 'showStatus', type: 'boolean', defaultValue: 'false', description: 'Whether to show the status indicator.' },
          { name: 'status', type: "'online' | 'offline' | 'dnd' | 'idle'", defaultValue: "'online'", description: 'The current status of the user.' },
          { name: 'color', type: 'string', description: 'Custom accent color for the avatar fallback.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for sub-elements (root, image, status, fallback).' },
          { name: 'styles', type: 'object', description: 'Custom inline styles for sub-elements.' },
        ]}
      />
    </>
  );
};
