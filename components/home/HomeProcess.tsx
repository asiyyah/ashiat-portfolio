"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import styles from "../Home.module.css";

const steps = [
  {
    id: 1,
    title: "Discover",
    desc: "Stakeholder interviews, user research, competitive analysis. I map mental models and document the forces — business, technical, regulatory — that shape every decision downstream.",
  },
  {
    id: 2,
    title: "Define",
    desc: "Insight clustering, opportunity framing, and hypothesis formation. The goal: a single sentence everyone — CEO to engineer — can rally behind.",
  },
  {
    id: 3,
    title: "Prototype",
    desc: "Paper sketches to high-fidelity interactive prototypes. Whatever fidelity the question demands — no wasted effort on what doesn't need testing yet.",
  },
  {
    id: 4,
    title: "Validate",
    desc: "Moderated usability sessions, guerrilla testing, or async tools. Findings documented with ruthless precision and fed straight back into the design loop.",
  },
  {
    id: 5,
    title: "Build",
    desc: "I write production-ready React components, collaborate in code review, and close the gap between design intent and shipped reality.",
  },
  {
    id: 6,
    title: "Measure",
    desc: "Instrumentation strategy, analytics setup, and post-launch review cadences. Design is never done — it iterates on evidence.",
  },
];

/**
 * On large screens with motion allowed, the section pins while the page scrolls and the cards
 * slide sideways until the last one is in view. Everywhere else it stays a normal swipeable row.
 */
const PIN_QUERY = "(min-width: 1025px) and (hover: hover) and (prefers-reduced-motion: no-preference)";

export default function HomeProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [pinned, setPinned] = useState(false);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const query = window.matchMedia(PIN_QUERY);
    const update = () => setPinned(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!pinned) return;
    const measure = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;
      setDistance(Math.max(0, track.scrollWidth - viewport.clientWidth));
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (viewportRef.current) observer.observe(viewportRef.current);
    if (trackRef.current) observer.observe(trackRef.current);
    return () => observer.disconnect();
  }, [pinned]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  const isPinned = pinned && distance > 0;

  const cards = steps.map((s) => (
    <div key={s.id} className={styles.processCard}>
      <div className={styles.processCardStep}>Step {String(s.id).padStart(2, "0")}</div>
      <div className={styles.processCardNum}>{String(s.id).padStart(2, "0")}</div>
      <div className={styles.processCardTitle}>{s.title}</div>
      <div className={styles.processCardDesc}>{s.desc}</div>
    </div>
  ));

  return (
    <section
      ref={sectionRef}
      className={`${styles.processSection} ${isPinned ? styles.processPinned : ""}`}
      style={isPinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div className={isPinned ? styles.processSticky : undefined}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            How I <em className={styles.sectionTitleSerif}>work</em>
          </h2>

          <div ref={viewportRef} className={styles.processViewport}>
            {pinned ? (
              <motion.div ref={trackRef} className={styles.processTrack} style={{ x }}>
                {cards}
              </motion.div>
            ) : (
              <div className={styles.processScroll}>{cards}</div>
            )}
          </div>

          {!pinned && (
            <p className={styles.processScrollHint}>
              <span>→</span> Scroll to explore
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
