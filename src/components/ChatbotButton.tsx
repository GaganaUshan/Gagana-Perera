"use client";

import { motion } from "framer-motion";
import styles from "./ChatbotButton.module.css";

export function ChatbotButton() {
  return (
    <div className={styles.chatWrapper}>
      <a 
        href="https://www.chatbase.co/chatbot-iframe/oSgkXRIluyr1LEsXN4bpI" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Open Chatbot"
      >
        <motion.div 
          className={styles.chatBtn}
          animate={{ y: [0, -8, 0] }}
          transition={{ 
            repeat: Infinity, 
            duration: 2.5, 
            ease: "easeInOut" 
          }}
          whileHover={{ scale: 1.1, translateY: -5, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
          </svg>
        </motion.div>
      </a>
    </div>
  );
}
