import styles from "../Home.module.css";

export default function HomeClosingCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.eyebrow}><span className={styles.eyebrowDot} />INITIATE INQUIRY</div>
        <h2 className={styles.ctaTitle}>
          Let&apos;s design and build something precise.
        </h2>
        <p className={styles.ctaLead}>
          Currently accepting select advisory roles, design system consultancies,
          and core product design+engineering partnerships for Q3 2025.
        </p>
        <div className={styles.ctaRow}>
          <button className={styles.btnPrimary}>SECURE EMAIL PORTAL →</button>
        </div>
        <div className={styles.ctaLinks}>
          <a className={styles.ctaSocialLink} href="#">LINKEDIN</a>
          <a className={styles.ctaSocialLink} href="#">GITHUB</a>
          <a className={styles.ctaSocialLink} href="#">TWITTER / X</a>
        </div>
      </div>
    </section>
  );
}
