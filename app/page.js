'use client'

import { useEffect, useRef } from 'react'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import FloatingSidebar from '@/components/FloatingSidebar'

// EDIT THESE VALUES TO CUSTOMIZE YOUR PORTFOLIO
export const META = {
  name: "Hammami Med Zahreddin",
  description: "Full-stack developer focused on DevOps & AI/ML",
  cvLink: "/cv.pdf", // Place your CV in the public folder as cv.pdf
  github: "https://github.com/zahr888",
  linkedin: "https://www.linkedin.com/in/zaher-eddin-hammami",
  email: "zahr.hammemi@gmail.com"
}

export const PROJECTS = [
  {
    id: 1,
    title: "BH App Catalogue",
    description: "A comprehensive application catalogue showcasing modern web development practices with full-stack capabilities.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Docker"],
    github: "https://github.com/zahr888/bh-app-catalogue",
    status: "public"
  },
  {
    id: 2,
    title: "AI-Powered Startup Platform",
    description: "Revolutionary platform leveraging AI/ML for automated business insights and predictive analytics.",
    tech: ["Next.js", "Python", "TensorFlow", "AWS", "PostgreSQL"],
    github: null,
    status: "development"
  }
]

export const SKILLS = {
  development: [
    "Next.js", "Tailwind CSS", "HTML/CSS", "JavaScript", "TypeScript",
    "PostgreSQL", "Supabase", "MySQL", "Java", "Python"
  ],
  devops: [
    "Linux", "Docker", "Kubernetes", "NGINX", "GitHub Actions",
    "Terraform", "AWS", "Git/GitHub"
  ],
  ml: [
    "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"
  ]
}

export default function Home() {
  const sectionsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el)
    }
  }

  return (
    <div className="min-h-screen">
      <FloatingSidebar meta={META} />
      <main>
        <Hero meta={META} />
        <div ref={addToRefs}>
          <Projects projects={PROJECTS} cvLink={META.cvLink} />
        </div>
        <div ref={addToRefs}>
          <About skills={SKILLS} meta={META} />
        </div>
      </main>
    </div>
  )
}
