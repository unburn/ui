import React, { useState } from 'react';
import { Input } from '../components/ui/Input';
import { Showcase } from '../components/layout/Showcase';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Props } from '../components/layout/Props';
import { Mail, Lock, User } from 'lucide-react';

const InteractiveProgressiveInput = () => {
  const [password, setPassword] = useState('');
  
  const getProgress = (val: string) => {
    if (!val) return 0;
    if (val.length < 5) return 1;
    if (val.length < 8) return 2;
    return 3;
  };

  return (
    <div style={{ width: '100%', maxWidth: '400px' }}>
      <Input 
        label="Interactive Password" 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        progressLevel={getProgress(password) as any}
        placeholder="Type to see progress..."
      />
    </div>
  );
};

export const InputsPage: React.FC = () => {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Inputs</h2>
        <p className="section-description">
          Versatile input fields for gathering user data with support for icons, labels, and validation states.
        </p>
      </div>

      <Showcase
        title="PREVIEW"
        code={`<Input label="Email" placeholder="you@example.com" />`}
      >
        <div style={{ width: '100%', maxWidth: '400px' }}>
          <Input label="Email" placeholder="you@example.com" />
        </div>
      </Showcase>

      <div className="section-usage">
        <h3 className="section-subtitle">Usage</h3>
        <CodeBlock
          language="tsx"
          code={`import { Input } from '@unburn/ui';

export default function Example() {
  return <Input label="Username" placeholder="Enter your name" />;
}`}
        />
      </div>

      <div className="section-examples">
        <h3 className="section-subtitle">Examples</h3>

        <Showcase
          title="VARIANTS"
          description="Choose between filled, outlined, and duo variants to match your UI's depth."
          code={`<Input variant="filled" placeholder="Filled (Default)" />
<Input variant="outlined" placeholder="Outlined variant" />
<Input variant="duo" placeholder="Duo variant" />`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '400px' }}>
            <Input variant="filled" placeholder="Filled (Default)" />
            <Input variant="outlined" placeholder="Outlined variant" />
            <Input variant="duo" placeholder="Duo variant" />
          </div>
        </Showcase>

        <Showcase
          title="SIZES"
          description="Inputs come in small, default, and large sizes."
          code={`<Input size="sm" placeholder="Small input" />
<Input size="default" placeholder="Default input" />
<Input size="lg" placeholder="Large input" />`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '400px' }}>
            <Input size="sm" placeholder="Small input" />
            <Input size="default" placeholder="Default input" />
            <Input size="lg" placeholder="Large input" />
          </div>
        </Showcase>

        <Showcase
          title="ICONS"
          description="Place icons on the left or right to provide extra context."
          code={`import { Mail, Lock, User } from 'lucide-react';

<Input leftIcon={<User size={16} />} placeholder="Username" />
<Input leftIcon={<Mail size={16} />} rightIcon={<Lock size={16} />} placeholder="Dual icons" />`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '400px' }}>
            <Input
              leftIcon={<User size={16} />}
              placeholder="Username"
            />
            <Input
              leftIcon={<Mail size={16} />}
              rightIcon={<Lock size={16} />}
              placeholder="Email with dual icons"
            />
          </div>
        </Showcase>

        <Showcase
          title="PROGRESSIVE INPUT"
          description="Visual feedback for password strength or completion tracking."
          code={`const [password, setPassword] = useState('');
<Input 
  type="password" 
  value={password} 
  onChange={(e) => setPassword(e.target.value)} 
  progressLevel={getProgress(password)} 
/>`}
        >
          <InteractiveProgressiveInput />
        </Showcase>

        <Showcase
          title="STATES"
          description="Handle validation errors and disabled interactions."
          code={`<Input error="Invalid email address" placeholder="error@example.com" />
<Input disabled placeholder="Cannot type here" />`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '400px' }}>
            <Input
              label="Error State"
              error="Password must be at least 8 characters."
              placeholder="Enter your password"
              type="password"
            />
            <Input
              label="Disabled"
              disabled
              placeholder="Disabled input"
            />
          </div>
        </Showcase>
      </div>

      <Props
        props={[
          { name: 'label', type: 'ReactNode', description: 'Label text displayed above the input.' },
          { name: 'description', type: 'ReactNode', description: 'Helper text displayed below the input.' },
          { name: 'error', type: 'string', description: 'Error message to display (swaps with description).' },
          { name: 'variant', type: "'filled' | 'outlined' | 'duo'", defaultValue: "'filled'", description: 'The visual style of the input.' },
          { name: 'size', type: "'sm' | 'default' | 'lg'", defaultValue: "'default'", description: 'The size of the input (height and padding).' },
          { name: 'leftIcon', type: 'ReactNode', description: 'Icon to display on the left side of the input.' },
          { name: 'rightIcon', type: 'ReactNode', description: 'Icon to display on the right side of the input.' },
          { name: 'fullWidth', type: 'boolean', defaultValue: 'false', description: 'Whether the input should take up the full width of its container.' },
          { name: 'progressLevel', type: '0 | 1 | 2 | 3', description: 'Visual indicator level (red, yellow, green bars).' },
          { name: 'focusHighlight', type: 'boolean', defaultValue: 'true', description: 'Whether to show the accent highlight when focused.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for sub-elements.' },
          { name: 'styles', type: 'object', description: 'Custom inline styles for sub-elements.' },
        ]}
      />
    </>
  );
};
