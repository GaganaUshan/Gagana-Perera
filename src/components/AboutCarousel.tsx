"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, ArrowRight, ChevronLeft, ChevronRight, Award, Briefcase, Users, GitBranch } from "lucide-react";
import styles from "./AboutCarousel.module.css";

const carouselCards = [
  {
    id: "pm",
    tag: "Agile & Scrum",
    title: "Sprint Planning & Backlog Management",
    sub: "1BillionTech • MillionSpaces Delivery",
    image: "/carousel-pm.jpg",
  },
  {
    id: "ba",
    tag: "Business Analysis",
    title: "Requirement Elicitation & Workflows",
    sub: "BRD • User Stories & Process Mapping",
    image: "/carousel-ba.jpg",
  },
  {
    id: "tech",
    tag: "Software Engineering",
    title: "Full-Stack Development & Architecture",
    sub: "Java Spring Boot • React.js • Node.js",
    image: "/carousel-tech.jpg",
  },
  {
    id: "cloud",
    tag: "Cloud & AI Tech",
    title: "AWS Cloud & Intelligent Automation",
    sub: "Innodata VM Pipelines • MailMind AI",
    image: "/carousel-cloud.jpg",
  },
  {
    id: "ux",
    tag: "UI/UX Design",
    title: "Human-Centered Digital Interfaces",
    sub: "Figma Prototypes • Design Systems",
    image: "/carousel-ux.jpg",
  },
  {
    id: "team",
    tag: "Team Leadership",
    title: "Cross-Functional Collaboration",
    sub: "AIESEC in SLIIT • 4-Year Journey",
    image: "/carousel-team.jpg",
  },
];

const stats = [
  { number: "4+", label: "Years of Leadership", sub: "AIESEC in SLIIT Journey" },
  { number: "6+", label: "Key Projects", sub: "Enterprise, Academic & AI" },
  { number: "3+", label: "Professional Certs", sub: "Google PM, SAP BA & Google AI" },
  { number: "1:1", label: "Stakeholder Alignment", sub: "Requirements to Delivery" },
];

export function AboutCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="section" id="about">
      {/* Curved Arch / Dial Decorative Line (Inspired by Havenly) */}
      <div className={styles.arcContainer}>
        <div className={styles.arcDialLine} />
      </div>

      {/* Infinite Animated Carousel of Technology / PM / BA Cards */}
      <div
        className={styles.carouselWrapper}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={styles.controlsRow}>
          <span className={styles.carouselHint}>
            Technology • Project Management • Business Analysis Focus
          </span>
          <div className={styles.navButtons}>
            <button
              onClick={() => scroll("left")}
              className={styles.navArrowBtn}
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              className={styles.navArrowBtn}
              aria-label="Scroll right"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className={`${styles.carouselTrack} ${isPaused ? styles.paused : ""}`}
        >
          {/* Render cards twice for smooth continuous marquee flow */}
          {[...carouselCards, ...carouselCards].map((card, index) => (
            <div key={`${card.id}-${index}`} className={styles.cardItem}>
              <div className={styles.cardVisualBox}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="320px"
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay} />
                <span className={styles.cardTag}>{card.tag}</span>
              </div>
              <div className={styles.cardInfo}>
                <h4 className={styles.cardTitle}>{card.title}</h4>
                <p className={styles.cardSub}>{card.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Havenly-Style About Content */}
      <div className={`container ${styles.centerContentContainer}`}>
        <motion.div
          className={styles.centerBlock}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pill-badge">
            <Compass className="pill-badge-icon" />
            <span>About Gagana</span>
          </div>

          <h2 className="headline-section">
            Helping teams find clarity, structure, and momentum
          </h2>

          <p className={styles.centerDescription}>
            I believe meaningful digital solutions start with listening carefully, breaking down complex business requirements, and aligning developers, designers, and stakeholders toward shared goals.
          </p>

          <Link href="/about" className="btn-pill-primary">
            <span>Learn More About Me</span>
            <span className="btn-pill-icon-cap">
              <ArrowRight size={14} />
            </span>
          </Link>
        </motion.div>

        {/* Havenly-Style 4-Stat Metrics Row */}
        <motion.div
          className={styles.metricsRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.metricItem}>
              <span className={styles.metricNumber}>{stat.number}</span>
              <span className={styles.metricLabel}>{stat.label}</span>
              <span className={styles.metricSub}>{stat.sub}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
