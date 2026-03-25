"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

export function About() {
  return (
    <section className={styles.about} id="about">
      <div className={`container ${styles.aboutContainer}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.divider}></div>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            className={styles.textColumn}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className={styles.paragraph}>
              Hello! I&apos;m Gagana Yushan Perera, a 4th-year undergraduate at the Sri Lanka Institute of Information Technology (SLIIT). I am deeply passionate about the intersection of design, technology, and human experience.
            </p>
            <p className={styles.paragraph}>
              My interests span across UI/UX design, AI-powered applications, and product management. I believe that the best products are built with empathy, a strong aesthetic sense, and a deep understanding of user needs.
            </p>
            <p className={styles.paragraph}>
              I am constantly focused on self-improvement, fostering my creativity, and building real-world solutions that can make a positive impact.
            </p>
          </motion.div>

          <motion.div 
            className={styles.statsColumn}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={`glass ${styles.statCard}`}>
              <h3>Education</h3>
              <p>SLIIT Undergraduate</p>
              <span>4th Year</span>
            </div>
            <div className={`glass ${styles.statCard}`}>
              <h3>Focus</h3>
              <p>Product & Design</p>
              <span>UI/UX, PM, AI</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
