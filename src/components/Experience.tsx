"use client";

import { motion } from "framer-motion";
import styles from "./Experience.module.css";

const experiences = [
  {
    role: "Project Management Intern",
    company: "1BT",
    year: "Recent",
    description: "Driving project timelines, managing resources, and ensuring smooth delivery of technical solutions."
  },
  {
    role: "Production Associate",
    company: "Innodata",
    year: "2025",
    description: "Collaborated in high-paced environments to streamline production operations and improve efficiency."
  },
  {
    role: "Creative Designer Intern",
    company: "Avantous",
    year: "2025",
    description: "Engineered visually compelling digital assets and contributed to branding and UI/UX design strategy."
  },
  {
    role: "Multiple Leadership Roles",
    company: "AIESEC in SLIIT",
    year: "2024 - 2026",
    description: "Member Experience Team Lead (2026), Art Director (2025), Showcasing Team Leader (2025), B2C Team Lead (2025), International Relations Team Lead (2024)."
  }
];

export function Experience() {
  return (
    <section className={styles.experience} id="experience">
      <div className={`container ${styles.expContainer}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Experience</h2>
          <div className={styles.divider}></div>
        </motion.div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className={styles.timelineDot}></div>
              <div className={`glass ${styles.timelineContent}`}>
                <span className={styles.year}>{exp.year}</span>
                <h3 className={styles.role}>{exp.role}</h3>
                <h4 className={styles.company}>{exp.company}</h4>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
