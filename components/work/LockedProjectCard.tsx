import Image from "next/image";
import styles from "./Work.module.css";
import CardTags from "./CardTags";
import type { DesignProject } from "@/types/project";

interface LockedProjectCardProps {
  project: DesignProject;
  aspectClass: string;
  imageSizes: string;
  roleFirst?: boolean;
  headingLevel?: "h2" | "h3";
}

/** NDA work: a card with a lock and no link. The case study page itself returns 404. */
export default function LockedProjectCard({
  project,
  aspectClass,
  imageSizes,
  roleFirst = false,
  headingLevel = "h2",
}: LockedProjectCardProps) {
  const Heading = headingLevel;
  return (
    <article className={styles.cardStatic} aria-label={`${project.title}, locked. Available on request.`}>
      <div className={`${styles.imageWrapper} ${styles.lockedMedia} ${aspectClass}`}>
        <Image src={project.coverImage} alt="" fill sizes={imageSizes} className={styles.image} />
        <div className={styles.lockedScrim} aria-hidden="true" />
        <div className={styles.lockPill}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </svg>
          Available on request
        </div>
      </div>
      <div className={styles.cardMeta}>
        <CardTags project={project} roleFirst={roleFirst} />
        <Heading className={styles.cardTitle}>{project.title}</Heading>
      </div>
    </article>
  );
}
