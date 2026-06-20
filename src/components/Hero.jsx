import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../utils/resumeData';

export default function Hero() {
  const { name, role } = resumeData.personalInfo;

  return (
    <section 
      id="home" 
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="bg-overlay" style={{ background: 'linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 100%)' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={{ margin: 0, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            {name.split(' ')[0]} <br />
            <span style={{ color: 'var(--color-text)' }}>{name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <h3 style={{ color: 'var(--color-text-muted)', marginTop: '0.5rem', marginBottom: '2.5rem', letterSpacing: '4px' }}>
            {role}
          </h3>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#resume" className="btn btn-outline">Resume</a>
            <a href="#portfolio" className="btn btn-outline">Portfolio</a>
            <a href={`https://${resumeData.personalInfo.github}`} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
            <a href={`https://${resumeData.personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
