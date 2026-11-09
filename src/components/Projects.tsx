"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, Layers, ExternalLink, GitBranch } from "lucide-react";
import styles from "./Projects.module.css";

const projectsData = [
  {
    id: "millionspaces",
    number: "01",
    title: "MillionSpaces",
    category: "Professional Project • Property Technology",
    description:
      "A commercial digital property platform where I contribute to project coordination, stakeholder alignment, task breakdown, and delivery management.",
    role: "Project Coordinator & BA Intern",
    stack: ["Java Spring Boot", "React.js", "AWS", "Jira", "Excel"],
    contributions: [
      "Gather and clarify business requirements with key stakeholders",
      "Translate requirements into sprint-ready engineering tasks",
      "Monitor delivery milestones, track blockers, and support release timelines"
    ],
    highlight: "Enterprise Production Platform"
  },
  {
    id: "study-bridge",
    number: "02",
    title: "Study Bridge",
    category: "Academic Project • Student Migration Management",
    description:
      "A comprehensive student migration platform connecting prospective international students with universities, complete with an Examination Management System.",
    role: "Team Lead & Full-Stack Developer",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Kanban"],
    contributions: [
      "Led overall sprint planning and team coordination via Kanban boards",
      "Architected and implemented the core Examination Management System",
      "Coordinated cross-module integration and end-to-end user workflows"
    ],
    highlight: "Team Leadership & System Architecture"
  },
  {
    id: "mailmind",
    number: "03",
    title: "MailMind",
    category: "Academic Project • AI Mail Management",
    description:
      "An intelligent email management application engineered to enhance communication efficiency through AI categorization, automated summarization, and task extraction.",
    role: "Project Manager & Frontend Developer",
    stack: ["Next.js", "ShadCN UI", "Tailwind CSS", "MongoDB", "Clerk", "Stripe"],
    contributions: [
      "Coordinated project scope, milestone roadmaps, and feature backlogs",
      "Designed and coded modern, responsive frontend user interfaces",
      "Integrated authentication with Clerk and payments via Stripe"
    ],
    highlight: "AI-Powered Productivity"
  },
  {
    id: "smart-cv-analyzer",
    number: "04",
    title: "Smart CV Analyzer",
    category: "Personal Project • AI & Career Tech",
    description:
      "An AI-driven career application that evaluates resumes against target industry standards, computing match scores and providing tailored skill gap recommendations.",
    role: "Creator & Full-Stack Developer",
    stack: ["React", "Python", "NLP / AI", "REST API"],
    contributions: [
      "Built automated resume parsing and industry relevance scoring engine",
      "Designed clear diagnostic dashboards highlighting missing skills and keywords",
      "Implemented actionable recommendations to optimize candidate CVs"
    ],
    highlight: "Intelligent Resume Analytics"
  },
  {
    id: "anime-recommendation",
    number: "05",
    title: "Anime Recommendation System",
    category: "Personal Project • Web Application",
    description:
      "A personalized recommendation platform that suggests anime titles based on individual user watchlists, genre preferences, and community rating metrics.",
    role: "Creator & Developer",
    stack: ["React", "Vite", "Python", "Google Custom Search Engine"],
    contributions: [
      "Integrated search algorithms with Google Custom Search API",
      "Engineered responsive, highly visual media browsing catalog",
      "Deployed and maintained live web application"
    ],
    highlight: "Live Production App"
  },
  {
    id: "property-management",
    number: "06",
    title: "Property Management System",
    category: "Personal Project • Full-Stack Web App",
    description:
      "A complete property management solution designed to streamline real estate record-keeping, tenant tracking, and property maintenance workflows.",
    role: "Full-Stack Developer",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    contributions: [
      "Designed relational data schemas for property units and leases",
      "Built complete CRUD operations with robust server-side validation",
      "Implemented intuitive administration dashboards"
    ],
    highlight: "Comprehensive Real Estate Tool"
  }
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <section className="section-wrapper" id="works">
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerRow}>
          <div>
            <span className="section-tag">02 / PORTFOLIO SHOWCASE</span>
            <h2 className="section-title">WORKS</h2>
          </div>

          <div className={styles.headerRight}>
            <p className={styles.headerQuote}>
              &ldquo;In every line, sprint, and system — skill and character shape meaningful digital products.&rdquo;
            </p>
            <div className={styles.carouselNav}>
              <button
                onClick={prevProject}
                className={styles.navArrow}
                aria-label="Previous project"
              >
                <ChevronLeft size={18} />
              </button>
              <span className={styles.navCounter}>
                {projectsData[currentIndex].number} / {`0${projectsData.length}`}
              </span>
              <button
                onClick={nextProject}
                className={styles.navArrow}
                aria-label="Next project"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Featured Showcase Display (Editorial Magazine Style) */}
        <div className={styles.showcaseWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={projectsData[currentIndex].id}
              className={styles.showcaseCard}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.45 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.badgeGroup}>
                  <span className={styles.projectNumber}>
                    {projectsData[currentIndex].number}
                  </span>
                  <span className={styles.projectCategory}>
                    {projectsData[currentIndex].category}
                  </span>
                </div>
                <span className={styles.projectHighlight}>
                  {projectsData[currentIndex].highlight}
                </span>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.infoCol}>
                  <h3 className={styles.projectTitle}>
                    {projectsData[currentIndex].title}
                  </h3>
                  <div className={styles.roleLine}>
                    <span className={styles.roleLabel}>ROLE:</span>
                    <span className={styles.roleValue}>
                      {projectsData[currentIndex].role}
                    </span>
                  </div>
                  <p className={styles.projectDesc}>
                    {projectsData[currentIndex].description}
                  </p>

                  <div className={styles.contributionsBox}>
                    <span className={styles.contribTitle}>KEY CONTRIBUTIONS</span>
                    <ul className={styles.contribList}>
                      {projectsData[currentIndex].contributions.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.techCol}>
                  <div className={styles.techSection}>
                    <span className={styles.techHeading}>
                      <Layers size={14} /> TECH STACK & TOOLS
                    </span>
                    <div className={styles.techPills}>
                      {projectsData[currentIndex].stack.map((tech) => (
                        <span key={tech} className={styles.techPill}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.projectActions}>
                    <Link href="/works" className="btn-primary" style={{ width: "100%" }}>
                      VIEW ALL CASE STUDIES <ArrowUpRight size={15} />
                    </Link>
                    <a
                      href="https://github.com/GaganaUshan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      style={{ width: "100%" }}
                    >
                      GITHUB REPOSITORIES <GitBranch size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Project Grid Thumbs */}
        <div className={styles.thumbnailStrip}>
          {projectsData.map((project, idx) => (
            <button
              key={project.id}
              className={`${styles.thumbItem} ${idx === currentIndex ? styles.thumbActive : ""}`}
              onClick={() => setCurrentIndex(idx)}
            >
              <span className={styles.thumbNumber}>{project.number}</span>
              <span className={styles.thumbTitle}>{project.title}</span>
            </button>
          ))}
        </div>

        <div className={styles.footerLinkRow}>
          <Link href="/works" className="btn-link">
            EXPLORE COMPLETE PROJECTS & CASE STUDIES DIRECTORY <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
