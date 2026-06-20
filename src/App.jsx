import React from 'react';
import CanvasContainer from './components/CanvasContainer';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { resumeData } from './utils/resumeData';

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
      {/* 3D Background - Keep it subtle behind everything */}
      <div style={{ opacity: 0.6, position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <CanvasContainer />
      </div>
      
      {/* Clean Navigation Bar matching the reference */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '2rem 4rem',
        zIndex: 100,
        background: 'linear-gradient(to bottom, rgba(5,5,5,0.9), transparent)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['home', 'about', 'resume', 'projects', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              style={{ 
                color: item === 'home' ? 'var(--color-accent-primary)' : 'var(--color-text)', 
                textDecoration: 'none', 
                fontWeight: '600',
                fontSize: '0.9rem',
                textTransform: 'capitalize',
                transition: 'color 0.3s'
              }}
              onMouseOver={(e) => e.target.style.color = 'var(--color-accent-primary)'}
              onMouseOut={(e) => e.target.style.color = item === 'home' ? 'var(--color-accent-primary)' : 'var(--color-text)'}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content Sections */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>

      <footer style={{ 
        textAlign: 'center', 
        padding: '3rem', 
        color: 'var(--color-text-muted)',
        borderTop: '1px solid var(--color-border)',
        position: 'relative',
        zIndex: 10,
        backgroundColor: 'var(--color-bg)'
      }}>
        <p style={{ margin: 0, fontSize: '0.9rem' }}>© {new Date().getFullYear()} Harishraj K. Artificial Intelligence & Data Science Developer.</p>
      </footer>
    </div>
  );
}

export default App;
