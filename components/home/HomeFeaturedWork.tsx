"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../Home.module.css";

interface Study {
  title: string;
  tags: string[];
  impact: string;
  tools: string;
  image: string;
  slug?: string;
}

const designStudies: Study[] = [
  {
    title: "Revenue Management Platform",
    tags: ["Lead Designer", "Fintech", "2022–2024"],
    impact: "Reduced reconciliation time by 60%",
    tools: "Figma / Design System",
    image: "/images/Thumbnail.png",
    slug: "revenue-management-platform",
  },
  {
    title: "Government Digital Services",
    tags: ["Senior Designer", "GovTech", "2022–2023"],
    impact: "Serving 2M+ citizens across 12 services",
    tools: "Web Components / WCAG AA / Token Engine",
    image: "/images/case-study-2.png",
    slug: "government-digital-services",
  },
  {
    title: "Fintech Dashboard",
    tags: ["Product Designer", "Fintech", "2023"],
    impact: "Real-time portfolio analytics for institutional clients",
    tools: "Figma Enterprise / WebSockets / Data Density Optimization",
    image: "/images/case-study-3.png",
    slug: "fintech-payment-platform",
  },
  {
    title: "Compliance Platform",
    tags: ["Lead Designer", "RegTech", "2023"],
    impact: "Automated 80% of manual compliance workflows",
    tools: "Audit Ledger / State Machines / React Native",
    image: "/images/case-study-4.png",
    slug: "compliance-system",
  },
  {
    title: "SaaS Administration System",
    tags: ["Senior Designer", "Enterprise", "2021–2023"],
    impact: "Unified admin experience for 500K+ users",
    tools: "Multi-tenant UI / Figma Code / RBAC Engine",
    image: "/images/case-study-5.png",
    slug: "saas-administration-system",
  },
  {
    title: "Enterprise Operations Platform",
    tags: ["Lead Designer", "Enterprise", "2020–2021"],
    impact: "Streamlined operations across 14 departments",
    tools: "Process Mapping / Internal API Portal / Tailwind CSS",
    image: "/images/case-study-6.png",
    slug: "enterprise-dashboard",
  },
];

const codeStudies: Study[] = [];

type Tab = "design" | "code";

function WorkCard({
  study,
  isLarge,
}: {
  study: Study;
  isLarge: boolean;
}) {
  const href = study.slug ? `/work/${study.slug}?from=home` : "/work";

  return (
    <a
      href={href}
      className={`${styles.workCard} ${isLarge ? styles.workCardLarge : styles.workCardSmall}`}
      aria-label={study.title}
    >
      {/* Image */}
      <div className={styles.workCardImage}>
        <Image
          src={study.image}
          alt={study.title}
          fill
          sizes={isLarge ? "(min-width: 960px) 55vw, 100vw" : "(min-width: 960px) 30vw, 100vw"}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Gradient overlay */}
      <div className={styles.workCardOverlay} />

      {/* Arrow icon */}
      <div className={styles.workCardArrow} aria-hidden="true">↗</div>

      {/* Metadata */}
      <div className={styles.workCardMeta}>
        <div className={styles.workCardTags}>
          {study.tags.map((t) => (
            <span key={t} className={styles.workCardTag}>{t}</span>
          ))}
        </div>
        <h3 className={styles.workCardTitle}>{study.title}</h3>
        <p className={styles.workCardImpact}>{study.impact}</p>
      </div>
    </a>
  );
}

export default function HomeFeaturedWork() {
  const [activeTab, setActiveTab] = useState<Tab>("design");

  const studies = activeTab === "design" ? designStudies : codeStudies;

  // Split into rows: alternating large-left, large-right
  const rows: Array<{ large: Study; small: Study; isLargeLeft: boolean }> = [];
  for (let i = 0; i + 1 < studies.length; i += 2) {
    rows.push({
      large: studies[i],
      small: studies[i + 1],
      isLargeLeft: rows.length % 2 === 0,
    });
  }

  return (
    <section className={styles.sectionNoTop}>
      <div className={styles.container}>
        <div className={styles.sectionHeaderRow}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              01 · Selected Work
            </div>
            <h2 className={styles.sectionTitle}>
              Case studies in <em className={styles.sectionTitleSerif}>utility</em>
            </h2>
          </div>

          <div>
            {/* Tab switcher */}
            <div className={styles.tabContainer}>
              {(["design", "code"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${styles.tabBtn} ${activeTab === tab ? styles.tabBtnActive : ""}`}
                >
                  {tab === "design" ? "Product Design" : "Built with Code"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {studies.length > 0 ? (
          <>
            <div className={styles.workGrid}>
              {rows.map((row, i) => (
                <div
                  key={i}
                  className={`${styles.workRow} ${row.isLargeLeft ? styles.workRowA : styles.workRowB}`}
                >
                  {row.isLargeLeft ? (
                    <>
                      <WorkCard study={row.large} isLarge={true} />
                      <WorkCard study={row.small} isLarge={false} />
                    </>
                  ) : (
                    <>
                      <WorkCard study={row.small} isLarge={false} />
                      <WorkCard study={row.large} isLarge={true} />
                    </>
                  )}
                </div>
              ))}
            </div>

            <Link href="/work" className={styles.workViewAll}>
              View all projects →
            </Link>
          </>
        ) : (
          <p className={styles.emptyTab}>
            No code projects featured yet.{" "}
            <Link href="/work" className={styles.emptyTabLink}>
              View all work →
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
