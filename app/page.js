import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Education from './components/Education'

const home = () => {
  return (
    <div className='mb-40'>
      <Navbar />
      <Header />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
<div className="fixed bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-white pointer-events-none z-[999]"></div>

    </div>
  )
}

export default home