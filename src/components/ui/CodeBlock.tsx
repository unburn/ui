"use client";

import React, { useState, useEffect } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';
import { cn } from '../../lib/utils';
import './CodeBlock.css';

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

export interface CodeBlockProps {
  code?: string;
  tabs?: Record<string, string>;
  defaultTab?: string;
  language?: string;
  classNames?: {
    root?: string;
    header?: string;
    content?: string;
    copyButton?: string;
    title?: string;
    lang?: string;
    tabs?: string;
    tab?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    header?: React.CSSProperties;
    content?: React.CSSProperties;
    copyButton?: React.CSSProperties;
    title?: React.CSSProperties;
    lang?: React.CSSProperties;
    tabs?: React.CSSProperties;
    tab?: React.CSSProperties;
  };
  showLineNumbers?: boolean;
  className?: string;
  style?: React.CSSProperties;
  variant?: 'filled' | 'outlined';
  title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code: singleCode,
  tabs,
  defaultTab,
  language = 'tsx',
  showLineNumbers = true,
  className,
  style,
  classNames,
  styles,
  variant = 'filled',
  title
}) => {
  const [mounted, setMounted] = useState(false);
  const [Highlighter, setHighlighter] = useState<any>(null);
  const [activeTab, setActiveTab] = useState(
    defaultTab && tabs?.[defaultTab] 
      ? defaultTab 
      : (tabs ? Object.keys(tabs)[0] : null)
  );
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Dynamically import to ensure no SSR issues with Prism/document
    import('react-syntax-highlighter').then((mod) => {
      setHighlighter(() => mod.Prism);
    });
  }, []);

  const displayCode = (tabs && activeTab ? tabs[activeTab] : (singleCode || ''))
    .replace(/\\n/g, '\n');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(displayCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLanguage = () => {
    if (!tabs || !activeTab) return language;
    const tabLower = activeTab.toLowerCase();
    if (tabLower.includes('typescript') || tabLower === 'ts') return 'tsx';
    if (tabLower.includes('javascript') || tabLower === 'js') return 'javascript';
    if (tabLower === 'bash' || tabLower === 'sh' || ['pnpm', 'npm', 'yarn', 'bun'].includes(tabLower)) return 'bash';
    return language;
  };

  return (
    <div 
      className={cn(
        "unburn-code-block",
        `unburn-code-block-${variant}`,
        tabs && "has-tabs",
        className,
        classNames?.root
      )}
      style={{ ...style, ...styles?.root }}
    >
      <div 
        className={cn("unburn-code-header", classNames?.header)}
        style={styles?.header}
      >
        <div className="unburn-code-info">
          {tabs ? (
            <div className="unburn-code-tabs-container">
              <div className="unburn-code-terminal-icon">
                <Terminal size={14} />
              </div>
              <div className={cn("unburn-code-tabs", classNames?.tabs)} style={styles?.tabs}>
                {Object.keys(tabs).map((tab) => (
                  <button
                    key={tab}
                    className={cn(
                      "unburn-code-tab", 
                      activeTab === tab && "active",
                      classNames?.tab
                    )}
                    onClick={() => setActiveTab(tab)}
                    style={styles?.tab}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {title && (
                <span 
                  className={cn("unburn-code-title", classNames?.title)}
                  style={styles?.title}
                >
                  {title}
                </span>
              )}
              <span 
                className={cn("unburn-code-lang", classNames?.lang)}
                style={styles?.lang}
              >
                {language}
              </span>
            </>
          )}
        </div>
        <button 
          className={cn("unburn-code-copy-btn", classNames?.copyButton)}
          onClick={handleCopy}
          title="Copy Code"
          style={styles?.copyButton}
        >
          {copied ? <Check size={14} className="text-green" /> : <Copy size={14} />}
          <span>{copied ? 'COPIED' : 'COPY'}</span>
        </button>
      </div>
      <div 
        className={cn("unburn-code-content", classNames?.content)}
        style={styles?.content}
      >
        {!mounted || !Highlighter ? (
          <pre className="unburn-code-ssr-fallback">
            <code>{displayCode}</code>
          </pre>
        ) : (
          <Highlighter
            language={getLanguage()}
            style={unburnTheme}
            showLineNumbers={!tabs && showLineNumbers}
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
              padding: tabs ? '1.5rem 1.25rem' : '1.25rem',
              backgroundColor: 'transparent',
              fontSize: '0.875rem',
              lineHeight: '1.6',
              border: 'none',
              borderRadius: 0
            }}
          >
            {displayCode}
          </Highlighter>
        )}
      </div>
    </div>
  );
};
