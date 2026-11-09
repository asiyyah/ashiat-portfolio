import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";
import PlaygroundCanvas from "@/components/playground/PlaygroundCanvas";
import ScrollReveal from "@/components/motion/ScrollReveal";

export const metadata: Metadata = pageMetadata({
  title: "Playground — Design Exploration",
  description:
    "A curated collection of design exploration, experiments, and visual thinking.",
  path: "/playground",
});

export default function PlaygroundPage() {
  return <ScrollReveal><PlaygroundCanvas /></ScrollReveal>;
}
