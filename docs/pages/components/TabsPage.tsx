import React, { useState } from 'react';
import { Tabs } from '../../../package/components/Tabs/Tabs';
import { Showcase } from '../../components/layout/Showcase';
import { CodeBlock } from '../../../package/components/CodeBlock/CodeBlock';
import { Props } from '../../components/layout/Props';
import { ComponentHeader } from '../../components/layout/ComponentHeader';
import { Shield, Sparkles, Sliders } from 'lucide-react';

export const TabsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('account');

  const tabItems = [
    {
      id: 'account',
      label: 'Account',
      children: (
        <div style={{ padding: '1rem', background: 'var(--bg-glass)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
          <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-main)' }}>Account Profile</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Update your user profile settings and credentials.</p>
        </div>
      )
    },
    {
      id: 'security',
      label: 'Security',
      children: (
        <div style={{ padding: '1rem', background: 'var(--bg-glass)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
          <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-main)' }}>Security & Keys</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Manage two-factor auth options and cryptographic SSH keys.</p>
        </div>
      )
    },
    {
      id: 'billing',
      label: 'Billing',
      children: (
        <div style={{ padding: '1rem', background: 'var(--bg-glass)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
          <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', color: 'var(--text-main)' }}>Billing & Plan</h4>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>View past transactional history and switch subscription plans.</p>
        </div>
      )
    }
  ];

  const iconItems = [
    {
      id: 'features',
      label: 'Features',
      icon: <Sparkles size={14} />,
      children: <div style={{ padding: '1rem', color: 'var(--text-muted)' }}>Features configuration layout and switches.</div>
    },
    {
      id: 'protection',
      label: 'Protection',
      icon: <Shield size={14} />,
      children: <div style={{ padding: '1rem', color: 'var(--text-muted)' }}>Access restrictions and user blocking logs.</div>
    },
    {
      id: 'preferences',
      label: 'Preferences',
      icon: <Sliders size={14} />,
      children: <div style={{ padding: '1rem', color: 'var(--text-muted)' }}>Theme presets and responsive spacing controls.</div>
    }
  ];

  return (
    <>
      <ComponentHeader title="Tabs" />

      <Showcase
        title="Preview"
        code={`import { Tabs } from '@unburn/ui/Tabs';

export default function Example() {
  const items = [
    {
      id: 'account',
      label: 'Account',
      children: (
        <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
          <h4>Account Profile</h4>
          <p>Update your user profile settings and credentials.</p>
        </div>
      )
    },
    {
      id: 'security',
      label: 'Security',
      children: (
        <div style={{ padding: '1rem', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
          <h4>Security & Keys</h4>
          <p>Manage two-factor auth options and cryptographic SSH keys.</p>
        </div>
      )
    }
  ];

  return <Tabs items={items} />;
}`}
      >
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <Tabs items={tabItems} />
        </div>
      </Showcase>

      <div className="section-usage">
        <h3 className="section-subtitle">Usage</h3>
        <CodeBlock
          language="tsx"
          code={`import { Tabs } from '@unburn/ui/Tabs';

export default function Example() {
  const items = [
    { id: 'tab1', label: 'Tab One', children: <div>Panel One Content</div> },
    { id: 'tab2', label: 'Tab Two', children: <div>Panel Two Content</div> }
  ];

  return <Tabs items={items} defaultTab="tab1" />;
}`}
        />
      </div>

      <div className="section-examples">
        <h3 className="section-subtitle">Examples</h3>


        <Showcase
          title="Sizes"
          description="Choose from three size presets: sm, default, and lg to match the UI environment."
          code={`import { Tabs } from '@unburn/ui/Tabs';

export default function Example() {
  const items = [
    { id: '1', label: 'Overview', children: <div style={{ padding: '1rem' }}>Overview content.</div> },
    { id: '2', label: 'Analytics', children: <div style={{ padding: '1rem' }}>Analytics content.</div> }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '600px' }}>
      <div>
        <h5 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>SMALL TABS</h5>
        <Tabs size="sm" items={items} />
      </div>

      <div>
        <h5 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>DEFAULT TABS</h5>
        <Tabs size="default" items={items} />
      </div>

      <div>
        <h5 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>LARGE TABS</h5>
        <Tabs size="lg" items={items} />
      </div>
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '600px' }}>
            <div>
              <h5 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>SMALL TABS</h5>
              <Tabs 
                size="sm" 
                items={[
                  { id: 's1', label: 'Overview', children: <div style={{ padding: '1rem', color: 'var(--text-muted)' }}>Overview content.</div> },
                  { id: 's2', label: 'Analytics', children: <div style={{ padding: '1rem', color: 'var(--text-muted)' }}>Analytics content.</div> }
                ]} 
              />
            </div>

            <div>
              <h5 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>DEFAULT TABS</h5>
              <Tabs 
                size="default" 
                items={[
                  { id: 'd1', label: 'Overview', children: <div style={{ padding: '1rem', color: 'var(--text-muted)' }}>Overview content.</div> },
                  { id: 'd2', label: 'Analytics', children: <div style={{ padding: '1rem', color: 'var(--text-muted)' }}>Analytics content.</div> }
                ]} 
              />
            </div>

            <div>
              <h5 style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>LARGE TABS</h5>
              <Tabs 
                size="lg" 
                items={[
                  { id: 'l1', label: 'Overview', children: <div style={{ padding: '1rem', color: 'var(--text-muted)' }}>Overview content.</div> },
                  { id: 'l2', label: 'Analytics', children: <div style={{ padding: '1rem', color: 'var(--text-muted)' }}>Analytics content.</div> }
                ]} 
              />
            </div>
          </div>
        </Showcase>

        <Showcase
          title="With Icons"
          description="Embed small Lucide icons directly next to text labels inside the tab headers."
          code={`import { Tabs } from '@unburn/ui/Tabs';
import { Sparkles, Shield, Sliders } from 'lucide-react';

export default function Example() {
  const items = [
    {
      id: 'features',
      label: 'Features',
      icon: <Sparkles size={14} />,
      children: <div style={{ padding: '1rem' }}>Features configuration layout and switches.</div>
    },
    {
      id: 'protection',
      label: 'Protection',
      icon: <Shield size={14} />,
      children: <div style={{ padding: '1rem' }}>Access restrictions and user blocking logs.</div>
    },
    {
      id: 'preferences',
      label: 'Preferences',
      icon: <Sliders size={14} />,
      children: <div style={{ padding: '1rem' }}>Theme presets and responsive spacing controls.</div>
    }
  ];

  return <Tabs items={items} />;
}`}
        >
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <Tabs items={iconItems} />
          </div>
        </Showcase>

        <Showcase
          title="Controlled and Disabled"
          description="Support controlled states by providing activeTab and onChange props, or block clicking specific tabs."
          code={`import { Tabs } from '@unburn/ui/Tabs';
import { useState } from 'react';

export default function Example() {
  const [activeTab, setActiveTab] = useState('account');

  const items = [
    {
      id: 'account',
      label: 'Account settings',
      children: <div style={{ padding: '1rem' }}>Active account panel.</div>
    },
    {
      id: 'billing',
      label: 'Billing history',
      children: <div style={{ padding: '1rem' }}>Active billing panel.</div>
    },
    {
      id: 'enterprise',
      label: 'Enterprise options',
      disabled: true,
      children: <div style={{ padding: '1rem' }}>Locked enterprise panel.</div>
    }
  ];

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <button onClick={() => setActiveTab('account')}>Force Account</button>
        <button onClick={() => setActiveTab('billing')}>Force Billing</button>
      </div>
      <Tabs activeTab={activeTab} onChange={setActiveTab} items={items} />
    </div>
  );
}`}
        >
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <button 
                onClick={() => setActiveTab('account')}
                style={{
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-main)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                Force Account
              </button>
              <button 
                onClick={() => setActiveTab('billing')}
                style={{
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-main)',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                Force Billing
              </button>
            </div>
            <Tabs 
              activeTab={activeTab} 
              onChange={setActiveTab} 
              items={[
                {
                  id: 'account',
                  label: 'Account settings',
                  children: <div style={{ padding: '1rem', color: 'var(--text-muted)' }}>Active account panel.</div>
                },
                {
                  id: 'billing',
                  label: 'Billing history',
                  children: <div style={{ padding: '1rem', color: 'var(--text-muted)' }}>Active billing panel.</div>
                },
                {
                  id: 'enterprise',
                  label: 'Enterprise options',
                  disabled: true,
                  children: <div style={{ padding: '1rem', color: 'var(--text-muted)' }}>Locked enterprise panel.</div>
                }
              ]} 
            />
          </div>
        </Showcase>
      </div>

      <Props
        props={[
          { name: 'items', type: 'TabItem[]', required: true, description: 'List of tab descriptors and panel children.' },
          { name: 'defaultTab', type: 'string', description: 'Sets default tab to open when rendering (uncontrolled).' },
          { name: 'activeTab', type: 'string', description: 'Overrides internal state (controlled mode).' },
          { name: 'onChange', type: '(tabId: string) => void', description: 'Callback function called when selecting tabs.' },
          { name: 'size', type: "'sm' | 'default' | 'lg'", defaultValue: "'default'", description: 'Sets overall physical padding, text, and border-radius scales.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for individual sub-nodes (root, tabList, tab, activeTab, panel, indicator).' },
          { name: 'styles', type: 'object', description: 'Custom inline styling properties for sub-nodes (root, tabList, tab, panel).' },
        ]}
      />

      <div style={{ marginTop: '3rem' }}>
        <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '1rem' }}>TabItem Structure</h4>
        <Props
          props={[
            { name: 'id', type: 'string', required: true, description: 'Unique identifier for matching tab states.' },
            { name: 'label', type: 'string', required: true, description: 'Header text shown in the tab capsule.' },
            { name: 'icon', type: 'ReactNode', description: 'Lucide or custom element rendered next to label.' },
            { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'If true, ignores mouse click events on the tab.' },
            { name: 'children', type: 'ReactNode', required: true, description: 'Content rendered inside the panel when selected.' },
          ]}
        />
      </div>
    </>
  );
};
