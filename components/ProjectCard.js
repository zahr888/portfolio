'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false)
  const isPublic = project.status === 'public'
  const isComingSoon = project.status === 'coming-soon'

  return (
    <article
      className="group relative bg-cream rounded-2xl overflow-hidden border border-warm-beige transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-light to-warm-beige transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"></div>

      {/* Project Image */}
      {project.image && (
        <div className="relative w-full h-40 overflow-hidden bg-soft-blue/30 flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Coming Soon Overlay */}
          {isComingSoon && (
            <div className="absolute inset-0 bg-dark/60 flex items-center justify-center">
              <span className="px-4 py-2 bg-accent text-cream font-bold rounded-full text-sm uppercase tracking-wider">
                Coming Soon
              </span>
            </div>
          )}
          {/* Year Badge */}
          {project.year && (
            <div className="absolute top-3 right-3 px-2 py-1 bg-cream/90 text-dark text-xs font-semibold rounded-md">
              {project.year}
            </div>
          )}
        </div>
      )}

      <div className="relative p-6 flex flex-col flex-grow">
        {/* Project Title */}
        <h3 className="text-xl font-bold mb-2 text-dark group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted text-sm mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack - Compact */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-soft-blue/40 text-dark/60 text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="px-2 py-1 text-muted text-xs">+{project.tech.length - 4}</span>
          )}
        </div>

        {/* Spacer to push button to bottom */}
        <div className="flex-grow"></div>

        {/* Action Button - Always at bottom */}
        <div className="pt-4 border-t border-warm-beige/50">
          {isPublic ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-cream font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 text-sm"
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          ) : isComingSoon ? (
            <span className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-accent/15 text-accent font-semibold rounded-lg text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Launching Soon
            </span>
          ) : (
            <span className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-warm-beige/50 text-muted font-semibold rounded-lg text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              In Progress
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
