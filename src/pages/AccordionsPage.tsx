import React from 'react';
import { Accordion } from '../components/ui/Accordion';
import { Showcase } from '../components/layout/Showcase';
import { ApiReference } from '../components/layout/ApiReference';
import { ComponentAnatomy } from '../components/layout/ComponentAnatomy';

export const AccordionsPage: React.FC = () => {
  return (
    <>
      <h2 className="section-title">Accordion</h2>

      <Showcase
        title="01. ACCORDION"
        code={`import { Accordion } from '@unburn/ui';

export default function Example() {
  return (
    <Accordion 
      items={[
        {
          id: '1',
          title: 'Accordion Item 01',
          subtitle: 'This is the subtitle for the first item',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          id: '2',
          title: 'Accordion Item 02',
          subtitle: 'This is the subtitle for the second item',
          content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ]}
    />
  );
}`}
      >
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', display: 'block' }}>
          <Accordion
            items={[
              {
                id: '1',
                title: 'Why choose Unburn UI?',
                subtitle: 'The philosophy behind our design system',
                content: 'Unburn UI focuses on soft geometry and accent-centric variables. This means you can change your entire brand identity by just updating one CSS variable.'
              },
              {
                id: '2',
                title: 'Is it production ready?',
                subtitle: 'Performance and reliability',
                content: 'Every component is built with pure CSS-in-JS logic, ensuring zero external dependencies and blazing-fast performance in any production environment.'
              }
            ]}
          />
        </div>
      </Showcase>

      <Showcase
        title="02. MULTIPLE SELECTION"
        code={`import { Accordion } from '@unburn/ui';

export default function Example() {
  return (
    <Accordion 
      allowMultiple={true}
      items={[
        {
          id: '1',
          title: 'Accordion Item 01',
          subtitle: 'This is the subtitle for the first item',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          id: '2',
          title: 'Accordion Item 02',
          subtitle: 'This is the subtitle for the second item',
          content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ]}
    />
  );
}`}
      >
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', display: 'block' }}>
          <Accordion
            allowMultiple={true}
            items={[
              {
                id: '1',
                title: 'Why choose Unburn UI?',
                subtitle: 'The philosophy behind our design system',
                content: 'Unburn UI focuses on soft geometry and accent-centric variables. This means you can change your entire brand identity by just updating one CSS variable.'
              },
              {
                id: '2',
                title: 'Is it production ready?',
                subtitle: 'Performance and reliability',
                content: 'Every component is built with pure CSS-in-JS logic, ensuring zero external dependencies and blazing-fast performance in any production environment.'
              }
            ]}
          />
        </div>
      </Showcase>
      <Showcase
        title="03. BORDER"
        code={`import { Accordion } from '@unburn/ui';

export default function Example() {
  return (
    <Accordion 
      variant="bordered"
      items={[
        {
          id: '1',
          title: 'Accordion Item 01',
          subtitle: 'This is the subtitle for the first item',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          id: '2',
          title: 'Accordion Item 02',
          subtitle: 'This is the subtitle for the second item',
          content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ]}
    />
  );
}`}
      >
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', display: 'block' }}>
          <Accordion
            variant="bordered"
            items={[
              {
                id: '1',
                title: 'Why choose Unburn UI?',
                subtitle: 'The philosophy behind our design system',
                content: 'Unburn UI focuses on soft geometry and accent-centric variables. This means you can change your entire brand identity by just updating one CSS variable.'
              },
              {
                id: '2',
                title: 'Is it production ready?',
                subtitle: 'Performance and reliability',
                content: 'Every component is built with pure CSS-in-JS logic, ensuring zero external dependencies and blazing-fast performance in any production environment.'
              }
            ]}
          />
        </div>
      </Showcase>
      <Showcase
        title="04. COLOR DUO"
        code={`import { Accordion } from '@unburn/ui';

export default function Example() {
  return (
    <Accordion 
      variant="duo"
      items={[
        {
          id: '1',
          title: 'Accordion Item 01',
          subtitle: 'This is the subtitle for the first item',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
          id: '2',
          title: 'Accordion Item 02',
          subtitle: 'This is the subtitle for the second item',
          content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
      ]}
    />
  );
}`}
      >
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', display: 'block' }}>
          <Accordion
            variant="duo"
            items={[
              {
                id: '1',
                title: 'Why choose Unburn UI?',
                subtitle: 'The philosophy behind our design system',
                content: 'Unburn UI focuses on soft geometry and accent-centric variables. This means you can change your entire brand identity by just updating one CSS variable.'
              },
              {
                id: '2',
                title: 'Is it production ready?',
                subtitle: 'Performance and reliability',
                content: 'Every component is built with pure CSS-in-JS logic, ensuring zero external dependencies and blazing-fast performance in any production environment.'
              }
            ]}
          />
        </div>
      </Showcase>

      <ComponentAnatomy 
        parts={[
          { key: 'root', label: 'Main Wrapper', description: 'The outer container holding all items.' },
          { key: 'item', label: 'Accordion Item', description: 'The individual collapsible section container.' },
          { key: 'header', label: 'Item Header', description: 'The clickable area that toggles the item.' },
          { key: 'title', label: 'Item Title', description: 'The main heading text for the section.' },
          { key: 'subtitle', label: 'Item Subtitle', description: 'The descriptive text below the title.' },
          { key: 'icon', label: 'Chevron Icon', description: 'The arrow icon that rotates when expanded.' },
          { key: 'content', label: 'Content Area', description: 'The collapsible body container.' },
        ]}
      >
        <div style={{ width: '320px' }}>
          <Accordion 
            items={[
              { 
                id: '1', 
                title: 'Design System', 
                subtitle: 'Learn about our core values', 
                content: 'Unburn UI is built on the principles of soft geometry and premium aesthetics.' 
              }
            ]}
          />
        </div>
      </ComponentAnatomy>

      <ApiReference 
        props={[
          { name: 'items', type: 'AccordionItem[]', required: true, description: 'Array of items to display in the accordion.' },
          { name: 'allowMultiple', type: 'boolean', defaultValue: 'false', description: 'Whether multiple items can be open at once.' },
          { name: 'variant', type: "'default' | 'bordered' | 'duo'", defaultValue: "'default'", description: 'The visual style variant.' },
          { name: 'color', type: 'string', description: 'Custom accent color for the accordion.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for sub-elements (root, item, header, content, icon, title, subtitle).' },
          { name: 'styles', type: 'object', description: 'Custom inline styles for sub-elements.' },
        ]}
      />
    </>
  );
};
