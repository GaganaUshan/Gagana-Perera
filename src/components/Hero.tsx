"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, FileDown, CheckCircle2, Briefcase, Award } from "lucide-react";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.heroBanner} id="top">
      {/* Ashley Architectural Background Lines */}
      <div className="mil-lines-bg" aria-hidden="true" />

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroGrid}>
          {/* Left Column: Headlines & Content */}
          <motion.div
            className={styles.leftCol}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Suptitle */}
            <div className={styles.suptitleWrap}>
              <span className="mil-suptitle">Gagana Yushan Perera</span>
              <span className={styles.statusPill}>
                <span className={styles.statusDot} />
                Open for PM &amp; BA Roles
              </span>
            </div>

            {/* Split Thin/Bold Typography (Inspired by Mahen Jay / Ashley) */}
            <h1 className={styles.heroTitle}>
              Bridging <span className="mil-thin">Technology,</span><br />
              Business <span className="mil-thin">&amp; Creativity</span>
            </h1>

            <p className={styles.heroSubText}>
              Information Technology undergraduate at SLIIT with cross-functional industry experience across Project Management, Business Analysis, and Creative Problem-Solving. Coordinating digital products from stakeholder requirement to technical delivery.
            </p>

            {/* Button Actions */}
            <div className={styles.actionsRow}>
              <Link href="/services" className="mil-button">
                <span>What I do</span>
                <ArrowUpRight size={16} />
              </Link>

              <Link href="/works" className="mil-button-secondary">
                <span>View Works</span>
                <ArrowUpRight size={16} />
              </Link>

              <a
                href="/CV.pdf"
                download="Gagana_Perera_CV.pdf"
                className={styles.cvDownloadLink}
                title="Download CV"
              >
                <FileDown size={15} />
                <span>CV</span>
              </a>
            </div>

            {/* Core Competencies Quick Tags */}
            <div className={styles.tagsContainer}>
              <span className={styles.focusLabel}>Core Disciplines:</span>
              <div className={styles.tagChips}>
                <span className={styles.tagChip}>Project Coordination</span>
                <span className={styles.tagChip}>Requirement Elicitation</span>
                <span className={styles.tagChip}>Jira &amp; Agile</span>
                <span className={styles.tagChip}>Digital Transformation</span>
                <span className={styles.tagChip}>UI/UX Design</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait Frame with Rotating Scroll Badge */}
          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.portraitCard}>
              <div className={styles.portraitImageWrap}>
                <Image
                  src="/gagana-formal-hero.jpg"
                  alt="Gagana Yushan Perera - Project Manager & Business Analyst"
                  width={680}
                  height={820}
                  priority
                  className={styles.heroPortraitImg}
                />
                <div className={styles.imageOverlay} />
              </div>

              {/* Floating Role Badge */}
              <div className={styles.floatingRoleBadge}>
                <div className={styles.badgeIcon}>
                  <Briefcase size={16} />
                </div>
                <div>
                  <h4 className={styles.badgeTitle}>1BillionTech Pvt Ltd</h4>
                  <p className={styles.badgeSub}>PM &amp; BA Intern • MillionSpaces</p>
                </div>
              </div>

              {/* Rotating Circular Scroll Badge (Ashley signature) */}
              <div className={styles.scrollBadgeAnchor}>
                <a href="#about" className="mil-circle-badge-wrap" aria-label="Scroll down to About section">
                  <svg viewBox="0 0 300 300" className="mil-circle-svg-rotating">
                    <defs>
                      <path
                        id="circlePathHero"
                        d="M 150, 150 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                      />
                    </defs>
                    <text>
                      <textPath href="#circlePathHero" startOffset="0%">
                        SCROLL DOWN • SCROLL DOWN • SCROLL DOWN •
                      </textPath>
                    </text>
                  </svg>
                  <div className="mil-circle-center-arrow">
                    <ArrowDown size={18} />
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Hero Metric Strip */}
        <motion.div
          className={styles.metricStrip}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.metricItem}>
            <span className={styles.metricNumber}>04+</span>
            <div className={styles.metricMeta}>
              <span className={styles.metricTitle}>Years of Leadership</span>
              <span className={styles.metricDesc}>AIESEC in SLIIT Journey</span>
            </div>
          </div>

          <div className={styles.metricDivider} />

          <div className={styles.metricItem}>
            <span className={styles.metricNumber}>03</span>
            <div className={styles.metricMeta}>
              <span className={styles.metricTitle}>Industry Experiences</span>
              <span className={styles.metricDesc}>PM, Operations &amp; Design</span>
            </div>
          </div>

          <div className={styles.metricDivider} />

          <div className={styles.metricItem}>
            <span className={styles.metricNumber}>06+</span>
            <div className={styles.metricMeta}>
              <span className={styles.metricTitle}>Digital Projects</span>
              <span className={styles.metricDesc}>Enterprise, AI &amp; Academic</span>
            </div>
          </div>

          <div className={styles.metricDivider} />

          <div className={styles.metricItem}>
            <span className={styles.metricNumber}>03</span>
            <div className={styles.metricMeta}>
              <span className={styles.metricTitle}>Professional Certs</span>
              <span className={styles.metricDesc}>Google PM, SAP BA, Google AI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
