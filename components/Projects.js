import ProjectCard from './ProjectCard'

export default function Projects({ projects, cvLink }) {
  return (
    <section id="projects" className="py-24 px-6 lg:pr-80 bg-gradient-to-b from-cream via-soft-blue/20 to-cream">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
            Featured <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            A selection of my recent work, from open-source contributions to cutting-edge ventures.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
