import styles from "../Home.module.css";

const steps = [
  {
    id: 1,
    title: "Discover",
    desc: "Stakeholder interviews, user research, competitive analysis. I map mental models and document the forces — business, technical, regulatory — that shape every decision downstream.",
  },
  {
    id: 2,
    title: "Define",
    desc: "Insight clustering, opportunity framing, and hypothesis formation. The goal: a single sentence everyone — CEO to engineer — can rally behind.",
  },
  {
    id: 3,
    title: "Prototype",
    desc: "Paper sketches to high-fidelity interactive prototypes. Whatever fidelity the question demands — no wasted effort on what doesn't need testing yet.",
  },
  {
    id: 4,
    title: "Validate",
    desc: "Moderated usability sessions, guerrilla testing, or async tools. Findings documented with ruthless precision and fed straight back into the design loop.",
  },
  {
    id: 5,
    title: "Build",
    desc: "I write production-ready React components, collaborate in code review, and close the gap between design intent and shipped reality.",
  },
  {
    id: 6,
    title: "Measure",
    desc: "Instrumentation strategy, analytics setup, and post-launch review cadences. Design is never done — it iterates on evidence.",
  },
];

export default function HomeProcess() {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          03 · Process
        </div>
        <h2 className={styles.sectionTitle}>
          How I <em className={styles.sectionTitleSerif}>work</em>
        </h2>

        <div className={styles.processScroll}>
          {steps.map((s) => (
            <div key={s.id} className={styles.processCard}>
              <div className={styles.processCardStep}>Step {String(s.id).padStart(2, "0")}</div>
              <div className={styles.processCardNum}>{String(s.id).padStart(2, "0")}</div>
              <div className={styles.processCardTitle}>{s.title}</div>
              <div className={styles.processCardDesc}>{s.desc}</div>
            </div>
          ))}
        </div>

        <p className={styles.processScrollHint}>
          <span>→</span> Scroll to explore
        </p>
      </div>
    </section>
  );
}
