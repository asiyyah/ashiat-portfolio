import type { Metadata } from "next";
import { Heading, Body, Caption, Subheading } from "@/components/ui/Typography";
import Section from "@/components/ui/Section";
import ScrollReveal from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "About — Product Designer",
  description:
    "Product designer specialising in enterprise SaaS, fintech, compliance platforms, and complex product workflows.",
};

const timeline = [
  { year: "2024", event: "Led design for enterprise compliance platform" },
  { year: "2022", event: "Senior Product Designer at fintech company" },
  { year: "2020", event: "Started independent design practice" },
  { year: "2018", event: "Product Designer at SaaS startup" },
  { year: "2016", event: "Began career in product design" },
];

const toolCategories = [
  {
    category: "Design",
    tools: ["Figma", "Framer", "Principle", "After Effects"],
  },
  {
    category: "Development",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "AI",
    tools: ["Claude", "ChatGPT", "Midjourney", "GitHub Copilot"],
  },
  {
    category: "Productivity",
    tools: ["Linear", "Notion", "Superhuman", "Arc"],
  },
];

const workingStyles = [
  {
    title: "Collaborative",
    description:
      "I work embedded with engineering and product teams, not in isolation.",
  },
  {
    title: "Systems-First",
    description: "Every component is designed as part of a larger system.",
  },
  {
    title: "AI-Enhanced",
    description: "I use AI tools to accelerate exploration and implementation.",
  },
  {
    title: "Outcome-Driven",
    description: "Design decisions are measured by business and user impact.",
  },
];

export default function AboutPage() {
  return (
    <Section>
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row items-start gap-12 mb-24">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-surface-hover flex-shrink-0" />
          <div>
            <Heading as="h1" className="text-5xl md:text-6xl">
              About
            </Heading>
            <Body className="mt-6" as="p">
              I design complex products for enterprise, fintech, and compliance
              platforms. My approach combines systems thinking with practical
              implementation experience, bridging the gap between product
              strategy and execution.
            </Body>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mb-24">
          <Heading className="mb-8">Career</Heading>
          <div className="space-y-8">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-6 items-start">
                <p className="text-sm text-muted w-16 flex-shrink-0">
                  {item.year}
                </p>
                <div className="w-px h-full bg-border min-h-6" />
                <p className="text-foreground">{item.event}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mb-24">
          <Heading className="mb-8">Design Philosophy</Heading>
          <div className="space-y-6 text-muted leading-relaxed">
            <Body as="p">
              I approach every problem by first understanding the system it
              lives in. Good design is not about screens; it is about how people
              interact with complex information and make decisions.
            </Body>
            <Body as="p">
              My process emphasises clarity, reducing cognitive load, and
              creating interfaces that feel intuitive even when handling
              sophisticated workflows.
            </Body>
            <Body as="p">
              I work closely with engineering teams and use my understanding of
              implementation to design solutions that are both elegant and
              feasible.
            </Body>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mb-24">
          <Heading className="mb-8">Working Style</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workingStyles.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-lg border border-border"
              >
                <Subheading as="h3" className="mb-2">
                  {item.title}
                </Subheading>
                <Body className="text-sm" as="p">
                  {item.description}
                </Body>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <Heading className="mb-8">Tools &amp; Stack</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {toolCategories.map((cat) => (
              <div key={cat.category}>
                <Caption as="h3" className="mb-3">
                  {cat.category}
                </Caption>
                <ul className="space-y-1">
                  {cat.tools.map((tool) => (
                    <li key={tool} className="text-foreground">
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
