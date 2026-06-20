import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../utils/resumeData';

export default function Contact() {
  const { email, phone, location } = resumeData.personalInfo;

  return (
    <section id="contact" style={{ backgroundColor: 'var(--color-bg)', position: 'relative', zIndex: 10 }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ color: 'var(--color-text)', marginBottom: '1rem', letterSpacing: '1px' }}>Get In Touch</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1rem', lineHeight: '1.8' }}>
            I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out to me!
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
            <a href={`mailto:${email}`} className="btn btn-outline" style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}>
              Say Hello
            </a>
            
            <div style={{ marginTop: '3rem', display: 'flex', gap: '4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-accent-primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Email</span>
                <span style={{ fontSize: '1.1rem', fontWeight: '400', letterSpacing: '0.5px' }}>{email}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-accent-primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Phone</span>
                <span style={{ fontSize: '1.1rem', fontWeight: '400', letterSpacing: '0.5px' }}>{phone}</span>
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--color-accent-primary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600' }}>Location</span>
                <span style={{ fontSize: '1.1rem', fontWeight: '400', letterSpacing: '0.5px' }}>{location.split(',')[0]}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
