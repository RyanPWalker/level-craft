"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "../gallery";

const INTERVAL_MS = 5000;

/**
 * Auto-advancing photo carousel. Pauses while hovered or focused, and doesn't auto-advance for
 * visitors who prefer reduced motion. The track is a scroll-snap row, so touch swiping works too.
 */
export default function PhotoCarousel({ photos, label }: { photos: Photo[]; label: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = photos.length;

  const goTo = useCallback(
    (i: number) => {
      const track = trackRef.current;
      if (!track) return;
      const next = (i + count) % count;
      track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
      setIndex(next);
    },
    [count],
  );

  // Keep the dots in sync when the visitor swipes.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => setIndex(Math.round(track.scrollLeft / track.clientWidth));
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => goTo(index + 1), INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused, count, index, goTo]);

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="carousel-track" ref={trackRef}>
        {photos.map((photo, i) => (
          <figure
            key={photo.src}
            className="carousel-slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
          >
            {/* Plain <img>: next/image optimization is off for the static export. */}
            <img src={photo.src} alt={photo.alt} loading={i === 0 ? "eager" : "lazy"} decoding="async" />
          </figure>
        ))}
      </div>
      {count > 1 && (
        <div className="carousel-controls">
          <button type="button" className="carousel-btn" onClick={() => goTo(index - 1)} aria-label="Previous photo">
            ‹
          </button>
          <div className="carousel-dots">
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                className="carousel-dot"
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button type="button" className="carousel-btn" onClick={() => goTo(index + 1)} aria-label="Next photo">
            ›
          </button>
        </div>
      )}
    </div>
  );
}
