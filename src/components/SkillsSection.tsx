"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";
import styles from "./SkillsSection.module.css";

const skillBars = [
  { name: "Project Management & Agile Sprints", level: 95 },
  { name: "Business Analysis & Requirement Engineering", level: 90 },
  { name: "Agile, Scrum & Kanban Methodologies", level: 92 },
  { name: "UI/UX Prototyping & Design Systems", level: 88 },
  { name: "Technical Systems Architecture", level: 82 },
];

const tools = [
  { name: "Jira", category: "Agile PM" },
  { name: "Figma", category: "UI/UX" },
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Full-Stack" },
  { name: "Spring Boot", category: "Backend" },
  { name: "AWS", category: "Cloud" },
  { name: "Python", category: "Data / AI" },
  { name: "Confluence", category: "Documentation" },
  { name: "Microsoft Excel", category: "Analysis" },
];

export function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="container">
        {/* Pill Badge */}
        <div className="pill-badge">
          <Sparkles className="pill-badge-icon" />
          <span>Skills &amp; Methodologies</span>
        </div>

        <h2 className="headline-section" style={{ marginBottom: "3rem" }}>
          The expertise and tools behind the execution
        </h2>

        {/* 5 Minimalist Skill Progress Bars */}
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
                  transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tools Grid */}
        <div className={styles.toolsContainer}>
          <div className={styles.toolsHeader}>
            <Terminal size={16} />
            <span>Core Tooling &amp; Technical Stack</span>
          </div>
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
