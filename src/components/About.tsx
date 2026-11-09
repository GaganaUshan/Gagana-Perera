"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./About.module.css";

export function About() {
  return (
    <section className="section-wrapper" id="about">
      <div className="container">
        <div className={styles.headerRow}>
          <div>
            <span className="section-tag">01 / BACKGROUND & VISION</span>
            <h2 className="section-title">ABOUT</h2>
          </div>
          <Link href="/about" className="btn-link">
            FULL BIOGRAPHY & CREDENTIALS <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className={styles.aboutGrid}>
          {/* Left: Framed Photo */}
          <motion.div
            className={styles.imageColumn}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.imageCard}>
              <div className={styles.imageBox}>
                <Image
                  src="/gagana-hero.png"
                  alt="Gagana Yushan Perera"
                  width={400}
                  height={500}
                  className={styles.photo}
                />
              </div>
              <div className={styles.imageCaption}>
                <span className={styles.captionTitle}>GAGANA YUSHAN PERERA</span>
                <span className={styles.captionRole}>IT Undergraduate • SLIIT</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Editorial 2-column description + Bold Callout */}
          <motion.div
            className={styles.textColumn}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className={styles.paragraphsGrid}>
              <div className={styles.textBlock}>
                <p>
                  I&apos;m Gagana Yushan Perera, an Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), with a strong focus on Project Management, Business Analysis, technology, and creative problem-solving.
                </p>
                <p>
                  My journey uniquely intersects technical acumen, structured coordination, business logic, and creative intuition. Having served across project coordination, client-facing creative design, and data production, I understand the lifecycle of digital products from ideation through delivery.
                </p>
              </div>

              <div className={styles.textBlock}>
                <p>
                  Through four years in AIESEC in SLIIT, I developed the capacity to rally cross-functional teams, navigate complex stakeholder environments, align conflicting priorities, and communicate with clarity.
                </p>
                <p>
                  I particularly enjoy dissecting ambiguous problems, identifying strategic growth levers, streamlining workflows, and turning abstract concepts into practical, reliable, high-impact products.
                </p>
              </div>
            </div>

            {/* Bold Callout Statement mirroring the reference */}
            <div className={styles.calloutBox}>
              <h3 className={styles.calloutHeading}>
                READY TO TURN AMBITIOUS IDEAS INTO PRACTICAL SOLUTIONS? LET&apos;S COLLABORATE.
              </h3>
              <div className={styles.calloutActions}>
                <Link href="/contact" className="btn-primary">
                  GET IN TOUCH
                </Link>
                <Link href="/about" className="btn-outline">
                  READ FULL PROFILE
                </Link>
              </div>
            </div>

            {/* Quick Pill Highlights */}
            <div className={styles.highlightPills}>
              <span className={styles.pill}>SLIIT (2023–2026)</span>
              <span className={styles.pill}>1BillionTech (PM/BA)</span>
              <span className={styles.pill}>Innodata (Production)</span>
              <span className={styles.pill}>Avantous (Design)</span>
              <span className={styles.pill}>AIESEC (4-Year Leadership)</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
