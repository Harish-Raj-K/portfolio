import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../utils/resumeData';

const SkillCategory = ({ title, skills, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-panel"
      style={{ padding: '1.5rem' }}
    >
      <h3 style={{ 
        color: 'var(--color-accent-primary)', 
        fontSize: '1.1rem', 
        marginBottom: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        {title}
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        {skills.map((skill, i) => (
          <span 
            key={i} 
            style={{
              padding: '0.4rem 0.8rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              fontSize: '0.9rem',
              color: 'var(--color-text)'
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const { languages, frameworks, dataAI, coreConcepts, certifications } = resumeData.skills;

  return (
    <section id="skills" className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-gradient">Technical Arsenal</h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          <SkillCategory title="Languages" skills={languages} index={0} />
          <SkillCategory title="Frameworks & Libs" skills={frameworks} index={1} />
          <SkillCategory title="Data & AI" skills={dataAI} index={2} />
          <SkillCategory title="Core Concepts" skills={coreConcepts} index={3} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-panel"
        >
          <h3 style={{ color: 'var(--color-accent-secondary)', fontSize: '1.1rem', marginBottom: '1rem' }}>
            CERTIFICATIONS
          </h3>
          <ul className="bulleted">
            {certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
