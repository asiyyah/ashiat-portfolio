import Image from "next/image";
import type { ReactNode } from "react";
import ScrollReveal from "@/components/motion/ScrollReveal";
import styles from "./SpendToolStory.module.css";

export function StorySection({ children }: { children: ReactNode }) {
  return <ScrollReveal className={styles.storySection}>{children}</ScrollReveal>;
}

export function StoryChapter({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <header className={styles.chapter}>
      <span className={styles.chapterLabel}>{number}</span>
      <h2 className={styles.chapterTitle}>{title}</h2>
    </header>
  );
}

export function StoryVisual({
  src,
  alt,
  width,
  height,
  caption,
  wide = false,
  dark = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  wide?: boolean;
  dark?: boolean;
}) {
  return (
    <figure
      className={`${styles.visual} ${wide ? styles.visualWide : ""} ${dark ? styles.visualDark : ""}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.image}
        sizes={wide ? "(max-width: 768px) 100vw, 1120px" : "(max-width: 768px) 100vw, 768px"}
      />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}

export function StorySplit({
  children,
  src,
  alt,
  width,
  height,
  reverse = false,
}: {
  children: ReactNode;
  src: string;
  alt: string;
  width: number;
  height: number;
  reverse?: boolean;
}) {
  return (
    <section className={`${styles.split} ${reverse ? styles.splitReverse : ""}`}>
      <div className={styles.splitCopy}>{children}</div>
      <div className={styles.splitVisual}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 560px"
        />
      </div>
    </section>
  );
}

export function StoryPrinciples({
  items,
}: {
  items: Array<{ title: string; description: string }>;
}) {
  return (
    <div className={styles.principles}>
      {items.map((item, index) => (
        <div key={item.title} className={styles.principle}>
          <span className={styles.principleNumber}>0{index + 1}</span>
          <strong>{item.title}</strong>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export function StoryQuote({ children }: { children: ReactNode }) {
  return <blockquote className={styles.quote}>{children}</blockquote>;
}
