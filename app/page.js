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
    <div className='min-h-screen bg-gradient-to-br from-white via-blue-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-black pb-24 transition-colors duration-300'>
      
      <Header />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Navbar />
      <div className="fixed bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-blue-100 dark:to-blue-950 pointer-events-none z-[999]"></div>

    </div>
  )
}

export default home