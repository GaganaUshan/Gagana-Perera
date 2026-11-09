"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background Subtle Noir Texture/Gradient */}
      <div className={styles.bgGlow} />

      <div className={`container ${styles.heroContainer}`}>
        {/* Top Tagline & Status Bar */}
        <motion.div
          className={styles.heroMetaBar}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.locationBadge}>
            <MapPin size={13} className={styles.icon} />
            <span>SRI LANKA</span>
            <span className={styles.statusDot} title="Available for opportunities" />
            <span className={styles.availability}>AVAILABLE FOR ROLES</span>
          </div>
          <div className={styles.contactQuick}>
            <a href="mailto:gaganaushan16@gmail.com" className={styles.quickLink}>
              <Mail size={13} />
              <span>gaganaushan16@gmail.com</span>
            </a>
            <span className={styles.dividerDot}>•</span>
            <a href="tel:+94773650313" className={styles.quickLink}>
              <Phone size={13} />
              <span>+94 77 365 0313</span>
            </a>
          </div>
        </motion.div>

        {/* Main Grid: Name on left, Portrait + Quote on Right */}
        <div className={styles.heroGrid}>
          <div className={styles.leftColumn}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.discipline}>
                PROJECT MANAGEMENT • BUSINESS ANALYSIS • CREATIVE TECH
              </span>
              <h1 className={styles.name}>
                <span className={styles.nameRow}>GAGANA</span>
                <span className={styles.nameRow}>YUSHAN</span>
                <span className={styles.nameSubtitle}>PERERA</span>
              </h1>
            </motion.div>

            <motion.p
              className={styles.roleTagline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Bridging technology, business, and creativity to build meaningful digital solutions.
            </motion.p>

            <motion.div
              className={styles.ctaRow}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/works" className="btn-primary">
                SEE MY WORK <ArrowUpRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline">
                LET&apos;S CONNECT
              </Link>
              <a
                href="/CV.pdf"
                download="Gagana_Perera_CV.pdf"
                className="btn-link"
              >
                DOWNLOAD CV
              </a>
            </motion.div>
          </div>

          <div className={styles.rightColumn}>
            {/* Portrait Container with Noir Editorial Grading */}
            <motion.div
              className={styles.portraitWrapper}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.imageBackdrop} />
              <div className={styles.imageFrame}>
                <Image
                  src="/gagana-hero.png"
                  alt="Gagana Yushan Perera"
                  width={640}
                  height={820}
                  priority
                  className={styles.portraitImage}
                />
                <div className={styles.vignetteOverlay} />
              </div>
            </motion.div>

            {/* Editorial Statement Box */}
            <motion.div
              className={styles.editorialQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className={styles.quoteText}>
                &ldquo;Understanding problems, organizing people and processes, and turning ambitious ideas into functional realities.&rdquo;
              </p>
              <div className={styles.quoteMeta}>
                <span>SLIIT IT UNDERGRADUATE</span>
                <span className={styles.metaDivider}>/</span>
                <span>AIESEC ALUMNUS</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
