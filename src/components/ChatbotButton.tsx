"use client";

import { MessageSquareText } from "lucide-react";
import styles from "./ChatbotButton.module.css";

export function ChatbotButton() {
  return (
    <div className={styles.chatWrapper}>
      <a 
        href="https://www.chatbase.co/chatbot-iframe/oSgkXRIluyr1LEsXN4bpI" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Open Gagana AI Assistant"
        className={styles.chatLink}
      >
        <span className={styles.statusDot} />
        <MessageSquareText size={15} className={styles.icon} />
        <span className={styles.chatLabel}>Ask AI</span>
      </a>
    </div>
  );
}
