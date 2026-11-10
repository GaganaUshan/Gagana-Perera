"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, GitBranch, Layers, CheckCircle2 } from "lucide-react";
import styles from "./Projects.module.css";

const featuredProjects = [
  {
    id: "millionspaces",
    number: "01",
    title: "MillionSpaces",
    subtitle: "Enterprise Digital Property Platform",
    category: "Professional • Property Tech",
    role: "Project Coordinator & BA Intern",
    description:
      "A commercial digital property platform where I contribute to project coordination, stakeholder alignment, task breakdown, and sprint delivery management.",
    stack: ["Java Spring Boot", "React.js", "AWS", "Jira", "Excel"],
    highlight: "Enterprise Production Platform"
  },
  {
    id: "study-bridge",
    number: "02",
    title: "Study Bridge",
    subtitle: "Student Migration & University Platform",
    category: "Academic • Team Lead",
    role: "Team Lead & Full-Stack Developer",
    description:
      "A student migration platform connecting prospective international students with universities, complete with an Examination Management System.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Kanban"],
    highlight: "Team Leadership & System Architecture"
  },
  {
    id: "mailmind",
    number: "03",
    title: "MailMind",
    subtitle: "AI-Powered Email Management System",
    category: "Academic • AI Productivity",
    role: "Project Manager & Frontend Developer",
    description:
      "An intelligent email management application engineered to enhance communication efficiency through AI categorization, automated summarization, and task extraction.",
    stack: ["Next.js", "ShadCN UI", "Tailwind CSS", "MongoDB", "Stripe"],
    highlight: "AI-Powered Productivity"
  },
  {
    id: "smart-cv-analyzer",
    number: "04",
    title: "Smart CV Analyzer",
    subtitle: "AI Resume & Career Diagnostics",
    category: "Personal • Career Tech",
    role: "Creator & Developer",
    description:
      "An AI-driven career application that evaluates resumes against target industry standards, computing match scores and providing tailored skill gap recommendations.",
    stack: ["React", "Python", "NLP / AI", "REST API"],
    highlight: "Intelligent Resume Analytics"
  }
];

export function Projects() {
  return (
    <section className="section-wrapper" id="projects" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container">
        {/* Section Title */}
        <div className="section-title-wrap">
          <span className="badge-pill" style={{ marginBottom: "1rem" }}>
            Portfolio &amp; Case Studies
          </span>
          <h2 className="section-heading">
            Featured <span className="highlight">Projects</span>
          </h2>
          <p className="section-subtitle">
            A selection of software products, team-led systems, and technical initiatives demonstrating end-to-end delivery.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className={styles.projectsGrid}>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.cardTopRow}>
                <span className={styles.categoryBadge}>{project.category}</span>
                <span className={styles.numberBadge}>{project.number}</span>
              </div>

              <div className={styles.cardMain}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <span className={styles.projectRole}>Role: {project.role}</span>
                <p className={styles.projectDesc}>{project.description}</p>
              </div>

              <div className={styles.stackWrap}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.stackPill}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.cardFooter}>
                <Link href="/works" className={styles.detailsBtn}>
                  <span>Explore Case Study</span>
                  <div className={styles.arrowCircle}>
                    <ArrowUpRight size={16} />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to Works Page */}
        <div className={styles.bottomCtaRow}>
          <Link href="/works" className="btn-orange">
            View All 6 Projects &amp; Code Repositories <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
