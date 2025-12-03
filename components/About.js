export default function About({ skills, meta }) {
  return (
    <section id="about" className="py-24 px-6 lg:pr-80 bg-gradient-to-b from-cream via-warm-beige/30 to-cream relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent-light/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 -left-20 w-64 h-64 bg-soft-blue/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
            About
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
            Who I <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Am</span>
          </h2>
        </div>

        {/* Bio */}
        <div className="mb-16">
          <p className="text-lg text-muted leading-relaxed text-center max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a strong focus on DevOps practices and AI/ML integration.
            I love building scalable applications and automating workflows to deliver efficient, high-quality solutions.
            With expertise spanning modern web technologies and cloud infrastructure, I thrive on solving complex
            problems and bringing innovative ideas to life.
          </p>
        </div>

        {/* Skills - Three Categories */}
        <div className="space-y-12">
          {/* Development Skills */}
          <div className="bg-cream/80 backdrop-blur-sm rounded-2xl p-8 border border-warm-beige/50 shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-dark flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-xl">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              Development
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.development.map((skill, index) => (
                <div
                  key={index}
                  className="group px-4 py-2 bg-soft-blue/30 rounded-lg hover:bg-accent/10 hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <span className="text-dark/80 font-medium group-hover:text-accent transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps Skills */}
          <div className="bg-cream/80 backdrop-blur-sm rounded-2xl p-8 border border-warm-beige/50 shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-dark flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-xl">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              DevOps & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.devops.map((skill, index) => (
                <div
                  key={index}
                  className="group px-4 py-2 bg-warm-beige/40 rounded-lg hover:bg-accent/10 hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <span className="text-dark/80 font-medium group-hover:text-accent transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Machine Learning Skills */}
          <div className="bg-cream/80 backdrop-blur-sm rounded-2xl p-8 border border-warm-beige/50 shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-dark flex items-center gap-3">
              <div className="p-2 bg-accent/10 rounded-xl">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              Machine Learning & Data
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.ml.map((skill, index) => (
                <div
                  key={index}
                  className="group px-4 py-2 bg-accent-light/20 rounded-lg hover:bg-accent/10 hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <span className="text-dark/80 font-medium group-hover:text-accent transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
