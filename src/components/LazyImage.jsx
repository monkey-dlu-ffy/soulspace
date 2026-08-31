import { useState } from "react";
import "../styles/LazyImage.css";

/**
 * Image with native lazy loading, a soft fade-in once decoded, and an
 * on-brand gradient fallback if the source fails to load. The fallback
 * keeps the layout intact while placeholder photography is being replaced.
 *
 * @param {string}  src
 * @param {string}  alt      Required — pass "" only for decorative images.
 * @param {boolean} eager    Load immediately (use for above-the-fold images).
 * @param {string}  sizes    Responsive sizes hint.
 */
export default function LazyImage({
  src,
  alt = "",
  eager = false,
  className = "",
  sizes = "(max-width: 900px) 100vw, 50vw",
  ...rest
}) {
  const [status, setStatus] = useState("loading"); // loading | loaded | error

  if (status === "error") {
    return (
      <div
        className={["lazy-image", "lazy-image--fallback", className]
          .filter(Boolean)
          .join(" ")}
        role="img"
        aria-label={alt}
      >
        <span aria-hidden="true" className="lazy-image__glyph" />
      </div>
    );
  }

  return (
    <img
      className={[
        "lazy-image",
        status === "loaded" ? "is-loaded" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      src={src}
      alt={alt}
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
      draggable="false"
      onLoad={() => setStatus("loaded")}
      onError={() => setStatus("error")}
      {...rest}
    />
  );
}
