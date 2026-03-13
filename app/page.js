'use client'

import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Education from './components/Education'
import ParticleBackground from './components/ParticleBackground'

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground relative'>
      {/* Matrix grid background */}
      <div className="matrix-bg" />
      
      {/* Particle animation */}
      <ParticleBackground />
      
      {/* Scanline effect */}
      <div className="scanline" />
      
      {/* Main content */}
      <main className="relative z-10">
        <Header />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <Navbar />
      
      {/* Bottom gradient fade */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-40" />
    </div>
  )
}
