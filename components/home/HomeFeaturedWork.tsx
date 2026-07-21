"use client";

import Link from "next/link";
import { useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
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
    tools: "Figma / React / TypeScript / D3.js / Design System",
    image: "/images/case-study-1.png",
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

const tabs: { key: Tab; label: string }[] = [
  { key: "design", label: "Product Design" },
  { key: "code", label: "Built with Code" },
];

export default function HomeFeaturedWork() {
  const [activeTab, setActiveTab] = useState<Tab>("design");

  const studies = activeTab === "design" ? designStudies : codeStudies;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeaderRow}>
          <div>
            <div className={styles.eyebrow}><span className={styles.eyebrowDot} />01 · SELECTED WORK</div>
            <h2 className={styles.sectionTitle}>Case studies in utility:</h2>
          </div>
          <div className="tab-container">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`tab-btn ${activeTab === tab.key ? "active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {studies.length > 0 ? (
          <div className={styles.caseGrid}>
            {studies.map((s, i) => (
              <ProjectCard
                key={i}
                title={s.title}
                image={s.image}
                tags={s.tags}
                impact={s.impact}
                tools={s.tools}
                href={s.slug ? `/work/${s.slug}` : "/work"}
              />
            ))}
          </div>
        ) : (
          <p className={styles.emptyTab}>
            No code projects featured yet.{" "}
            <Link href="/work" className={styles.emptyTabLink}>View all work →</Link>
          </p>
        )}
      </div>
    </section>
  );
}
