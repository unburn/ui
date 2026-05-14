import React from 'react';
import { Showcase } from '../components/layout/Showcase';
import { CodeBlock } from '../components/ui/CodeBlock';
import { ApiReference } from '../components/layout/ApiReference';
import { ComponentAnatomy } from '../components/layout/ComponentAnatomy';

export const CodeBlockPage: React.FC = () => {
  return (
    <>
      <h2 className="section-title">Code Block</h2>

      <Showcase
        title="01. VARIANTS"
        code={`import { CodeBlock } from '@unburn/ui';

export default function Example() {
  return (
    <CodeBlock 
      code="npm install @unburn/ui" 
      language="bash" 
      variant="filled" 
    />
  );
}`}
      >
        <CodeBlock
          code="npm install @unburn/ui"
          language="bash"
          variant="filled"
        />
      </Showcase>

      <Showcase
        title="02. OUTLINED VARIANT"
        code={`<CodeBlock 
  code="const greeting = 'Hello World';" 
  language="javascript" 
  variant="outlined" 
/>`}
      >
        <CodeBlock
          code="const greeting = 'Hello World';"
          language="javascript"
          variant="outlined"
        />
      </Showcase>

      <Showcase
        title="03. WITH TITLE"
        code={`<CodeBlock 
  title="App.tsx"
  code="export const App = () => <div>Hello</div>;" 
  language="tsx" 
/>`}
      >
        <CodeBlock
          title="App.tsx"
          code="export const App = () => <div>Hello</div>;"
          language="tsx"
        />
      </Showcase>

      <Showcase
        title="04. WITHOUT LINE NUMBERS"
        code={`<CodeBlock 
  code="npm install @unburn/ui" 
  language="bash" 
  showLineNumbers={false} 
/>`}
      >
        <CodeBlock
          code="npm install @unburn/ui"
          language="bash"
          showLineNumbers={false}
        />
      </Showcase>

      <Showcase 
        title="05. CUSTOM STYLING" 
        code={`<CodeBlock 
  code="// Custom header style" 
  styles={{ 
    header: { 
      background: 'var(--accent-color)', 
      borderColor: 'var(--accent-color)' 
    },
    title: { color: 'var(--accent-text)' },
    lang: { color: 'var(--accent-text)', opacity: 0.8 },
    copyButton: { 
      borderColor: 'rgba(255,255,255,0.2)', 
      color: 'var(--accent-text)' 
    }
  }}
  title="Custom Header"
/>`}
      >
        <CodeBlock 
          code="// Custom header style" 
          styles={{ 
            header: { 
              background: 'var(--accent-color)', 
              borderColor: 'var(--accent-color)' 
            },
            title: { color: 'var(--accent-text)' },
            lang: { color: 'var(--accent-text)', opacity: 0.8 },
            copyButton: { 
              borderColor: 'rgba(255,255,255,0.2)', 
              color: 'var(--accent-text)' 
            }
          }}
          title="Custom Header"
        />
      </Showcase>

      <ComponentAnatomy 
        parts={[
          { key: 'root', label: 'Main Container', description: 'The outer wrapper of the entire code block.' },
          { key: 'header', label: 'Header Bar', description: 'The top section containing titles and copy buttons.' },
          { key: 'title', label: 'Title Text', description: 'Optional filename or component name in the header.' },
          { key: 'lang', label: 'Language Badge', description: 'Text indicating the code language (e.g., TSX).' },
          { key: 'copyButton', label: 'Action Button', description: 'The button used to copy code to clipboard.' },
          { key: 'content', label: 'Code Area', description: 'The scrollable container holding the highlighted code.' },
        ]}
      >
        <CodeBlock 
          title="Component.tsx"
          code="const App = () => <div />;" 
          language="tsx" 
          style={{ width: '320px' }}
        />
      </ComponentAnatomy>

      <ApiReference 
        props={[
          { name: 'code', type: 'string', required: true, description: 'The code content to display.' },
          { name: 'language', type: 'string', defaultValue: "'tsx'", description: 'Programming language for syntax highlighting.' },
          { name: 'title', type: 'string', description: 'Optional title to display in the header.' },
          { name: 'variant', type: "'filled' | 'outlined'", defaultValue: "'filled'", description: 'Visual style variant of the block.' },
          { name: 'showLineNumbers', type: 'boolean', defaultValue: 'true', description: 'Toggle line numbers visibility.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for sub-elements (root, header, content, etc.).' },
          { name: 'styles', type: 'object', description: 'Custom inline styles for sub-elements.' },
          { name: 'className', type: 'string', description: 'Additional CSS class for the root element.' },
          { name: 'style', type: 'CSSProperties', description: 'Additional inline styles for the root element.' },
        ]}
      />
    </>
  );
};
