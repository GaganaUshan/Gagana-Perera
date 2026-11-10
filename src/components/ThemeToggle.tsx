"use client";

import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";
import styles from "./ThemeToggle.module.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.toggleBtn}
      aria-label="Toggle theme mode"
      title={theme === "hybrid" ? "Switch to Full Dark Mode" : "Switch to Editorial Theme"}
    >
      {theme === "hybrid" ? (
        <span className={styles.btnContent}>
          <Moon size={15} />
          <span className={styles.btnText}>Dark</span>
        </span>
      ) : (
        <span className={styles.btnContent}>
          <Sun size={15} />
          <span className={styles.btnText}>Light</span>
        </span>
      )}
    </button>
  );
}

