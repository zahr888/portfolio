// Skill icons mapping
const SKILL_ICONS = {
  // MLOps & Infrastructure
  'Docker': '🐳',
  'Linux': '🐧',
  'GitHub Actions': '⚡',
  'LocalStack': '☁️',
  'AWS': '☁️',
  'Prometheus': '🔥',
  'Grafana': '📊',
  'NGINX': '🌐',
  'Kubernetes': '☸️',
  'Terraform': '🏗️',
  // ML & Data
  'Python': '🐍',
  'Scikit-learn': '🤖',
  'XGBoost': '🚀',
  'LightGBM': '💡',
  'Pandas': '🐼',
  'NumPy': '🔢',
  'Matplotlib': '📈',
  'Seaborn': '🎨',
  'Parquet': '📦',
  // Backend & Data
  'FastAPI': '⚡',
  'PostgreSQL': '🐘',
  'Supabase': '⚡',
  'SQL': '🗃️',
  // Tools
  'Git/GitHub': '📂',
  'VS Code': '💻',
  'Figma': '🎨'
}

export default function About({ skills, meta }) {
  const skillCategories = [
    {
      key: 'mlops',
      title: 'MLOps & Infrastructure',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      bgColor: 'bg-warm-beige/30'
    },
    {
      key: 'ml',
      title: 'Machine Learning & Data',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      bgColor: 'bg-accent-light/20'
    },
    {
      key: 'backend',
      title: 'Backend & Data Stores',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
      bgColor: 'bg-soft-blue/30'
    },
    {
      key: 'tools',
      title: 'Tools',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      bgColor: 'bg-warm-beige/20'
    }
  ]

  return (
    <section id="about" className="py-20 px-6 lg:pr-32 bg-gradient-to-b from-cream via-warm-beige/20 to-cream relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent-light/10 rounded-full blur-3xl"></div>
        <div className="absolute top-20 -left-20 w-48 h-48 bg-soft-blue/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Tech <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">Stack</span>
          </h2>
        </div>

        {/* Skills Grid - 2 columns on larger screens */}
        <div className="grid md:grid-cols-2 gap-4">
          {skillCategories.map((category) => (
            <div
              key={category.key}
              className="bg-cream/80 backdrop-blur-sm rounded-xl p-5 border border-warm-beige/40 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-sm font-semibold mb-4 text-dark flex items-center gap-2">
                <div className="p-1.5 bg-accent/10 rounded-lg text-accent">
                  {category.icon}
                </div>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills[category.key]?.map((skill, index) => (
                  <div
                    key={index}
                    className={`group flex items-center gap-1.5 px-3 py-1.5 ${category.bgColor} rounded-lg hover:bg-accent/10 transition-all duration-200`}
                  >
                    <span className="text-sm">{SKILL_ICONS[skill] || '•'}</span>
                    <span className="text-dark/70 text-sm font-medium group-hover:text-accent transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
