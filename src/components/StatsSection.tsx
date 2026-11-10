"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Award, Globe } from "lucide-react";
import styles from "./StatsSection.module.css";

const stats = [
  {
    icon: Users,
    number: "4+",
    label: "Years of Leadership",
    sub: "AIESEC in SLIIT Journey"
  },
  {
    icon: Briefcase,
    number: "6+",
    label: "Key Projects",
    sub: "Enterprise, Academic & AI"
  },
  {
    icon: Award,
    number: "3+",
    label: "Professional Certs",
    sub: "Google PM, SAP & Google AI"
  },
  {
    icon: Globe,
    number: "75K+",
    label: "Corporate Partnership",
    sub: "Superloop LKR Partnership"
  }
];

export function StatsSection() {
  return (
    <section className="section-light" id="achievements">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta-top">
          <span className="section-num">06</span>
          <span className="section-category">ACHIEVEMENTS</span>
        </div>

        <h2 className="section-headline" style={{ marginBottom: "3.5rem" }}>
          Numbers that speak
        </h2>

        {/* 4 Stats Grid */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className={styles.statCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.iconWrap}>
                  <Icon size={28} />
                </div>
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
                <span className={styles.statSub}>{stat.sub}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
