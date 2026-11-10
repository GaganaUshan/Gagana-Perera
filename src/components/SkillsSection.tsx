"use client";

import { motion } from "framer-motion";
import styles from "./SkillsSection.module.css";

const skillBars = [
  { name: "Project Management", level: 95 },
  { name: "Business Analysis", level: 90 },
  { name: "Agile & Scrum", level: 92 },
  { name: "UI/UX Design", level: 88 },
  { name: "Technical Architecture", level: 82 },
];

const tools = [
  { name: "Jira", category: "Agile PM" },
  { name: "Figma", category: "UI/UX" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Full-Stack" },
  { name: "Spring Boot", category: "Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "Python", category: "AI / Data" },
  { name: "Notion", category: "Workspace" },
  { name: "Excel", category: "Data Analysis" },
];

export function SkillsSection() {
  return (
    <section className="section-light" id="skills">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta-top">
          <span className="section-num">04</span>
          <span className="section-category">SKILLS &amp; TOOLS</span>
        </div>

        <h2 className="section-headline" style={{ marginBottom: "3rem" }}>
          The skills behind the work
        </h2>

        {/* Top: 5 Skill Progress Bars */}
        <div className={styles.skillBarsGrid}>
          {skillBars.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillPercent}>{skill.level}%</span>
              </div>
              <div className={styles.barTrack}>
                <motion.div
                  className={styles.barFill}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom: Tool Badges Strip in Bordered Box */}
        <div className={styles.toolsContainer}>
          <div className={styles.toolsGrid}>
            {tools.map((tool, idx) => (
              <div key={idx} className={styles.toolItem}>
                <span className={styles.toolName}>{tool.name}</span>
                <span className={styles.toolCategory}>{tool.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
