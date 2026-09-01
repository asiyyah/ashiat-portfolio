"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../Home.module.css";
import workStyles from "../work/Work.module.css";
import type { CodeProject, DesignProject, PortfolioProject, ProjectType } from "@/types/project";
import {
  CODE_COVER_VARIANTS,
  CODE_LAYOUT_PATTERN,
  DESIGN_LAYOUT_PATTERN,
  PROJECT_TABS,
  getLayoutConfig,
} from "@/components/work/project-layout";

function getHomeLayout(index: number, project?: DesignProject) {
  return getLayoutConfig(
    index,
    DESIGN_LAYOUT_PATTERN.slice(0, 4),
    project?.projectType === "ui-design" ? project.aspectRatio : undefined,
  );
}

function HomeWorkCard({
  study,
  layout,
  index,
}: {
  study: DesignProject;
  layout: { colSpanClass: string; aspectClass: string; imageSizes: string };
  index: number;
}) {
  const href = `/work/${study.slug}?from=home`;
  const cardContent = (
    <>
      <div
        className={`${workStyles.imageWrapper} ${layout.aspectClass} ${study.slug === "payup" ? workStyles.payupBackdrop : ""}`}
      >
        <Image
          src={study.thumbnailImage ?? study.coverImage}
          alt={study.title}
          fill
          sizes={layout.imageSizes}
          className={workStyles.image}
          priority={index === 0}
        />
        {(study.projectType === "product-design" || study.externalUrl) && (
          <div className={workStyles.arrowBadge} aria-hidden="true">↗</div>
        )}
      </div>

      <div className={workStyles.cardMeta}>
        <div className={workStyles.cardTagRow}>
          <span className={workStyles.cardCategory}>{study.role}</span>
          {study.industry && (
            <>
              <span className={workStyles.cardDivider}>·</span>
              <span className={workStyles.cardRole}>{study.industry}</span>
            </>
          )}
        </div>
        <h3 className={workStyles.cardTitle}>{study.title}</h3>
        {study.impact && <p className={workStyles.cardImpact}>{study.impact}</p>}
      </div>
    </>
  );

  return (
    <div className={layout.colSpanClass}>
      {study.projectType === "product-design" ? (
        <Link href={href} className={workStyles.cardLink} aria-label={study.title}>
          {cardContent}
        </Link>
      ) : study.externalUrl ? (
        <a href={study.externalUrl} target="_blank" rel="noopener noreferrer" className={workStyles.cardLink} aria-label={study.title}>
          {cardContent}
        </a>
      ) : (
        <article className={workStyles.cardLink}>{cardContent}</article>
      )}
    </div>
  );
}

function HomeCodeCard({
  project,
  layout,
  index,
}: {
  project: CodeProject;
  layout: { colSpanClass: string; aspectClass: string; imageSizes: string };
  index: number;
}) {
  return (
    <article className={layout.colSpanClass}>
      <div className={workStyles.cardLink}>
        <div className={`${workStyles.imageWrapper} ${layout.aspectClass}`}>
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              sizes={layout.imageSizes}
              className={workStyles.image}
              priority={index === 0}
            />
          ) : (
            <div className={`${workStyles.codeCover} ${CODE_COVER_VARIANTS[index % CODE_COVER_VARIANTS.length]}`}>
              <span className={workStyles.codeCoverLabel}>Live build · 0{index + 1}</span>
              <strong className={workStyles.codeCoverTitle}>{project.title}</strong>
              <span className={workStyles.codeCoverMark} aria-hidden="true">↗</span>
            </div>
          )}
        </div>

        <div className={workStyles.cardMeta}>
          <div className={workStyles.cardTagRow}>
            <span className={workStyles.cardCategory}>Independent build</span>
          </div>
          <div className={workStyles.codeTitleRow}>
            <h3 className={workStyles.cardTitle}>{project.title}</h3>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={workStyles.liveLink}
            >
              View live project ↗
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function HomeFeaturedWork({ projects }: { projects: PortfolioProject[] }) {
  const [activeTab, setActiveTab] = useState<ProjectType>("product-design");
  const featuredOrder = ["revenue-management-platform", "spend-tool", "hirewise", "payup"];
  const designProjects = projects
    .filter((project): project is DesignProject => project.projectType === activeTab)
    .filter((project) => project.featured !== false)
    .sort((a, b) => {
      const aIndex = featuredOrder.indexOf(a.slug);
      const bIndex = featuredOrder.indexOf(b.slug);
      if (aIndex === -1 && bIndex === -1) return 0;
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    })
    .slice(0, 4);
  const codeStudies = projects
    .filter((project): project is CodeProject => project.projectType === "code")
    .filter((project) => project.featured !== false)
    .slice(0, 4);
  const activeProjects = activeTab === "code" ? codeStudies : designProjects;

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + PROJECT_TABS.length) % PROJECT_TABS.length;
    setActiveTab(PROJECT_TABS[nextIndex].id);
    document.getElementById(`home-tab-${PROJECT_TABS[nextIndex].id}`)?.focus();
  };

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
              Designed and built with <em className={styles.sectionTitleSerif}>intent</em>
            </h2>
          </div>

          <div>
            {/* Tab switcher */}
            <div className={styles.tabContainer} role="tablist" aria-label="Featured work categories">
              {PROJECT_TABS.map((tab, index) => (
                <button
                  key={tab.id}
                  id={`home-tab-${tab.id}`}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls="home-work-panel"
                  tabIndex={activeTab === tab.id ? 0 : -1}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  onClick={() => setActiveTab(tab.id)}
                  className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ""}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {activeProjects.length === 0 ? (
          <div id="home-work-panel" role="tabpanel" className={workStyles.emptyState}>
            <p className={workStyles.emptyText}>
              {PROJECT_TABS.find((tab) => tab.id === activeTab)?.label} projects coming soon.
            </p>
            <p className={workStyles.emptySubtext}>Selected work will appear here.</p>
          </div>
        ) : activeTab !== "code" ? (
          <>
            <div id="home-work-panel" role="tabpanel" className={workStyles.gridAnimated}>
              <div className={workStyles.grid}>
              {designProjects.map((study, index) => (
                <HomeWorkCard
                  key={study.slug}
                  study={study}
                  layout={getHomeLayout(index, study)}
                  index={index}
                />
              ))}
              </div>
            </div>

            <Link href={`/work?tab=${activeTab}`} className={styles.workViewAll}>
              View all projects →
            </Link>
          </>
        ) : (
          <>
            <div id="home-work-panel" role="tabpanel" className={`${workStyles.grid} ${workStyles.gridAnimated}`}>
              {codeStudies.map((project, index) => (
                <HomeCodeCard
                  key={project.slug}
                  project={project}
                  layout={CODE_LAYOUT_PATTERN[index]}
                  index={index}
                />
              ))}
            </div>

            <Link href="/work?tab=code" className={styles.workViewAll}>
              View all projects →
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
