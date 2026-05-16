import React, { useState } from 'react';
import { Select } from '../components/ui/Select';
import { Showcase } from '../components/layout/Showcase';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Props } from '../components/layout/Props';

const fruitOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'grapes', label: 'Grapes' },
  { value: 'pineapple', label: 'Pineapple' },
];

const ControlledSelectExample = () => {
  const [value, setValue] = useState('banana');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Select 
        label="Select a fruit" 
        options={fruitOptions}
        value={value} 
        onChange={setValue} 
      />
      <p style={{ 
        fontSize: '0.75rem', 
        fontFamily: 'var(--font-mono)', 
        color: 'var(--accent-color)',
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      }}>
        Selection: {value}
      </p>
    </div>
  );
};

export const SelectPage: React.FC = () => {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Select</h2>
        <p className="section-description">
          A premium dropdown component for selecting a single option from a list, featuring glassmorphism, fluid animations, and multiple visual variants.
        </p>
      </div>

      <Showcase
        title="PREVIEW"
        code={`import { Select } from '@unburn/ui';

const fruitOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'grapes', label: 'Grapes' },
  { value: 'pineapple', label: 'Pineapple' },
];

export default function Example() {
  return (
    <Select 
      options={fruitOptions} 
      placeholder="Choose a fruit" 
      label="Favorite Fruit"
    />
  );
}`}
      >
        <div style={{ width: '300px', paddingBottom: '200px' }}>
          <Select 
            options={fruitOptions} 
            placeholder="Choose a fruit" 
            label="Favorite Fruit"
          />
        </div>
      </Showcase>

      <div className="section-usage">
        <h3 className="section-subtitle">Usage</h3>
        <CodeBlock
          language="tsx"
          code={`import { Select } from '@unburn/ui';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
];

export default function Example() {
  return <Select options={options} label="Choose an option" />;
}`}
        />
      </div>

      <div className="section-examples">
        <h3 className="section-subtitle">Examples</h3>

        <Showcase
          title="VARIANTS"
          description="Selects support three visual styles: filled, outlined, and duo."
          code={`import { Select } from '@unburn/ui';

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
];

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Select variant="filled" label="Filled (Default)" options={options} defaultValue="apple" />
      <Select variant="outlined" label="Outlined Variant" options={options} defaultValue="banana" />
      <Select variant="duo" label="Duo Variant" options={options} defaultValue="blueberry" />
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '300px', paddingBottom: '200px' }}>
            <Select variant="filled" label="Filled (Default)" options={fruitOptions.slice(0, 3)} defaultValue="apple" />
            <Select variant="outlined" label="Outlined Variant" options={fruitOptions.slice(0, 3)} defaultValue="banana" />
            <Select variant="duo" label="Duo Variant" options={fruitOptions.slice(0, 3)} defaultValue="blueberry" />
          </div>
        </Showcase>

        <Showcase
          title="SIZES"
          description="Available in small, default, and large sizes."
          code={`import { Select } from '@unburn/ui';

const fruitOptions = [...];

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Select size="sm" placeholder="Small Select" options={fruitOptions} />
      <Select size="default" placeholder="Default Select" options={fruitOptions} />
      <Select size="lg" placeholder="Large Select" options={fruitOptions} />
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '300px', paddingBottom: '200px' }}>
            <Select size="sm" placeholder="Small Select" options={fruitOptions} />
            <Select size="default" placeholder="Default Select" options={fruitOptions} />
            <Select size="lg" placeholder="Large Select" options={fruitOptions} />
          </div>
        </Showcase>

        <Showcase
          title="STATES"
          description="Validation feedback and disabled states."
          code={`import { Select } from '@unburn/ui';

const fruitOptions = [...];

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Select 
        label="Error State"
        error="Please select a valid fruit."
        options={fruitOptions} 
        placeholder="Error highlight"
      />
      <Select 
        label="Disabled"
        disabled
        options={fruitOptions} 
        placeholder="Cannot interact"
      />
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '300px', paddingBottom: '200px' }}>
            <Select 
              label="Error State"
              error="Please select a valid fruit."
              options={fruitOptions} 
              placeholder="Error highlight"
            />
            <Select 
              label="Disabled"
              disabled
              options={fruitOptions} 
              placeholder="Cannot interact"
            />
          </div>
        </Showcase>

        <Showcase
          title="CONTROLLED"
          description="Manage the selection state externally."
          code={`import React, { useState } from 'react';
import { Select } from '@unburn/ui';

const fruitOptions = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'grapes', label: 'Grapes' },
  { value: 'pineapple', label: 'Pineapple' },
];

export default function Example() {
  const [value, setValue] = useState('banana');
  
  return (
    <Select 
      label="Select a fruit" 
      options={fruitOptions}
      value={value} 
      onChange={setValue} 
    />
  );
}`}
        >
          <div style={{ width: '300px', paddingBottom: '200px' }}>
            <ControlledSelectExample />
          </div>
        </Showcase>
      </div>

      <Props
        props={[
          { name: 'options', type: 'SelectOption[]', required: true, description: 'Array of { value, label, disabled } objects.' },
          { name: 'value', type: 'string', description: 'The current selected value (controlled).' },
          { name: 'defaultValue', type: 'string', description: 'The initial selected value (uncontrolled).' },
          { name: 'onChange', type: '(value: string) => void', description: 'Callback triggered on selection.' },
          { name: 'placeholder', type: 'string', defaultValue: "'Select an option'", description: 'Text shown when empty.' },
          { name: 'variant', type: "'filled' | 'outlined' | 'duo'", defaultValue: "'filled'", description: 'The visual style variant.' },
          { name: 'size', type: "'sm' | 'default' | 'lg'", defaultValue: "'default'", description: 'The size of the component.' },
          { name: 'focusHighlight', type: 'boolean', defaultValue: 'true', description: 'Show highlight border on focus.' },
          { name: 'label', type: 'string', description: 'The label displayed above the field.' },
          { name: 'description', type: 'string', description: 'Help text displayed below the field.' },
          { name: 'error', type: 'string', description: 'Error message to display.' },
          { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Prevents interaction.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for sub-elements.' },
          { name: 'styles', type: 'object', description: 'Custom inline styles for sub-elements.' },
        ]}
      />
    </>
  );
};
