"use client";

import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "FinMan",
    description: "Finance Management Application designed to help users track expenses, create budgets, and analyze spending habits efficiently.",
    tags: ["React", "UI/UX", "Finance"]
  },
  {
    title: "Smart Resume Analyzer",
    description: "A web application that leverages AI to parse, analyze, and provide actionable feedback on user resumes against job descriptions.",
    tags: ["Next.js", "AI", "Product Design"]
  },
  {
    title: "Face Recognition & Emotion Detection",
    description: "Research-oriented system aimed at accurate cross-cultural facial identification and nuanced emotion detection.",
    tags: ["AI/ML", "Research", "Python"]
  },
  {
    title: "K-Drama Search",
    description: "A comprehensive web application for querying, reviewing, and tracking Korean dramas with an intuitive UI.",
    tags: ["Web App", "API Integration", "Design"]
  },
  {
    title: "Mail Mind",
    description: "An AI-based mail management system that categorizes, prioritizes, and drafts responses to streamline communication.",
    tags: ["AI", "Next.js", "Productivity"]
  }
];

export function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <div className={`container ${styles.projContainer}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Selected Projects</h2>
          <div className={styles.divider}></div>
        </motion.div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className={`glass ${styles.card}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.description}</p>
              <div className={styles.tags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.moreProjects}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="https://github.com/GaganaUshan" target="_blank" rel="noopener noreferrer" className={styles.moreBtn}>
            More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
