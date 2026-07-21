import type { Metadata } from "next";
import PlaygroundCard from "@/components/playground/PlaygroundCard";
import { Heading, Body } from "@/components/ui/Typography";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Playground — Design Exploration",
  description:
    "A curated collection of design exploration, experiments, and visual thinking.",
};

const playgroundItems = [
  { title: "UI Concept Exploration", category: "UI Design" },
  { title: "Dashboard Study", category: "Dashboard" },
  { title: "Typography System", category: "Typography" },
  { title: "Component Library", category: "Components" },
  { title: "Interaction Prototype", category: "Interaction" },
  { title: "Visual Experiment", category: "Experiments" },
];

export default function PlaygroundPage() {
  return (
    <Section>
      <div className="max-w-7xl mx-auto">
        <Heading as="h1" className="text-5xl md:text-6xl">
          Playground
        </Heading>
        <Body className="mt-4 max-w-xl" as="p">
          A curated collection of design exploration, experiments, and visual
          thinking.
        </Body>

        <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {playgroundItems.map((item, i) => (
            <PlaygroundCard
              key={item.title}
              title={item.title}
              category={item.category}
              index={i}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
