import styles from "@/components/Home.module.css";
import {
  HomeHero,
  HomeFeaturedWork,
  HomeExpertise,
  HomeProcess,
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
      {/* No section-level fade here: the intro and each step card fade in on their own,
          so the card animation is visible on tablet and mobile too. Tools now live inside this section. */}
      <HomeProcess />
      <ScrollReveal><HomeTestimonials /></ScrollReveal>
    </div>
  );
}
