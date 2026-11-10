"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./About.module.css";

export function About() {
  return (
    <section className="section-light" id="about">
      <div className="container">
        {/* Section Meta Header */}
        <div className="section-meta-top">
          <span className="section-num">02</span>
          <span className="section-category">ABOUT ME</span>
        </div>

        {/* 3-Column Editorial Layout */}
        <div className={styles.aboutGrid}>
          {/* Left: Punchy Headline */}
          <motion.div
            className={styles.headlineCol}
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.mainTitle}>
              Crafting ideas into meaningful, practical solutions.
            </h2>
            <div className={styles.highlightPills}>
              <span>SLIIT Undergrad</span>
              <span>1BillionTech Intern</span>
              <span>4-Yr AIESEC Alum</span>
            </div>
          </motion.div>

          {/* Center: Framed Portrait */}
          <motion.div
            className={styles.photoCol}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={styles.photoCard}>
              <div className={styles.photoBox}>
                <Image
                  src="/gagana-hero.png"
                  alt="Gagana Yushan Perera"
                  width={340}
                  height={420}
                  className={styles.photo}
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Bio Prose & Signature & CTA */}
          <motion.div
            className={styles.proseCol}
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className={styles.bioText}>
              I&apos;m Gagana Yushan Perera, an Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT). My journey uniquely intersects technical knowledge, project coordination, business analysis, and creative design experience.
            </p>
            <p className={styles.bioText}>
              Through hands-on roles at 1BillionTech (MillionSpaces), Innodata Lanka, Avantous Global, and 4 years of leadership in AIESEC in SLIIT, I&apos;ve developed the ability to translate ambiguous stakeholder requirements into actionable, high-quality digital products.
            </p>

            <div className={styles.signatureRow}>
              <span className={styles.signature}>Gagana Yushan</span>
              <Link href="/about" className="btn-black">
                <span>MORE ABOUT ME</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
