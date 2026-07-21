"use client";

import { useRef, useEffect } from "react";

interface HeroCarouselProps {
  images: string[];
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function next() {
    const el = ref.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollBy({ left: w * 0.8, behavior: "smooth" });
  }

  function prev() {
    const el = ref.current;
    if (!el) return;
    const w = el.clientWidth;
    el.scrollBy({ left: -w * 0.8, behavior: "smooth" });
  }

  return (
    <div>
      <div className="relative">
        <div ref={ref} className="carousel-row carousel-snap">
          {images.map((src, i) => (
            <div key={i} className="carousel-item">
              <img src={src} alt={`slide-${i}`} className="hero-screenshot" />
            </div>
          ))}
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 carousel-controls">
          <button
            aria-label="Previous"
            className="carousel-button"
            onClick={prev}
          >
            ‹
          </button>
          <button aria-label="Next" className="carousel-button" onClick={next}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
