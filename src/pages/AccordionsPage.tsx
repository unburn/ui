import React from 'react';
import { Accordion } from '../components/ui/Accordion';
import { Showcase } from '../components/layout/Showcase';

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
    </>
  );
};
