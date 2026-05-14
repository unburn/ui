import React, { useState } from 'react';
import { CodeBlock } from '../ui/CodeBlock';

interface ShowcaseProps {
  title: string;
  code: string;
  children: React.ReactNode;
}

export const Showcase: React.FC<ShowcaseProps> = ({ title, code, children }) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="showcase-block">
      <div className="showcase-header">
        <span className="showcase-title">{title}</span>
        <div className="showcase-line"></div>
      </div>
      <div className="showcase-preview">
        <div className="showcase-content">
          {children}
        </div>

        <div className={`showcase-code-wrapper ${showCode ? 'open' : ''}`}>
          <CodeBlock
            code={code}
            language="tsx"
            variant="outlined"
            className="showcase-code-inner"
            style={{
              borderRadius: 0,
              border: "0px"
            }}
          />
        </div>

        <div className="showcase-code-footer">
          <button
            className={`view-code-btn ${showCode ? 'active' : ''}`}
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? 'HIDE CODE' : 'VIEW CODE'}
          </button>
        </div>
      </div>
    </div>
  );
};
