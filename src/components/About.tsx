"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, GraduationCap, Compass, Sparkles } from "lucide-react";
import styles from "./About.module.css";

const strengths = [
  "Requirements Elicitation & Stakeholder Alignment",
  "Sprint Delivery & Agile Task Breakdown",
  "UI/UX Prototyping & Visual Communication",
  "Technical Problem-Solving & Cloud Awareness"
];

export function About() {
  return (
    <section className="section-wrapper" id="about" style={{ backgroundColor: "var(--bg-white)" }}>
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Left Column: Portrait Card with Orange Backdrop Detail */}
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.portraitCard}>
              <div className={styles.orangeAccentBlob} />
              <div className={styles.imageBox}>
                <Image
                  src="/gagana-hero.png"
                  alt="Gagana Yushan Perera"
                  width={420}
                  height={520}
                  className={styles.photo}
                />
              </div>

              <div className={styles.portraitBadge}>
                <span className={styles.badgeName}>Gagana Yushan Perera</span>
                <span className={styles.badgeRole}>SLIIT • IT Undergraduate</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Prose & Call to Action */}
          <motion.div
            className={styles.textCol}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="badge-pill" style={{ marginBottom: "1rem" }}>
              About Me
            </span>
            <h2 className={styles.heading}>
              Bridging Technology, Business, and <span className={styles.orangeText}>Creativity</span>
            </h2>

            <p className={styles.leadPara}>
              I&apos;m an Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), with a focus on Project Management, Business Analysis, technology, and creative problem-solving.
            </p>

            <p className={styles.bodyPara}>
              My background brings together technical engineering knowledge, structured project coordination, and creative design experience. Having served across roles in Project Management at 1BillionTech, Production Operations at Innodata Lanka, Creative Design at Avantous Global, and 4 years of leadership in AIESEC in SLIIT, I understand how to turn business ideas into practical, reliable software products.
            </p>

            {/* Strengths Checklist */}
            <div className={styles.strengthsList}>
              {strengths.map((item, i) => (
                <div key={i} className={styles.strengthItem}>
                  <div className={styles.checkWrap}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className={styles.actionsRow}>
              <Link href="/about" className="btn-orange">
                Read Full Biography <ArrowUpRight size={16} />
              </Link>
              <Link href="/contact" className="btn-white-pill">
                Let&apos;s Connect
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
