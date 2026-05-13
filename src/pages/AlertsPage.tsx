import React from 'react';
import { Alert } from '../components/ui/Alert';
import { Button } from '../components/ui/Button';
import { Showcase } from '../components/layout/Showcase';
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
    </>
  );
};
