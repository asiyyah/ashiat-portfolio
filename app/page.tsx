import styles from "@/components/Home.module.css";
import {
  HomeHero,
  HomeFeaturedWork,
  HomeExpertise,
  HomeProcess,
  HomeToolkit,
  HomeTestimonials,
} from "@/components/home";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { getAllPortfolioProjects } from "@/lib/projects";

export default async function Page() {
  const projects = await getAllPortfolioProjects();

  return (
    <div className={styles.page}>
      <HomeHero />
      <ScrollReveal><HomeFeaturedWork projects={projects} /></ScrollReveal>
      <ScrollReveal><HomeExpertise /></ScrollReveal>
      {/* Not wrapped in ScrollReveal: the pinned section must not fade or shift while it sticks. */}
      <HomeProcess />
      <ScrollReveal y={0}><HomeToolkit /></ScrollReveal>
      <ScrollReveal><HomeTestimonials /></ScrollReveal>
    </div>
  );
}
