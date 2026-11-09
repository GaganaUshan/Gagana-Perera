"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { ArrowUpRight, GitBranch, Layers, CheckCircle2, Globe, Sparkles, FolderKanban } from "lucide-react";
import styles from "./works.module.css";

const projectsList = [
  {
    id: "millionspaces",
    number: "01",
    title: "MillionSpaces",
    subtitle: "Digital Property Booking & Workspace Platform",
    tag: "PROFESSIONAL",
    category: "Professional Project • Property Technology",
    role: "Project Coordinator & Business Analyst Intern",
    overview:
      "A commercial digital property platform connecting venue providers with businesses and individuals seeking short-to-medium-term workspace bookings. I contribute directly to project coordination, sprint management, stakeholder alignment, and delivery oversight.",
    contributions: [
      "Gathered and documented end-to-end business requirements directly with company stakeholders.",
      "Translated complex functional specifications into actionable sprint tasks and user stories for development teams.",
      "Maintained regular communication between technical engineers and product stakeholders.",
      "Monitored project velocity, flagged implementation risks, and cleared blockers to keep releases on schedule."
    ],
    techStack: ["Java Spring Boot", "React.js", "AWS", "Jira", "Microsoft Excel", "Google Workspace", "Google AI"],
    links: {
      github: "https://github.com/GaganaUshan",
      external: null
    }
  },
  {
    id: "study-bridge",
    number: "02",
    title: "Study Bridge",
    subtitle: "Student Migration & University Management System",
    tag: "ACADEMIC",
    category: "Academic Project • Team Lead",
    role: "Team Lead & Full-Stack Developer",
    overview:
      "A web-based student migration management platform built to bridge prospective international students and global universities. The system streamlines application pipelines, documents, and includes a full Examination Management System.",
    contributions: [
      "Led full project coordination, task allocation, and progress tracking using an Agile Kanban framework.",
      "Engineered the Examination Management System module end-to-end.",
      "Structured comprehensive MongoDB data models and REST API communication layers.",
      "Spearheaded sprint reviews and coordinated cross-module testing."
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Kanban Methodology", "REST APIs"],
    links: {
      github: "https://github.com/GaganaUshan",
      external: null
    }
  },
  {
    id: "mailmind",
    number: "03",
    title: "MailMind",
    subtitle: "AI-Powered Email Management & Productivity Platform",
    tag: "ACADEMIC",
    category: "Academic Project • AI Productivity",
    role: "Project Manager & Frontend Developer",
    overview:
      "An intelligent email management platform created to eliminate inbox overload. The application leverages AI to automatically parse incoming messages, extract action items, generate concise summaries, and prioritize correspondence.",
    contributions: [
      "Led project management, defining user journeys and sprint priorities.",
      "Participated actively in UI/UX wireframing and design prototyping.",
      "Developed responsive frontend interfaces with Next.js, ShadCN UI, and Tailwind CSS.",
      "Integrated authentication via Clerk and subscription billing with Stripe."
    ],
    techStack: ["Next.js", "ShadCN UI", "Tailwind CSS", "MongoDB", "Clerk", "Aurinco", "Orama", "Stripe"],
    links: {
      github: "https://github.com/GaganaUshan",
      external: null
    }
  },
  {
    id: "smart-cv-analyzer",
    number: "04",
    title: "Smart CV Analyzer",
    subtitle: "AI-Powered Resume Diagnostic & Career Optimizer",
    tag: "PERSONAL",
    category: "Personal Project • AI & Career Technology",
    role: "Creator & Developer",
    overview:
      "An automated web application designed to evaluate user resumes against target industry expectations, pinpoint skill gaps, and provide actionable suggestions to maximize interview callback rates.",
    contributions: [
      "Engineered automated resume text parsing and semantic matching algorithms in Python.",
      "Computed industry relevance scoring based on job description criteria.",
      "Designed an intuitive UI highlighting critical missing keywords and qualifications.",
      "Generated personalized recommendations for resume enhancement."
    ],
    techStack: ["React", "Python", "NLP / AI", "RESTful API"],
    links: {
      github: "https://github.com/GaganaUshan",
      external: null
    }
  },
  {
    id: "anime-recommendation",
    number: "05",
    title: "Anime Recommendation System",
    subtitle: "Intelligent Watchlist & Media Recommendation Engine",
    tag: "PERSONAL",
    category: "Personal Project • Web Application",
    role: "Creator & Developer",
    overview:
      "A dynamic media discovery platform that generates personalized anime recommendations tailored to user watchlists, genre weights, and real-time query parameters.",
    contributions: [
      "Integrated Google Custom Search Engine APIs for rich media retrieval.",
      "Designed a sleek, reactive browsing interface in React and Vite.",
      "Implemented client-side caching for fast, smooth browsing.",
      "Successfully deployed the project live."
    ],
    techStack: ["React", "Vite", "Python", "Google Custom Search Engine", "Cloud Hosting"],
    links: {
      github: "https://github.com/GaganaUshan",
      external: "https://github.com/GaganaUshan"
    }
  },
  {
    id: "property-management",
    number: "06",
    title: "Property Management System",
    subtitle: "Full-Stack Real Estate Unit & Tenant Management",
    tag: "PERSONAL",
    category: "Personal Project • Full-Stack Web App",
    role: "Full-Stack Developer",
    overview:
      "A centralized property management web application engineered to simplify property portfolio records, tenant logs, lease tracking, and unit availability.",
    contributions: [
      "Built full CRUD functionality to add, edit, maintain, and remove property records.",
      "Structured relational data collections in MongoDB with Express API routes.",
      "Created administrative dashboards for clear inventory visualization.",
      "Implemented robust server-side error handling and data sanitization."
    ],
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    links: {
      github: "https://github.com/GaganaUshan",
      external: null
    }
  }
];

const filterTags = [
  { key: "ALL", label: "ALL PROJECTS" },
  { key: "PROFESSIONAL", label: "PROFESSIONAL" },
  { key: "ACADEMIC", label: "ACADEMIC & AI" },
  { key: "PERSONAL", label: "PERSONAL APPS" },
];

export default function WorksPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects = projectsList.filter((p) => {
    if (activeFilter === "ALL") return true;
    return p.tag === activeFilter;
  });

  return (
    <div className={styles.page}>
      <PageHeader
        number="03 / WORKS"
        title="PROJECTS & CASE STUDIES"
        subtitle="ENTERPRISE SYSTEMS • ACADEMIC PLATFORMS • AI INNOVATIONS"
        description="A curated portfolio of software products, team-led systems, and technical initiatives demonstrating project coordination, business analysis, and full-stack execution."
      />

      <section className="section-wrapper">
        <div className="container">
          {/* Filter Bar */}
          <div className={styles.filterBar}>
            <div className={styles.filterGroup}>
              {filterTags.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`${styles.filterBtn} ${activeFilter === tab.key ? styles.filterActive : ""}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <span className={styles.resultCount}>
              SHOWING {filteredProjects.length} OF {projectsList.length} PROJECTS
            </span>
          </div>

          {/* Projects Editorial List */}
          <div className={styles.projectList}>
            {filteredProjects.map((project) => (
              <article key={project.id} className={styles.projectCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.numberBox}>
                    <span className={styles.projNum}>{project.number}</span>
                    <span className={styles.projTag}>{project.tag}</span>
                  </div>
                  <span className={styles.categoryLine}>{project.category}</span>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.titleBlock}>
                    <h2 className={styles.projTitle}>{project.title}</h2>
                    <h3 className={styles.projSubtitle}>{project.subtitle}</h3>
                    <div className={styles.roleBadge}>
                      <span>ROLE:</span> <strong>{project.role}</strong>
                    </div>
                  </div>

                  <p className={styles.projOverview}>{project.overview}</p>

                  <div className={styles.contributionsBlock}>
                    <h4 className={styles.contribHeader}>KEY DELIVERABLES & CONTRIBUTIONS</h4>
                    <ul className={styles.contribList}>
                      {project.contributions.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.stackWrap}>
                      <span className={styles.stackLabel}>
                        <Layers size={13} /> TECH STACK:
                      </span>
                      <div className={styles.stackPills}>
                        {project.techStack.map((tech) => (
                          <span key={tech} className={styles.techPill}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className={styles.linksRow}>
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                      >
                        VIEW CODE <GitBranch size={14} />
                      </a>
                      <Link href="/contact" className="btn-primary">
                        DISCUSS PROJECT <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Next Page Banner */}
      <section className="section-wrapper">
        <div className="container">
          <div className={styles.nextBanner}>
            <div>
              <span className="section-tag">NEXT DESTINATION</span>
              <h3 className={styles.nextHeading}>SERVICES & SKILLS</h3>
              <p className={styles.nextText}>
                Learn more about my service offerings, tool stack, and verified Google & SAP certifications.
              </p>
            </div>
            <Link href="/services" className="btn-primary">
              EXPLORE SERVICES & SKILLS <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
