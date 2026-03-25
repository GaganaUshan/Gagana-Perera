"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
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
              Drop an Email
            </a>
            <a href="/CV.pdf" download="Gagana_Perera_CV.pdf" className={styles.secondaryBtn}>
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="toast-notification"
          >
            <CheckCircle2 size={18} />
            <span>Email copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
