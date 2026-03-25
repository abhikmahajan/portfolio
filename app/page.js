'use client'

import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Achievements from './components/Achievements'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Education from './components/Education'
import ParticleBackground from './components/ParticleBackground'
import Scene from './components/Scene'

export default function Home() {
  return (
    <div className='bg-background text-foreground relative'>
      {/* Canvas container - fixed for 3D scene */}
      <div id="canvas-container" className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none transition-opacity duration-300" style={{ opacity: 1 }}>
        <Scene />
      </div>
      
      {/* Scrollable content */}
      <div className="relative z-20 pointer-events-auto">
        {/* Spacer for animation duration - matches animation scroll trigger */}
        <div style={{ height: "500vh" }} />
        
        {/* Main content starts here */}
        <div className="relative">
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
            <Certificates />
            <Achievements />
            <Contact />
          </main>
        </div>
      </div>
      
      <Navbar />
      
      {/* Bottom gradient fade */}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-40" />
    </div>
  )
}
