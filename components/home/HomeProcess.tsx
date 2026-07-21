"use client";

import { useState } from "react";
import styles from "../Home.module.css";

interface ProcessStep {
  id: number;
  title: string;
  short: string;
  body?: string;
}

const steps: ProcessStep[] = [
  {
    id: 1,
    title: "Discover",
    short: "Understand the problem space before touching tools.",
    body: "Stakeholder interviews, user research, competitive analysis, and heuristic evaluation. I map mental models and document the forces — business, technical, regulatory — that will shape every decision downstream.",
  },
  {
    id: 2,
    title: "Define",
    short: "Synthesize research into a sharp problem statement.",
    body: "Insight clustering, opportunity framing, and hypothesis formation. The goal is a single sentence that everyone — from CEO to engineer — can agree on and rally behind.",
  },
  {
    id: 3,
    title: "Prototype",
    short: "Build the minimum artifact needed to test the riskiest assumption.",
    body: "Paper sketches to high-fidelity interactive prototypes in Figma or code — whatever fidelity the question demands. No wasted effort on what doesn't need testing yet.",
  },
  {
    id: 4,
    title: "Validate",
    short: "Test with real users. Kill bad ideas early.",
    body: "Moderated usability sessions, guerrilla testing, or async tools like Maze. I document findings with ruthless precision and feed them straight back into the design loop.",
  },
  {
    id: 5,
    title: "Build",
    short: "Design into production, not into Figma.",
    body: "I write production-ready React components, collaborate with engineers in code review, and close the gap between design intent and shipped reality.",
  },
  {
    id: 6,
    title: "Measure",
    short: "Define success metrics before shipping.",
    body: "Instrumentation strategy, analytics setup, and post-launch review cadences. Design is never done — it iterates on evidence.",
  },
];

export default function HomeProcess() {
  const [open, setOpen] = useState<number>(1);

  const toggle = (id: number) => setOpen(open === id ? 0 : id);

  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        <div className={styles.eyebrow}><span className={styles.eyebrowDot} />03 · PROCESS</div>
        <h2 className={styles.sectionTitle}>How I work.</h2>
        <p style={{ fontSize: 14, color: "var(--muted)", marginTop: 8, maxWidth: 480, lineHeight: 1.65 }}>
          A rigorous, repeatable process that scales from a two-week sprint to a two-year product engagement.
        </p>

        <div className={styles.accordion}>
          {steps.map((s) => {
            const isOpen = open === s.id;
            return (
              <div
                key={s.id}
                className={styles.accordionRow}
                onClick={() => toggle(s.id)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggle(s.id)}
              >
                <div className={styles.acStep}>{String(s.id).padStart(2, "0")}</div>
                <div className={styles.acContent}>
                  <div className={styles.acTitle}>{s.title}</div>
                  <div className={styles.acShort}>{s.short}</div>
                  {isOpen && s.body && (
                    <div className={styles.acBody}>{s.body}</div>
                  )}
                </div>
                <div className={`${styles.acToggle} ${isOpen ? styles.acToggleOpen : ""}`}>
                  +
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
