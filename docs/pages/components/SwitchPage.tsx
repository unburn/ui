import React, { useState } from 'react';
import { Switch } from '../../../package/components/Switch/Switch';
import { Showcase } from '../../components/layout/Showcase';
import { CodeBlock } from '../../../package/components/CodeBlock/CodeBlock';
import { Props } from '../../components/layout/Props';
import { AddedAt } from '../../components/layout/AddedAt';

const ControlledSwitchExample = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Switch
        label="Enable features"
        checked={enabled}
        onChange={(e) => setEnabled(e)}
        description={`Status: ${enabled ? 'Active' : 'Inactive'}`}
      />
    </div>
  );
};

export const SwitchPage: React.FC = () => {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Switch</h2>
        <p className="section-description">
          Toggle switches for settings and quick actions.
        </p>
        <AddedAt componentName="Switch" />
      </div>

      <Showcase
        title="PREVIEW"
        code={`import { Switch } from '@unburn/ui/Switch';

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
          code={`import { Switch } from '@unburn/ui/Switch';

export default function Example() {
  return <Switch label="Toggle me" />;
}`}
        />
      </div>

      <div className="section-examples">
        <h3 className="section-subtitle">Examples</h3>

        <Showcase
          title="VARIANTS"
          description="Choose from three styles: filled, outlined, and duo."
          code={`import { Switch } from '@unburn/ui/Switch';

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
          description="Choose from small, medium, or large sizes."
          code={`import { Switch } from '@unburn/ui/Switch';

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
          description="Add descriptive text below the switch label."
          code={`import { Switch } from '@unburn/ui/Switch';

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
          description="Use disabled states for switches."
          code={`import { Switch } from '@unburn/ui/Switch';

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
          description="Control and track selected states easily."
          code={`import { Switch } from '@unburn/ui/Switch';
import { useState } from 'react';

export default function Example() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Switch
        label="Enable features"
        checked={enabled}
        onChange={(e) => setEnabled(e)}
        description={\`Status: \${enabled ? 'Active' : 'Inactive'}\`}
      />
    </div>
  );
}`}
        >
          <ControlledSwitchExample />
        </Showcase>
      </div>

      <Props
        props={[
          { name: 'label', type: 'ReactNode', description: 'Text shown next to the switch.' },
          { name: 'description', type: 'ReactNode', description: 'Helpful description text shown below the label.' },
          { name: 'checked', type: 'boolean', description: 'Set if the switch is turned on.' },
          { name: 'defaultChecked', type: 'boolean', description: 'Set if the switch starts as turned on.' },
          { name: 'onChange', type: '(checked: boolean) => void', description: 'Function called when the switch state changes.' },
          { name: 'variant', type: "'filled' | 'outlined' | 'duo'", defaultValue: "'filled'", description: 'The style variant of the switch.' },
          { name: 'size', type: "'sm' | 'default' | 'lg'", defaultValue: "'default'", description: 'The size of the switch.' },
          { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disable clicks on the switch.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for each part of the switch.' },
          { name: 'styles', type: 'object', description: 'Custom inline CSS styles for each part.' },
        ]}
      />
    </>
  );
};
