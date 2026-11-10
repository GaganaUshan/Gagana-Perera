"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building2, Quote } from "lucide-react";
import styles from "./Experience.module.css";

const experiences = [
  {
    company: "1BillionTech Pvt Ltd",
    period: "March 2026 – Present",
    role: "Project Management & Business Analysis Intern",
    quote:
      "Gathering project requirements, translating business needs into actionable developer tasks, and coordinating delivery on the MillionSpaces commercial platform.",
    highlight: "MillionSpaces Platform • Java Spring Boot & AWS"
  },
  {
    company: "Innodata Lanka Pvt Ltd",
    period: "August 2025 – October 2025",
    role: "Production Associate",
    quote:
      "Executed critical data production operations, managing web scraping workflows and uploading structured files securely through AWS-based virtual machine environments.",
    highlight: "AWS Virtual Machines • Web Scraping & QA"
  },
  {
    company: "Avantous Global",
    period: "February 2025 – July 2025",
    role: "Creative Designer",
    quote:
      "Collaborated with content strategists and design teams to create high-impact marketing visuals, brand identity materials, and promotional motion animations.",
    highlight: "Adobe Creative Suite • Figma • Motion Graphics"
  }
];

export function Experience() {
  return (
    <section className="section-dark" id="experience">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta-top">
          <span className="section-num">07</span>
          <span className="section-category">EXPERIENCE &amp; IMPACT</span>
        </div>

        <div className={styles.headerRow}>
          <h2 className="section-headline">Industry experience &amp; impact</h2>
          <Link href="/experience" className={styles.viewResumeLink}>
            <span>VIEW FULL RESUME &amp; AIESEC LEADERSHIP</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 3 Experience Cards with Red Quotes */}
        <div className={styles.cardsGrid}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={styles.expCard}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.quoteIcon}>“</div>

              <p className={styles.expQuote}>{exp.quote}</p>

              <div className={styles.cardFooter}>
                <div className={styles.authorMeta}>
                  <h4 className={styles.authorRole}>{exp.role}</h4>
                  <span className={styles.authorCompany}>
                    {exp.company} • {exp.period}
                  </span>
                </div>
                <div className={styles.highlightBadge}>{exp.highlight}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
