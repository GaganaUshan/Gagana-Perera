"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileDown, Mail } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./SocialIcons";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.heroSection} id="home">
      {/* Left Vertical Indicator - Displayed on wide screens for editorial balance */}
      <div className={styles.sidebarLeft}>
        <span className={styles.sectionNumber}>01</span>
        <div className={styles.scrollDownWrap}>
          <span className={styles.scrollText}>SCROLL DOWN</span>
          <span className={styles.scrollArrow}>&mdash;&gt;</span>
        </div>
      </div>

      {/* Right Vertical Socials - Positioned safely on wide screens */}
      <div className={styles.sidebarRight}>
        <a
          href="https://www.linkedin.com/in/gagana-yushan-9025982aa/"
          target="_blank"
          rel="noreferrer"
          className={styles.socialIcon}
          title="LinkedIn"
        >
          <LinkedInIcon size={15} />
        </a>
        <a
          href="https://github.com/GaganaUshan"
          target="_blank"
          rel="noreferrer"
          className={styles.socialIcon}
          title="GitHub"
        >
          <GitHubIcon size={15} />
        </a>
        <a
          href="mailto:gaganaushan16@gmail.com"
          className={styles.socialIcon}
          title="Email"
        >
          <Mail size={15} />
        </a>
      </div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroGrid}>
          {/* Left Column: Big Condensed Typography & Actions */}
          <motion.div
            className={styles.leftCol}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.metaRow}>
              <span className={styles.metaNumber}>01</span>
              <span className={styles.metaDivider}>/</span>
              <span className={styles.greeting}>HELLO, I&apos;M</span>
            </div>

            <h1 className={styles.heroName}>
              <span className={styles.nameLine}>GAGANA</span>
              <span className={styles.nameLine}>
                PERERA<span className={styles.redDot}>.</span>
              </span>
            </h1>

            <div className={styles.roleBar}>
              <span className={styles.roleText}>
                PROJECT MANAGEMENT &amp; BUSINESS ANALYSIS
              </span>
            </div>

            <p className={styles.bioExcerpt}>
              Bridging technology, business, and creativity to build meaningful digital solutions. Information Technology undergraduate at SLIIT with cross-functional industry experience.
            </p>

            <div className={styles.actionsRow}>
              <Link href="/works" className="btn-red">
                <span>VIEW MY WORK</span>
                <ArrowRight size={14} />
              </Link>
              <a
                href="/CV.pdf"
                download="Gagana_Perera_CV.pdf"
                className="btn-outline-white"
              >
                <span>DOWNLOAD CV</span>
                <FileDown size={14} />
              </a>
            </div>

            {/* Quick Social Links visible across all viewports */}
            <div className={styles.socialQuickRow}>
              <a
                href="https://www.linkedin.com/in/gagana-yushan-9025982aa/"
                target="_blank"
                rel="noreferrer"
                className={styles.socialQuickLink}
                title="LinkedIn"
              >
                <LinkedInIcon size={15} />
                <span>LinkedIn</span>
              </a>
              <span className={styles.socialDivider}>•</span>
              <a
                href="https://github.com/GaganaUshan"
                target="_blank"
                rel="noreferrer"
                className={styles.socialQuickLink}
                title="GitHub"
              >
                <GitHubIcon size={15} />
                <span>GitHub</span>
              </a>
              <span className={styles.socialDivider}>•</span>
              <a
                href="mailto:gaganaushan16@gmail.com"
                className={styles.socialQuickLink}
                title="Email"
              >
                <Mail size={15} />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait with Proper Fades */}
          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.portraitWrapper}>
              <div className={styles.glowBackdrop} />
              <div className={styles.portraitFrame}>
                <Image
                  src="/gagana-portrait.jpg"
                  alt="Gagana Yushan Perera"
                  width={808}
                  height={808}
                  priority
                  className={styles.portraitImage}
                />
                {/* Multi-directional fades to blend photo seamlessly into dark canvas */}
                <div className={styles.fadeBottom} />
                <div className={styles.fadeLeft} />
                <div className={styles.fadeTop} />
                <div className={styles.fadeRight} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
