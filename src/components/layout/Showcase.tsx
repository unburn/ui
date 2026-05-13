import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Copy, Check } from 'lucide-react';

const unburnTheme: { [key: string]: React.CSSProperties } = {
  'code[class*="language-"]': { color: 'var(--text-main)', background: 'none', fontFamily: 'var(--font-mono)' },
  'pre[class*="language-"]': { color: 'var(--text-main)', background: 'none', fontFamily: 'var(--font-mono)' },
  'comment': { color: 'var(--text-muted)' },
  'prolog': { color: 'var(--text-muted)' },
  'doctype': { color: 'var(--text-muted)' },
  'cdata': { color: 'var(--text-muted)' },
  'punctuation': { color: 'var(--text-main)', opacity: 0.7 },
  'namespace': { opacity: 0.7 },
  'property': { color: 'var(--accent-color)' },
  'tag': { color: 'var(--accent-color)' },
  'boolean': { color: 'var(--accent-color)' },
  'number': { color: 'var(--accent-color)' },
  'constant': { color: 'var(--accent-color)' },
  'symbol': { color: 'var(--accent-color)' },
  'deleted': { color: 'var(--color-red)' },
  'selector': { color: 'var(--color-green)' },
  'attr-name': { color: 'var(--accent-color)' },
  'string': { color: 'var(--color-green)' },
  'char': { color: 'var(--color-green)' },
  'builtin': { color: 'var(--color-green)' },
  'inserted': { color: 'var(--color-green)' },
  'operator': { color: 'var(--text-main)' },
  'entity': { color: 'var(--text-main)', cursor: 'help' },
  'url': { color: 'var(--text-main)' },
  'variable': { color: 'var(--text-main)' },
  'atrule': { color: 'var(--accent-color)' },
  'attr-value': { color: 'var(--color-green)' },
  'function': { color: 'var(--color-blue)' },
  'keyword': { color: 'var(--accent-color)' },
  'regex': { color: 'var(--color-orange)' },
  'important': { fontWeight: 'bold' },
  'bold': { fontWeight: 'bold' },
  'italic': { fontStyle: 'italic' },
};

interface ShowcaseProps {
  title: string;
  code: string;
  children: React.ReactNode;
}

export const Showcase: React.FC<ShowcaseProps> = ({ title, code, children }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <div className="showcase-code-view" style={{ position: 'relative' }}>
            <button 
              className="copy-code-btn"
              onClick={handleCopy}
              title="Copy Code"
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'var(--bg-main)',
                border: '1px solid var(--border-color)',
                color: 'var(--text-muted)',
                padding: '6px 10px',
                cursor: 'pointer',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                borderRadius: 'var(--radius)',
                transition: 'all 0.2s ease'
              }}
            >
              {copied ? <Check size={14} style={{ color: 'var(--color-green)' }} /> : <Copy size={14} />}
              {copied ? 'COPIED' : 'COPY'}
            </button>
            <div style={{ overflowX: 'auto', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'stretch', minWidth: 'min-content' }}>
                <SyntaxHighlighter
                  language="tsx"
                  style={unburnTheme} 
                  showLineNumbers={true}
                  lineNumberStyle={{ 
                    minWidth: '2.5rem', 
                    paddingRight: '1rem', 
                    color: 'var(--text-muted)', 
                    textAlign: 'right',
                    opacity: 0.5,
                    borderRight: '1px solid var(--border-color)',
                    marginRight: '1rem',
                    userSelect: 'none'
                  }}
                  customStyle={{
                    margin: 0,
                    padding: '1.5rem 0',
                    backgroundColor: 'transparent',
                    fontSize: '0.875rem',
                    lineHeight: '1.6',
                    flex: 1
                  }}
                >
                  {code}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
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
