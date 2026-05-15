import React from 'react';
import { Textarea } from '../components/ui/Textarea';
import { Showcase } from '../components/layout/Showcase';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Props } from '../components/layout/Props';

export const TextareaPage: React.FC = () => {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Textarea</h2>
        <p className="section-description">
          An expandable text field for longer multi-line inputs, featuring custom resize controls and character tracking.
        </p>
      </div>

      <Showcase
        title="PREVIEW"
        code={`<Textarea label="Bio" placeholder="Write something about yourself..." showCount />`}
      >
        <div style={{ width: '100%', maxWidth: '500px' }}>
          <Textarea label="Bio" placeholder="Write something about yourself..." showCount />
        </div>
      </Showcase>

      <div className="section-usage">
        <h3 className="section-subtitle">Usage</h3>
        <CodeBlock
          language="tsx"
          code={`import { Textarea } from '@unburn/ui';

export default function Example() {
  return <Textarea label="Biography" placeholder="Tell your story..." />;
}`}
        />
      </div>

      <div className="section-examples">
        <h3 className="section-subtitle">Examples</h3>

        <Showcase
          title="VARIANTS"
          description="Available in filled, outlined, and duo variants."
          code={`<Textarea variant="filled" placeholder="Filled (Default)" />
<Textarea variant="outlined" placeholder="Outlined variant" />
<Textarea variant="duo" placeholder="Duo variant" />`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '500px' }}>
            <Textarea variant="filled" placeholder="Filled (Default)" />
            <Textarea variant="outlined" placeholder="Outlined variant" />
            <Textarea variant="duo" placeholder="Duo variant" />
          </div>
        </Showcase>

        <Showcase
          title="CHARACTER COUNT"
          description="Enable character tracking with optional maximum length enforcement."
          code={`<Textarea 
  label="Post Content" 
  showCount 
  maxLength={280} 
  placeholder="What's on your mind?" 
/>`}
        >
          <div style={{ width: '100%', maxWidth: '500px' }}>
            <Textarea 
              label="Post Content" 
              showCount 
              maxLength={280} 
              placeholder="What's on your mind?" 
            />
          </div>
        </Showcase>

        <Showcase
          title="STATES"
          description="Validation feedback and disabled states."
          code={`<Textarea error="Message is too short" placeholder="error state" />
<Textarea disabled placeholder="disabled state" />`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '500px' }}>
            <Textarea 
              label="Feedback" 
              placeholder="What can we improve?" 
              error="This field is required."
            />
            <Textarea 
              label="Locked" 
              disabled 
              placeholder="You cannot edit this."
            />
          </div>
        </Showcase>
      </div>

      <Props
        props={[
          { name: 'label', type: 'ReactNode', description: 'Label text displayed above the textarea.' },
          { name: 'description', type: 'ReactNode', description: 'Helper text displayed below the textarea.' },
          { name: 'error', type: 'string', description: 'Error message to display (swaps with description).' },
          { name: 'variant', type: "'filled' | 'outlined' | 'duo'", defaultValue: "'filled'", description: 'The visual style of the textarea.' },
          { name: 'fullWidth', type: 'boolean', defaultValue: 'false', description: 'Whether the textarea should take up the full width of its container.' },
          { name: 'showCount', type: 'boolean', defaultValue: 'false', description: 'Displays the character count at the bottom left.' },
          { name: 'focusHighlight', type: 'boolean', defaultValue: 'true', description: 'Whether to show the accent highlight when focused.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for sub-elements.' },
          { name: 'styles', type: 'object', description: 'Custom inline styles for sub-elements.' },
        ]}
      />
    </>
  );
};
