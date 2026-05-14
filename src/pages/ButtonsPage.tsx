import React from 'react';
import { Button } from '../components/ui/Button';
import { Showcase } from '../components/layout/Showcase';
import { ApiReference } from '../components/layout/ApiReference';
import { ComponentAnatomy } from '../components/layout/ComponentAnatomy';
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react';

export const ButtonsPage: React.FC = () => {
  return (
    <>
      <h2 className="section-title">Buttons</h2>

      <Showcase
        title="01. VARIANTS"
        code={`import { Button } from '@unburn/ui';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="filled">Filled</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="duo">Duo</Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}`}
      >
        <Button variant="filled">Filled</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="duo">Duo</Button>
        <Button disabled>Disabled</Button>
      </Showcase>

      <Showcase
        title="02. SIZES"
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
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </Showcase>

      <Showcase
        title="03. OPACITY LEVELS"
        code={`import { Button } from '@unburn/ui';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button opacityLevel="25">25%</Button>
      <Button opacityLevel="50">50%</Button>
      <Button opacityLevel="75">75%</Button>
      <Button opacityLevel="100">100%</Button>
    </div>
  );
}`}
      >
        <Button opacityLevel="25">25%</Button>
        <Button opacityLevel="50">50%</Button>
        <Button opacityLevel="75">75%</Button>
        <Button opacityLevel="100">100%</Button>
      </Showcase>

      <Showcase
        title="04. LOADING STATE"
        code={`import { Button } from '@unburn/ui';
import { Mail } from 'lucide-react';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button loading>Loading</Button>
      <Button loading variant="outlined">Loading</Button>
      <Button loading size="sm" icon={<Mail size={16} />}>Mail</Button>
    </div>
  );
}`}
      >
        <Button loading>Loading</Button>
        <Button loading variant="outlined">Loading</Button>
        <Button loading size="sm" icon={<Mail size={16} />}>Mail</Button>
      </Showcase>

      <Showcase
        title="05. BUTTONS WITH ICON"
        code={`import { Button } from '@unburn/ui';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Example() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button icon={<ArrowLeft size={16} />}>Left</Button>
      <Button icon={<ArrowLeft size={16} />} />
      <Button icon={<ArrowRight size={16} />} iconPosition="right">Right</Button>
      <Button icon={<ArrowRight size={16} />} />
    </div>
  );
}`}
      >
        <Button icon={<ArrowLeft size={16} />}>Left</Button>
        <Button icon={<ArrowLeft size={16} />} />
        <Button icon={<ArrowRight size={16} />} iconPosition="right">Right</Button>
        <Button icon={<ArrowRight size={16} />} />
      </Showcase>

      <ComponentAnatomy 
        parts={[
          { key: 'root', label: 'Main Container', description: 'The button element itself.' },
          { key: 'icon', label: 'Icon Wrapper', description: 'The container holding the left or right icon.' },
          { key: 'loader', label: 'Loading Spinner', description: 'The animated icon shown during loading states.' },
        ]}
      >
        <Button icon={<Mail size={16} />}>Contact Us</Button>
      </ComponentAnatomy>

      <ApiReference 
        props={[
          { name: 'variant', type: "'filled' | 'outlined' | 'duo'", defaultValue: "'filled'", description: 'The visual style of the button.' },
          { name: 'size', type: "'sm' | 'default' | 'lg'", defaultValue: "'default'", description: 'The size of the button.' },
          { name: 'loading', type: 'boolean', defaultValue: 'false', description: 'Shows a loading spinner and disables the button.' },
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
