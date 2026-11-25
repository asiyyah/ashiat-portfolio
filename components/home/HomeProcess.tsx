import Image from "next/image";
import homeStyles from "../Home.module.css";
import styles from "./Process.module.css";
import ScrollReveal from "@/components/motion/ScrollReveal";
import ProcessCard from "./ProcessCard";

const steps = [
  {
    id: 1,
    title: "Understand the system",
    desc: "I talk to stakeholders and sit in requirement reviews to learn how the product really works: who uses it, what each role is allowed to do, and the business and regulatory rules it runs on.",
  },
  {
    id: 2,
    title: "Frame the problem",
    desc: "I write a brief that sets the problem, the scope and a few principles. Those principles settle arguments later and keep a complex product consistent.",
  },
  {
    id: 3,
    title: "Map flows and states",
    desc: "I map journeys, roles, permissions and every state a record can be in. In complex products, most of the design work happens here, before any screen exists.",
  },
  {
    id: 4,
    title: "Explore, then design",
    desc: "I take key screens into several directions, choose the strongest, then design it in high fidelity in Figma, building on existing patterns and the design system.",
  },
  {
    id: 5,
    title: "Prototype, review, iterate",
    desc: "I put interactive prototypes in front of users, PMs and developers, and iterate on what they find. When a mockup can't answer the question, I build a thin slice in code with AI and let real use push back.",
  },
  {
    id: 6,
    title: "Refine and hand over",
    desc: "I design the loading, empty, error and edge states, tidy components and tokens, and document decisions so engineers ship what was designed.",
  },
];

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

export default function HomeProcess() {
  return (
    <section className={homeStyles.processSection} aria-labelledby="process-heading">
      <div className={`${homeStyles.container} ${styles.layout}`}>
        <ScrollReveal className={styles.intro}>
          <h2 id="process-heading" className={homeStyles.sectionTitle}>
            How I <em className={homeStyles.sectionTitleSerif}>work</em>
          </h2>
          <p className={styles.lead}>
            Design leads. Building is how I pressure-test it. The steps loop more than they line up.
          </p>

          <h3 className={styles.toolsHeading}>Tools I use in my workflow</h3>
          <ul className={homeStyles.toolGrid}>
            {tools.map((tool) => (
              <li key={tool.name} className={homeStyles.toolCard} title={tool.name}>
                {/* SVG logos are already optimal, so skip the image optimizer */}
                <Image
                  src={tool.src}
                  alt={tool.name}
                  width={tool.width}
                  height={tool.height}
                  unoptimized
                  className={homeStyles.toolLogo}
                />
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ol className={styles.steps}>
          {steps.map((step) => (
            <li key={step.id} className={styles.step}>
              {/* Each card fades in from the bottom of the screen and out at the top, following scroll. */}
              <ProcessCard className={styles.card}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </ProcessCard>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
