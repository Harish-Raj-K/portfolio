import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../utils/resumeData';

export default function Projects() {
  return (
    <section id="projects" style={{ backgroundColor: 'var(--color-bg-light)', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', marginBottom: '3rem' }}>
            Featured Projects
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '3rem' 
          }}>
            {resumeData.projects.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ 
                  backgroundColor: 'var(--color-bg)', 
                  padding: '2.5rem', 
                  borderLeft: '4px solid var(--color-accent-primary)'
                }}
              >
                <h3 style={{ color: 'var(--color-text)', marginBottom: '1.5rem', fontSize: '1.2rem', letterSpacing: '0.5px' }}>
                  {project.title}
                </h3>
                
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  {project.points.map((point, i) => (
                    <li key={i} style={{ 
                      fontSize: '0.9rem', 
                      color: 'var(--color-text-muted)',
                      marginBottom: '0.75rem',
                      lineHeight: '1.6',
                      position: 'relative',
                      paddingLeft: '1.5rem'
                    }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-primary)' }}>•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
