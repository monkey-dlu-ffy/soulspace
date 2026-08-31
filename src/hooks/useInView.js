import { useEffect, useRef, useState } from "react";

/**
 * Observes an element and reports when it first enters the viewport.
 * Used to drive the site's scroll-reveal animations.
 *
 * @param {Object}  options
 * @param {number}  options.threshold  Portion of the element that must be visible (0–1).
 * @param {string}  options.rootMargin Margin around the viewport, e.g. "0px 0px -10% 0px".
 * @param {boolean} options.once       Stop observing after the first reveal.
 * @returns {[React.RefObject, boolean]} A ref to attach, and the visibility flag.
 */
export default function useInView({
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
  once = true,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // Environments without IntersectionObserver (or with motion turned off)
    // simply show the content immediately.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}
