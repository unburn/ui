import React from 'react';
import { Avatar } from '../components/ui/Avatar';
import { Showcase } from '../components/layout/Showcase';

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
    </>
  );
};
