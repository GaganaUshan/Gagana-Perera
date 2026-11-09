import React from "react";
import Link from "next/link";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export function PageHeader({ number, title, subtitle, description }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.topRow}>
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>HOME</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent}>{number}</span>
          </div>
          <span className={styles.categoryBadge}>GAGANA YUSHAN PERERA</span>
        </div>

        <div className={styles.mainRow}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        {description && (
          <p className={styles.description}>{description}</p>
        )}

        <div className={styles.divider} />
      </div>
    </header>
  );
}
