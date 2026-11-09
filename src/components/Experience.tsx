"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Calendar, Building2, MapPin } from "lucide-react";
import styles from "./Experience.module.css";

const experiences = [
  {
    period: "MARCH 2026 – PRESENT",
    role: "Project Management & Business Analysis Intern",
    company: "1BillionTech Pvt Ltd",
    type: "Industry Internship",
    summary:
      "Cross-functional project coordination, stakeholder requirements gathering, and delivery management for high-growth software solutions including the MillionSpaces platform.",
    highlights: ["MillionSpaces Platform", "Java Spring Boot & React", "Jira & Stakeholder Alignment"]
  },
  {
    period: "AUGUST 2025 – OCTOBER 2025",
    role: "Production Associate",
    company: "Innodata Lanka Pvt Ltd",
    type: "Industry Internship",
    summary:
      "Production operations involving high-volume data organization, web scraping workflows, and cloud-based file management across AWS virtual machines.",
    highlights: ["AWS Virtual Machines", "Web Scraping & Data QA", "Excel Data Structuring"]
  },
  {
    period: "FEBRUARY 2025 – JULY 2025",
    role: "Creative Designer",
    company: "Avantous Global",
    type: "Creative Industry",
    summary:
      "Collaborated with content strategists and marketing teams to produce high-impact brand assets, promotional videos, animations, and social visual identities.",
    highlights: ["Adobe Creative Suite", "Figma UI Graphics", "Motion & Video Production"]
  },
  {
    period: "2023 – 2026 (4 YEARS)",
    role: "Art Director & Multi-Portfolio Leader",
    company: "AIESEC in SLIIT",
    type: "Youth Leadership Organization",
    summary:
      "Four years of progressive leadership: Art Director (2025–2026), B2C Team Lead (2025), OGT Creative Force, OCVP Marketing (Global Village 4.0), OCVP Logistics (Corporate Connect 2025), EFB Systems Manager.",
    highlights: ["Best Showcaser Award", "Member of the Month (Sept 2024)", "Superloop LKR 75k Partnership"]
  }
];

export function Experience() {
  return (
    <section className="section-wrapper" id="experience">
      <div className="container">
        <div className={styles.headerRow}>
          <div>
            <span className="section-tag">04 / TRACK RECORD & LEADERSHIP</span>
            <h2 className="section-title">EXPERIENCE</h2>
          </div>
          <Link href="/experience" className="btn-link">
            DETAILED WORK & VOLUNTEERING HISTORY <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className={styles.timelineList}>
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className={styles.experienceRow}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.periodCol}>
                <span className={styles.periodText}>{item.period}</span>
                <span className={styles.typeBadge}>{item.type}</span>
              </div>

              <div className={styles.detailsCol}>
                <div className={styles.roleHeader}>
                  <h3 className={styles.roleTitle}>{item.role}</h3>
                  <div className={styles.companyMeta}>
                    <Building2 size={14} />
                    <span>{item.company}</span>
                  </div>
                </div>

                <p className={styles.summary}>{item.summary}</p>

                <div className={styles.highlightTags}>
                  {item.highlights.map((h, i) => (
                    <span key={i} className={styles.highlightPill}>
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.footerRow}>
          <Link href="/experience" className="btn-primary">
            VIEW COMPLETE TIMELINE & ACHIEVEMENTS <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
