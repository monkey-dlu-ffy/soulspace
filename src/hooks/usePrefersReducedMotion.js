import { useEffect, useState } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Tracks the user's reduced-motion preference so JavaScript-driven motion
 * (carousel autoplay, parallax) can be switched off alongside the CSS.
 */
export default function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return undefined;

    const mql = window.matchMedia(QUERY);
    setPrefersReduced(mql.matches);

    const onChange = (event) => setPrefersReduced(event.matches);

    // Safari < 14 only supports the deprecated addListener API.
    if (mql.addEventListener) {
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    }
    mql.addListener(onChange);
    return () => mql.removeListener(onChange);
  }, []);

  return prefersReduced;
}
