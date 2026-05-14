import React from 'react';
import { Alert } from '../components/ui/Alert';
import { Button } from '../components/ui/Button';
import { Showcase } from '../components/layout/Showcase';
import { ApiReference } from '../components/layout/ApiReference';
import { ComponentAnatomy } from '../components/layout/ComponentAnatomy';
import { CheckCircle2, Info } from 'lucide-react';

export const AlertsPage: React.FC = () => {
  return (
    <>
      <h2 className="section-title">Alert</h2>

      <Showcase
        title="01. ALERT"
        code={`import { Alert } from '@unburn/ui';
import { CheckCircle2, Info } from 'lucide-react';

export default function Example() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '500px' }}>
      <Alert 
        status="success" 
        icon={<CheckCircle2 size={16} />} 
        title="Payment successful" 
        description="Your payment of $29.99 has been processed. A receipt has been sent to your email address." 
      />
      <Alert 
        status="info" 
        icon={<Info size={16} />} 
        title="New feature available" 
        description="We've added dark mode support. You can enable it in your account settings." 
      />
    </div>
  );
}`}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '500px' }}>
          <Alert
            status="success"
            icon={<CheckCircle2 size={16} />}
            title="Payment successful"
            description="Your payment of $29.99 has been processed. A receipt has been sent to your email address."
          />
          <Alert
            status="info"
            icon={<Info size={16} />}
            title="New feature available"
            description="We've added dark mode support. You can enable it in your account settings."
          />
        </div>
      </Showcase>

      <Showcase
        title="02. ALERT ACTION"
        code={`import { Alert, Button } from '@unburn/ui';
import { Info } from 'lucide-react';

export default function Example() {
  return (
    <Alert 
      status="default" 
      icon={<Info size={16} />} 
      title="New feature available" 
      description="We've added dark mode support. You can enable it in your account settings." 
      actions={
        <>
          <Button color="white" variant="outlined" size='sm'>CHECK OUT</Button>
          <Button color="red" variant="outlined" size='sm'>CANCEL</Button>
        </>
      }
    />
  );
}`}
      >
        <div style={{ width: '100%', maxWidth: '500px' }}>
          <Alert
            status="default"
            icon={<Info size={16} />}
            title="New feature available"
            description="We've added dark mode support. You can enable it in your account settings."
            actions={
              <>
                <Button color="white" variant="outlined" size='sm'>CHECK OUT</Button>
                <Button color="red" variant="outlined" size='sm'>CANCEL</Button>
              </>
            }
          />
        </div>
      </Showcase>

      <Showcase
        title="03. ALERT DUO COLOR"
        code={`import { Alert, Button } from '@unburn/ui';
import { Info } from 'lucide-react';

export default function Example() {
  return (
    <Alert 
      status="info" 
      variant="duo"
      icon={<Info size={16} />} 
      title="New feature available" 
      description="We've added dark mode support. You can enable it in your account settings." 
      actions={<Button color="blue" variant="outlined" size='sm'>CHECK OUT</Button>}
    />
  );
}`}
      >
        <div style={{ width: '100%', maxWidth: '500px' }}>
          <Alert
            status="info"
            variant="duo"
            icon={<Info size={16} />}
            title="New feature available"
            description="We've added dark mode support. You can enable it in your account settings."
            actions={
              <Button color="blue" variant="outlined" size='sm'>CHECK OUT</Button>
            }
          />
        </div>
      </Showcase>

      <ComponentAnatomy 
        parts={[
          { key: 'root', label: 'Main Container', description: 'The outer wrapper of the alert.' },
          { key: 'icon', label: 'Icon Wrapper', description: 'The container holding the status icon.' },
          { key: 'title', label: 'Title text', description: 'The bold heading of the alert.' },
          { key: 'description', label: 'Message Body', description: 'The descriptive text below the title.' },
          { key: 'actions', label: 'Action Container', description: 'The bottom area for buttons and interactions.' },
        ]}
      >
        <Alert 
          status="info"
          icon={<Info size={16} />}
          title="Software Update"
          description="A new version is available for download."
          actions={<Button size="sm" variant="outlined" color="blue">Update Now</Button>}
          style={{ width: '320px' }}
        />
      </ComponentAnatomy>

      <ApiReference 
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
