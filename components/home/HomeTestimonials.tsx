import styles from "../Home.module.css";

const items = [
  {
    q: "Ashiat completely transformed how our technical team views design. She brought absolute, senior-level mathematical precision to our compliance dashboards, eliminating interface latency from our developer handoffs entirely.",
    name: "Marcus Vance",
    role: "CTO, Fintech Platform",
  },
  {
    q: "Most designers struggle inside enterprise security environments. Ashiat thrived here. She navigated intricate citizen data-flow regulations to design a portal that now effortlessly serves 2 million citizens.",
    name: "Hon. Sarah Davies",
    role: "Chief of Product, Government Digital Services",
  },
  {
    q: "A rare hybrid talent. Ashiat operates like a senior software engineer while maintaining an impeccable eye for typographic hierarchy, grid systems, and spacing scale. Her design system saved us over 400 dev hours this year.",
    name: "Dr. Arthur Pemberton",
    role: "VP of Engineering, Design Systems & Token Engine",
  },
];

export default function HomeTestimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeaderRow}>
          <div>
            <div className={styles.eyebrow}><span className={styles.eyebrowDot} />05 · TESTIMONIALS</div>
            <h2 className={styles.sectionTitle}>Validated in production</h2>
          </div>
        </div>

        <div className={styles.testGrid}>
          {items.map((t, i) => (
            <div key={i} className={styles.quoteCard}>
              <div className={styles.quoteIcon}>&ldquo;</div>
              <p className={styles.quoteText}>{t.q}</p>
              <div>
                <div className={styles.quoteName}>{t.name}</div>
                <div className={styles.quoteRole}>{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
