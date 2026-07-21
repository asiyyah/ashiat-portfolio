import styles from "../Home.module.css";

const rows: [string, string[]][] = [
  ["Design", ["Figma", "FigJam", "Framer", "Principle", "ProtoPie"]],
  ["Development", ["React", "TypeScript", "HTML / CSS", "Node.js", "Tailwind CSS"]],
  ["AI", ["Claude", "Cursor", "ChatGPT", "GitHub Copilot", "v0"]],
  ["Research", ["Maze", "Hotjar", "Dovetail", "UserTesting"]],
  ["Collaboration", ["Notion", "Jira", "Linear", "Slack", "GitHub"]],
];

export default function HomeToolkit() {
  return (
    <section className={styles.toolkitSection}>
      <div className={styles.container}>
        <div className={styles.toolkitIntro}>
          <div>
            <div className={styles.eyebrow}><span className={styles.eyebrowDot} />04 · TOOLS &amp; STACK</div>
            <h2 className={styles.sectionTitle}>The toolkit.</h2>
          </div>
          <p className={styles.toolkitLead}>
            Tools are means, not ends. I am fluent across the design-to-production
            pipeline — from whiteboard sketch to deployed component.
          </p>
        </div>

        <div className={styles.toolTable}>
          {rows.map(([label, tools], i) => (
            <div key={i} className={styles.toolRow}>
              <div className={styles.toolCategory}>{label}</div>
              <div className={styles.toolItems}>
                {tools.map((t) => (
                  <span key={t} className={styles.toolChip}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
