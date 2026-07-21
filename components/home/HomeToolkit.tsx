import styles from "../Home.module.css";

const rows: [string, string[]][] = [
  ["Design", ["Figma", "FigJam", "Framer"]],
  ["Development", ["React", "TypeScript", "HTML / CSS", "Node.js", "Tailwind CSS"]],
  ["AI", ["Claude", "Cursor", "ChatGPT", "GitHub Copilot", "v0"]],
  ["Research", ["Maze", "Miro", "UserTesting"]],
  ["Collaboration", ["Notion", "Jira", "Linear", "Slack", "GitHub"]],
];

const iconSlugs: Record<string, string> = {
  Figma: "figma",
  FigJam: "figjam",
  Framer: "framer",
  Miro: "miro",
  React: "react",
  TypeScript: "typescript",
  "HTML / CSS": "html5",
  "Node.js": "nodedotjs",
  "Tailwind CSS": "tailwindcss",
  Claude: "claude",
  Cursor: "cursor",
  ChatGPT: "openai",
  "GitHub Copilot": "githubcopilot",
  v0: "vercel",
  Maze: "maze",
  UserTesting: "usertesting",
  Notion: "notion",
  Jira: "jira",
  Linear: "linear",
  Slack: "slack",
  GitHub: "github",
};

function ToolChip({ name }: { name: string }) {
  const slug = iconSlugs[name];

  return (
    <span className={styles.toolChip}>
      {slug && (
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt=""
          className={styles.toolIcon}
          width={14}
          height={14}
        />
      )}
      {name}
    </span>
  );
}

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
                  <ToolChip key={t} name={t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
