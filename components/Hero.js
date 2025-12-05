'use client'

export default function Hero({ meta }) {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12 lg:pr-32 relative overflow-hidden">
      {/* Subtle gradient background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-soft-blue/40 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-warm-beige/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent-light/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto text-center animate-fade-in-up relative z-10">
        {/* Profile Image */}
        <div className="mb-10 flex justify-center">
          <div className="relative group">
            {/* Decorative ring */}
            <div className="absolute -inset-2 bg-gradient-to-r from-accent via-accent-light to-warm-beige rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-cream shadow-2xl">
              <img
                src="/portfolio/profile.png"
                alt={meta.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextElementSibling) {
                    e.target.nextElementSibling.style.display = 'flex';
                  }
                }}
              />
              {/* Fallback gradient with initials */}
              <div className="hidden absolute inset-0 bg-gradient-to-br from-accent to-accent-light items-center justify-center text-cream text-4xl font-bold">
                MZH
              </div>
            </div>
          </div>
        </div>

        {/* Greeting */}
        <p className="text-muted text-lg md:text-xl mb-4 font-medium tracking-wide">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-dark">
          <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent bg-[length:200%_auto] hover:animate-shimmer">
            {meta.name}
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-muted mb-12 max-w-2xl mx-auto text-balance leading-relaxed">
          {meta.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="group px-8 py-4 bg-accent text-cream font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/30 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-cream"
          >
            <span className="flex items-center gap-2">
              View My Work
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>

          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-transparent border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent/5 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-cream"
          >
            <span className="flex items-center gap-2">
              Get In Touch
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
