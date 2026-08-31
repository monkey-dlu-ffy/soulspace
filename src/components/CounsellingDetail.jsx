import Button from "./Button";
import ImageCarousel from "./ImageCarousel";
import Reveal from "./Reveal";
import "../styles/CounsellingDetail.css";

/**
 * Shared layout for the two in-depth counselling sections (online / offline).
 * Content is passed in as an ordered list of typed blocks so both sections
 * share one implementation without either bending to fit the other.
 *
 * Block types:
 *   { type: "p",        text }        Body paragraph
 *   { type: "emphasis", text }        Display-weight line
 *   { type: "label",    text }        Small lead-in above a list
 *   { type: "list",     items }       Bulleted options
 *   { type: "cadence",  items }       Short lines revealed one at a time
 */
export default function CounsellingDetail({
  id,
  eyebrow,
  title,
  lead,
  blocks = [],
  cta,
  ctaHref = "/contact",
  images,
  carouselLabel,
  reverse = false,
  tone = "plain",
  aspect = "4 / 3",
}) {
  return (
    <section
      className={[
        "section",
        "counselling",
        tone !== "plain" ? `section--${tone}` : "",
      ]
        .filter(Boolean)
        .join(" ")}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="container">
        <div className={`split ${reverse ? "split--reverse" : ""}`}>
          <div className="counselling__copy">
            <Reveal>
              <p className="eyebrow">{eyebrow}</p>
              <h2 id={`${id}-title`} className="section__title">
                {title}
              </h2>
              <p className="counselling__lead">{lead}</p>
            </Reveal>

            <div className="counselling__blocks">
              {blocks.map((block, i) => (
                <Reveal key={`${block.type}-${i}`} delay={80 + i * 70}>
                  {renderBlock(block)}
                </Reveal>
              ))}
            </div>

            <Reveal delay={220}>
              <Button href={ctaHref} variant="primary">
                {cta}
              </Button>
            </Reveal>
          </div>

          <Reveal className="split__media" variant="scale" delay={130}>
            <ImageCarousel
              images={images}
              aspect={aspect}
              interval={6800}
              label={carouselLabel}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Renders one content block. Kept outside the component to stay pure. */
function renderBlock(block) {
  switch (block.type) {
    case "emphasis":
      return <p className="counselling__emphasis">{block.text}</p>;

    case "label":
      return <p className="counselling__label">{block.text}</p>;

    case "list":
      return (
        <ul className="counselling__list">
          {block.items.map((item) => (
            <li key={item}>
              <span className="counselling__bullet" aria-hidden="true">
                •
              </span>
              {item}
            </li>
          ))}
        </ul>
      );

    case "cadence":
      return (
        <ul className="counselling__cadence">
          {block.items.map((item, i) => (
            <li key={item} style={{ "--i": i }}>
              {item}
            </li>
          ))}
        </ul>
      );

    case "p":
    default:
      return <p className="counselling__text">{block.text}</p>;
  }
}
