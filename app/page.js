'use client'

import { useEffect, useRef } from 'react'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import FloatingSidebar from '@/components/FloatingSidebar'

// EDIT THESE VALUES TO CUSTOMIZE YOUR PORTFOLIO
export const META = {
  name: "Hammami Med Zahreddin",
  title: "DevOps & MLOps Engineer",
  description: "I design seamless developer workflows and production-ready AI systems. Obsessed with clean automation, smart tooling, and solving real problems through engineering.",
  cvLink: "/portfolio/resume-Hammami-Zahreddin.pdf", // Place your CV in the public folder
  github: "https://github.com/zahr888",
  linkedin: "https://www.linkedin.com/in/zaher-eddin-hammami",
  email: "zahr.hammemi@gmail.com"
}

export const PROJECTS = [
  {
    id: 1,
    title: "Ekrily — Real Estate Platform",
    description: "A real-estate platform linking students and property owners for long-term rentals. Features secure authentication, property listings, 360° virtual tours, intelligent co-living matching, and AI recommendations.",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Cloudinary", "PostgreSQL"],
    github: null,
    image: "/portfolio/projects/ekrily.png",
    status: "coming-soon",
    year: "2025"
  },
  {
    id: 2,
    title: "End-to-End MLOps Pipeline",
    description: "Modular ML pipeline for EV demand forecasting with automated ingestion, feature engineering, and model training. Deployed Dockerized FastAPI service with Prometheus/Grafana observability and serverless batch inference.",
    tech: ["Python", "FastAPI", "Docker", "Prometheus", "Grafana", "AWS Lambda", "GitHub Actions"],
    github: "https://github.com/zahr888/mlops-ev-charging-predictor",
    image: "/portfolio/projects/mlops.png",
    status: "public",
    year: "2025"
  },
  {
    id: 3,
    title: "Event-Driven Kubernetes Autoscaler",
    description: "Python-based controller to scale Kubernetes pods based on SQS queue message counts. Built microservices with Producer/Consumer services using Docker, Kind, and LocalStack for local development.",
    tech: ["Python", "Kubernetes", "Docker", "AWS SQS", "LocalStack", "GitHub Actions"],
    github: "https://github.com/zahr888/elastic-scaler",
    image: "/portfolio/projects/k8s-autoscaler.png",
    status: "public",
    year: "2025"
  },
  {
    id: 4,
    title: "BH App Catalogue",
    description: "A comprehensive application catalogue showcasing modern web development practices with full-stack capabilities.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Docker"],
    github: "https://github.com/zahr888/bh-app-catalogue",
    image: "/portfolio/projects/bh-catalogue.png",
    status: "public",
    year: "2024"
  }
]

export const SKILLS = {
  mlops: [
    "Docker", "Linux", "GitHub Actions", "LocalStack", "AWS", "Prometheus",
    "Grafana", "NGINX", "Kubernetes", "Terraform"
  ],
  ml: [
    "Python", "Scikit-learn", "XGBoost", "LightGBM", "Pandas", "NumPy",
    "Matplotlib", "Seaborn", "Parquet"
  ],
  backend: [
    "FastAPI", "PostgreSQL", "Supabase", "SQL"
  ],
  tools: [
    "Git/GitHub", "VS Code", "Figma"
  ]
}

export default function Home() {
  const sectionsRef = useRef([])

  useEffect(() => {
    // Auto-download CV on page load with delay for reliability
    const hasDownloaded = sessionStorage.getItem('cvDownloaded')
    if (!hasDownloaded) {
      setTimeout(() => {
        const link = document.createElement('a')
        link.href = META.cvLink
        link.download = 'resume-Hammami-Zahreddin.pdf'
        link.style.display = 'none'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        sessionStorage.setItem('cvDownloaded', 'true')
      }, 1000) // 1 second delay for page to fully load
    }

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
