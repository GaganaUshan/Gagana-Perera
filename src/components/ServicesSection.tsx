"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Award, Briefcase, Sparkles, Terminal } from "lucide-react";
import styles from "./ServicesSection.module.css";

const servicesList = [
  {
    number: "01",
    title: "PROJECT MANAGEMENT & SPRINT DELIVERY",
    description:
      "End-to-end task breakdown, Agile/Kanban workflow coordination, dependency tracking, risk identification, and aligning engineering velocity with strategic business milestones.",
    deliverables: ["Sprint Planning & Backlog Grooming", "Milestone & Risk Tracking", "Jira & Kanban Board Setup", "Stakeholder Progress Reporting"]
  },
  {
    number: "02",
    title: "BUSINESS ANALYSIS & REQUIREMENT ENGINEERING",
    description:
      "Bridging business aspirations with technical execution. Eliciting stakeholder needs, drafting functional specifications, mapping business workflows, and defining user stories.",
    deliverables: ["Stakeholder Elicitation & Interviews", "Functional & Non-Functional Specs", "Process Flow Diagrams & Wireframes", "Acceptance Criteria Definition"]
  },
  {
    number: "03",
    title: "CREATIVE DIRECTION & UI/UX DESIGN",
    description:
      "Crafting intuitive user journeys and high-fidelity digital interfaces. Combining visual storytelling, brand identity, and motion to create memorable digital experiences.",
    deliverables: ["Figma Wireframes & Prototypes", "Brand Identity & Graphic Assets", "Design System Guidelines", "Motion & Video Content Production"]
  },
  {
    number: "04",
    title: "TECHNICAL IMPLEMENTATION & CLOUD",
    description:
      "Hands-on technical comprehension in modern web technologies, full-stack frameworks (React, Next.js, Node.js, Spring Boot), cloud architectures (AWS), and data workflows.",
    deliverables: ["Modern React & Next.js Frontends", "RESTful API Integration", "AWS Cloud File & VM Environments", "Data Extraction & Web Scraping"]
  }
];

export function ServicesSection() {
  return (
    <section className="section-wrapper" id="services">
      <div className="container">
        <div className={styles.headerRow}>
          <div>
            <span className="section-tag">03 / CAPABILITIES & EXPERTISE</span>
            <h2 className="section-title">SERVICES</h2>
          </div>
          <Link href="/services" className="btn-link">
            FULL SKILLS & CERTIFICATIONS DIRECTORY <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className={styles.contentGrid}>
          {/* Left Side: Summary & Certifications Highlight Card */}
          <motion.div
            className={styles.leftCard}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.stickyBox}>
              <span className={styles.boxTag}>SPECIALIZED FOUNDATIONS</span>
              <h3 className={styles.boxTitle}>
                CROSS-DISCIPLINARY VALUE
              </h3>
              <p className={styles.boxDesc}>
                Whether coordinating complex cross-functional teams, structuring software requirements, or prototyping intuitive digital interfaces, I bridge the gaps between strategy, design, and code.
              </p>

              <div className={styles.certList}>
                <div className={styles.certItem}>
                  <Award size={16} className={styles.certIcon} />
                  <div>
                    <strong>Google</strong>
                    <p>Foundations of Project Management</p>
                  </div>
                </div>
                <div className={styles.certItem}>
                  <Award size={16} className={styles.certIcon} />
                  <div>
                    <strong>SAP</strong>
                    <p>SAP Business Analyst (Foundations)</p>
                  </div>
                </div>
                <div className={styles.certItem}>
                  <Award size={16} className={styles.certIcon} />
                  <div>
                    <strong>Google AI</strong>
                    <p>Google AI Professional</p>
                  </div>
                </div>
              </div>

              <div className={styles.toolsCloud}>
                <span className={styles.toolsLabel}>PRIMARY TOOLS & STACK:</span>
                <div className={styles.toolsTags}>
                  <span>Jira</span>
                  <span>Figma</span>
                  <span>React</span>
                  <span>Next.js</span>
                  <span>Spring Boot</span>
                  <span>AWS</span>
                  <span>Excel</span>
                  <span>Photoshop</span>
                </div>
              </div>

              <Link href="/services" className="btn-primary" style={{ width: "100%", marginTop: "1.5rem" }}>
                EXPLORE ALL SKILLS <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Editorial Numbered List with dividers */}
          <div className={styles.servicesList}>
            {servicesList.map((service, index) => (
              <motion.div
                key={service.number}
                className={styles.serviceItem}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.itemHeader}>
                  <span className={styles.itemNumber}>{service.number}.</span>
                  <h3 className={styles.itemTitle}>{service.title}</h3>
                </div>

                <p className={styles.itemDesc}>{service.description}</p>

                <div className={styles.deliverablesGrid}>
                  {service.deliverables.map((deliv, i) => (
                    <div key={i} className={styles.delivItem}>
                      <span className={styles.delivDot}>•</span>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

