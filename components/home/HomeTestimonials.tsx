"use client";

import { useState } from "react";
import styles from "../Home.module.css";

const items = [
  {
    q: "I’ve worked with Ashiat on multiple projects, and she’s been an absolute delight. She consistently turns rough ideas into clean, intuitive, and thoughtful designs. She’s collaborative, open to feedback, and very dependable with timelines and handoffs. Beyond her strong UI/UX skills, she brings great energy and professionalism to every project. I’d happily recommend her to any product team.",
    name: "Gad Jacobs",
    initials: "GJ",
  },
  {
    q: "Ashiat is a product designer who understands how design meets implementation. Her designs are well-structured, consistent, and developer-friendly, making them easy to translate into code. She pays close attention to UX details, edge cases, and states, and is always open to feedback and iteration. Her collaborative approach and design thinking consistently improved the product experience.",
    name: "Rotimi Bolorunduro",
    initials: "RB",
  },
];

const recommendationsUrl = "https://ashiatabdulkadir.contra.com/#recommendations";

export default function HomeTestimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeaderRow}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              05 · Testimonials
            </div>
            <h2 className={styles.sectionTitle}>
              Validated in <em className={styles.sectionTitleSerif}>production</em>
            </h2>
          </div>
        </div>

        <div className={styles.testimonialFeature}>
          {items.map((item, i) => (
            <div
              key={i}
              className={`${styles.testimonialSlide} ${i === active ? styles.active : ""}`}
            >
              <span className={styles.testimonialMark} aria-hidden="true">&ldquo;</span>
              <p className={styles.testimonialQuote}>{item.q}</p>
              <div className={styles.testimonialAuthorRow}>
                <div className={styles.testimonialAvatar} aria-hidden="true">
                  {item.initials}
                </div>
                <div>
                  <div className={styles.testimonialName}>{item.name}</div>
                  <a className={styles.testimonialRole} href={recommendationsUrl} target="_blank" rel="noopener noreferrer">
                    Recommended on Contra ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.testimonialNav} role="tablist" aria-label="Testimonial navigation">
          {items.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Testimonial ${i + 1}`}
              className={`${styles.testimonialDot} ${i === active ? styles.activeDot : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
