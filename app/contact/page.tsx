import type { Metadata } from "next";
import FooterContactForm from "@/components/layout/FooterContactForm";
import { CONTACT_EMAIL } from "@/lib/site-links";
import styles from "./ContactPage.module.css";

export const metadata: Metadata = {
  title: "Contact — Get in Touch",
  description:
    "Have a project or question? Get in touch to discuss how I can help with your product design needs.",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <section className={styles.inner} aria-labelledby="contact-page-heading">
        <div className={styles.copy}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} aria-hidden="true" />
            Available for select projects
          </div>
          <h1 id="contact-page-heading" className={styles.title}>
            Let&apos;s make it <em>clear.</em>
          </h1>
          <p className={styles.intro}>
            Bring me the complicated part. Tell me what you&apos;re building, where it feels stuck, and what a useful outcome looks like.
          </p>
          <a className={styles.email} href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className={styles.formColumn}>
          <p className={styles.formLabel}>Start a conversation</p>
          <FooterContactForm variant="standalone" />
        </div>
      </section>
    </div>
  );
}
