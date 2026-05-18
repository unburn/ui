import React from 'react';
import './Props.css';

interface PropDefinition {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  props: PropDefinition[];
}

export const Props: React.FC<PropsTableProps> = ({ props }) => {
  return (
    <div className="props-section">
      <h3 className="props-title">Props</h3>
      
      <div className="props-table-wrapper">
        <table className="props-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop) => (
              <tr key={prop.name}>
                <td>
                  <div className="prop-name">
                    {prop.name}
                    {prop.required && <span className="prop-required">*</span>}
                  </div>
                </td>
                <td className="prop-type"><code>{prop.type}</code></td>
                <td className="prop-default">{prop.defaultValue ? <code>{prop.defaultValue}</code> : '-'}</td>
                <td className="prop-description">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="props-mobile-list">
        {props.map((prop) => (
          <div className="prop-card" key={prop.name}>
            <div className="prop-card-header">
              <span className="prop-name">
                {prop.name}
                {prop.required && <span className="prop-required">*</span>}
              </span>
              <span className="prop-default-badge">
                {prop.defaultValue ? `Default: ${prop.defaultValue}` : 'No default'}
              </span>
            </div>
            <div className="prop-card-body">
              <div className="prop-type-row">
                <span className="label">Type:</span>
                <code className="prop-type">{prop.type}</code>
              </div>
              <p className="prop-description">{prop.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
