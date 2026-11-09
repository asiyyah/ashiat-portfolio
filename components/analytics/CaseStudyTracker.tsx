"use client";

import { useEffect, useRef } from "react";
import {
  trackCaseStudyRead,
  trackCaseStudyViewed,
  type CaseStudyInfo,
} from "@/lib/analytics";

interface CaseStudyTrackerProps extends CaseStudyInfo {
  source: string;
}

/**
 * Fires `case_study_viewed` on mount, and `case_study_read` once the visitor
 * scrolls to where this component is rendered (place it at the end of the content).
 */
export default function CaseStudyTracker({ slug, title, type, source }: CaseStudyTrackerProps) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const study = { slug, title, type };
    const startedAt = Date.now();
    trackCaseStudyViewed(study, source);

    const end = endRef.current;
    if (!end) return;

    // Checks position on scroll rather than using IntersectionObserver, so a fast
    // scroll that jumps straight past the end marker still counts as a read.
    let frame = 0;
    const check = () => {
      frame = 0;
      if (end.getBoundingClientRect().top > window.innerHeight) return;
      trackCaseStudyRead(study, Math.round((Date.now() - startedAt) / 1000));
      window.removeEventListener("scroll", onScroll);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [slug, title, type, source]);

  return <div ref={endRef} aria-hidden="true" />;
}
