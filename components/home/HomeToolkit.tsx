import Image from "next/image";
import styles from "../Home.module.css";

const tools = [
  { name: "Figma", src: "/images/tools/figma.svg", width: 256, height: 384 },
  { name: "Claude", src: "/images/tools/claude.svg", width: 256, height: 257 },
  { name: "ChatGPT", src: "/images/tools/chatgpt.svg", width: 256, height: 260 },
  { name: "Antigravity", src: "/images/tools/antigravity.svg", width: 24, height: 24 },
  { name: "VS Code", src: "/images/tools/vscode.svg", width: 256, height: 254 },
  { name: "Framer", src: "/images/tools/framer.svg", width: 256, height: 384 },
  { name: "JavaScript", src: "/images/tools/javascript.svg", width: 256, height: 256 },
  { name: "PostHog", src: "/images/tools/posthog.svg", width: 256, height: 142 },
  { name: "Jira", src: "/images/tools/jira.svg", width: 256, height: 256 },
  { name: "Notion", src: "/images/tools/notion.svg", width: 256, height: 268 },
];

export default function HomeToolkit() {
  return (
    <section className={styles.toolkitSection} aria-labelledby="toolkit-heading">
      <div className={styles.container}>
        <h2 id="toolkit-heading" className={styles.toolkitHeading}>
          Tools I use in my workflow
        </h2>

        <ul className={styles.toolGrid}>
          {tools.map((tool) => (
            <li key={tool.name} className={styles.toolCard} title={tool.name}>
              {/* SVG logos are already optimal, so skip the image optimizer */}
              <Image
                src={tool.src}
                alt={tool.name}
                width={tool.width}
                height={tool.height}
                unoptimized
                className={styles.toolLogo}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
