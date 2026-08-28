import styles from "@/components/Home.module.css";
import {
  HomeHero,
  HomeFeaturedWork,
  HomeExpertise,
  HomeProcess,
  HomeToolkit,
  HomeTestimonials,
  HomeClosingCTA,
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
      <ScrollReveal><HomeProcess /></ScrollReveal>
      <ScrollReveal><HomeToolkit /></ScrollReveal>
      <ScrollReveal><HomeTestimonials /></ScrollReveal>
      <ScrollReveal><HomeClosingCTA /></ScrollReveal>
    </div>
  );
}
