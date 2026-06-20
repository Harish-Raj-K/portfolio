import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../utils/resumeData';

const ProgressBar = ({ label, percentage }) => (
  <div className="progress-container">
    <div className="progress-header">
      <span>{label}</span>
      <span style={{ color: 'var(--color-text-muted)' }}></span>
    </div>
    <div className="progress-track">
      <motion.div 
        className="progress-fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      />
    </div>
  </div>
);

export default function Resume() {
  return (
    <section id="resume" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          {/* COLUMN 1: Skills & Languages */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>Software Skills</h3>
            <ProgressBar label="Python" percentage={95} />
            <ProgressBar label="React" percentage={85} />
            <ProgressBar label="Machine Learning" percentage={90} />
            <ProgressBar label="SQL" percentage={80} />
            <ProgressBar label="Java" percentage={75} />

            <h3 style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', marginBottom: '2rem', marginTop: '3rem' }}>Core Concepts</h3>
            <ProgressBar label="Data Structures (DSA)" percentage={85} />
            <ProgressBar label="Computer Vision" percentage={90} />
            <ProgressBar label="NLP" percentage={80} />
          </motion.div>

          {/* COLUMN 2: Experience & Education */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>Experience</h3>
            
            {resumeData.experience.map((exp, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot">
                  {/* Just a placeholder date since resume doesn't have dates */}
                  {24 - i}
                </div>
                <div className="timeline-line"></div>
                <h4 style={{ margin: 0, fontSize: '1rem', color: 'var(--color-text)' }}>{exp.company.toUpperCase()}</h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{exp.role}</p>
                <p style={{ fontSize: '0.8rem', lineHeight: 1.5 }}>{exp.points[0]}</p>
              </div>
            ))}

            <h3 style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', marginBottom: '2rem', marginTop: '3rem' }}>Education</h3>
            <div>
              <h4 style={{ margin: 0, fontSize: '1rem' }}>{resumeData.education.degree}</h4>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>{resumeData.education.institution}</p>
            </div>
          </motion.div>

          {/* COLUMN 3: Certifications & Other */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
            <h3 style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', marginBottom: '2rem' }}>Certifications</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {resumeData.skills.certifications.map((cert, i) => (
                <li key={i} style={{ marginBottom: '1rem', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  {cert}
                </li>
              ))}
            </ul>

            <h3 style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', marginBottom: '2rem', marginTop: '3rem' }}>Tools</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
              TensorFlow - PyTorch - Keras - OpenCV - Tableau - Power BI - Git/GitHub - N8N
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
