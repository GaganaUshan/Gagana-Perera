"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileDown, Sparkles, CheckCircle2, Kanban, Layers, ArrowUpRight } from "lucide-react";
import styles from "./Hero.module.css";

const competencyChips = [
  "+ Agile & Scrum",
  "+ Business Analysis",
  "+ Jira & Confluence",
  "+ Requirement Elicitation",
  "+ UI/UX Prototyping",
  "+ System Architecture"
];

const bottomHighlights = [
  {
    icon: CheckCircle2,
    title: "Stakeholder Alignment",
    desc: "Translating business needs into actionable developer tasks"
  },
  {
    icon: Kanban,
    title: "Agile Delivery Management",
    desc: "Coordinating sprints, milestone priorities & blocker resolution"
  },
  {
    icon: Layers,
    title: "Tech & Creative Intuition",
    desc: "Bridging full-stack IT logic with human-centered UX design"
  }
];

export function Hero() {
  return (
    <section className={styles.heroSection} id="home">
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroGrid}>
          {/* Left Column: Headline, Bio & Dual Pill Buttons */}
          <motion.div
            className={styles.leftCol}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Pill Badge */}
            <div className="pill-badge">
              <Sparkles className="pill-badge-icon" />
              <span>Project Management &amp; Business Analysis</span>
            </div>

            <h1 className="headline-huge">
              Bridging technology, business, and creativity.
            </h1>

            <p className={styles.bioText}>
              I&apos;m Gagana Yushan Perera, an Information Technology undergraduate at SLIIT with cross-functional industry experience across project coordination, requirement engineering, and creative problem-solving.
            </p>

            <div className={styles.actionsRow}>
              <Link href="/works" className="btn-pill-primary">
                <span>View Selected Work</span>
                <span className="btn-pill-icon-cap">
                  <ArrowRight size={14} />
                </span>
              </Link>

              <a
                href="/CV.pdf"
                download="Gagana_Perera_CV.pdf"
                className="btn-pill-secondary"
              >
                <span>Download CV</span>
                <span className="btn-pill-secondary-icon">
                  <FileDown size={14} />
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait & Havenly Floating Glass Card */}
          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.portraitWrapper}>
              <div className={styles.radialGlow} />

              <div className={styles.imageBox}>
                <Image
                  src="/gagana-cutout.png"
                  alt="Gagana Yushan Perera"
                  width={900}
                  height={900}
                  priority
                  className={styles.cutoutImage}
                />
              </div>

              {/* Floating Glassmorphic Focus Card (Inspired by Havenly) */}
              <motion.div
                className={styles.floatingGlassCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.glassCardHeader}>
                  <span className={styles.glassCardTitle}>Core Focus Areas</span>
                  <span className={styles.glassCardStatus}>
                    <span className={styles.statusPulse} />
                    Available
                  </span>
                </div>

                <div className={styles.chipsGrid}>
                  {competencyChips.map((chip, idx) => (
                    <span key={idx} className={styles.chipPill}>
                      {chip}
                    </span>
                  ))}
                </div>

                <div className={styles.glassCardFooter}>
                  <p className={styles.glassQuote}>
                    &ldquo;Bridging stakeholder vision with engineering precision.&rdquo;
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Hero 3-Pill Feature Strip (Inspired by Havenly) */}
        <motion.div
          className={styles.bottomFeatureStrip}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {bottomHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIconWrap}>
                  <Icon size={18} />
                </div>
                <div className={styles.featureTexts}>
                  <h3 className={styles.featureTitle}>{item.title}</h3>
                  <p className={styles.featureDesc}>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
