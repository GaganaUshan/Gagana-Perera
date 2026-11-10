"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle2, ArrowRight, Clock, Copy } from "lucide-react";
import styles from "./Contact.module.css";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied to clipboard!`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill in your name, email, and message.");
      return;
    }

    setIsSubmitting(true);
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );

    setTimeout(() => {
      window.location.href = `mailto:gaganaushan16@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      showToast("Opening email client...");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 500);
  };

  return (
    <section className="section-light" id="contact">
      <div className="container">
        {/* Section Meta */}
        <div className="section-meta-top">
          <span className="section-num">08</span>
          <span className="section-category">CONTACT</span>
        </div>

        <div className={styles.contactGrid}>
          {/* Left Column: Headline & Form */}
          <div className={styles.leftCol}>
            <h2 className="section-headline" style={{ marginBottom: "2.5rem" }}>
              Let&apos;s build something great together.
            </h2>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className={styles.input}
                />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Your Email"
                  className={styles.input}
                />
              </div>

              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Subject"
                className={styles.input}
              />

              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Your Message"
                className={styles.textarea}
              />

              <button type="submit" disabled={isSubmitting} className="btn-black">
                <span>{isSubmitting ? "PREPARING..." : "SEND MESSAGE"}</span>
                <ArrowRight size={15} />
              </button>
            </form>
          </div>

          {/* Right Column: Direct Info List */}
          <div className={styles.rightCol}>
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <Mail size={18} className={styles.infoIcon} />
                <div className={styles.infoTexts}>
                  <span className={styles.infoLabel}>EMAIL</span>
                  <a href="mailto:gaganaushan16@gmail.com" className={styles.infoValue}>
                    gaganaushan16@gmail.com
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("gaganaushan16@gmail.com", "Email")}
                  className={styles.copyBtn}
                  title="Copy Email"
                >
                  <Copy size={13} />
                </button>
              </div>

              <div className={styles.infoItem}>
                <Phone size={18} className={styles.infoIcon} />
                <div className={styles.infoTexts}>
                  <span className={styles.infoLabel}>PHONE</span>
                  <a href="tel:+94773650313" className={styles.infoValue}>
                    +94 77 365 0313
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard("+94773650313", "Phone")}
                  className={styles.copyBtn}
                  title="Copy Phone"
                >
                  <Copy size={13} />
                </button>
              </div>

              <div className={styles.infoItem}>
                <MapPin size={18} className={styles.infoIcon} />
                <div className={styles.infoTexts}>
                  <span className={styles.infoLabel}>LOCATION</span>
                  <span className={styles.infoValue}>Sri Lanka (GMT+5:30)</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <Clock size={18} className={styles.infoIcon} />
                <div className={styles.infoTexts}>
                  <span className={styles.infoLabel}>AVAILABILITY</span>
                  <span className={styles.infoValue}>Open for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="toast-notification"
          >
            <CheckCircle2 size={16} color="#e50914" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
