"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./SplashScreen.module.css";

const words = ["Technology", "Business", "Creativity"];

export function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showBrand, setShowBrand] = useState(false);

  useEffect(() => {
    // Check if splash screen was already shown in this tab session
    const hasSeenSplash = sessionStorage.getItem("gagana_splash_shown");
    if (hasSeenSplash) {
      setLoading(false);
      return;
    }

    // Lock body scroll while splash is active
    document.body.style.overflow = "hidden";

    // Progress counter animation from 0 to 100%
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    // Sequential word reveal
    const wordTimer1 = setTimeout(() => setCurrentWordIndex(1), 500);
    const wordTimer2 = setTimeout(() => setCurrentWordIndex(2), 1000);
    const brandTimer = setTimeout(() => setShowBrand(true), 1500);

    // Complete splash screen and slide curtain away
    const finishTimer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("gagana_splash_shown", "true");
    }, 2400);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(wordTimer1);
      clearTimeout(wordTimer2);
      clearTimeout(brandTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className={styles.splashOverlay}
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: [0.77, 0, 0.175, 1] }
          }}
        >
          {/* Subtle Ambient Glow & Architectural Lines */}
          <div className="mil-lines-bg" style={{ opacity: 0.05 }} />
          <div className={styles.ambientBacklight} />

          {/* Top Brand Monogram */}
          <div className={styles.splashTopBar}>
            <span className={styles.topLogo}>
              Gagana<span className={styles.goldDot}>.</span>
            </span>
            <span className={styles.topLabel}>Portfolio &bull; 2026</span>
          </div>

          {/* Center Stage: Split Thin & Bold Cinematic Text */}
          <div className={styles.centerStage}>
            {!showBrand ? (
              <div className={styles.wordsRow}>
                {words.map((word, idx) => (
                  <motion.span
                    key={word}
                    className={`${styles.splashWord} ${
                      idx === 1 ? styles.wordHighlight : styles.wordThin
                    } ${idx <= currentWordIndex ? styles.wordVisible : styles.wordHidden}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{
                      opacity: idx <= currentWordIndex ? 1 : 0.2,
                      y: idx <= currentWordIndex ? 0 : 18,
                    }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {word}
                    {idx < words.length - 1 && (
                      <span className={styles.wordDot}>&bull;</span>
                    )}
                  </motion.span>
                ))}
              </div>
            ) : (
              <motion.div
                className={styles.brandRevealBox}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className={styles.brandMainTitle}>
                  Gagana <span className={styles.thinTitle}>Yushan</span> Perera
                </h1>
                <p className={styles.brandSubTitle}>
                  Project Management <span className={styles.goldDot}>&bull;</span> Business Analysis
                </p>
              </motion.div>
            )}
          </div>

          {/* Bottom Bar: Progress Line and Counter */}
          <div className={styles.splashBottomBar}>
            <div className={styles.bottomMeta}>
              <span className={styles.loadingStatusText}>
                {progress < 100 ? "Initializing Experience" : "Welcome"}
              </span>
              <span className={styles.progressPercent}>
                {progress < 10 ? `0${progress}` : progress}
                <span className={styles.percentSymbol}>%</span>
              </span>
            </div>

            <div className={styles.progressLineTrack}>
              <div
                className={styles.progressLineFill}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

