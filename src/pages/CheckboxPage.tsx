import React, { useState } from 'react';
import { Checkbox } from '../components/ui/Checkbox';
import { Showcase } from '../components/layout/Showcase';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Props } from '../components/layout/Props';

const ControlledCheckboxExample = () => {
  const [checked, setChecked] = useState(false);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Checkbox 
        label="Accept all terms" 
        checked={checked} 
        onChange={(e) => setChecked(e.target.checked)} 
      />
      <p style={{ 
        fontSize: '0.75rem', 
        fontFamily: 'var(--font-mono)', 
        color: 'var(--accent-color)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      }}>
        Status: {checked ? 'Accepted' : 'Not Accepted'}
      </p>
    </div>
  );
};

export const CheckboxPage: React.FC = () => {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Checkbox</h2>
        <p className="section-description">
          A control that allows the user to select one or more options from a set, with support for labels, descriptions, and multiple visual styles.
        </p>
      </div>

      <Showcase
        title="PREVIEW"
        code={`<Checkbox label="Accept terms and conditions" defaultChecked />`}
      >
        <Checkbox label="Accept terms and conditions" defaultChecked />
      </Showcase>

      <div className="section-usage">
        <h3 className="section-subtitle">Usage</h3>
        <CodeBlock
          language="tsx"
          code={`import { Checkbox } from '@unburn/ui';

export default function Example() {
  return <Checkbox label="Remember me" />;
}`}
        />
      </div>

      <div className="section-examples">
        <h3 className="section-subtitle">Examples</h3>

        <Showcase
          title="VARIANTS"
          description="Checkboxes support three visual styles: filled, outlined, and duo."
          code={`<Checkbox variant="filled" label="Filled" defaultChecked />
<Checkbox variant="outlined" label="Outlined" defaultChecked />
<Checkbox variant="duo" label="Duo" defaultChecked />`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Checkbox variant="filled" label="Filled (Default)" defaultChecked />
            <Checkbox variant="outlined" label="Outlined Variant" defaultChecked />
            <Checkbox variant="duo" label="Duo Variant" defaultChecked />
          </div>
        </Showcase>

        <Showcase
          title="SIZES"
          description="Available in small, default, and large sizes."
          code={`<Checkbox size="sm" label="Small" defaultChecked />
<Checkbox size="default" label="Default" defaultChecked />
<Checkbox size="lg" label="Large" defaultChecked />`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Checkbox size="sm" label="Small Checkbox" defaultChecked />
            <Checkbox size="default" label="Default Checkbox" defaultChecked />
            <Checkbox size="lg" label="Large Checkbox" defaultChecked />
          </div>
        </Showcase>

        <Showcase
          title="STATES"
          description="Validation feedback and disabled states."
          code={`<Checkbox disabled label="Disabled" />
<Checkbox error="This field is required" label="Error State" />`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Checkbox disabled label="Disabled Checkbox" />
            <Checkbox disabled defaultChecked label="Disabled Checked" />
            <Checkbox 
              label="Privacy Policy" 
              error="You must agree to the privacy policy." 
            />
          </div>
        </Showcase>

        <Showcase
          title="WITH DESCRIPTION"
          description="Provide additional context for the checkbox option."
          code={`<Checkbox 
  label="Notifications" 
  description="Receive email updates about your activity." 
  defaultChecked 
/>`}
        >
          <Checkbox 
            label="Notifications" 
            description="Receive email updates about your account activity and security."
            defaultChecked
          />
        </Showcase>

        <Showcase
          title="CONTROLLED"
          description="Manage the checkbox state externally."
          code={`const [checked, setChecked] = useState(false);
<Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} label="Controlled" />`}
        >
          <ControlledCheckboxExample />
        </Showcase>
      </div>

      <Props
        props={[
          { name: 'label', type: 'ReactNode', description: 'The text or element to display next to the checkbox.' },
          { name: 'description', type: 'ReactNode', description: 'Supplementary helper text below the label.' },
          { name: 'error', type: 'string', description: 'Error message to display below the checkbox.' },
          { name: 'variant', type: "'filled' | 'outlined' | 'duo'", defaultValue: "'filled'", description: 'The visual style of the checkbox.' },
          { name: 'size', type: "'sm' | 'default' | 'lg'", defaultValue: "'default'", description: 'The size of the checkbox.' },
          { name: 'checked', type: 'boolean', description: 'Whether the checkbox is checked (controlled).' },
          { name: 'defaultChecked', type: 'boolean', description: 'Initial checked state (uncontrolled).' },
          { name: 'onChange', type: '(e: ChangeEvent) => void', description: 'Callback function triggered on change.' },
          { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Prevents interaction.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for sub-elements.' },
          { name: 'styles', type: 'object', description: 'Custom inline styles for sub-elements.' },
        ]}
      />
    </>
  );
};
