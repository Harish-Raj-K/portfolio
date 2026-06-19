import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../utils/resumeData';
import { Code2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-gradient">Featured Projects</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {resumeData.projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '10px', 
                background: 'rgba(188, 19, 254, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: 'var(--color-accent-secondary)'
              }}>
                <Code2 size={24} />
              </div>

              <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.3rem' }}>
                {project.title}
              </h3>
              
              <ul className="bulleted" style={{ flexGrow: 1 }}>
                {project.points.map((point, i) => (
                  <li key={i} style={{ fontSize: '0.95rem' }}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
