"use client";

import { motion } from "framer-motion";
import styles from "./Vision.module.css";

export function Vision() {
  const text = "I aim to become a creative product leader who builds meaningful digital solutions that impact people's lives.";

  return (
    <section className={styles.vision}>
      <div className={`container ${styles.visionContainer}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.quoteMark}>&ldquo;</div>
          <h2 className={styles.text}>
            {text.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} style={{ display: "inline-block", marginRight: "0.25em" }}>
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    style={{ display: "inline-block" }}
                    whileHover={{ 
                      y: -8, 
                      color: "var(--muted)",
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h2>
          <div className={styles.quoteMarkRt}>&rdquo;</div>
        </motion.div>
      </div>
    </section>
  );
}
