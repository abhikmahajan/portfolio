'use client'

import React from 'react'
import { Trophy, Star } from 'lucide-react'

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "Smart India Hackathon",
      date: "Sep 2025",
      description: "Reached Top 50 teams and cleared the first rounds building a web application.",
      icon: Trophy,
      highlight: "Top 50"
    },
    {
      id: 2,
      title: "Web Hackathon",
      date: "Mar 2024",
      description: "Secured a Top 5 ranking by designing and implementing an efficient software solution.",
      icon: Star,
      highlight: "Top 5"
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
          Recognition and accomplishments from hackathons and competitions:
        </p>

        {/* Achievements Grid */}
        <div className='grid md:grid-cols-2 gap-6'>
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon
            return (
              <div 
                key={achievement.id}
                className='tech-card rounded-xl p-6 hover-lift group border border-border hover:border-accent/50 transition-all relative overflow-hidden'
              >
                {/* Glow effect on hover */}
                <div className='absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity' />
                
                <div className='relative z-10'>
                  {/* Icon */}
                  <div className='p-3 rounded-lg bg-accent/10 border border-accent/30 w-fit mb-4'>
                    <IconComponent className='w-6 h-6 text-accent' />
                  </div>

                  {/* Content */}
                  <div className='flex items-start justify-between gap-4 mb-3'>
                    <h3 className='text-lg font-semibold text-foreground group-hover:text-accent transition-colors'>
                      {achievement.title}
                    </h3>
                    <span className='px-3 py-1 rounded-full bg-accent/20 border border-accent/50 text-xs font-bold text-accent whitespace-nowrap'>
                      {achievement.highlight}
                    </span>
                  </div>

                  <p className='text-xs text-muted-foreground font-mono mb-3'>
                    {achievement.date}
                  </p>

                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {achievement.description}
                  </p>

                  {/* Decorative line */}
                  <div className='mt-4 pt-4 border-t border-border flex items-center gap-2'>
                    <div className='w-2 h-2 rounded-full bg-accent animate-pulse' />
                    <span className='text-xs text-muted-foreground font-mono'>Achievement Unlocked</span>
                  </div>
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
