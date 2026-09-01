import Image from "next/image";
import Link from "next/link";
import styles from "../Home.module.css";
import { RESUME_URL } from "@/lib/site-links";

const images = [
  { src: "/images/ticker-images/Rectangle 3.png", alt: "Design showcase 3" },
  { src: "/images/ticker-images/Rectangle 1.png", alt: "Design showcase 1" },
  { src: "/images/ticker-images/Rectangle 5.png", alt: "Design showcase 5" },
  { src: "/images/ticker-images/Rectangle 2.png", alt: "Design showcase 2" },
  { src: "/images/ticker-images/Rectangle 6.png", alt: "Design showcase 6" },
  { src: "/images/ticker-images/Rectangle 4.png", alt: "Design showcase 4" },
];

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

          <div className={styles.ctaRow}>
            <Link href="/work" className={styles.btnPrimary}>
              VIEW SELECTED WORK →
            </Link>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnOutline}
            >
              DOWNLOAD RESUME ⬇
            </a>
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
