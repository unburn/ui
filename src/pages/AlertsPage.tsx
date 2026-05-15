import React from 'react';
import { Alert } from '../components/ui/Alert';
import { Button } from '../components/ui/Button';
import { Showcase } from '../components/layout/Showcase';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Props } from '../components/layout/Props';
import { CheckCircle2, Info } from 'lucide-react';

export const AlertsPage: React.FC = () => {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Alerts</h2>
        <p className="section-description">
          Provide contextual feedback messages for typical user actions with various severity levels and styles.
        </p>
      </div>

      <Showcase
        title="PREVIEW"
        code={`<Alert 
  status="info" 
  title="Update Available" 
  description="A new version of the library is now available." 
  icon={<Info size={16} />}
/>`}
      >
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <Alert
            status="info"
            title="Update Available"
            icon={<Info size={16} />}
            description="A new version of the library is now available. Please update to get the latest features."
          />
        </div>
      </Showcase>

      <div className="section-usage">
        <h3 className="section-subtitle">Usage</h3>
        <CodeBlock
          language="tsx"
          code={`import { Alert } from '@unburn/ui';
import { CheckCircle2 } from 'lucide-react';

export default function Example() {
  return (
    <Alert 
      status="success" 
      title="Success" 
      description="Your changes have been saved." 
      icon={<CheckCircle2 size={16} />}
    />
  );
}`}
        />
      </div>

      <div className="section-examples">
        <h3 className="section-subtitle">Examples</h3>

        <Showcase
          title="STATUS"
          description="Alerts come in four standard semantic statuses plus a default state."
          code={`<Alert status="success" title="Success" ... />
<Alert status="info" title="Info" ... />
<Alert status="warning" title="Warning" ... />
<Alert status="error" title="Error" ... />`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '600px' }}>
            <Alert status="success" icon={<CheckCircle2 size={16} />} title="Payment Successful" description="Your transaction has been processed." />
            <Alert status="info" icon={<Info size={16} />} title="System Info" description="The server is undergoing maintenance." />
            <Alert status="warning" icon={<Info size={16} />} title="Weak Password" description="Consider using a stronger password." />
            <Alert status="error" icon={<Info size={16} />} title="Upload Failed" description="Could not connect to the server." />
          </div>
        </Showcase>

        <Showcase
          title="VARIANTS"
          description="Choose between outlined (default) and duo variants."
          code={`<Alert variant="outlined" title="Outlined" ... />
<Alert variant="duo" title="Duo" ... />`}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '600px' }}>
            <Alert variant="outlined" status="info" icon={<Info size={16} />} title="Outlined Variant" description="The default clean look." />
            <Alert variant="duo" status="info" icon={<Info size={16} />} title="Duo Variant" description="A softer, tinted background look." />
          </div>
        </Showcase>

        <Showcase
          title="WITH ACTIONS"
          description="Add interactive elements like buttons to your alerts."
          code={`<Alert 
  status="info" 
  title="Action Required" 
  actions={<Button size="sm">Update Now</Button>} 
/>`}
        >
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <Alert
              status="info"
              icon={<Info size={16} />}
              title="New feature available"
              description="We've added dark mode support. Check it out now."
              actions={
                <>
                  <Button variant="outlined" size='sm' color='blue'>CHECK OUT</Button>
                  <Button variant="outlined" color="red" size='sm'>CANCEL</Button>
                </>
              }
            />
          </div>
        </Showcase>
      </div>

      <Props
        props={[
          { name: 'title', type: 'string', required: true, description: 'The main title text of the alert.' },
          { name: 'status', type: "'success' | 'info' | 'warning' | 'error' | 'default'", defaultValue: "'default'", description: 'The status/severity of the alert.' },
          { name: 'variant', type: "'outlined' | 'duo'", defaultValue: "'outlined'", description: 'The visual style variant.' },
          { name: 'description', type: 'ReactNode', description: 'Additional context or message text.' },
          { name: 'icon', type: 'ReactNode', description: 'Optional icon to display.' },
          { name: 'actions', type: 'ReactNode', description: 'Optional action buttons or elements.' },
          { name: 'color', type: 'string', description: 'Custom accent color for the alert.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for sub-elements (root, icon, title, description, actions).' },
          { name: 'styles', type: 'object', description: 'Custom inline styles for sub-elements.' },
        ]}
      />
    </>
  );
};
