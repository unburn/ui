import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
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
  code: string;
  language?: string;
  classNames?: {
    root?: string;
    header?: string;
    content?: string;
    copyButton?: string;
    title?: string;
    lang?: string;
  };
  styles?: {
    root?: React.CSSProperties;
    header?: React.CSSProperties;
    content?: React.CSSProperties;
    copyButton?: React.CSSProperties;
    title?: React.CSSProperties;
    lang?: React.CSSProperties;
  };
  showLineNumbers?: boolean;
  className?: string;
  style?: React.CSSProperties;
  variant?: 'filled' | 'outlined';
  title?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'tsx',
  showLineNumbers = true,
  className,
  style,
  classNames,
  styles,
  variant = 'filled',
  title
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className={cn(
        "unburn-code-block",
        `unburn-code-block-${variant}`,
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
        <SyntaxHighlighter
          language={language}
          style={unburnTheme}
          showLineNumbers={showLineNumbers}
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
            padding: '1.25rem',
            backgroundColor: 'transparent',
            fontSize: '0.875rem',
            lineHeight: '1.6',
            border: 'none',
            borderRadius: 0
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
