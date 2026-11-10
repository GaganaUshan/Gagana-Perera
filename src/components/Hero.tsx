"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star, Sparkles, Quote } from "lucide-react";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        {/* Top Greeting Badge */}
        <motion.div
          className={styles.greetingBadgeWrap}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.greetingBadge}>
            <span>Hello!</span>
            <span className={styles.sparkle}>✨</span>
          </div>
        </motion.div>

        {/* Hero Title */}
        <motion.div
          className={styles.titleWrap}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className={styles.heroTitle}>
            I&apos;m <span className={styles.orangeText}>Gagana,</span>
            <br />
            Project Manager &amp; BA
          </h1>
        </motion.div>

        {/* Main Stage Grid: Left Stats, Center Arch Portrait + CTA, Right Stats */}
        <div className={styles.stageGrid}>
          {/* Left Column: Testimonial Quote & Metric */}
          <motion.div
            className={styles.leftCol}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.quoteCard}>
              <div className={styles.quoteIcon}>“</div>
              <p className={styles.quoteBody}>
                Bridging technology, business, and creativity to build meaningful digital solutions.
              </p>
              <span className={styles.quoteAuthor}>SLIIT IT Undergrad • 1BillionTech</span>
            </div>

            <div className={styles.statBox}>
              <span className={styles.statNumber}>4+ Years</span>
              <span className={styles.statLabel}>Leadership &amp; Delivery</span>
            </div>
          </motion.div>

          {/* Center Column: Orange Arch & Portrait */}
          <motion.div
            className={styles.centerCol}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className={styles.archWrapper}>
              <div className={styles.orangeArch} />
              <div className={styles.portraitContainer}>
                <Image
                  src="/gagana-hero.png"
                  alt="Gagana Yushan Perera"
                  width={460}
                  height={580}
                  priority
                  className={styles.portraitImg}
                />
              </div>

              {/* Overlapping Pill Action Buttons at bottom of Arch */}
              <div className={styles.archActionPills}>
                <Link href="/works" className="btn-orange">
                  Portfolio <ArrowUpRight size={16} />
                </Link>
                <Link href="/contact" className="btn-white-pill">
                  Hire Me
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Star Rating & Certifications */}
          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.ratingCard}>
              <div className={styles.starsRow}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={styles.starIcon} fill="#f9532d" />
                ))}
              </div>
              <span className={styles.ratingNumber}>Certified</span>
              <span className={styles.ratingLabel}>Google &amp; SAP Accredited</span>
            </div>

            <div className={styles.statBox}>
              <span className={styles.statNumber}>6+ Projects</span>
              <span className={styles.statLabel}>Enterprise &amp; Academic</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
