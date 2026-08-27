"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Work.module.css";
import type { DesignProject, CodeProject } from "@/types/project";

interface WorkContentProps {
  designProjects: DesignProject[];
  codeProjects: CodeProject[];
}

type TabKey = "design" | "code";

// Curated grid configuration for visual rhythm
interface CardLayoutConfig {
  colSpanClass: string;
  aspectClass: string;
  imageSizes: string;
}

const DESIGN_LAYOUT_PATTERN: CardLayoutConfig[] = [
  {
    colSpanClass: styles.colSpan8,
    aspectClass: styles.aspectWide,
    imageSizes: "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw",
  },
  {
    colSpanClass: styles.colSpan4,
    aspectClass: styles.aspectStandard,
    imageSizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  },
  {
    colSpanClass: styles.colSpan4,
    aspectClass: styles.aspectPortrait,
    imageSizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  },
  {
    colSpanClass: styles.colSpan4,
    aspectClass: styles.aspectStandard,
    imageSizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  },
  {
    colSpanClass: styles.colSpan4,
    aspectClass: styles.aspectStandard,
    imageSizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  },
  {
    colSpanClass: styles.colSpan12,
    aspectClass: styles.aspectWide,
    imageSizes: "(max-width: 768px) 100vw, 100vw",
  },
];

const CODE_LAYOUT_PATTERN: CardLayoutConfig[] = [
  {
    colSpanClass: styles.colSpan7,
    aspectClass: styles.aspectWide,
    imageSizes: "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 58vw",
  },
  {
    colSpanClass: styles.colSpan5,
    aspectClass: styles.aspectStandard,
    imageSizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 42vw",
  },
  {
    colSpanClass: styles.colSpan6,
    aspectClass: styles.aspectLandscape,
    imageSizes: "(max-width: 768px) 100vw, 50vw",
  },
  {
    colSpanClass: styles.colSpan6,
    aspectClass: styles.aspectLandscape,
    imageSizes: "(max-width: 768px) 100vw, 50vw",
  },
];

function getLayoutConfig(
  index: number,
  pattern: CardLayoutConfig[],
  projectAspect?: string
): CardLayoutConfig {
  const defaultPattern = pattern[index % pattern.length];
  if (!projectAspect) return defaultPattern;

  let aspectClass = defaultPattern.aspectClass;
  if (projectAspect === "portrait") aspectClass = styles.aspectPortrait;
  else if (projectAspect === "wide") aspectClass = styles.aspectWide;
  else if (projectAspect === "square") aspectClass = styles.aspectSquare;
  else if (projectAspect === "landscape") aspectClass = styles.aspectLandscape;

  return {
    ...defaultPattern,
    aspectClass,
  };
}

export default function WorkContent({
  designProjects,
  codeProjects,
}: WorkContentProps) {
  const [activeTab, setActiveTab] = useState<TabKey>("design");

  return (
    <section className={styles.workSection}>
      <div className={styles.container}>
        {/* Header with right-aligned category switcher */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Selected Archive
            </div>
            <h1 className={styles.title}>Work</h1>
            <p className={styles.lead}>
              Selected work across product design, systems and things I&apos;ve built.
            </p>
          </div>

          <div className={styles.filterWrapper}>
            <div
              className={styles.filterContainer}
              role="tablist"
              aria-label="Work categories"
            >
              <button
                id="tab-design"
                role="tab"
                type="button"
                aria-selected={activeTab === "design"}
                aria-controls="panel-design"
                tabIndex={activeTab === "design" ? 0 : -1}
                onClick={() => setActiveTab("design")}
                className={`${styles.filterBtn} ${
                  activeTab === "design" ? styles.filterBtnActive : ""
                }`}
              >
                Design
              </button>
              <button
                id="tab-code"
                role="tab"
                type="button"
                aria-selected={activeTab === "code"}
                aria-controls="panel-code"
                tabIndex={activeTab === "code" ? 0 : -1}
                onClick={() => setActiveTab("code")}
                className={`${styles.filterBtn} ${
                  activeTab === "code" ? styles.filterBtnActive : ""
                }`}
              >
                Code
              </button>
            </div>
          </div>
        </header>

        {/* Design Tab Panel */}
        {activeTab === "design" && (
          <div
            id="panel-design"
            role="tabpanel"
            aria-labelledby="tab-design"
            className={styles.gridAnimated}
          >
            {designProjects.length > 0 ? (
              <div className={styles.grid}>
                {designProjects.map((project, index) => {
                  const layout = getLayoutConfig(
                    index,
                    DESIGN_LAYOUT_PATTERN,
                    project.aspectRatio
                  );

                  return (
                    <div
                      key={project.slug}
                      className={layout.colSpanClass}
                    >
                      <Link
                        href={`/work/${project.slug}?from=work`}
                        className={styles.cardLink}
                        aria-label={`${project.title} - ${project.industry}`}
                      >
                        <div
                          className={`${styles.imageWrapper} ${layout.aspectClass}`}
                        >
                          <Image
                            src={project.coverImage}
                            alt={project.title}
                            fill
                            sizes={layout.imageSizes}
                            className={styles.image}
                            priority={index === 0}
                          />
                          <div
                            className={styles.arrowBadge}
                            aria-hidden="true"
                          >
                            ↗
                          </div>
                        </div>

                        <div className={styles.cardMeta}>
                          <div className={styles.cardTagRow}>
                            <span className={styles.cardCategory}>
                              {project.industry}
                            </span>
                            <span className={styles.cardDivider}>·</span>
                            <span className={styles.cardRole}>
                              {project.role}
                            </span>
                          </div>

                          <h2 className={styles.cardTitle}>{project.title}</h2>

                          {project.impact && (
                            <p className={styles.cardImpact}>{project.impact}</p>
                          )}
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <p className={styles.emptyText}>No design projects found.</p>
                <p className={styles.emptySubtext}>
                  Check back soon for new case studies.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Code Tab Panel */}
        {activeTab === "code" && (
          <div
            id="panel-code"
            role="tabpanel"
            aria-labelledby="tab-code"
            className={styles.gridAnimated}
          >
            {codeProjects.length > 0 ? (
              <div className={styles.grid}>
                {codeProjects.map((project, index) => {
                  const layout = getLayoutConfig(
                    index,
                    CODE_LAYOUT_PATTERN,
                    project.aspectRatio
                  );

                  return (
                    <div
                      key={project.slug}
                      className={layout.colSpanClass}
                    >
                      <Link
                        href={`/work/${project.slug}?from=work`}
                        className={styles.cardLink}
                        aria-label={project.title}
                      >
                        <div
                          className={`${styles.imageWrapper} ${layout.aspectClass}`}
                        >
                          <Image
                            src={project.coverImage}
                            alt={project.title}
                            fill
                            sizes={layout.imageSizes}
                            className={styles.image}
                            priority={index === 0}
                          />
                          <div
                            className={styles.arrowBadge}
                            aria-hidden="true"
                          >
                            ↗
                          </div>
                        </div>

                        <div className={styles.cardMeta}>
                          <div className={styles.cardTagRow}>
                            <span className={styles.cardCategory}>
                              {project.stack?.slice(0, 3).join(" · ") || "Engineering"}
                            </span>
                          </div>

                          <h2 className={styles.cardTitle}>{project.title}</h2>

                          {project.summary && (
                            <p className={styles.cardImpact}>{project.summary}</p>
                          )}
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <p className={styles.emptyText}>
                  No code projects currently published.
                </p>
                <p className={styles.emptySubtext}>
                  Check back soon for open-source tools and experimental builds.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
