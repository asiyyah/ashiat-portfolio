"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Work.module.css";
import type { DesignProject, CodeProject, ProjectType } from "@/types/project";
import ScrollReveal from "@/components/motion/ScrollReveal";

interface WorkContentProps {
  designProjects: DesignProject[];
  uiProjects: DesignProject[];
  codeProjects: CodeProject[];
  initialTab?: TabKey;
}

type TabKey = ProjectType;

const tabs: Array<{ id: TabKey; label: string }> = [
  { id: "product-design", label: "Product Design" },
  { id: "ui-design", label: "UI Design" },
  { id: "code", label: "Built with Code" },
];

// Shared homepage rhythm: a balanced 8/4 lead row, three equal cards, then a
// full-width closing card.
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
    aspectClass: styles.aspectPortrait,
    imageSizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  },
  {
    colSpanClass: styles.colSpan4,
    aspectClass: styles.aspectSquare,
    imageSizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  },
  {
    colSpanClass: styles.colSpan4,
    aspectClass: styles.aspectSquare,
    imageSizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw",
  },
  {
    colSpanClass: styles.colSpan4,
    aspectClass: styles.aspectSquare,
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
    aspectClass: styles.aspectLandscape,
    imageSizes: "(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 58vw",
  },
  {
    colSpanClass: styles.colSpan5,
    aspectClass: styles.aspectLandscape,
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

const CODE_COVER_VARIANTS = [
  styles.codeCoverCoral,
  styles.codeCoverInk,
  styles.codeCoverSage,
  styles.codeCoverSand,
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
  uiProjects,
  codeProjects,
  initialTab = "product-design",
}: WorkContentProps) {
  const [activeTab, setActiveTab] = useState<TabKey>(initialTab);

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + tabs.length) % tabs.length;
    setActiveTab(tabs[nextIndex].id);
    document.getElementById(`tab-${tabs[nextIndex].id}`)?.focus();
  };

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
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tab"
                  type="button"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  tabIndex={activeTab === tab.id ? 0 : -1}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${styles.filterBtn} ${
                    activeTab === tab.id ? styles.filterBtnActive : ""
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Design Tab Panel */}
        {activeTab === "product-design" && (
          <div
            id="panel-product-design"
            role="tabpanel"
            aria-labelledby="tab-product-design"
            className={styles.gridAnimated}
          >
            {designProjects.length > 0 ? (
              <div className={styles.grid}>
                {designProjects.map((project, index) => {
                  const layout = getLayoutConfig(
                    index,
                    DESIGN_LAYOUT_PATTERN
                  );

                  return (
                    <ScrollReveal
                      key={project.slug}
                      className={layout.colSpanClass}
                      delay={(index % 2) * 0.06}
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
                    </ScrollReveal>
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

        {activeTab === "ui-design" && (
          <div
            id="panel-ui-design"
            role="tabpanel"
            aria-labelledby="tab-ui-design"
            className={styles.gridAnimated}
          >
            {uiProjects.length > 0 ? (
              <div className={styles.grid}>
                {uiProjects.map((project, index) => {
                  const layout = getLayoutConfig(index, DESIGN_LAYOUT_PATTERN, project.aspectRatio);

                  return (
                    <ScrollReveal key={project.slug} className={layout.colSpanClass} delay={(index % 2) * 0.06}>
                      <Link
                        href={`/work/${project.slug}?from=work`}
                        className={styles.cardLink}
                        aria-label={`${project.title} - ${project.industry}`}
                      >
                        <div className={`${styles.imageWrapper} ${layout.aspectClass}`}>
                          <Image
                            src={project.coverImage}
                            alt={project.title}
                            fill
                            sizes={layout.imageSizes}
                            className={styles.image}
                            priority={index === 0}
                          />
                          <div className={styles.arrowBadge} aria-hidden="true">↗</div>
                        </div>
                        <div className={styles.cardMeta}>
                          <div className={styles.cardTagRow}>
                            <span className={styles.cardCategory}>{project.industry}</span>
                            <span className={styles.cardDivider}>·</span>
                            <span className={styles.cardRole}>{project.role}</span>
                          </div>
                          <h2 className={styles.cardTitle}>{project.title}</h2>
                          {project.impact && <p className={styles.cardImpact}>{project.impact}</p>}
                        </div>
                      </Link>
                    </ScrollReveal>
                  );
                })}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <p className={styles.emptyText}>UI Design projects coming soon.</p>
                <p className={styles.emptySubtext}>Polished interface explorations will appear here.</p>
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
                    CODE_LAYOUT_PATTERN
                  );

                  return (
                    <ScrollReveal
                      key={project.slug}
                      className={layout.colSpanClass}
                      delay={(index % 2) * 0.06}
                    >
                      <article>
                      <div className={styles.cardLink}>
                        <div
                          className={`${styles.imageWrapper} ${layout.aspectClass}`}
                        >
                          {project.coverImage ? (
                            <Image
                              src={project.coverImage}
                              alt={project.title}
                              fill
                              sizes={layout.imageSizes}
                              className={styles.image}
                              priority={index === 0}
                            />
                          ) : (
                            <div className={`${styles.codeCover} ${CODE_COVER_VARIANTS[index % CODE_COVER_VARIANTS.length]}`}>
                              <span className={styles.codeCoverLabel}>Live build · 0{index + 1}</span>
                              <strong className={styles.codeCoverTitle}>{project.title}</strong>
                              <span className={styles.codeCoverMark} aria-hidden="true">↗</span>
                            </div>
                          )}
                        </div>

                        <div className={styles.cardMeta}>
                          <div className={styles.cardTagRow}>
                            <span className={styles.cardCategory}>Independent build</span>
                          </div>

                          <div className={styles.codeTitleRow}>
                            <h2 className={styles.cardTitle}>{project.title}</h2>

                            {project.liveDemo && (
                              <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.liveLink}
                              >
                                View live project ↗
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                      </article>
                    </ScrollReveal>
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
