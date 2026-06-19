import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../utils/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-gradient">Work Experience</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
          {/* Vertical Timeline Line */}
          <div style={{ 
            position: 'absolute', 
            left: '24px', 
            top: '0', 
            bottom: '0', 
            width: '2px', 
            background: 'var(--color-glass-border)',
            zIndex: 0
          }} />

          {resumeData.experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-panel"
              style={{ position: 'relative', zIndex: 1, marginLeft: '4rem' }}
            >
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '-3.75rem',
                top: '2rem',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'var(--color-bg)',
                border: '3px solid var(--color-accent-primary)',
                boxShadow: '0 0 10px var(--color-accent-primary)'
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ color: 'white', marginBottom: '0.25rem' }}>{exp.role}</h3>
                  <h4 style={{ color: 'var(--color-accent-primary)', margin: 0, fontSize: '1.1rem' }}>{exp.company}</h4>
                </div>
              </div>
              
              <ul className="bulleted">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
