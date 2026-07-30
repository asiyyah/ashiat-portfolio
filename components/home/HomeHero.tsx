import Image from "next/image";
import styles from "../Home.module.css";

const images = [
  { src: "/images/Rectangle 3.png", alt: "Design showcase 3" },
  { src: "/images/Rectangle 1.png", alt: "Design showcase 1" },
  { src: "/images/Rectangle 5.png", alt: "Design showcase 5" },
  { src: "/images/Rectangle 2.png", alt: "Design showcase 2" },
  { src: "/images/Rectangle 6.png", alt: "Design showcase 6" },
  { src: "/images/Rectangle 4.png", alt: "Design showcase 4" },
  { src: "/images/Rectangle 5.png", alt: "Design showcase 5" },
  { src: "/images/Rectangle 3.png", alt: "Design showcase 3" },
  { src: "/images/Rectangle 1.png", alt: "Design showcase 1" },
  { src: "/images/Rectangle 6.png", alt: "Design showcase 6" },
  { src: "/images/Rectangle 4.png", alt: "Design showcase 4" },
  { src: "/images/Rectangle 2.png", alt: "Design showcase 2" },
];

export default function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          PRODUCT DESIGN + DESIGN ENGINEERING
        </div>

        <h1 className={styles.heroTitle}>
          Designing complex digital products that scale&nbsp;— from enterprise
          platforms to AI-powered systems.
        </h1>

        <p className={styles.heroLead}>
          A senior systems designer bridging the gap between product strategy,
          rigorous UX architectures, and production-grade code. Decades spent
          helping financial institutions, government agencies, and AI scale-ups
          turn systemic chaos into precise interfaces.
        </p>

        <div className={styles.ctaRow}>
          <button className={styles.btnPrimary}>VIEW SELECTED WORK →</button>
          <button className={styles.btnOutline}>DOWNLOAD RESUME ⬇</button>
        </div>

        <div className={styles.tickerWrapper}>
          <div className={styles.tickerTrack}>
            {images.map((img, i) => (
              <div key={i} className={styles.tickerItem}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="220px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
