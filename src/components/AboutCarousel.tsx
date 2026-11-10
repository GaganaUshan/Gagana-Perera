"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, CheckCircle2, ExternalLink } from "lucide-react";
import { LinkedInIcon } from "./SocialIcons";
import styles from "./AboutCarousel.module.css";

const partnerLogos = [
  { name: "1BillionTech", logo: "/logos/1billiontech.png" },
  { name: "MillionSpaces", logo: "/logos/millionspaces.jpg" },
  { name: "Innodata Lanka", logo: "/logos/innodata.png" },
  { name: "Avantous Global", logo: "/logos/avantous.png" },
  { name: "AIESEC in SLIIT", logo: "/logos/aiesec.png" },
  { name: "SLIIT Malabe", logo: null },
  { name: "AWS Cloud", logo: null },
  { name: "Java Spring Boot", logo: null },
  { name: "React.js", logo: null },
  { name: "Jira Software", logo: null },
  { name: "Figma", logo: null },
  { name: "Google AI", logo: null }
];

const domainCards = [
  {
    id: "pm",
    tag: "Agile Coordination",
    title: "Sprint Planning & Backlog Management",
    sub: "1BillionTech • MillionSpaces Delivery",
    image: "/carousel-pm.jpg",
  },
  {
    id: "ba",
    tag: "Business Analysis",
    title: "Requirement Elicitation & Process Mapping",
    sub: "Stakeholder Needs • BRDs & User Stories",
    image: "/carousel-ba.jpg",
  },
  {
    id: "tech",
    tag: "Software Engineering",
    title: "Full-Stack Development & Architecture",
    sub: "Java Spring Boot • React.js • REST APIs",
    image: "/carousel-tech.jpg",
  },
  {
    id: "cloud",
    tag: "Cloud Operations",
    title: "AWS Infrastructure & Data Pipelines",
    sub: "Innodata VM Environments • Web Scraping",
    image: "/carousel-cloud.jpg",
  },
  {
    id: "ux",
    tag: "Creative Direction",
    title: "UI/UX & Visual Asset Production",
    sub: "Avantous Global • Figma & Adobe Suite",
    image: "/carousel-ux.jpg",
  },
  {
    id: "team",
    tag: "Leadership Journey",
    title: "Cross-Functional Team Leadership",
    sub: "AIESEC in SLIIT • 4-Year Experience",
    image: "/carousel-team.jpg",
  },
];

export function AboutCarousel() {
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
    <section className={styles.aboutSection} id="about">
      {/* Infinite Partner / Ecosystem Marquee (Ashley .mil-infinite-show) */}
      <div className={styles.partnerMarqueeWrap}>
        <div className={styles.partnerMarqueeTrack}>
          {partnerLogos.concat(partnerLogos).map((item, idx) => (
            <div key={idx} className={styles.partnerPill}>
              {item.logo ? (
                <div className={styles.marqueeLogoFrame}>
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={70}
                    height={24}
                    className={styles.marqueeLogoImg}
                  />
                </div>
              ) : (
                <span className={styles.partnerDot} />
              )}
              <span className={styles.partnerName}>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Ashley Explore My Journey Split Section */}
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.aboutSplitGrid}>
          {/* Left Column: Story & Philosophy */}
          <motion.div
            className={styles.aboutStoryCol}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mil-suptitle">01. About Me</span>

            <h2 className={styles.aboutTitle}>
              Explore <br />
              My <span className="mil-thin">Journey</span>
            </h2>

            <h3 className={styles.aboutSubtitle}>
              Ideas imagined. Solutions coordinated.
            </h3>

            <p className={styles.aboutBodyText}>
              I&apos;m Gagana Yushan Perera, an Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), bridging Project Management, Business Analysis, technology, and creative problem-solving.
            </p>

            <p className={styles.aboutBodyText}>
              My journey combines technical knowledge, sprint coordination, business-oriented thinking, and visual design. Through professional opportunities at 1BillionTech, Innodata Lanka, and Avantous Global, alongside four years of leadership in AIESEC, I&apos;ve developed the ability to work with diverse teams, understand stakeholder requirements, coordinate delivery, and transform ideas into practical solutions.
            </p>

            {/* Ashley-style Quote Block with Avatar */}
            <div className={styles.quoteCard}>
              <div className={styles.quoteAvatarWrap}>
                <Image
                  src="/gagana-silhouette.jpg"
                  alt="Gagana Yushan Perera"
                  width={65}
                  height={65}
                  className={styles.quoteAvatarImg}
                />
              </div>
              <div className={styles.quoteContent}>
                <h4 className={styles.quoteRole}>
                  PM &amp; BA Intern | 1BillionTech Pvt Ltd
                </h4>
                <p className={styles.quoteText}>
                  &ldquo;Continuously exploring how technology, business strategy, and creativity work together to deliver real impact.&rdquo;
                </p>
                <a
                  href="https://www.linkedin.com/in/gagana-yushan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.quoteLinkedInLink}
                >
                  <LinkedInIcon size={14} />
                  <span>linkedin.com/in/gagana-yushan</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className={styles.storyActions}>
              <Link href="/about" className="mil-button">
                <span>Read Full Story</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Large Framed Silhouette Photo (Ashley style) */}
          <motion.div
            className={styles.aboutPhotoCol}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.framedPhotoContainer}>
              <div className={styles.photoFrame}>
                <Image
                  src="/gagana-silhouette.jpg"
                  alt="Gagana Yushan Perera - Sunset Silhouette"
                  width={600}
                  height={750}
                  className={styles.silhouetteImg}
                />
                <div className={styles.photoFrameOverlay} />
              </div>

              {/* Minimalist Caption Tag */}
              <div className={styles.photoCaptionBadge}>
                <span className={styles.captionLocation}>📍 Sri Lanka</span>
                <span className={styles.captionDetail}>SLIIT IT Undergraduate • AIESEC Leader</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Competency Domain Carousel Header */}
        <div className={styles.carouselHeaderRow}>
          <div>
            <span className="mil-suptitle">Domains of Expertise</span>
            <h3 className={styles.carouselSectionTitle}>
              Hands-on <span className="mil-thin">Disciplines</span> &amp; Focus
            </h3>
          </div>

          <div className={styles.carouselNavBtns}>
            <button
              onClick={() => scroll("left")}
              className={styles.carouselArrowBtn}
              aria-label="Previous domain slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className={styles.carouselArrowBtn}
              aria-label="Next domain slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Horizontal Domain Scrollable Cards */}
        <div className={styles.domainCardsTrack} ref={scrollRef}>
          {domainCards.map((card) => (
            <div key={card.id} className={styles.domainCard}>
              <div className={styles.domainImageWrap}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={240}
                  className={styles.domainCardImg}
                />
                <div className={styles.domainTag}>{card.tag}</div>
              </div>
              <div className={styles.domainInfo}>
                <h4 className={styles.domainTitle}>{card.title}</h4>
                <p className={styles.domainSub}>{card.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
