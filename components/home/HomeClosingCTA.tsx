import styles from "../Home.module.css";

export default function HomeClosingCTA() {
  return (
    <section className={styles.ctaBand}>
      <div className={styles.container}>
        <div className={styles.ctaBandEyebrow}>
          <span className={styles.ctaBandDot} />
          Open to work · Q4 2025
        </div>

        <h2 className={styles.ctaBandTitle}>
          Let&apos;s build something{" "}
          <em className={styles.ctaBandTitleSerif}>worth</em>{" "}
          using.
        </h2>

        <p className={styles.ctaBandLead}>
          Currently accepting select advisory roles, design system consultancies,
          and core product design + engineering partnerships.
        </p>

        <a
          href="/contact"
          className={styles.ctaBandBtn}
        >
          Start a conversation →
        </a>

        <div className={styles.ctaSocialLinks}>
          <a className={styles.ctaSocialLink} href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className={styles.ctaSocialLink} href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className={styles.ctaSocialLink} href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X</a>
        </div>
      </div>
    </section>
  );
}
