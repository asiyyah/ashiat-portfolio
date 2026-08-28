import type { Metadata } from "next";
import PlaygroundCanvas from "@/components/playground/PlaygroundCanvas";
import ScrollReveal from "@/components/motion/ScrollReveal";

export const metadata: Metadata = {
  title: "Playground — Design Exploration",
  description:
    "A curated collection of design exploration, experiments, and visual thinking.",
};

export default function PlaygroundPage() {
  return <ScrollReveal><PlaygroundCanvas /></ScrollReveal>;
}
