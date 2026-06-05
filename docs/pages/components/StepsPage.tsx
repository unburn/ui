import React from 'react';
import { Steps } from '../../../package/components/Steps/Steps';
import { Button } from '../../../package/components/Button/Button';
import { Showcase } from '../../components/layout/Showcase';
import { CodeBlock } from '../../../package/components/CodeBlock/CodeBlock';
import { Props } from '../../components/layout/Props';
import { ComponentHeader } from '../../components/layout/ComponentHeader';

export const StepsPage: React.FC = () => {
  const basicItems = [
    { title: 'Initialize Workspace' },
    { title: 'Install Dependencies' },
    { title: 'Start Dev Server' }
  ];

  const descriptiveItems = [
    { 
      title: 'Initialize Workspace', 
      description: 'Run `npm init` or setup using a starter kit to get core layout folders ready.' 
    },
    { 
      title: 'Install Dependencies', 
      description: 'Run `npm i @unburn/ui lucide-react` to get packages.' 
    },
    { 
      title: 'Start Dev Server', 
      description: 'Launch environment with `npm run dev` to start hot-module reloading and previews.' 
    }
  ];

  const customItems = [
    {
      title: 'Choose Auth Strategy',
      description: 'Select authentication method that fits your app security model.',
      children: (
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          <Button size="sm" variant="filled">OAuth2 Login</Button>
          <Button size="sm" variant="outlined">Passwordless Magic Link</Button>
        </div>
      )
    },
    {
      title: 'Setup Database Hooks',
      description: 'Configure relational schema and triggers to store credentials.',
      children: (
        <div style={{ marginTop: '0.5rem', width: '100%', maxWidth: '500px' }}>
          <CodeBlock 
            language="sql" 
            code={`CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL
);`} 
          />
        </div>
      )
    }
  ];

  return (
    <>
      <ComponentHeader title="Steps" />

      <Showcase
        title="Preview"
        code={`import { Steps } from '@unburn/ui/Steps';

export default function Example() {
  const steps = [
    { title: 'Initialize Workspace' },
    { title: 'Install Dependencies' },
    { title: 'Start Dev Server' }
  ];

  return <Steps items={steps} />;
}`}
      >
        <div style={{ width: '100%', maxWidth: '500px' }}>
          <Steps items={basicItems} />
        </div>
      </Showcase>

      <div className="section-usage">
        <h3 className="section-subtitle">Usage</h3>
        <CodeBlock
          language="tsx"
          code={`import { Steps } from '@unburn/ui/Steps';

export default function Example() {
  return (
    <Steps
      items={[
        { title: 'Step One', description: 'Begin instructions here.' },
        { title: 'Step Two', description: 'Follow up details.' }
      ]}
    />
  );
}`}
        />
      </div>

      <div className="section-examples">
        <h3 className="section-subtitle">Examples</h3>

        <Showcase
          title="With Descriptions"
          description="Include secondary sub-labels to guide users through each step detail."
          code={`import { Steps } from '@unburn/ui/Steps';

export default function Example() {
  const steps = [
    { 
      title: 'Initialize Workspace', 
      description: 'Run \`npm init\` or setup using a starter kit to get core layout folders ready.' 
    },
    { 
      title: 'Install Dependencies', 
      description: 'Run \`npm i @unburn/ui lucide-react\` to get packages.' 
    },
    { 
      title: 'Start Dev Server', 
      description: 'Launch environment with \`npm run dev\` to start hot-module reloading and previews.' 
    }
  ];

  return <Steps items={steps} />;
}`}
        >
          <div style={{ width: '100%', maxWidth: '500px' }}>
            <Steps items={descriptiveItems} />
          </div>
        </Showcase>

        <Showcase
          title="With Custom Children"
          description="You can inject interactive react child nodes such as buttons or custom components inside a step."
          code={`import { Steps } from '@unburn/ui/Steps';
import { Button } from '@unburn/ui/Button';
import { CodeBlock } from '@unburn/ui/CodeBlock';

export default function Example() {
  const steps = [
    {
      title: 'Choose Auth Strategy',
      description: 'Select authentication method that fits your app security model.',
      children: (
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          <Button size="sm" variant="filled">OAuth2 Login</Button>
          <Button size="sm" variant="outlined">Passwordless Magic Link</Button>
        </div>
      )
    },
    {
      title: 'Setup Database Hooks',
      description: 'Configure relational schema and triggers to store credentials.',
      children: (
        <div style={{ marginTop: '0.5rem', width: '100%', maxWidth: '500px' }}>
          <CodeBlock 
            language="sql" 
            code={\`CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL
);\`} 
          />
        </div>
      )
    }
  ];

  return <Steps items={steps} />;
}`}
        >
          <div style={{ width: '100%', maxWidth: '500px' }}>
            <Steps items={customItems} />
          </div>
        </Showcase>
      </div>

      <Props
        props={[
          { name: 'items', type: 'StepItem[]', description: 'Array of step descriptor objects representing steps to render.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for individual sub-nodes (root, step, marker, connector, title, description).' },
          { name: 'styles', type: 'object', description: 'Custom inline styling properties for sub-nodes (root, step, marker, connector, title, description).' },
        ]}
      />

      <div style={{ marginTop: '3rem' }}>
        <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '1rem' }}>StepItem Structure</h4>
        <Props
          props={[
            { name: 'title', type: 'string', required: true, description: 'Main text heading of the step.' },
            { name: 'description', type: 'string', description: 'Helper descriptor label shown below heading.' },
            { name: 'children', type: 'ReactNode', description: 'Custom interactive React elements injected below description.' },
          ]}
        />
      </div>
    </>
  );
};
