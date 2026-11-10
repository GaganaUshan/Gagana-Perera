"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Kanban, FileText, Cloud, Palette } from "lucide-react";
import styles from "./ServicesSection.module.css";

const services = [
  {
    number: "01",
    icon: Kanban,
    title: "Project Management",
    desc: "End-to-end sprint coordination, Jira backlog refinement, delivery tracking, and cross-functional team alignment on commercial platforms like MillionSpaces.",
    tag: "Agile & Delivery",
    link: "/services"
  },
  {
    number: "02",
    icon: FileText,
    title: "Business Analysis",
    desc: "Stakeholder elicitation, translating complex business needs into actionable developer tickets, functional specifications, and workflow architecture.",
    tag: "Requirements & BRD",
    link: "/services"
  },
  {
    number: "03",
    icon: Cloud,
    title: "Cloud Ops & Data Engineering",
    desc: "Structuring large-scale datasets, executing web scraping workflows, and managing secure cloud environments using AWS virtual machines.",
    tag: "AWS & Data Systems",
    link: "/services"
  },
  {
    number: "04",
    icon: Palette,
    title: "Creative Direction & UI/UX",
    desc: "Human-centered digital interfaces in Figma, visual brand identities, vector illustrations, and motion graphics crafted in Adobe Illustrator & After Effects.",
    tag: "Design & Identity",
    link: "/services"
  }
];

export function ServicesSection() {
  return (
    <section className={styles.servicesSection} id="services">
      <div className={`container ${styles.servicesContainer}`}>
        {/* Top Header matching Mahen Jay */}
        <div className={styles.headerBlock}>
          <div className={styles.headerTop}>
            <span className="mil-suptitle">What I Do</span>
            <span className={styles.headerSubtitleRight}>
              Focused on helping digital products grow, scale, and move forward.
            </span>
          </div>

          <h2 className={styles.servicesHeadline}>
            Unique <span className="mil-thin">Solutions</span> For Modern <span className="mil-thin">Businesses.</span>
          </h2>
        </div>

        {/* 4-Card Ashley Grid */}
        <div className={styles.servicesGrid}>
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className={styles.serviceCard}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardNumber}>{item.number}</span>
                  <div className={styles.iconCircle}>
                    <Icon size={20} />
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.serviceTag}>{item.tag}</span>
                  <h3 className={styles.serviceTitle}>{item.title}</h3>
                  <p className={styles.serviceDesc}>{item.desc}</p>
                </div>

                <div className={styles.cardFooter}>
                  <Link href={item.link} className={styles.cardActionBtn} aria-label={`Learn more about ${item.title}`}>
                    <span>Explore Service</span>
                    <div className={styles.arrowCircle}>
                      <ArrowUpRight size={15} />
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className={styles.bottomCtaRow}>
          <Link href="/services" className="mil-button">
            <span>View Detailed Capabilities</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
