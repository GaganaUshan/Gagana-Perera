"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Layers, Kanban, Compass, Cpu } from "lucide-react";
import styles from "./ServicesSection.module.css";

const services = [
  {
    id: "pm",
    title: "Project Management",
    subtitle: "Sprint Planning & Agile Delivery",
    isFeatured: false,
    icon: Kanban,
    deliverables: [
      "Jira & Kanban Sprint Workflows",
      "Milestone & Timeline Tracking",
      "Cross-Functional Team Coordination",
      "Risk Mitigation & Blocker Clearance"
    ],
    link: "/services"
  },
  {
    id: "ba",
    title: "Business Analysis",
    subtitle: "Requirements & System Logic",
    isFeatured: true, // The iconic orange card from the UI inspiration
    icon: Compass,
    deliverables: [
      "Stakeholder Requirements Elicitation",
      "Functional & Technical Specifications",
      "Business Process Flow Mapping",
      "User Stories & Acceptance Criteria"
    ],
    link: "/services"
  },
  {
    id: "design",
    title: "UI/UX & Creative Tech",
    subtitle: "Wireframes & Brand Experience",
    isFeatured: false,
    icon: Cpu,
    deliverables: [
      "Figma Prototypes & Design Systems",
      "User Journey & Interface Architecture",
      "Adobe Creative Suite Visual Assets",
      "Modern Web Development (React / Next.js)"
    ],
    link: "/services"
  }
];

export function ServicesSection() {
  return (
    <section className="section-wrapper" id="services">
      <div className="container">
        {/* Dark Rounded Container matching the UI design */}
        <div className={styles.darkBlock}>
          {/* Header Row */}
          <div className={styles.headerRow}>
            <div className={styles.titleCol}>
              <h2 className={styles.sectionTitle}>
                My <span className={styles.orangeHighlight}>Services</span>
              </h2>
            </div>
            <div className={styles.descCol}>
              <p className={styles.sectionDesc}>
                Transforming complex challenges into streamlined digital products through structured coordination, analytical problem-solving, and creative execution.
              </p>
            </div>
          </div>

          {/* Cards Grid */}
          <div className={styles.cardsGrid}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  className={`${styles.serviceCard} ${service.isFeatured ? styles.cardFeatured : styles.cardDark}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div className={styles.cardTop}>
                    <div className={styles.iconBox}>
                      <Icon size={22} />
                    </div>
                    <Link
                      href={service.link}
                      className={service.isFeatured ? "btn-circle-arrow-white" : "btn-circle-arrow"}
                      aria-label={`View details for ${service.title}`}
                    >
                      <ArrowUpRight size={20} />
                    </Link>
                  </div>

                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardSubtitle}>{service.subtitle}</p>
                  </div>

                  {/* Folder Tab / Preview graphic mock */}
                  <div className={styles.folderMock}>
                    <div className={styles.folderTab}>
                      <span>Deliverables</span>
                    </div>
                    <div className={styles.folderContent}>
                      <ul className={styles.delivList}>
                        {service.deliverables.map((item, i) => (
                          <li key={i}>
                            <CheckCircle2 size={13} className={styles.checkIcon} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Action Row */}
          <div className={styles.footerRow}>
            <Link href="/services" className="btn-white-pill">
              View All Services &amp; Certifications <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
