import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          GYP.
        </Link>
        
        <div className={styles.navLinks}>
          <Link href="#about">About</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
