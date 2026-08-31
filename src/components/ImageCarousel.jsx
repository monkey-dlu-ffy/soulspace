import { useCallback, useEffect, useId, useRef, useState } from "react";
import LazyImage from "./LazyImage";
import useInView from "../hooks/useInView";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import "../styles/ImageCarousel.css";

const SWIPE_THRESHOLD = 0.15; // fraction of track width needed to commit a swipe

/**
 * Reusable image carousel.
 *
 * Auto-advances, supports arrow buttons, dot indicators, touch/pointer
 * swiping and keyboard navigation. Autoplay pauses on hover, on focus,
 * while the carousel is off screen, and whenever the user has asked for
 * reduced motion. Only the current slide and its neighbours mount their
 * images, so the rest stay lazy.
 *
 * @param {{src: string, alt: string}[]} images
 * @param {string}  aspect     CSS aspect-ratio for the frame, e.g. "4 / 3".
 * @param {boolean} autoPlay
 * @param {number}  interval   Milliseconds between slides.
 * @param {boolean} showArrows
 * @param {boolean} showDots
 * @param {boolean} eager      Prioritise the first slide (above-the-fold use).
 * @param {"organic"|"rounded"|"portrait"} shape Frame styling.
 * @param {string}  label      Accessible name for the carousel region.
 */
export default function ImageCarousel({
  images = [],
  aspect = "4 / 3",
  autoPlay = true,
  interval = 6000,
  showArrows = true,
  showDots = true,
  eager = false,
  shape = "rounded",
  label = "Image gallery",
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [drag, setDrag] = useState(0); // live pointer offset in pixels
  const [isPaused, setIsPaused] = useState(false);

  const trackRef = useRef(null);
  const pointerStart = useRef(null);
  const uid = useId();

  const prefersReducedMotion = usePrefersReducedMotion();
  const [viewRef, inView] = useInView({ threshold: 0.25, once: false });

  const count = images.length;
  const isPlaying = autoPlay && !isPaused && inView && !prefersReducedMotion && count > 1;

  const goTo = useCallback(
    (next) => {
      if (count === 0) return;
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  /* ---- Autoplay ------------------------------------------------------- */
  useEffect(() => {
    if (!isPlaying) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, interval);
    return () => window.clearInterval(timer);
  }, [isPlaying, interval, count]);

  /* ---- Pointer / touch swiping ---------------------------------------- */
  const onPointerDown = (event) => {
    // Ignore secondary buttons; let the browser keep native scrolling for
    // vertical gestures by only tracking once horizontal intent is clear.
    if (event.button !== undefined && event.button !== 0) return;
    pointerStart.current = { x: event.clientX, y: event.clientY, locked: false };
    setIsPaused(true);
  };

  const onPointerMove = (event) => {
    const start = pointerStart.current;
    if (!start) return;

    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;

    if (!start.locked) {
      if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      // Vertical gesture — hand it back to the page scroll.
      if (Math.abs(dy) > Math.abs(dx)) {
        pointerStart.current = null;
        setDrag(0);
        setIsPaused(false);
        return;
      }
      start.locked = true;
      event.currentTarget.setPointerCapture?.(event.pointerId);
    }

    setDrag(dx);
  };

  const endDrag = () => {
    const start = pointerStart.current;
    pointerStart.current = null;
    setIsPaused(false);

    if (!start || !start.locked) {
      setDrag(0);
      return;
    }

    const width = trackRef.current?.offsetWidth || 1;
    if (Math.abs(drag) > width * SWIPE_THRESHOLD) {
      if (drag < 0) next();
      else prev();
    }
    setDrag(0);
  };

  /* ---- Keyboard -------------------------------------------------------- */
  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    }
  };

  if (count === 0) return null;

  const dragPercent = trackRef.current
    ? (drag / trackRef.current.offsetWidth) * 100
    : 0;

  return (
    <div
      ref={viewRef}
      className={[
        "carousel",
        `carousel--${shape}`,
        drag !== 0 ? "is-dragging" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ "--carousel-aspect": aspect }}
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onKeyDown={onKeyDown}
    >
      <div
        className="carousel__viewport"
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        <ul
          id={uid}
          className="carousel__track"
          style={{
            transform: `translate3d(${-index * 100 + dragPercent}%, 0, 0)`,
          }}
          // Per WAI-ARIA practices, the live region is silenced while the
          // carousel advances on its own and announces on manual control.
          aria-live={isPlaying ? "off" : "polite"}
        >
          {images.map((image, i) => {
            // Mount the current slide and its immediate neighbours only.
            const isNear =
              Math.abs(i - index) <= 1 ||
              (index === 0 && i === count - 1) ||
              (index === count - 1 && i === 0);

            return (
              <li
                key={image.src || i}
                className="carousel__slide"
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={i !== index}
              >
                {isNear ? (
                  <LazyImage
                    src={image.src}
                    alt={image.alt}
                    eager={eager && i === 0}
                    sizes="(max-width: 900px) 100vw, 45vw"
                  />
                ) : (
                  <div className="carousel__placeholder" aria-hidden="true" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Soft brand wash across the lower edge keeps captions and controls
            legible over any photograph. */}
        <span className="carousel__veil" aria-hidden="true" />
      </div>

      {showArrows && count > 1 && (
        <>
          <button
            type="button"
            className="carousel__arrow carousel__arrow--prev"
            onClick={prev}
            aria-label="Previous image"
            aria-controls={uid}
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            className="carousel__arrow carousel__arrow--next"
            onClick={next}
            aria-label="Next image"
            aria-controls={uid}
          >
            <Chevron direction="right" />
          </button>
        </>
      )}

      {showDots && count > 1 && (
        <div className="carousel__dots" role="tablist" aria-label="Choose image">
          {images.map((image, i) => (
            <button
              key={`dot-${image.src || i}`}
              type="button"
              role="tab"
              className={`carousel__dot ${i === index ? "is-active" : ""}`}
              aria-selected={i === index}
              aria-label={`Show image ${i + 1} of ${count}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/** Minimal chevron icon — inline so it inherits colour and needs no request. */
function Chevron({ direction }) {
  const d = direction === "left" ? "M14.5 5 8 12l6.5 7" : "M9.5 5 16 12l-6.5 7";
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
      <path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
