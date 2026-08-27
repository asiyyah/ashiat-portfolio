import styles from "../Home.module.css";

const items = [
  {
    title: "Enterprise UX",
    desc: "Complex interfaces for high-stakes environments where accuracy, efficiency, and trust are non-negotiable.",
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
];

const skills = [
  "User Research", "Information Architecture", "Interaction Design",
  "Figma", "Design Systems", "Prototyping", "React", "TypeScript",
  "Accessibility (WCAG)", "Motion Design", "AI-assisted Dev",
  "Design Tokens", "Usability Testing", "Data Visualization",
  "Service Design", "Content Strategy", "Front-end Engineering",
];

export default function HomeExpertise() {
  return (
    <section className={styles.sectionAlt}>
      <div className={styles.container}>
        <div className={styles.sectionHeaderRow}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              02 · Expertise
            </div>
            <h2 className={styles.sectionTitle}>
              What I <em className={styles.sectionTitleSerif}>do</em>
            </h2>
          </div>
          <p className={styles.sectionLead}>
            A rare hybrid — part strategist, part craftsperson, part engineer.
            I work across the full design lifecycle.
          </p>
        </div>

        <div className={styles.expertiseLayout}>
          {items.map((it, i) => (
            <div key={i} className={styles.expertiseItem}>
              <div className={styles.expertiseNum}>{String(i + 1).padStart(2, "0")}</div>
              <div className={styles.expertiseTitle}>{it.title}</div>
              <div className={styles.expertiseDesc}>{it.desc}</div>
            </div>
          ))}
        </div>

        {/* Skills ticker */}
        <div className={styles.skillsTicker}>
          <div className={styles.skillsTrack}>
            {[...skills, ...skills].map((s, i) => (
              <span key={i} className={styles.skillChip}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
