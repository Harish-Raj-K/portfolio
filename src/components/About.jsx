import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../utils/resumeData';
import profilePic from '../assets/profile.jpeg';

export default function About() {
  return (
    <section id="about" style={{ position: 'relative' }}>
      {/* 
        Background Image with CSS Filters 
        This automatically adjusts your photo to match the dark, high-contrast aesthetic!
      */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: `url(${profilePic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        filter: 'grayscale(70%) contrast(130%) brightness(60%) sepia(20%) hue-rotate(180deg)', // Cyan-tinted dark and moody
        zIndex: 1
      }}></div>

      {/* Dark Gradient Overlay */}
      <div className="bg-overlay" style={{ 
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        background: 'linear-gradient(to right, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.8) 50%, rgba(10,10,10,0.4) 100%)',
        zIndex: 2
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 3, display: 'flex', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '500px' }}
        >
          <h2 style={{ marginBottom: '0.5rem' }}>ABOUT</h2>
          <a href={`mailto:${resumeData.personalInfo.email}`} style={{ color: 'var(--color-accent-primary)', textDecoration: 'none', display: 'block', marginBottom: '2rem', fontSize: '0.9rem' }}>
            {resumeData.personalInfo.email}
          </a>
          
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            {resumeData.summary}
          </p>

          <div style={{ marginTop: '3rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem', display: 'inline-block' }}>
            <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text)' }}>
              {resumeData.personalInfo.location.split(',')[0]} <br/>
              <span style={{ color: 'var(--color-text-muted)' }}>{resumeData.personalInfo.location.split(',')[1]}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
