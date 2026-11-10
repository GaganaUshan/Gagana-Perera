"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Building2, Calendar, MapPin } from "lucide-react";
import styles from "./Experience.module.css";

const experiences = [
  {
    company: "1BillionTech Pvt Ltd",
    location: "Colombo, Sri Lanka",
    period: "March 2026 – Present",
    role: "Project Management & Business Analysis Intern",
    description:
      "Working across project coordination, requirement gathering, and delivery management. Key contributor on the MillionSpaces commercial platform, translating client requirements into actionable sprint backlogs and facilitating alignment between business stakeholders and software engineers.",
    skills: ["MillionSpaces", "Jira", "Sprint Coordination", "Java Spring Boot", "AWS", "Google AI"]
  },
  {
    company: "Innodata Lanka Pvt Ltd",
    location: "Colombo, Sri Lanka",
    period: "August 2025 – October 2025",
    role: "Production Associate",
    description:
      "Executed critical data production operations, managing web scraping datasets and uploading files securely through AWS-based virtual machine environments. Ensured zero-defect accuracy in structured Excel databases.",
    skills: ["AWS VMs", "Web Scraping", "Data Quality Assurance", "Microsoft Excel"]
  },
  {
    company: "Avantous Global",
    location: "Remote / Colombo",
    period: "February 2025 – July 2025",
    role: "Creative Designer",
    description:
      "Collaborated with content strategists to craft compelling brand visuals, promotional animations, and digital marketing materials across Adobe Creative Suite and Figma.",
    skills: ["Adobe Illustrator", "Photoshop", "After Effects", "Figma", "Motion Graphics"]
  },
  {
    company: "AIESEC in SLIIT",
    location: "Malabe, Sri Lanka",
    period: "2023 – 2026 (4 Years)",
    role: "Art Director & Multi-Portfolio Leader",
    description:
      "Led creative direction across the local committee as Art Director (2025–2026) and served as B2C Team Lead. Coordinated logistics for Corporate Connect 2025, securing a Silver Partnership with Superloop valued at LKR 75,000. Awarded Best Showcaser and Member of the Month (Sept 2024).",
    skills: ["Creative Direction", "B2C Operations", "Superloop Partnership", "Best Showcaser Award"]
  }
];

export function Experience() {
  return (
    <section className="section-wrapper" id="experience" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="container">
        {/* Section Heading */}
        <div className="section-title-wrap">
          <span className="badge-pill" style={{ marginBottom: "1rem" }}>
            Career &amp; Leadership
          </span>
          <h2 className="section-heading">
            My Work <span className="highlight">Experience</span>
          </h2>
          <p className="section-subtitle">
            A progressive journey combining technical discipline, business acumen, and cross-functional leadership.
          </p>
        </div>

        {/* Timeline Table mirroring the mockup */}
        <div className={styles.timelineWrapper}>
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className={styles.timelineRow}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Left Column: Company & Date */}
              <div className={styles.leftCol}>
                <h3 className={styles.companyName}>{item.company}</h3>
                <span className={styles.locationText}>{item.location}</span>
                <span className={styles.periodBadge}>{item.period}</span>
              </div>

              {/* Center Column: Orange Node on Vertical Line */}
              <div className={styles.nodeCol}>
                <div className={styles.nodeCircle}>
                  <div className={styles.nodeInnerDot} />
                </div>
                {index < experiences.length - 1 && <div className={styles.nodeLine} />}
              </div>

              {/* Right Column: Role Title & Description */}
              <div className={styles.rightCol}>
                <h4 className={styles.roleTitle}>{item.role}</h4>
                <p className={styles.descriptionText}>{item.description}</p>
                <div className={styles.skillsTags}>
                  {item.skills.map((skill, i) => (
                    <span key={i} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <div className={styles.actionRow}>
          <Link href="/experience" className="btn-dark-pill">
            View Complete Resume &amp; Leadership History <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
