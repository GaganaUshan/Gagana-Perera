"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FolderGit2, ExternalLink } from "lucide-react";
import styles from "./Projects.module.css";

const projectsData = [
  {
    id: "millionspaces",
    title: "MillionSpaces",
    subtitle: "Enterprise Property Tech Platform",
    category: "PROFESSIONAL",
    categoryLabel: "Property Tech • Enterprise",
    role: "Project Coordinator & BA Intern",
    desc: "Digital commercial property platform where I coordinate sprint tasks, clarify stakeholder requirements, and support delivery.",
    stack: ["Java Spring Boot", "React.js", "AWS", "Jira"],
    link: "/works"
  },
  {
    id: "study-bridge",
    title: "Study Bridge",
    subtitle: "Student Migration & University Platform",
    category: "ACADEMIC",
    categoryLabel: "Academic • Team Lead",
    role: "Team Lead & Full-Stack Developer",
    desc: "Web platform connecting students with global universities, featuring an Examination Management System.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    link: "/works"
  },
  {
    id: "mailmind",
    title: "MailMind",
    subtitle: "AI Mail Management Platform",
    category: "ACADEMIC",
    categoryLabel: "AI & Productivity",
    role: "Project Manager & Frontend Developer",
    desc: "Intelligent email application engineered to summarize, categorize, and prioritize inbox correspondence using modern AI.",
    stack: ["Next.js", "Tailwind CSS", "MongoDB", "Stripe"],
    link: "/works"
  },
  {
    id: "smart-cv-analyzer",
    title: "Smart CV Analyzer",
    subtitle: "AI Career Diagnostics Tool",
    category: "PERSONAL",
    categoryLabel: "AI & Career Tech",
    role: "Creator & Developer",
    desc: "Web tool evaluating CVs against target industries, calculating match scores and pinpointing skill gaps.",
    stack: ["React.js", "Python", "NLP / AI", "REST API"],
    link: "/works"
  }
];

const filterTabs = [
  { key: "ALL", label: "All Projects" },
  { key: "PROFESSIONAL", label: "Professional" },
  { key: "ACADEMIC", label: "Academic & AI" },
  { key: "PERSONAL", label: "Personal" },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState("ALL");

  const filtered = projectsData.filter((item) => {
    if (activeTab === "ALL") return true;
    return item.category === activeTab;
  });

  return (
    <section className="section" id="work">
      <div className="container">
        {/* Pill Badge */}
        <div className="pill-badge">
          <FolderGit2 className="pill-badge-icon" />
          <span>Selected Work</span>
        </div>

        {/* Top Header & Filter Pill Row */}
        <div className={styles.topRow}>
          <div>
            <h2 className="headline-section">Featured digital solutions</h2>
            <p className={styles.topDesc}>
              A selection of enterprise, academic, and AI products I&apos;ve coordinated and built.
            </p>
          </div>

          <div className={styles.filterAndLink}>
            <div className={styles.tabsPillGroup}>
              {filterTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`${styles.tabPill} ${activeTab === tab.key ? styles.tabActive : ""}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <Link href="/works" className="btn-pill-secondary">
              <span>View All Projects</span>
              <span className="btn-pill-secondary-icon">
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>

        {/* 4 Projects Grid */}
        <div className={styles.projectsGrid}>
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.cardVisual}>
                <div className={styles.mockupGraphic}>
                  <span className={styles.graphicTag}>{project.categoryLabel}</span>
                  <h4 className={styles.graphicTitle}>{project.title}</h4>
                </div>
              </div>

              <div className={styles.cardInfo}>
                <div className={styles.infoTop}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <span className={styles.cardRole}>{project.role}</span>
                </div>

                <p className={styles.cardDesc}>{project.desc}</p>

                <div className={styles.stackRow}>
                  {project.stack.map((tech) => (
                    <span key={tech} className={styles.stackTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <Link href={project.link} className={styles.cardLink}>
                  <span>Explore Project</span>
                  <span className={styles.linkArrow}>
                    <ArrowRight size={13} />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
