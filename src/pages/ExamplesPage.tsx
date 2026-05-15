import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, LogIn, Layout } from 'lucide-react';
import { Button } from '../components/ui/Button';

const examples = [
  {
    title: 'System Dashboard',
    description: 'A comprehensive overview of system metrics, project settings, and recent activity using the unified sizing system.',
    to: '/examples/dashboard',
    icon: <LayoutDashboard size={40} strokeWidth={1} />,
    status: 'Ready'
  },
  {
    title: 'Authentication',
    description: 'Clean, minimalist login and registration forms featuring precise input alignment and premium button states.',
    to: '/examples/auth',
    icon: <LogIn size={40} strokeWidth={1} />,
    status: 'Ready'
  },
  {
    title: 'SaaS Landing Page',
    description: 'A high-conversion landing page layout showcasing typography, hero sections, and feature grids.',
    to: '#',
    icon: <Layout size={40} strokeWidth={1} />,
    status: 'Coming Soon'
  }
];

export const ExamplesPage: React.FC = () => {
  return (
    <div className="examples-page">
      <header style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 100, marginBottom: '1rem' }}>
          Real-world <span style={{ color: 'var(--accent-color)' }}>Examples</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', maxWidth: '600px', lineHeight: '1.6' }}>
          Explore how @unburn/ui components come together to create cohesive, professional, and high-performance user interfaces.
        </p>
      </header>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '2rem'
      }}>
        {examples.map((example, i) => (
          <div key={i} className="component-catalog-card" style={{ opacity: example.status === 'Ready' ? 1 : 0.6 }}>
            <div className="catalog-preview-area" style={{ height: '200px' }}>
              <div style={{ color: 'var(--accent-color)' }}>{example.icon}</div>
              {example.status !== 'Ready' && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  padding: '0.25rem 0.75rem',
                  background: 'var(--bg-main)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '20px',
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-mono)',
                  textTransform: 'uppercase'
                }}>
                  {example.status}
                </div>
              )}
            </div>
            <div className="catalog-info-area">
              <h3 className="catalog-title" style={{ fontSize: '1.25rem' }}>{example.title}</h3>
              <p className="catalog-desc" style={{ marginBottom: '1.5rem' }}>{example.description}</p>

              {example.status === 'Ready' ? (
                <NavLink to={example.to}>
                  <Button>
                    View Example
                  </Button>
                </NavLink>
              ) : (
                <Button disabled>
                  Under Construction
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
