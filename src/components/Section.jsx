import Reveal from "./Reveal";

/**
 * Standard section shell: <section> landmark, optional tinted background,
 * and an optional revealed header (eyebrow / title / lead).
 * Keeps section rhythm and heading semantics consistent across the page.
 *
 * @param {string} id        Anchor target for the navbar.
 * @param {"plain"|"tint"|"lavender"|"blush"} tone Background treatment.
 * @param {string} eyebrow   Small uppercase label above the title.
 * @param {string} title     Section heading (rendered as <h2>).
 * @param {string} lead      Supporting sentence below the title.
 * @param {boolean} center   Centre the header block.
 */
export default function Section({
  id,
  tone = "plain",
  eyebrow,
  title,
  lead,
  center = false,
  headClassName = "",
  className = "",
  children,
}) {
  const headingId = id ? `${id}-title` : undefined;
  const hasHead = Boolean(eyebrow || title || lead);

  return (
    <section
      id={id}
      className={[
        "section",
        tone !== "plain" ? `section--${tone}` : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby={title ? headingId : undefined}
    >
      <div className="container">
        {hasHead && (
          <Reveal
            className={[
              "section__head",
              center ? "section__head--center" : "",
              headClassName,
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && (
              <h2 id={headingId} className="section__title">
                {title}
              </h2>
            )}
            {lead && <p className="section__lead">{lead}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
