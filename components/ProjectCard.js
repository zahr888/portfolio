'use client'

import { useState } from 'react'

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false)
  const isPublic = project.status === 'public'

  return (
    <article
      className="group relative bg-cream rounded-2xl overflow-hidden border border-warm-beige transition-all duration-500 hover:border-accent/30 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent-light to-warm-beige transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

      <div className="relative p-8">
        {/* Status Badge */}
        <div className="mb-5">
          {isPublic ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Public
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-muted/20 text-muted text-xs font-semibold rounded-full">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
              </svg>
              In Development
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-2xl font-bold mb-3 text-dark group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-soft-blue/50 text-dark/70 text-sm rounded-lg font-medium hover:bg-accent/10 hover:text-accent transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          {isPublic ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-cream font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/30 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              aria-label={`View ${project.title} on GitHub`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          ) : (
            <div className="flex items-center gap-3">
              <button
                disabled
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-warm-beige/50 text-muted font-semibold rounded-full cursor-not-allowed"
                aria-label="Project link not available"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Coming Soon
              </button>
              <span className="text-xs text-muted italic">
                In progress
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
