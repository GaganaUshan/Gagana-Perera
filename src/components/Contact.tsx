"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./Contact.module.css";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Basic mobile detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    if (!isMobile) {
      e.preventDefault();
      navigator.clipboard.writeText("gaganaushan16@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  return (
    <section className={styles.contact} id="contact">
      <div className={`container ${styles.contactContainer}`}>
        <motion.div 
          className={`glass ${styles.contactBox}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Let&apos;s Build Something Amazing.</h2>
          <p className={styles.subtitle}>
            Feel free to reach out for collaborations, opportunities, or just to say hi!
          </p>
          
          <div className={styles.buttons}>
            <a 
              href="mailto:gaganaushan16@gmail.com" 
              onClick={handleEmailClick}
              className={styles.primaryBtn}
            >
              {copied ? "Email Copied!" : "Drop an Email"}
            </a>
            <a href="/CV.pdf" download="Gagana_Perera_CV.pdf" className={styles.secondaryBtn}>
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
