import Image from "next/image";
import styles from "@/components/Home.module.css";

interface ProjectCardProps {
  title: string;
  image: string;
  tags: string[];
  impact?: string;
  tools?: string;
  href?: string;
}

export default function ProjectCard({
  title,
  image,
  tags,
  impact,
  tools,
  href,
}: ProjectCardProps) {
  const inner = (
    <article className={styles.caseCard}>
      <div className={styles.caseImage}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 960px) 580px, 100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.caseBody}>
        <div className={styles.caseTagRow}>
          {tags.map((t) => (
            <span key={t} className={styles.caseTag}>{t}</span>
          ))}
        </div>

        <h3 className={styles.caseTitle}>{title}</h3>

        <hr className={styles.caseDivider} />

        {impact && (
          <div className={styles.caseImpact}>
            <span className={styles.caseImpactLabel}>IMPACT:</span>
            {" "}{impact}
          </div>
        )}

        {tools && (
          <div className={styles.caseTools}>{tools}</div>
        )}
      </div>
    </article>
  );

  if (href) {
    return (
      <a href={href} className={styles.caseLink} aria-label={title}>
        {inner}
      </a>
    );
  }

  return inner;
}
