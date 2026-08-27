"use client";

import { useState } from "react";
import styles from "../Home.module.css";

const items = [
  {
    q: "Ashiat completely transformed how our technical team views design. She brought absolute senior-level precision to our compliance dashboards, eliminating interface latency from our developer handoffs entirely.",
    name: "Marcus Vance",
    role: "CTO, Fintech Platform",
    initials: "MV",
  },
  {
    q: "Most designers struggle inside enterprise security environments. Ashiat thrived here. She navigated intricate citizen data-flow regulations to design a portal that now effortlessly serves 2 million citizens.",
    name: "Hon. Sarah Davies",
    role: "Chief of Product, Government Digital Services",
    initials: "SD",
  },
  {
    q: "A rare hybrid talent. Ashiat operates like a senior software engineer while maintaining an impeccable eye for typographic hierarchy, grid systems, and spacing scale. Her design system saved us over 400 dev hours.",
    name: "Dr. Arthur Pemberton",
    role: "VP of Engineering, Design Systems & Token Engine",
    initials: "AP",
  },
];

export default function HomeTestimonials() {
  const [active, setActive] = useState(0);
  const current = items[active];

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
                  <div className={styles.testimonialRole}>{item.role}</div>
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
