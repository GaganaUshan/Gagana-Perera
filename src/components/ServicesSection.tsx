"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Kanban, Code2, BarChart3, LayoutGrid } from "lucide-react";
import styles from "./ServicesSection.module.css";

const services = [
  {
    icon: Kanban,
    title: "Project Management",
    desc: "Sprint coordination, Jira backlog management, milestone tracking, and cross-functional team delivery.",
    link: "/services"
  },
  {
    icon: Code2,
    title: "Business Analysis",
    desc: "Stakeholder requirements elicitation, functional specifications, workflow mapping, and user stories.",
    link: "/services"
  },
  {
    icon: BarChart3,
    title: "Product Strategy",
    desc: "Data-informed product thinking, dependency tracking, blocker mitigation, and digital transformation.",
    link: "/services"
  },
  {
    icon: LayoutGrid,
    title: "UI/UX & Creative Tech",
    desc: "Interactive Figma wireframes, brand identities in Adobe Suite, and modern web application frontends.",
    link: "/services"
  }
];

export function ServicesSection() {
  return (
    <section className="section-dark" id="services">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta-top">
          <span className="section-num">03</span>
          <span className="section-category">SERVICES</span>
        </div>

        <div className={styles.headerRow}>
          <h2 className="section-headline">What I do</h2>
          <Link href="/services" className={styles.viewAllLink}>
            <span>VIEW ALL SERVICES</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 4-Column Service Grid */}
        <div className={styles.servicesGrid}>
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className={styles.serviceCol}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.iconWrap}>
                  <Icon size={24} className={styles.icon} strokeWidth={1.75} />
                </div>

                <h3 className={styles.serviceTitle}>{item.title}</h3>
                <p className={styles.serviceDesc}>{item.desc}</p>

                <Link href={item.link} className={styles.serviceArrow} aria-label={`Read more about ${item.title}`}>
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
