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
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <div className={styles.iconWrap}>
        {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
      </div>
      <span className={styles.btnText}>{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
