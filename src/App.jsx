import React from 'react';
import CanvasContainer from './components/CanvasContainer';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* 3D Background */}
      <CanvasContainer />
      
      {/* Navigation (Simple top bar) */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '1.5rem 2rem',
        zIndex: 100,
        background: 'linear-gradient(to bottom, rgba(5,5,5,0.8), transparent)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '2rem'
      }}>
        {['home', 'experience', 'projects', 'skills'].map((item) => (
          <a 
            key={item}
            href={`#${item}`} 
            style={{ 
              color: 'var(--color-text-muted)', 
              textDecoration: 'none', 
              textTransform: 'uppercase',
              fontSize: '0.85rem',
              letterSpacing: '1px',
              transition: 'color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.color = 'var(--color-accent-primary)'}
            onMouseOut={(e) => e.target.style.color = 'var(--color-text-muted)'}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>

      {/* Footer */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '2rem', 
        color: 'var(--color-text-muted)',
        borderTop: '1px solid var(--color-glass-border)',
        position: 'relative',
        zIndex: 10,
        marginTop: '2rem'
      }}>
        <p>© {new Date().getFullYear()} Harishraj K. Built with React & Three.js.</p>
      </footer>
    </div>
  );
}

export default App;
