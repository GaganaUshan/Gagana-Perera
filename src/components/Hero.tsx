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
      {/* Left Vertical Indicator */}
      <div className={styles.sidebarLeft}>
        <span className={styles.sectionNumber}>01</span>
        <div className={styles.scrollDownWrap}>
          <span className={styles.scrollText}>SCROLL DOWN</span>
          <span className={styles.scrollArrow}>&mdash;&gt;</span>
        </div>
      </div>

      {/* Right Vertical Socials */}
      <div className={styles.sidebarRight}>
        <a
          href="https://www.linkedin.com/in/gagana-yushan-9025982aa/"
          target="_blank"
          rel="noreferrer"
          className={styles.socialIcon}
          title="LinkedIn"
        >
          <LinkedInIcon size={16} />
        </a>
        <a
          href="https://github.com/GaganaUshan"
          target="_blank"
          rel="noreferrer"
          className={styles.socialIcon}
          title="GitHub"
        >
          <GitHubIcon size={16} />
        </a>
        <a
          href="mailto:gaganaushan16@gmail.com"
          className={styles.socialIcon}
          title="Email"
        >
          <Mail size={16} />
        </a>
      </div>

      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroGrid}>
          {/* Left Column: Big Condensed Typography & Actions */}
          <motion.div
            className={styles.leftCol}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className={styles.greeting}>HELLO, I&apos;M</span>

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
                <ArrowRight size={15} />
              </Link>
              <a
                href="/CV.pdf"
                download="Gagana_Perera_CV.pdf"
                className="btn-outline-white"
              >
                <span>DOWNLOAD CV</span>
                <FileDown size={15} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait */}
          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          >
            <div className={styles.portraitWrapper}>
              <div className={styles.glowBackdrop} />
              <div className={styles.portraitFrame}>
                <Image
                  src="/gagana-hero.png"
                  alt="Gagana Yushan Perera"
                  width={560}
                  height={720}
                  priority
                  className={styles.portraitImage}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
