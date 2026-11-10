"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Kanban, Code2, BarChart3, LayoutGrid, Layers } from "lucide-react";
import styles from "./ServicesSection.module.css";

const services = [
  {
    icon: Kanban,
    title: "Project Management",
    desc: "Sprint coordination, Jira backlog management, milestone tracking, and cross-functional team delivery.",
    tag: "Agile & Delivery",
    link: "/services"
  },
  {
    icon: Code2,
    title: "Business Analysis",
    desc: "Stakeholder requirements elicitation, functional specifications, workflow mapping, and user stories.",
    tag: "Requirements & Specs",
    link: "/services"
  },
  {
    icon: BarChart3,
    title: "Product Strategy",
    desc: "Data-informed product thinking, dependency tracking, blocker mitigation, and digital transformation.",
    tag: "Strategy & Process",
    link: "/services"
  },
  {
    icon: LayoutGrid,
    title: "UI/UX & Creative Tech",
    desc: "Interactive Figma wireframes, brand identities in Adobe Suite, and modern web application frontends.",
    tag: "Design & Frontend",
    link: "/services"
  }
];

export function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="container">
        {/* Pill Badge */}
        <div className="pill-badge">
          <Layers className="pill-badge-icon" />
          <span>Services &amp; Capabilities</span>
        </div>

        <div className={styles.headerRow}>
          <div>
            <h2 className="headline-section">Strategic execution from concept to delivery</h2>
            <p className={styles.headerDesc}>
              A comprehensive approach bridging business goals with technical implementation.
            </p>
          </div>

          <Link href="/services" className="btn-pill-secondary">
            <span>Explore All Services</span>
            <span className="btn-pill-secondary-icon">
              <ArrowRight size={14} />
            </span>
          </Link>
        </div>

        {/* 4-Card Grid */}
        <div className={styles.servicesGrid}>
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconWrap}>
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <span className={styles.serviceTag}>{item.tag}</span>
                </div>

                <h3 className={styles.serviceTitle}>{item.title}</h3>
                <p className={styles.serviceDesc}>{item.desc}</p>

                <Link href={item.link} className={styles.serviceLink} aria-label={`Read more about ${item.title}`}>
                  <span>Learn More</span>
                  <span className={styles.linkArrow}>
                    <ArrowRight size={13} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
