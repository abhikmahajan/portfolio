'use client'

import React from 'react'
import { Award } from 'lucide-react'

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Introduction to Software Engineering",
      issuer: "IBM",
      date: "Sep 2025",
      description: "Comprehensive introduction to software engineering principles and practices",
      link: "https://drive.google.com/file/d/1eyBtqv5P7q_zEYs_NAmADSdmcYq0T4SK/view?usp=sharing"
    },
    {
      id: 2,
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL – IIT Madras",
      date: "Aug 2025",
      description: "Advanced topics on privacy and security in online social media platforms",
      link: "https://drive.google.com/file/d/13m2AD1D3uvArnmKLamIF0X3EOTKyUkxz/view?usp=sharing"
    },
    {
      id: 3,
      title: "Introduction to Hardware & Operating Systems",
      issuer: "IBM – Coursera",
      date: "Sep 2024",
      description: "Fundamentals of computer hardware architecture and operating systems",
      link: "https://www.coursera.org/account/accomplishments/records/08Z1TGPZK7PD"
    }
  ]

  return (
    <section id='certificates' className='py-12 px-4'>
      <div className='max-w-5xl mx-auto'>
        {/* Section header */}
        <div className='flex items-center gap-4 mb-4'>
          <span className='text-primary font-mono text-sm'>07.</span>
          <h2 className='text-2xl md:text-3xl font-bold'>Certificates</h2>
          <div className='flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent' />
        </div>

        <p className='text-muted-foreground mb-12'>
          Professional certifications and credentials I have earned:
        </p>

        {/* Certificates Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className='tech-card rounded-xl p-6 hover-lift group flex flex-col h-full border border-border hover:border-primary/50 transition-all'
            >
              {/* Icon */}
              <div className='p-3 rounded-lg bg-primary/10 border border-primary/30 w-fit mb-4'>
                <Award className='w-6 h-6 text-primary' />
              </div>

              {/* Content */}
              <h3 className='text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2'>
                {cert.title}
              </h3>
              
              <p className='text-sm text-accent font-mono mb-2'>
                {cert.issuer}
              </p>

              <p className='text-xs text-muted-foreground mb-3'>
                {cert.date}
              </p>

              <p className='text-sm text-muted-foreground leading-relaxed flex-grow'>
                {cert.description}
              </p>

              {/* Decorative line */}
              <div className='mt-4 pt-4 border-t border-border' />
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className='inline-flex items-center gap-2 text-xs text-accent font-mono hover:text-primary transition-colors'
              >
                <div className='w-2 h-2 rounded-full bg-primary' />
                <span>View Credential →</span>
              </a>
            </div>
          ))}
        </div>

        <div className='section-divider' />
      </div>
    </section>
  )
}

export default Certificates
