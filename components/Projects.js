import ProjectCard from './ProjectCard'

export default function Projects({ projects, cvLink }) {
  return (
    <section id="projects" className="py-20 px-6 lg:pr-32 bg-gradient-to-b from-cream via-soft-blue/10 to-cream">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-dark">
            Featured <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            A selection of my recent work in MLOps, DevOps, and full-stack development.
          </p>
        </div>

        {/* Projects Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
