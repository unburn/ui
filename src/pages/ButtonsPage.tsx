import React from 'react';
import { Button } from '../components/ui/Button';
import { Showcase } from '../components/layout/Showcase';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Props } from '../components/layout/Props';
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react';

export const ButtonsPage: React.FC = () => {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Buttons</h2>
        <p className="section-description">
          A flexible button component used to trigger actions, events, and navigation across your application.
        </p>
      </div>

      <Showcase
        title="PREVIEW"
        code={`import { Button } from '@unburn/ui';

export default function Example() {
  return <Button variant="filled">Get Started</Button>;
}`}
      >
        <Button variant="filled">Get Started</Button>
      </Showcase>

      <div className="section-usage">
        <h3 className="section-subtitle">Usage</h3>
        <CodeBlock
          language="tsx"
          code={`import { Button } from '@unburn/ui';

export default function Example() {
  return <Button>Click me</Button>;
}`}
        />
      </div>

      <div className="section-examples">
        <h3 className="section-subtitle">Examples</h3>

        <Showcase
          title="VARIANTS"
          description="Buttons come in three distinct variants: filled, outlined, and duo."
          code={`import { Button } from '@unburn/ui';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button variant="filled">Filled</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="duo">Duo</Button>
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="filled">Filled</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="duo">Duo</Button>
          </div>
        </Showcase>

        <Showcase
          title="SIZES"
          description="Available in small, default, and large sizes to fit various layouts."
          code={`import { Button } from '@unburn/ui';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </Showcase>

        <Showcase
          title="ICONS"
          description="Enhance buttons with icons from any library like Lucide."
          code={`import { Button } from '@unburn/ui';
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button icon={<ArrowLeft size={16} />}>Back</Button>
      <Button icon={<ArrowRight size={16} />} iconPosition="right">Next</Button>
      <Button icon={<Mail size={16} />} />
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button icon={<ArrowLeft size={16} />}>Back</Button>
            <Button icon={<ArrowRight size={16} />} iconPosition="right">Next</Button>
            <Button icon={<Mail size={16} />} />
          </div>
        </Showcase>

        <Showcase
          title="STATES"
          description="Loading and disabled states for handling user interactions."
          code={`import { Button } from '@unburn/ui';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button loading>Processing</Button>
      <Button disabled>Not Allowed</Button>
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button loading>Processing</Button>
            <Button disabled>Not Allowed</Button>
          </div>
        </Showcase>

        <Showcase
          title="OPACITY LEVELS"
          description="Fine-tune the visual weight of the button background."
          code={`import { Button } from '@unburn/ui';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button opacityLevel="25">Low</Button>
      <Button opacityLevel="50">Medium</Button>
      <Button opacityLevel="100">Full</Button>
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button opacityLevel="25">Low</Button>
            <Button opacityLevel="50">Medium</Button>
            <Button opacityLevel="100">Full</Button>
          </div>
        </Showcase>
      </div>


      <Props 
        props={[
          { name: 'variant', type: "'filled' | 'outlined' | 'duo'", defaultValue: "'filled'", description: 'The visual style of the button.' },
          { name: 'size', type: "'sm' | 'default' | 'lg'", defaultValue: "'default'", description: 'The size of the button.' },
          { name: 'loading', type: 'boolean', defaultValue: 'false', description: 'Shows a loading spinner and disables the button.' },
          { name: 'fullWidth', type: 'boolean', defaultValue: 'false', description: 'Whether the button should take up the full width of its container.' },
          { name: 'icon', type: 'ReactNode', description: 'Optional icon to display inside the button.' },
          { name: 'iconPosition', type: "'left' | 'right'", defaultValue: "'left'", description: 'Position of the icon relative to children.' },
          { name: 'opacityLevel', type: "'25' | '50' | '75' | '100'", defaultValue: "'100'", description: 'Control the background opacity.' },
          { name: 'color', type: 'string', description: 'Custom accent color (e.g., "red", "blue", or hex).' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for sub-elements (root, icon, loader).' },
          { name: 'styles', type: 'object', description: 'Custom inline styles for sub-elements.' },
        ]}
      />
    </>
  );
};
