import styles from "./Work.module.css";
import type { DesignProject } from "@/types/project";

/** Label row above a case study title. `cardTags` (when set) replaces industry and role. */
export default function CardTags({ project, roleFirst = false }: { project: DesignProject; roleFirst?: boolean }) {
  const tags =
    project.cardTags ??
    (roleFirst ? [project.role, project.industry] : [project.industry, project.role]).filter(Boolean);

  return (
    <div className={styles.cardTagRow}>
      {tags.map((tag, i) => (
        <span key={tag} style={{ display: "contents" }}>
          {i > 0 && <span className={styles.cardDivider}>·</span>}
          <span className={i === 0 ? styles.cardCategory : styles.cardRole}>{tag}</span>
        </span>
      ))}
    </div>
  );
}
