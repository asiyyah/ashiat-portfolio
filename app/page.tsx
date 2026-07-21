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

export default function Page() {
  return (
    <div className={styles.page}>
      <main>
        <HomeHero />
        <HomeFeaturedWork />
        <HomeExpertise />
        <HomeProcess />
        <HomeToolkit />
        <HomeTestimonials />
        <HomeClosingCTA />
      </main>
    </div>
  );
}
