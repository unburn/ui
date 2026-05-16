import React, { useState } from 'react';
import { Switch } from '../components/ui/Switch';
import { Showcase } from '../components/layout/Showcase';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Props } from '../components/layout/Props';

const ControlledSwitchExample = () => {
  const [enabled, setEnabled] = useState(false);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Switch 
        label="Enable features" 
        checked={enabled} 
        onChange={(e) => setEnabled(e)} 
      />
      <p style={{ 
        fontSize: '0.75rem',  
        fontFamily: 'var(--font-mono)', 
        color: 'var(--accent-color)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      }}>
        Status: {enabled ? 'Active' : 'Inactive'}
      </p>
    </div>
  );
};

export const SwitchPage: React.FC = () => {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Switch</h2>
        <p className="section-description">
          A toggle switch used to switch between two states, often used for settings, preferences, and binary choices.
        </p>
      </div>

      <Showcase
        title="PREVIEW"
        code={`import { Switch } from '@unburn/ui';

export default function Example() {
  return <Switch label="Enable notifications" defaultChecked />;
}`}
      >
        <Switch label="Enable notifications" defaultChecked />
      </Showcase>

      <div className="section-usage">
        <h3 className="section-subtitle">Usage</h3>
        <CodeBlock
          language="tsx"
          code={`import { Switch } from '@unburn/ui';

export default function Example() {
  return <Switch label="Toggle me" />;
}`}
        />
      </div>

      <div className="section-examples">
        <h3 className="section-subtitle">Examples</h3>

        <Showcase
          title="VARIANTS"
          description="Switches support three visual styles: filled, outlined, and duo."
          code={`import { Switch } from '@unburn/ui';

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch variant="filled" label="Filled (Default)" defaultChecked />
      <Switch variant="outlined" label="Outlined Variant" defaultChecked />
      <Switch variant="duo" label="Duo Variant" defaultChecked />
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Switch variant="filled" label="Filled (Default)" defaultChecked />
            <Switch variant="outlined" label="Outlined Variant" defaultChecked />
            <Switch variant="duo" label="Duo Variant" defaultChecked />
          </div>
        </Showcase>

        <Showcase
          title="SIZES"
          description="Available in small, default, and large sizes."
          code={`import { Switch } from '@unburn/ui';

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch size="sm" label="Small Switch" defaultChecked />
      <Switch size="default" label="Default Switch" defaultChecked />
      <Switch size="lg" label="Large Switch" defaultChecked />
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Switch size="sm" label="Small Switch" defaultChecked />
            <Switch size="default" label="Default Switch" defaultChecked />
            <Switch size="lg" label="Large Switch" defaultChecked />
          </div>
        </Showcase>

        <Showcase
          title="WITH DESCRIPTION"
          description="Provide additional context for the toggle."
          code={`import { Switch } from '@unburn/ui';

export default function Example() {
  return (
    <Switch 
      label="Airplane Mode" 
      description="Disable all wireless communications including Wi-Fi and Bluetooth."
    />
  );
}`}
        >
          <Switch 
            label="Airplane Mode" 
            description="Disable all wireless communications including Wi-Fi and Bluetooth."
          />
        </Showcase>

        <Showcase
          title="STATES"
          description="Disabled state for non-interactive toggles."
          code={`import { Switch } from '@unburn/ui';

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch disabled label="Disabled Switch" />
      <Switch disabled defaultChecked label="Disabled Active" />
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Switch disabled label="Disabled Switch" />
            <Switch disabled defaultChecked label="Disabled Active" />
          </div>
        </Showcase>

        <Showcase
          title="CONTROLLED"
          description="Manage the switch state externally."
          code={`import React, { useState } from 'react';
import { Switch } from '@unburn/ui';

export default function Example() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch 
      label="Enable features" 
      checked={enabled} 
      onChange={(e) => setEnabled(e)} 
    />
  );
}`}
        >
          <ControlledSwitchExample />
        </Showcase>
      </div>

      <Props
        props={[
          { name: 'label', type: 'ReactNode', description: 'The text or element to display next to the switch.' },
          { name: 'description', type: 'ReactNode', description: 'Supplementary helper text below the label.' },
          { name: 'checked', type: 'boolean', description: 'Whether the switch is on (controlled).' },
          { name: 'defaultChecked', type: 'boolean', description: 'Initial state (uncontrolled).' },
          { name: 'onChange', type: '(checked: boolean) => void', description: 'Callback triggered when state changes.' },
          { name: 'variant', type: "'filled' | 'outlined' | 'duo'", defaultValue: "'filled'", description: 'The visual style variant.' },
          { name: 'size', type: "'sm' | 'default' | 'lg'", defaultValue: "'default'", description: 'The size of the switch.' },
          { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Prevents interaction.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for sub-elements.' },
          { name: 'styles', type: 'object', description: 'Custom inline styles for sub-elements.' },
        ]}
      />
    </>
  );
};
