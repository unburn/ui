import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';
import { DocsSidebar } from './DocsSidebar';
import { OnThisPage } from './OnThisPage';
import { Input } from '../../../package/components/Input/Input';
import { Button } from '../../../package/components/Button/Button';
import componentsMeta from '../../data/components.json';
import './DocsLayout.css';

const frameworks = [
  { id: 'nextjs', name: 'Next.js' },
  { id: 'vite', name: 'Vite' },
  { id: 'remix', name: 'Remix' },
  { id: 'astro', name: 'Astro' },
  { id: 'gatsby', name: 'Gatsby' },
  { id: 'manual', name: 'Manual' },
];

export const DocsLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.toLowerCase().replace(/\/$/, '');

  const sortedComponents = [...componentsMeta].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const docsRoutes = [
    { path: '/docs/quick-start', name: 'Quick Start' },
    ...frameworks.map(fw => ({
      path: `/docs/quick-start/${fw.id}`,
      name: `Quick Start - ${fw.name}`
    })),
    { path: '/docs/components', name: 'Components Overview' },
    ...sortedComponents.map(c => ({
      path: c.path.replace(/^\/components/, '/docs/components'),
      name: c.name
    }))
  ];

  const currentIndex = docsRoutes.findIndex(r => r.path === currentPath);
  const prevRoute = currentIndex > 0 ? docsRoutes[currentIndex - 1] : null;
  const nextRoute = currentIndex !== -1 && currentIndex < docsRoutes.length - 1 ? docsRoutes[currentIndex + 1] : null;

  return (
    <div className="docs-layout-wrapper">
      <div className="docs-layout-container">
        <DocsSidebar />
        
        <div className="docs-content-area">
          {currentIndex !== -1 && (
            <div 
              className="docs-global-nav-bar" 
              style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: '2.5rem', 
                borderBottom: '1px solid var(--border-color)', 
                paddingBottom: '1.25rem', 
                gap: '1.5rem' 
              }}
            >
              <div 
                onClick={() => window.dispatchEvent(new CustomEvent('open-docs-search'))}
                style={{ width: '220px', cursor: 'pointer' }}
              >
                <Input
                  readOnly
                  variant="outlined"
                  size="sm"
                  leftIcon={<Search size={14} />}
                  kbd="⌘K"
                  placeholder="Search..."
                  style={{ cursor: 'pointer' }}
                  fullWidth
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <Button
                  variant="duo"
                  size="sm"
                  icon={<ArrowLeft size={14} />}
                  iconPosition="left"
                  disabled={!prevRoute}
                  onClick={() => prevRoute && navigate(prevRoute.path)}
                >
                  Previous
                </Button>
                <Button
                  variant="duo"
                  size="sm"
                  icon={<ArrowRight size={14} />}
                  iconPosition="right"
                  disabled={!nextRoute}
                  onClick={() => nextRoute && navigate(nextRoute.path)}
                >
                  Next
                </Button>
              </div>
            </div>
          )}

          <Outlet />
        </div>

        <OnThisPage />
      </div>
    </div>
  );
};
