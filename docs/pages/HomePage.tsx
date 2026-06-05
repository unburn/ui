import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, GitBranch } from 'lucide-react';
import { Button } from '../../package/components/Button/Button';
import './HomePage.css';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [version, setVersion] = useState('v1.4.0');
  const [gridSize, setGridSize] = useState(() => {
    if (typeof window === 'undefined') return { cols: 20, rows: 15 };
    const cols = Math.ceil(window.innerWidth / 60);
    const rows = Math.ceil(window.innerHeight / 60);
    return { cols, rows };
  });
  const [rippleSource, setRippleSource] = useState<{ row: number; col: number; id: number } | null>(null);

  useEffect(() => {
    fetch('https://registry.npmjs.org/@unburn/ui/latest')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.version) {
          setVersion(`v${data.version}`);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch package version:', err);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const cols = Math.ceil(window.innerWidth / 60);
      const rows = Math.ceil(window.innerHeight / 60);
      setGridSize({ cols, rows });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let nextTimer: number | undefined;

    const triggerRandomRipple = () => {
      const randomCol = Math.floor(Math.random() * gridSize.cols);
      const randomRow = Math.floor(Math.random() * gridSize.rows);
      setRippleSource({ row: randomRow, col: randomCol, id: Date.now() });

      const nextDelay = 3000 + Math.random() * 3000;
      nextTimer = setTimeout(triggerRandomRipple, nextDelay);
    };

    const startTimer = setTimeout(() => {
      triggerRandomRipple();
    }, 500);

    return () => {
      clearTimeout(startTimer);
      if (nextTimer) clearTimeout(nextTimer);
    };
  }, [gridSize.cols, gridSize.rows]);

  const renderCells = () => {
    const cells = [];
    for (let r = 0; r < gridSize.rows; r++) {
      for (let c = 0; c < gridSize.cols; c++) {
        const index = r * gridSize.cols + c;
        let animationDelay = '0s';
        let isRippling = false;

        if (rippleSource) {
          const dist = Math.sqrt(Math.pow(c - rippleSource.col, 2) + Math.pow(r - rippleSource.row, 2));
          animationDelay = `${dist * 0.05}s`;
          isRippling = true;
        }

        cells.push(
          <div
            key={`${index}-${rippleSource?.id || 'none'}`}
            className={`grid-cell ${isRippling ? 'ripple' : ''}`}
            style={{ animationDelay }}
          />
        );
      }
    }
    return cells;
  };

  return (
    <div className="home-page">
      <div className="home-grid-background">
        {renderCells()}
      </div>
      
      <section className="hero-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', margin: '0 auto', maxWidth: '800px' }}>
        <div className="hero-badge" style={{ margin: '0 auto 2rem auto' }}>
          <span>{version} Release</span>
        </div>

        <h1 className="hero-title" style={{ fontSize: 'clamp(1.95rem, 7.5vw, 4rem)', lineHeight: '1.2', margin: '0 auto 1.5rem auto' }}>
          Minimalist UI<br className="hero-br" /><span className="hero-accent">Crafted with Precision.</span>
        </h1>

        <p className="hero-subtitle" style={{ margin: '0 auto 2.5rem auto', maxWidth: '540px' }}>
          A clean, modern React component library built with vanilla CSS. Get beautiful, highly-customizable components that look great out of the box.
        </p>

        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <Button
            variant="filled"
            size="lg"
            icon={<ArrowRight size={16} />}
            iconPosition="right"
            onClick={() => navigate('/docs/components')}
          >
            Explore Components
          </Button>
          <Button
            variant="duo"
            size="lg"
            icon={<GitBranch size={16} />}
            iconPosition="left"
            onClick={() => window.open('https://github.com/unburn/ui', '_blank', 'noopener,noreferrer')}
          >
            GitHub
          </Button>
        </div>
      </section>

    </div>
  );
};
