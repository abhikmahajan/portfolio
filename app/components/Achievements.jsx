'use client'

import React from 'react'
import { Trophy, Star, Zap } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Smart India Hackathon",
      date: "Sep 2025",
      description: "Reached Top 50 teams and cleared the first rounds building a web application.",
      icon: Zap,
      color: "text-primary"
    },
    {
      id: 2,
      title: "Web Hackathon",
      date: "Mar 2024",
      description: "Secured a Top 5 ranking by designing and implementing an efficient software solution.",
      icon: Trophy,
      color: "text-accent"
    }
  ]

  return (
    <section id='achievements' className='py-12 px-4'>
      <div className='max-w-5xl mx-auto'>
        {/* Section header */}
        <div className='flex items-center gap-4 mb-4'>
          <span className='text-primary font-mono text-sm'>08.</span>
          <h2 className='text-2xl md:text-3xl font-bold'>Achievements</h2>
          <div className='flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent' />
        </div>

        <p className='text-muted-foreground mb-12'>
          Notable accomplishments and recognitions:
        </p>

        {/* Achievements Grid */}
        <div className='grid md:grid-cols-2 gap-6 mb-8'>
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon
            return (
              <div 
                key={achievement.id}
                className='tech-card rounded-xl p-6 hover-lift group border border-border hover:border-primary/50 transition-all'
              >
                {/* Icon */}
                <div className='p-3 rounded-lg bg-primary/10 border border-primary/30 w-fit mb-4'>
                  <IconComponent className={`w-6 h-6 ${achievement.color}`} />
                </div>

                {/* Content */}
                <h3 className='text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2'>
                  {achievement.title}
                </h3>
                
                <p className='text-xs text-accent font-mono mb-3'>
                  {achievement.date}
                </p>

                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {achievement.description}
                </p>

                {/* Decorative line */}
                <div className='mt-4 pt-4 border-t border-border flex items-center gap-2'>
                  <Star className='w-4 h-4 text-primary fill-primary' />
                  <span className='text-xs text-muted-foreground font-mono'>Achievement Unlocked</span>
                </div>
              </div>
            )
          })}
        </div>

        <div className='section-divider' />
      </div>
    </section>
  )
}

export default Achievements
