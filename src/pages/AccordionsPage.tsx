import React from 'react';
import { Accordion } from '../components/ui/Accordion';
import { Showcase } from '../components/layout/Showcase';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Props } from '../components/layout/Props';
import { Zap, Shield, Settings } from 'lucide-react';

export const AccordionsPage: React.FC = () => {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Accordions</h2>
        <p className="section-description">
          A vertically collapsing accordion component used to organize information into digestible, expandable sections.
        </p>
      </div>

      <Showcase
        title="PREVIEW"
        code={`import { Accordion } from '@unburn/ui';
import { Settings } from 'lucide-react';

export default function Example() {
  return (
    <Accordion
      items={[
        {
          id: '1',
          title: 'General Settings',
          subtitle: 'Core application preferences',
          content: 'Configure your themes, notifications, and language settings here.',
          icon: <Settings size={16} />
        }
      ]}
    />
  );
}`}
      >
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <Accordion
            items={[
              {
                id: '1',
                title: 'General Settings',
                subtitle: 'Core application preferences',
                content: 'Configure your themes, notifications, and language settings here.',
                icon: <Settings size={16} />
              }
            ]}
          />
        </div>
      </Showcase>

      <div className="section-usage">
        <h3 className="section-subtitle">Usage</h3>
        <CodeBlock
          language="tsx"
          code={`import { Accordion } from '@unburn/ui';

const items = [
  { id: '1', title: 'Section 1', content: 'Content 1' },
];

export default function Example() {
  return <Accordion items={items} />;
}`}
        />
      </div>

      <div className="section-examples">
        <h3 className="section-subtitle">Examples</h3>

        <Showcase
          title="VARIANTS"
          description="Accordions support various visual styles: default, bordered, duo, and filled."
          code={`import { Accordion } from '@unburn/ui';

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Accordion
        variant="default"
        items={[{ id: 'v1', title: 'Default Variant', content: 'The clean, minimal look.' }]}
      />
      <Accordion
        variant="bordered"
        items={[{ id: 'v2', title: 'Bordered Variant', content: 'Each item has a distinct border and bezel.' }]}
      />
      <Accordion
        variant="duo"
        items={[{ id: 'v3', title: 'Duo Variant', content: 'A softer, tinted look using system colors.' }]}
      />
      <Accordion
        variant="filled"
        items={[{ id: 'v4', title: 'Filled Variant', content: 'A bold, solid background look with tactile bezel.' }]}
      />
    </div>
  );
}`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '600px' }}>
            <Accordion
              variant="default"
              items={[{ id: 'v1', title: 'Default Variant', content: 'The clean, minimal look.' }]}
            />
            <Accordion
              variant="bordered"
              items={[{ id: 'v2', title: 'Bordered Variant', content: 'Each item has a distinct border and bezel.' }]}
            />
            <Accordion
              variant="duo"
              items={[{ id: 'v3', title: 'Duo Variant', content: 'A softer, tinted look using system colors.' }]}
            />
            <Accordion
              variant="filled"
              items={[{ id: 'v4', title: 'Filled Variant', content: 'A bold, solid background look with tactile bezel.' }]}
            />
          </div>
        </Showcase>

        <Showcase
          title="WITH ICONS & SUBTITLES"
          description="Add context to your accordion items with icons and helpful subtitles."
          code={`import { Accordion } from '@unburn/ui';
import { Shield, Zap } from 'lucide-react';

export default function Example() {
  return (
    <Accordion
      items={[
        {
          id: 's1',
          title: 'Security & Privacy',
          subtitle: 'Manage encryption and data sharing',
          content: 'Configure how your data is handled across the platform.',
          icon: <Shield size={16} />
        },
        {
          id: 's2',
          title: 'Messages',
          subtitle: 'Recent conversations',
          content: 'Your inbox is empty.',
          icon: <Zap size={16} />
        }
      ]}
    />
  );
}`}
        >
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <Accordion
              items={[
                {
                  id: 's1',
                  title: 'Security & Privacy',
                  subtitle: 'Manage encryption and data sharing',
                  content: 'Configure how your data is handled across the platform.',
                  icon: <Shield size={16} />
                },
                {
                  id: 's2',
                  title: 'Messages',
                  subtitle: 'Recent conversations',
                  content: 'Your inbox is empty.',
                  icon: <Zap size={16} />
                }
              ]}
            />
          </div>
        </Showcase>

        <Showcase
          title="MULTIPLE SELECTION"
          description="Control whether multiple items can be open at once."
          code={`import { Accordion } from '@unburn/ui';

export default function Example() {
  return (
    <Accordion
      allowMultiple
      items={[
        { id: 'm1', title: 'Independent Item A', content: 'You can open this...' },
        { id: 'm2', title: 'Independent Item B', content: '...and this at the same time.' }
      ]}
    />
  );
}`}
        >
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <Accordion
              allowMultiple
              items={[
                { id: 'm1', title: 'Independent Item A', content: 'You can open this...' },
                { id: 'm2', title: 'Independent Item B', content: '...and this at the same time.' }
              ]}
            />
          </div>
        </Showcase>
      </div>

      <Props
        props={[
          { name: 'items', type: 'AccordionItem[]', required: true, description: 'Array of items (id, title, subtitle, content, icon).' },
          { name: 'allowMultiple', type: 'boolean', defaultValue: 'false', description: 'Whether multiple items can be open at once.' },
          { name: 'variant', type: "'default' | 'bordered' | 'duo' | 'filled'", defaultValue: "'default'", description: 'The visual style variant.' },
          { name: 'color', type: 'string', description: 'Custom accent color for the accordion.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for sub-elements.' },
          { name: 'styles', type: 'object', description: 'Custom inline styles for sub-elements.' },
        ]}
      />
    </>
  );
};
