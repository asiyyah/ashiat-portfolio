import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { RESUME_URL, SOCIAL_LINKS } from "@/lib/site-links";
import styles from "./AboutPage.module.css";

export const metadata: Metadata = {
  title: "About Ashiat — Product Designer",
  description: "The story, perspective, and interests of Ashiat Abdulkadir, a product designer working across complex digital products.",
};

const journey = [
  { number: "01", title: "AI-powered fintech", description: "Learning how emerging technology can support better financial decisions and experiences." },
  { number: "02", title: "Business fintech", description: "Working across POS, inventory management, payments, and collections in one connected product." },
  { number: "03", title: "Superapp products", description: "Thinking through broad ecosystems where many everyday services need to feel like one experience." },
  { number: "04", title: "Proptech and consulting", description: "Moving between focused product problems, different industries, and multidisciplinary teams." },
];

const interests = [
  { title: "Stories", description: "Reading webtoons and settling into a favourite drama." },
  { title: "Sound", description: "Listening to music, often across languages and cultures." },
  { title: "The sky", description: "Noticing light, clouds, colour, and landscapes—and stopping to photograph them." },
  { title: "Languages", description: "Listening to how different languages sound through music, film, and everyday content." },
];

export default function AboutPage() {
  const linkedIn = SOCIAL_LINKS.find((link) => link.label === "LinkedIn");

  return (
    <div className={styles.page}>
      <ScrollReveal>
        <header className={`${styles.container} ${styles.hero}`}>
          <div className={styles.heroCopy}>
            <div className={styles.eyebrow}><span className={styles.dot} aria-hidden="true" />A little about me</div>
            <h1 className={styles.heroTitle}>
              Hi, I&apos;m <span className={styles.inlinePortrait} aria-hidden="true"><Image src="/images/about/ashiat-avatar.jpg" alt="" fill sizes="120px" className={styles.photo} priority /></span> Ashiat. I followed <em>curiosity</em> into product design.
            </h1>
            <div className={styles.heroFooter}>
              <p className={styles.heroIntro}>I design complex digital products, but the story started much more simply: I heard the words “product designer,” became curious, and kept following every question that came after.</p>
              <div className={styles.heroActions}>
                <a className={styles.textLink} href={RESUME_URL} target="_blank" rel="noopener noreferrer">View résumé ↗</a>
                {linkedIn && <a className={styles.textLink} href={linkedIn.href} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>}
              </div>
            </div>
          </div>
        </header>
      </ScrollReveal>

      <ScrollReveal>
        <section className={styles.storySection}>
          <div className={`${styles.container} ${styles.storyGrid}`}>
            <p className={styles.sectionLabel}>How it started</p>
            <div className={styles.storyCopy}>
              <p className={styles.storyLead}>I wanted to understand how the products and apps I used every day were actually <em>made.</em></p>
              <div className={styles.storyBody}>
                <p>That curiosity turned into consuming everything I could find about product design. The more I learnt, the more interested I became—not only in how interfaces looked, but in how products worked, how decisions were made, and how many moving parts had to come together behind a seemingly simple experience.</p>
                <p>I kept learning and somehow kept finding myself in teams building increasingly complex tools. Looking back, I don&apos;t think I chose one perfectly mapped path. It carved itself while I was busy following the next interesting problem.</p>
                <p>Somewhere along the way I also explored Web3. Each environment added another way of thinking about systems, trust, behaviour, and the relationship people have with technology.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className={`${styles.container} ${styles.section}`}>
          <div className={styles.sectionHeader}><p className={styles.sectionLabel}>The path so far</p><h2 className={styles.sectionTitle}>Different industries, one recurring theme: complexity.</h2></div>
          <div className={styles.journeyGrid}>
            {journey.map((item) => (
              <article key={item.number} className={styles.journeyItem}><span className={styles.journeyNumber}>{item.number}</span><h3>{item.title}</h3><p>{item.description}</p></article>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className={styles.lifeSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}><p className={styles.sectionLabel}>Away from the screen</p><h2 className={styles.sectionTitle}>I&apos;m usually collecting stories, sounds, and bits of the sky.</h2></div>
            <div className={styles.photoGrid} aria-label="Personal photographs by Ashiat">
              <figure className={`${styles.photoFigure} ${styles.skyPlaceholder}`}>
                <Image src="/images/about/sky-study.jpg" alt="A layered evening sky photographed by Ashiat" fill sizes="(max-width: 640px) 100vw, 52vw" className={styles.photo} />
                <figcaption>Sky study · through my lens</figcaption>
              </figure>
              <figure className={`${styles.photoFigure} ${styles.landscapePlaceholder}`}>
                <Image src="/images/about/landscape.jpg" alt="A flowering tree in a green landscape photographed by Ashiat" fill sizes="(max-width: 640px) 55vw, 28vw" className={styles.photo} />
                <figcaption>Things I notice</figcaption>
              </figure>
              <figure className={`${styles.photoFigure} ${styles.memoryPlaceholder}`}>
                <Image src="/images/about/personal-moment.jpg" alt="Ashiat visiting a colourful literary exhibition" fill sizes="(max-width: 640px) 40vw, 24vw" className={styles.photo} />
                <figcaption>A moment worth keeping</figcaption>
              </figure>
            </div>
            <div className={styles.interestsGrid}>
              {interests.map((interest, index) => (
                <article key={interest.title} className={styles.interest}><span>{String(index + 1).padStart(2, "0")}</span><h3>{interest.title}</h3><p>{interest.description}</p></article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className={`${styles.container} ${styles.closing}`}>
          <p className={styles.sectionLabel}>What stays constant</p>
          <p className={styles.closingStatement}>Whether I&apos;m untangling a product flow or framing a photograph, I&apos;m drawn to the same thing: noticing details and finding the clearest way to hold onto them.</p>
        </section>
      </ScrollReveal>
    </div>
  );
}
