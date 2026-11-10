"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Layers, GitBranch } from "lucide-react";
import styles from "./Projects.module.css";

const projectsData = [
  {
    id: "millionspaces",
    title: "MillionSpaces",
    subtitle: "Enterprise Property Tech Platform",
    category: "PROFESSIONAL",
    categoryLabel: "Property Technology",
    role: "Project Coordinator & BA Intern",
    desc: "Digital property booking platform where I contribute to requirement clarification, sprint tasks, and stakeholder delivery.",
    stack: ["Java Spring Boot", "React.js", "AWS", "Jira"],
    link: "/works"
  },
  {
    id: "study-bridge",
    title: "Study Bridge",
    subtitle: "Student Migration & University System",
    category: "ACADEMIC",
    categoryLabel: "Academic Project • Team Lead",
    role: "Team Lead & Full-Stack Developer",
    desc: "Student migration management platform connecting students with global universities, featuring an Examination Management System.",
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
    desc: "Intelligent email application engineered to categorize, summarize, and prioritize inbox correspondence using modern AI.",
    stack: ["Next.js", "ShadCN UI", "MongoDB", "Stripe"],
    link: "/works"
  },
  {
    id: "smart-cv-analyzer",
    title: "Smart CV Analyzer",
    subtitle: "AI Career Diagnostics Tool",
    category: "PERSONAL",
    categoryLabel: "AI & Career Technology",
    role: "Creator & Developer",
    desc: "Automated career application evaluating CVs against industry requirements, calculating match scores and pinpointing skill gaps.",
    stack: ["React", "Python", "NLP / AI", "REST API"],
    link: "/works"
  }
];

const filterTabs = [
  { key: "ALL", label: "ALL" },
  { key: "PROFESSIONAL", label: "PROFESSIONAL" },
  { key: "ACADEMIC", label: "ACADEMIC & AI" },
  { key: "PERSONAL", label: "PERSONAL" },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState("ALL");

  const filtered = projectsData.filter((item) => {
    if (activeTab === "ALL") return true;
    return item.category === activeTab;
  });

  return (
    <section className="section-dark" id="work">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta-top">
          <span className="section-num">05</span>
          <span className="section-category">SELECTED WORK</span>
        </div>

        {/* Header & Filter Row */}
        <div className={styles.topRow}>
          <h2 className="section-headline">Featured Projects</h2>

          <div className={styles.filterAndLink}>
            <div className={styles.tabsRow}>
              {filterTabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`${styles.tabBtn} ${activeTab === tab.key ? styles.tabActive : ""}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <Link href="/works" className={styles.viewAllBtn}>
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* 4 Projects Grid */}
        <div className={styles.projectsGrid}>
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.cardVisual}>
                <div className={styles.mockupGraphic}>
                  <span className={styles.graphicTag}>{project.categoryLabel}</span>
                  <h4 className={styles.graphicTitle}>{project.title}</h4>
                </div>
              </div>

              <div className={styles.cardInfo}>
                <div>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <span className={styles.cardCategory}>{project.categoryLabel}</span>
                </div>

                <Link href={project.link} className={styles.cardArrow} aria-label={`View ${project.title}`}>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className={styles.stackRow}>
                {project.stack.map((tech) => (
                  <span key={tech} className={styles.stackTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
