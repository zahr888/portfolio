'use client'

import { useEffect, useRef } from 'react'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import FloatingSidebar from '@/components/FloatingSidebar'

// EDIT THESE VALUES TO CUSTOMIZE YOUR PORTFOLIO
export const META = {
  name: "Hammami Med Zahreddin",
  title: "AI, Full-Stack & Automation Engineer",
  description: "I build AI-powered products, full-stack apps, and the automation pipelines that keep them running in production. Comfortable across the stack: from ML models and FastAPI backends to Next.js frontends and CI/CD.",
  cvLink: "/portfolio/resume-Hammami-Zahreddin.pdf", // Place your CV in the public folder
  github: "https://github.com/zahr888",
  linkedin: "https://www.linkedin.com/in/zaher-eddin-hammami",
  email: "zahr.hammemi@gmail.com"
}

export const PROJECTS = [
  {
    id: 1,
    title: "AI Grading Evaluation Pipeline",
    description: "Automated pipeline that benchmarks LLM-based grading against reference scores using multiple error and accuracy metrics — tracks per-dimension performance and validates prediction reliability reproducibly.",
    tech: ["Python", "Prompt Engineering", "Matplotlib", "Pytest"],
    github: "https://github.com/zahr888/AI-grading-evaluation-pipeline",
    image: "/portfolio/projects/ai-grading.png",
    status: "public",
    year: "2026"
  },
  {
    id: 2,
    title: "Ekrily — Real Estate Platform",
    description: "Full-stack real-estate platform linking students and property owners for long-term rentals. Secure auth, property listings, 360° virtual tours, and AI-driven co-living matching.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Cloudinary", "PostgreSQL"],
    github: null,
    image: "/portfolio/projects/ekrily.png",
    status: "coming-soon",
    year: "2025"
  },
  {
    id: 3,
    title: "End-to-End MLOps Pipeline",
    description: "Modular ML pipeline for EV demand forecasting with automated ingestion, feature engineering, and training. Dockerized FastAPI service with Prometheus/Grafana observability and serverless batch inference.",
    tech: ["Python", "FastAPI", "Docker", "Prometheus", "Grafana", "AWS Lambda", "GitHub Actions"],
    github: "https://github.com/zahr888/mlops-ev-charging-predictor",
    image: "/portfolio/projects/mlops.png",
    status: "public",
    year: "2025"
  },
  {
    id: 4,
    title: "Event-Driven Kubernetes Autoscaler",
    description: "Python controller that scales Kubernetes pods based on SQS queue depth. Producer/consumer microservices built with Docker, Kind, and LocalStack for fully local development.",
    tech: ["Python", "Kubernetes", "Docker", "AWS SQS", "LocalStack", "GitHub Actions"],
    github: "https://github.com/zahr888/elastic-scaler",
    image: "/portfolio/projects/k8s-autoscaler.png",
    status: "public",
    year: "2025"
  },
  {
    id: 5,
    title: "BH App Catalogue",
    description: "Full-stack application catalogue built to demonstrate modern web development practices end to end, from API to UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Docker"],
    github: "https://github.com/zahr888/bh-app-catalogue",
    image: "/portfolio/projects/bh-catalogue.png",
    status: "public",
    year: "2024"
  }
]

export const SKILLS = {
  ml: [
    "Python", "Scikit-learn", "XGBoost", "LightGBM", "Pandas", "NumPy",
    "Matplotlib", "Seaborn", "Prompt Engineering"
  ],
  backend: [
    "FastAPI", "Next.js", "PostgreSQL", "Supabase", "SQL"
  ],
  mlops: [
    "Docker", "Linux", "GitHub Actions", "LocalStack", "AWS", "Prometheus",
    "Grafana", "Kubernetes", "Terraform"
  ],
  tools: [
    "Git/GitHub", "VS Code", "Figma"
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
