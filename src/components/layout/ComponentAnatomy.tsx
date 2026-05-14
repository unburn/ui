import React from 'react';
import './ComponentAnatomy.css';

interface AnatomyPart {
  key: string;
  label: string;
  description: string;
}

interface ComponentAnatomyProps {
  children: React.ReactNode;
  parts: AnatomyPart[];
}

export const ComponentAnatomy: React.FC<ComponentAnatomyProps> = ({ children, parts }) => {
  return (
    <div className="component-anatomy">
      <h3 className="api-reference-title">Component Anatomy</h3>
      <div className="anatomy-container">
        <div className="anatomy-preview">
          <div className="anatomy-preview-inner">
            {children}
          </div>
        </div>
        <div className="anatomy-labels">
          {parts.map((part) => (
            <div key={part.key} className="anatomy-label-item">
              <div className="anatomy-label-header">
                <span className="anatomy-key-tag">{part.key}</span>
                <span className="anatomy-label-text">{part.label}</span>
              </div>
              <p className="anatomy-label-desc">{part.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
