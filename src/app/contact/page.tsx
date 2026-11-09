import { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Contact } from "@/components/Contact";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact | Gagana Yushan Perera",
  description: "Get in touch with Gagana Yushan Perera for Project Management, Business Analysis, or Creative Design collaborations.",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <PageHeader
        number="05 / CONTACT"
        title="LET'S CONNECT"
        subtitle="AVAILABLE FOR COLLABORATIONS & PROFESSIONAL OPPORTUNITIES"
        description="Whether you want to discuss a new technology initiative, a business analysis engagement, a creative design campaign, or an intern role — I'd love to talk."
      />
      <Contact />
    </div>
  );
}
