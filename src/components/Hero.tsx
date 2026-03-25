"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import Image from "next/image";

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.heroContainer}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            I&apos;m Gagana Yushan Perera.
          </motion.h1>
          
          <motion.h2 
            className={styles.tagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Designer. Creator. Business Analytics. Project Management.
          </motion.h2>
          
          <motion.p 
            className={styles.intro}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            A creative tech enthusiast blending design, AI, and product thinking to build impactful digital experiences.
          </motion.p>
          
          <motion.div 
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a href="#projects" className={styles.primaryBtn}>View Work</a>
            <a href="#contact" className={styles.secondaryBtn}>Contact Me</a>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className={styles.imageGlow} />
          <div className={styles.imageContainer}>
            <Image 
              src="/profile.jpeg"
              alt="Gagana Yushan Perera"
              fill
              className={styles.profileImage}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
