import React from 'react';
import './ApiReference.css';

interface PropDefinition {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
  required?: boolean;
}

interface ApiReferenceProps {
  props: PropDefinition[];
}

export const ApiReference: React.FC<ApiReferenceProps> = ({ props }) => {
  return (
    <div className="api-reference">
      <h3 className="api-reference-title">API Reference</h3>
      <div className="api-table-wrapper">
        <table className="api-table">
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
                <td className="prop-name">
                  {prop.name}
                  {prop.required && <span className="prop-required">*</span>}
                </td>
                <td className="prop-type">{prop.type}</td>
                <td className="prop-default">{prop.defaultValue || '-'}</td>
                <td className="prop-description">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
