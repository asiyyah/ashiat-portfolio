import styles from "../Home.module.css";

const items = [
  {
    title: "Complex workflows",
    desc: "Turning multi-step, rule-heavy processes into interfaces people can use with confidence.",
  },
  {
    title: "Data-dense interfaces",
    desc: "Dashboards, tables and configuration screens where accuracy and scannability matter more than decoration.",
  },
  {
    title: "Design systems",
    desc: "Scalable, documented component libraries that allow teams to ship faster with more consistency.",
  },
  {
    title: "Design engineering",
    desc: "Prototyping and building in code, in React and TypeScript, so decisions get tested early and handoff shrinks.",
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
            <h2 className={styles.sectionTitle}>
              What I bring to a <em className={styles.sectionTitleSerif}>product</em>
            </h2>
          </div>
          <p className={styles.sectionLead}>Research, interface design, design systems, and enough code to build what I design.</p>
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
