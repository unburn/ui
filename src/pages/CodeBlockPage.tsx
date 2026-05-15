import React from 'react';
import { Showcase } from '../components/layout/Showcase';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Props } from '../components/layout/Props';

export const CodeBlockPage: React.FC = () => {
  const code = `import React from 'react';

const HelloWorld = () => {
  return <h1>Hello, Unburn UI!</h1>;
};

export default HelloWorld;`;

  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Code Block</h2>
        <p className="section-description">
          A syntax-highlighting component with support for multiple languages, interactive tabs for package managers, and a premium glassmorphic feel.
        </p>
      </div>

      <Showcase
        title="PREVIEW"
        code={`<CodeBlock 
  code="${code.replace(/\n/g, '\\n')}" 
  language="tsx" 
  title="App.tsx"
/>`}
      >
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <CodeBlock
            code={code}
            language="tsx"
            title="App.tsx"
          />
        </div>
      </Showcase>

      <div className="section-usage">
        <h3 className="section-subtitle">Usage</h3>
        <CodeBlock
          language="tsx"
          code={`import { CodeBlock } from '@unburn/ui';

export default function Example() {
  return (
    <CodeBlock 
      code="const x = 10;" 
      language="javascript" 
    />
  );
}`}
        />
      </div>

      <div className="section-examples">
        <h3 className="section-subtitle">Examples</h3>

        <Showcase
          title="VARIANTS"
          description="CodeBlock supports filled (default) and outlined styles."
          code={`<CodeBlock variant="filled" ... />
<CodeBlock variant="outlined" ... />`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '600px' }}>
            <CodeBlock
              code="npm install @unburn/ui"
              language="bash"
              variant="filled"
              title="Filled (Default)"
            />
            <CodeBlock
              code="npm install @unburn/ui"
              language="bash"
              variant="outlined"
              title="Outlined Variant"
            />
          </div>
        </Showcase>

        <Showcase
          title="TABS (PACKAGE MANAGERS)"
          description="Use the tabs prop to provide multiple snippets (e.g., for different package managers)."
          code={`<CodeBlock 
  tabs={{
    npm: 'npm install @unburn/ui',
    pnpm: 'pnpm add @unburn/ui',
    yarn: 'yarn add @unburn/ui',
    bun: 'bun add @unburn/ui'
  }} 
/>`}
        >
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <CodeBlock
              tabs={{
                npm: 'npm install @unburn/ui',
                pnpm: 'pnpm add @unburn/ui',
                yarn: 'yarn add @unburn/ui',
                bun: 'bun add @unburn/ui'
              }}
              defaultTab="pnpm"
            />
          </div>
        </Showcase>

        <Showcase
          title="TITLE & NO LINE NUMBERS"
          description="Display a file name and toggle line numbers."
          code={`<CodeBlock title="utils.ts" showLineNumbers={false} ... />`}
        >
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <CodeBlock
              code={`export const add = (a: number, b: number) => a + b;`}
              title="utils.ts"
              showLineNumbers={false}
            />
          </div>
        </Showcase>
      </div>

      <Props
        props={[
          { name: 'code', type: 'string', description: 'The source code string to display.' },
          { name: 'tabs', type: 'Record<string, string>', description: 'Mapping of labels to code snippets for tabbed display.' },
          { name: 'defaultTab', type: 'string', description: 'The key of the tab to be active by default.' },
          { name: 'language', type: 'string', defaultValue: "'tsx'", description: 'Programming language for syntax highlighting.' },
          { name: 'title', type: 'string', description: 'Optional filename or title to display in the header.' },
          { name: 'variant', type: "'filled' | 'outlined'", defaultValue: "'filled'", description: 'The visual style variant.' },
          { name: 'showLineNumbers', type: 'boolean', defaultValue: 'true', description: 'Whether to display line numbers.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for sub-elements.' },
          { name: 'styles', type: 'object', description: 'Custom inline styles for sub-elements.' },
        ]}
      />
    </>
  );
};
