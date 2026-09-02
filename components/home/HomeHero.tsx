import Image from "next/image";
import styles from "../Home.module.css";
import { SOCIAL_LINKS } from "@/lib/site-links";

const images = [
  { src: "/images/ticker-images/Rectangle 3.png", alt: "Design showcase 3" },
  { src: "/images/ticker-images/Rectangle 1.png", alt: "Design showcase 1" },
  { src: "/images/ticker-images/Rectangle 5.png", alt: "Design showcase 5" },
  { src: "/images/ticker-images/Rectangle 2.png", alt: "Design showcase 2" },
  { src: "/images/ticker-images/Rectangle 6.png", alt: "Design showcase 6" },
  { src: "/images/ticker-images/Rectangle 4.png", alt: "Design showcase 4" },
];

function SocialIcon({ label }: { label: (typeof SOCIAL_LINKS)[number]["label"] }) {
  if (label === "LinkedIn") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 7.7H1.7V22h3.5V7.7ZM3.45 2A2.04 2.04 0 1 0 3.45 6.08 2.04 2.04 0 0 0 3.45 2ZM22 13.8c0-4.3-2.3-6.3-5.36-6.3a4.65 4.65 0 0 0-4.2 2.3h-.06V7.7H9V22h3.53v-7.08c0-1.87.35-3.68 2.67-3.68 2.28 0 2.31 2.13 2.31 3.8V22H22v-8.2Z" /></svg>;
  if (label === "GitHub") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.92c-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9v2.77c0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" /></svg>;
  if (label === "Dribbble") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.8"/><path d="M7 4.8c3 3.7 5.2 7.6 6.6 14.2M4 10.2c4.6.1 9.2-1 12.8-4M7 19c2.5-4.2 6.5-6.1 13.8-5.4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>;
  if (label === "Behance") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h6.2c2.8 0 4.6 1.2 4.6 3.6 0 1.5-.72 2.5-1.92 3.05 1.72.49 2.58 1.8 2.58 3.65C14.46 19 12.2 20 9.75 20H3V6Zm3.05 5.65h2.7c1.13 0 1.98-.5 1.98-1.73 0-1.4-1.07-1.67-2.22-1.67H6.05v3.4Zm0 5.96H8.9c1.27 0 2.38-.41 2.38-1.94 0-1.5-.94-2.1-2.32-2.1H6.05v4.04ZM16 6.8h5v1.7h-5V6.8Zm6 8.8h-7.3c.08 1.78.95 2.6 2.52 2.6 1.13 0 2.04-.7 2.22-1.34h2.35c-.75 2.3-2.35 3.28-4.67 3.28-3.14 0-5.09-2.16-5.09-5.25 0-2.99 2.07-5.26 5.09-5.26 3.39 0 5.03 2.85 4.88 5.97Zm-7.3-1.74h4.6c-.25-1.39-.85-2.13-2.26-2.13-1.8 0-2.32 1.4-2.34 2.13Z" /></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.49 22H3.38l7.24-8.28L2.97 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.72L8.43 4.05H6.58L17.8 19.84Z" /></svg>;
}

export default function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            PRODUCT DESIGN + DESIGN ENGINEERING
          </div>

          <h1 className={styles.heroTitle}>
I design clarity into complex digital products.
          </h1>

          <p className={styles.heroLead}>
            I’m a Product Designer focused on enterprise, SaaS, fintech and AI-powered products. I combine systems thinking, product strategy and technical fluency to turn complex workflows, data and business requirements into intuitive experiences, and bring ideas closer to production.
          </p>

          <div className={styles.heroSocials} aria-label="Social profiles">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={styles.heroSocialLink} aria-label={link.label} title={link.label}>
                <SocialIcon label={link.label} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Full-width image ticker */}
      <div className={styles.tickerWrapper}>
        <div className={styles.tickerTrack}>
          {[...images, ...images].map((img, i) => (
            <div key={i} className={styles.tickerItem}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 220px, (max-width: 960px) 260px, 300px"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
