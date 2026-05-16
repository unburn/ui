import React from 'react';
import { Dropzone } from '../components/ui/Dropzone';
import { Showcase } from '../components/layout/Showcase';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Props } from '../components/layout/Props';
import { Image, FileText, Lock } from 'lucide-react';

export const DropzonePage: React.FC = () => {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">Dropzone</h2>
        <p className="section-description">
          A premium drag-and-drop file uploader with glassmorphism effects and real-time file list management.
        </p>
      </div>

      <Showcase
        title="PREVIEW"
        code={`<Dropzone 
  label="Upload Documents" 
  description="Drag and drop your files here or click to browse" 
  multiple 
  accept=".pdf,.docx,.txt"
/>`}
      >
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <Dropzone 
            label="Upload Documents" 
            description="Drag and drop your files here or click to browse" 
            multiple 
            accept=".pdf,.docx,.txt"
          />
        </div>
      </Showcase>

      <div className="section-usage">
        <h3 className="section-subtitle">Usage</h3>
        <CodeBlock
          language="tsx"
          code={`import { Dropzone } from '@unburn/ui';

export default function Example() {
  const handleFiles = (files: File[]) => {
    console.log('Received files:', files);
  };

  return (
    <Dropzone 
      onFilesDrop={handleFiles}
      multiple
      accept=".jpg,.png,.webp"
    />
  );
}`}
        />
      </div>

      <div className="section-examples">
        <h3 className="section-subtitle">Examples</h3>

        <Showcase
          title="CUSTOM ICONS"
          description="You can provide custom icons to match the type of files you expect."
          code={`<Dropzone 
  icon={<Image size={24} />} 
  label="Upload Photos" 
  description="Up to 10MB per file" 
  accept=".jpg,.png,.webp"
/>`}
        >
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <Dropzone 
              icon={<Image size={24} />} 
              label="Upload Photos" 
              description="Up to 10MB per file" 
              accept=".jpg,.png,.webp"
            />
          </div>
        </Showcase>

        <Showcase
          title="SINGLE FILE"
          description="Limit the uploader to a single file at a time."
          code={`<Dropzone 
  icon={<FileText size={24} />} 
  label="Upload Contract" 
  description="Only PDF files are accepted" 
  multiple={false}
  accept=".pdf"
/>`}
        >
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <Dropzone 
              icon={<FileText size={24} />} 
              label="Upload Contract" 
              description="Only PDF files are accepted" 
              multiple={false}
              accept=".pdf"
            />
          </div>
        </Showcase>

        <Showcase
          title="DISABLED STATE"
          description="Prevent file uploads when the component is in a locked or loading state."
          code={`<Dropzone 
  icon={<Lock size={24} />} 
  label="Uploader Locked" 
  description="You do not have permission to upload files" 
  disabled 
/>`}
        >
          <div style={{ width: '100%', maxWidth: '600px' }}>
            <Dropzone 
              icon={<Lock size={24} />} 
              label="Uploader Locked" 
              description="You do not have permission to upload files" 
              disabled 
            />
          </div>
        </Showcase>
      </div>

      <Props 
        props={[
          { name: 'onFilesDrop', type: '(files: File[]) => void', description: 'Callback function triggered when files are dropped or selected.' },
          { name: 'accept', type: 'string', description: 'Accepted file types (e.g. "image/*", ".pdf").' },
          { name: 'multiple', type: 'boolean', defaultValue: 'false', description: 'Whether multiple files can be selected.' },
          { name: 'maxSize', type: 'number', description: 'Maximum file size in bytes.' },
          { name: 'label', type: 'string', defaultValue: '"Drop files here"', description: 'The main heading text.' },
          { name: 'description', type: 'string', defaultValue: '"Drag and drop or click to upload"', description: 'The sub-text below the label.' },
          { name: 'icon', type: 'ReactNode', description: 'Optional custom icon component.' },
          { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Whether the uploader is interactive.' },
          { name: 'classNames', type: 'object', description: 'Custom CSS classes for sub-elements (root, content, icon, label, description).' },
          { name: 'styles', type: 'object', description: 'Custom inline styles for sub-elements.' },
        ]}
      />
    </>
  );
};
