import React from 'react';
import { Tooltip } from '../../../package/components/Tooltip/Tooltip';
import { Button } from '../../../package/components/Button/Button';
import { Showcase } from '../../components/layout/Showcase';
import { CodeBlock } from '../../../package/components/CodeBlock/CodeBlock';
import { Props } from '../../components/layout/Props';
import { ComponentHeader } from '../../components/layout/ComponentHeader';

export const TooltipPage: React.FC = () => {
  return (
    <>
      <ComponentHeader title="Tooltip" />

      <Showcase
        title="Preview"
        description="A premium glassmorphic hover information bubble showing interactive trigger components."
        code={`import { Tooltip } from '@unburn/ui/Tooltip';
import { Button } from '@unburn/ui/Button';

export default function Example() {
  return (
    <Tooltip content="Unburn UI system tooltip feed" position="top">
      <Button variant="filled">Hover Trigger</Button>
    </Tooltip>
  );
}`}
      >
        <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Tooltip content="Unburn UI system tooltip feed" position="top">
            <Button variant="filled">Hover Trigger</Button>
          </Tooltip>
        </div>
      </Showcase>

      <div className="section-usage">
        <h3 className="section-subtitle">Usage</h3>
        <CodeBlock
          language="tsx"
          code={`import { Tooltip } from '@unburn/ui/Tooltip';
import { Button } from '@unburn/ui/Button';

export default function Example() {
  return (
    <Tooltip content="Frosted information bubble">
      <Button>Trigger Area</Button>
    </Tooltip>
  );
}`}
        />
      </div>

      <div className="section-examples">
        <h3 className="section-subtitle">Examples</h3>

        <Showcase
          title="Positions"
          description="Support for four-directional alignments: top, bottom, left, and right."
          code={`import { Tooltip } from '@unburn/ui/Tooltip';
import { Button } from '@unburn/ui/Button';

export default function Example() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
      <Tooltip content="Positioned Top" position="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Positioned Bottom" position="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Positioned Left" position="left">
        <Button>Left</Button>
      </Tooltip>
      <Tooltip content="Positioned Right" position="right">
        <Button>Right</Button>
      </Tooltip>
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', padding: '1rem' }}>
            <Tooltip content="Positioned Top" position="top">
              <Button>Top</Button>
            </Tooltip>
            <Tooltip content="Positioned Bottom" position="bottom">
              <Button>Bottom</Button>
            </Tooltip>
            <Tooltip content="Positioned Left" position="left">
              <Button>Left</Button>
            </Tooltip>
            <Tooltip content="Positioned Right" position="right">
              <Button>Right</Button>
            </Tooltip>
          </div>
        </Showcase>

        <Showcase
          title="Variants"
          description="Support for three distinct styling architectures: filled (solid color/high-contrast), outlined (crisp border highlight), and duo (translucent background and border tinter)."
          code={`import { Tooltip } from '@unburn/ui/Tooltip';
import { Button } from '@unburn/ui/Button';

export default function Example() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
      <Tooltip content="Filled Variant" variant="filled" position="top">
        <Button>Filled</Button>
      </Tooltip>
      <Tooltip content="Outlined Variant" variant="outlined" position="bottom">
        <Button>Outlined</Button>
      </Tooltip>
      <Tooltip content="Duo Variant" variant="duo" position="top">
        <Button>Duo</Button>
      </Tooltip>
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', padding: '1rem' }}>
            <Tooltip content="Filled Variant" variant="filled" position="top">
              <Button>Filled</Button>
            </Tooltip>
            <Tooltip content="Outlined Variant" variant="outlined" position="bottom">
              <Button>Outlined</Button>
            </Tooltip>
            <Tooltip content="Duo Variant" variant="duo" position="top">
              <Button>Duo</Button>
            </Tooltip>
          </div>
        </Showcase>

        <Showcase
          title="States"
          description="Support for disabled states, preventing bubble rendering when disabled is set."
          code={`import { Tooltip } from '@unburn/ui/Tooltip';
import { Button } from '@unburn/ui/Button';

export default function Example() {
  return (
    <Tooltip content="This will not show" disabled position="top">
      <Button disabled>Disabled Trigger</Button>
    </Tooltip>
  );
}`}
        >
          <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
            <Tooltip content="This will not show" disabled position="top">
              <Button disabled>Disabled Trigger</Button>
            </Tooltip>
          </div>
        </Showcase>
      </div>

      <Props
        props={[
          { name: 'content', type: 'ReactNode', required: true, description: 'Display text or react node shown inside the tooltip bubble.' },
          { name: 'children', type: 'ReactNode', description: 'Trigger component node that displays the tooltip when hovered or focused.' },
          { name: 'position', type: "'top' | 'bottom' | 'left' | 'right'", defaultValue: "'top'", description: 'Alignment position of the bubble relative to the children trigger.' },
          { name: 'visible', type: 'boolean', description: 'Explicitly control visibility of the tooltip (controlled mode).' },
          { name: 'color', type: 'string', description: 'Custom primary accent color for active highlight styling overrides (hex, rgb, etc.).' },
          { name: 'variant', type: "'filled' | 'outlined' | 'duo'", defaultValue: "'filled'", description: 'Styling architecture applied to the tooltip container.' },
          { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Disables interactive tooltip display.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS class name configuration mapping (root, trigger, bubble, arrow).' },
          { name: 'styles', type: 'object', description: 'Inline style configuration mapping.' },
        ]}
      />
    </>
  );
};
