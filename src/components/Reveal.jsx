import useInView from "../hooks/useInView";

/**
 * Wraps content in a scroll-triggered reveal.
 *
 * @param {React.ElementType} as       Element to render (defaults to <div>).
 * @param {number}            delay    Stagger delay in milliseconds.
 * @param {"up"|"fade"|"scale"} variant Motion style.
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  variant = "up",
  className = "",
  style,
  children,
  ...rest
}) {
  const [ref, inView] = useInView();

  const variantClass = variant === "up" ? "" : `reveal--${variant}`;

  return (
    <Tag
      ref={ref}
      className={["reveal", variantClass, inView ? "is-visible" : "", className]
        .filter(Boolean)
        .join(" ")}
      // Caller styles are merged in, not spread over, so a custom `style`
      // (e.g. a `--i` index) cannot drop the reveal delay.
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
