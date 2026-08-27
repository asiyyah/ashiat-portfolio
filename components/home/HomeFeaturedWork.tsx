"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../Home.module.css";
import workStyles from "../work/Work.module.css";

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

// Curated 12-column grid layout for visual rhythm (mirrors the Work page)
const LAYOUT_PATTERN: Array<{
  colSpanClass: string;
  aspectClass: string;
  imageSizes: string;
}> = [
  {
    colSpanClass: workStyles.colSpan8,
    aspectClass: workStyles.aspectWide,
    imageSizes: "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw",
  },
  {
    colSpanClass: workStyles.colSpan4,
    aspectClass: workStyles.aspectStandard,
    imageSizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  },
  {
    colSpanClass: workStyles.colSpan4,
    aspectClass: workStyles.aspectPortrait,
    imageSizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  },
  {
    colSpanClass: workStyles.colSpan4,
    aspectClass: workStyles.aspectStandard,
    imageSizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  },
  {
    colSpanClass: workStyles.colSpan4,
    aspectClass: workStyles.aspectStandard,
    imageSizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  },
  {
    colSpanClass: workStyles.colSpan12,
    aspectClass: workStyles.aspectWide,
    imageSizes: "(max-width: 768px) 100vw, 100vw",
  },
];

function HomeWorkCard({
  study,
  layout,
  index,
}: {
  study: Study;
  layout: { colSpanClass: string; aspectClass: string; imageSizes: string };
  index: number;
}) {
  const href = study.slug ? `/work/${study.slug}?from=home` : "/work";
  const category = study.tags[1] || study.tags[0] || "";
  const role = study.tags[0] || "";

  return (
    <div className={layout.colSpanClass}>
      <Link
        href={href}
        className={workStyles.cardLink}
        aria-label={study.title}
      >
        <div
          className={`${workStyles.imageWrapper} ${layout.aspectClass}`}
        >
          <Image
            src={study.image}
            alt={study.title}
            fill
            sizes={layout.imageSizes}
            className={workStyles.image}
            priority={index === 0}
          />
          <div className={workStyles.arrowBadge} aria-hidden="true">
            ↗
          </div>
        </div>

        <div className={workStyles.cardMeta}>
          <div className={workStyles.cardTagRow}>
            <span className={workStyles.cardCategory}>{role}</span>
            {category && category !== role && (
              <>
                <span className={workStyles.cardDivider}>·</span>
                <span className={workStyles.cardRole}>{category}</span>
              </>
            )}
          </div>
          <h3 className={workStyles.cardTitle}>{study.title}</h3>
          {study.impact && (
            <p className={workStyles.cardImpact}>{study.impact}</p>
          )}
        </div>
      </Link>
    </div>
  );
}

export default function HomeFeaturedWork() {
  const [activeTab, setActiveTab] = useState<Tab>("design");

  const studies = activeTab === "design" ? designStudies : codeStudies;

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
            <div className={workStyles.grid}>
              {studies.map((study, index) => (
                <HomeWorkCard
                  key={study.slug ?? study.title}
                  study={study}
                  layout={LAYOUT_PATTERN[index % LAYOUT_PATTERN.length]}
                  index={index}
                />
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
