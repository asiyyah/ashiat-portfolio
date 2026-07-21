import styles from "../Home.module.css";

const items = [
  {
    title: "Enterprise UX",
    desc: "Designing complex interfaces for high-stakes environments where accuracy, efficiency, and trust are non-negotiable.",
  },
  {
    title: "Product Strategy",
    desc: "Aligning user research, business objectives, and technical constraints into coherent product narratives.",
  },
  {
    title: "Fintech Systems",
    desc: "Revenue management, compliance workflows, and data-dense dashboards for regulated industries.",
  },
  {
    title: "Design Systems",
    desc: "Scalable, documented component libraries that allow teams to ship faster with more consistency.",
  },
  {
    title: "Government Services",
    desc: "Accessible, plain-language digital services serving citizens across demographics and devices.",
  },
  {
    title: "AI-assisted Dev",
    desc: "Using LLMs and AI coding tools to compress the prototype-to-production cycle without sacrificing product thinking.",
  },
  {
    title: "Rapid Prototyping",
    desc: "High-fidelity interactive prototypes that test real hypotheses with real users before production code is written.",
  },
  {
    title: "Design Engineering",
    desc: "Bridging design and frontend — producing components, utilities, and production UI that need no translation.",
  },
];

export default function HomeExpertise() {
  return (
    <section className={styles.sectionAlt}>
      <div className={styles.container}>
        <div className={styles.sectionHeaderRow}>
          <div>
            <div className={styles.eyebrow}><span className={styles.eyebrowDot} />02 · EXPERTISE</div>
            <h2 className={styles.sectionTitle}>What I do.</h2>
          </div>
        </div>

        <div className={styles.servicesGrid}>
          {items.map((it, i) => (
            <div key={i} className={styles.serviceItem}>
              <div className={styles.serviceNum}>{String(i + 1).padStart(2, "0")}</div>
              <div className={styles.serviceTitle}>{it.title}</div>
              <div className={styles.serviceDesc}>{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
