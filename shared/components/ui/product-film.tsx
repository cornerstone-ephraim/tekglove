"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

/** Silent product footage; pauses offscreen and respects reduced motion. */
export function ProductFilm({
  src,
  poster,
  portraitSrc,
  portraitPoster,
  label,
  className = "",
}: {
  src: string;
  poster: string;
  portraitSrc?: string;
  portraitPoster?: string;
  label: string;
  className?: string;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const manuallyPaused = useRef(false);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");
    let visible = false;
    const update = () => {
      if (visible && !preference.matches && !manuallyPaused.current) {
        void element.play().catch(() => {});
      } else element.pause();
    };
    const selectSource = () => {
      element.poster =
        mobile.matches && portraitPoster ? portraitPoster : poster;
      element.src = mobile.matches && portraitSrc ? portraitSrc : src;
      element.load();
      update();
    };
    selectSource();
    mobile.addEventListener("change", selectSource);
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        update();
      },
      { threshold: 0.2 },
    );
    observer.observe(element);
    preference.addEventListener("change", update);
    return () => {
      observer.disconnect();
      mobile.removeEventListener("change", selectSource);
      preference.removeEventListener("change", update);
    };
  }, [src, poster, portraitSrc, portraitPoster]);
  return (
    <div className={`product-film relative overflow-hidden ${className}`}>
      <video
        ref={video}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="h-full w-full object-cover"
      />
      <button
        type="button"
        aria-label={`${playing ? "Pause" : "Play"} ${label}`}
        className="absolute right-5 bottom-5 grid size-11 place-items-center rounded-full border border-ink/20 bg-paper/95 text-ink"
        onClick={() => {
          const element = video.current;
          if (!element) return;
          manuallyPaused.current = playing;
          if (playing) element.pause();
          else void element.play().catch(() => {});
        }}
      >
        {playing ? <Pause size={17} /> : <Play size={17} />}
      </button>
    </div>
  );
}
