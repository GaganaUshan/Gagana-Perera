"use client";

import { motion } from "framer-motion";
import styles from "./Skills.module.css";

const skills = [
  "Frontend Dev",
  "UI/UX Design",
  "Graphic Design",
  "Product Thinking",
  "React / Next.js",
  "AI Tools & Concepts",
  "Creative Direction"
];

export function Skills() {
  return (
    <section className={styles.skills}>
      <div className={`container ${styles.skillsContainer}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Skills & Expertise</h2>
          <div className={styles.divider}></div>
        </motion.div>

        <div className={styles.skillsWrapper}>
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className={styles.skillPill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
