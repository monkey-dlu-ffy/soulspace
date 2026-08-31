import Reveal from "./Reveal";
import Section from "./Section";
import { whyPoints } from "../data/content";
import "../styles/WhySoulSpace.css";

/** Why SoulSpace? — six commitments, as icon cards. */
export default function WhySoulSpace() {
  return (
    <Section
      id="why"
      tone="lavender"
      eyebrow="Why SoulSpace"
      title="Why SoulSpace?"
      lead="Because therapy should feel human."
      center
    >
      <ul className="grid grid--3 why">
        {whyPoints.map((point, i) => (
          <Reveal
            as="li"
            key={point.title}
            delay={(i % 3) * 100}
            className="card card--glass why-card"
          >
            <span className="why-card__icon" aria-hidden="true">
              {point.icon}
            </span>
            <h3 className="card__title">{point.title}</h3>
            <p className="card__text">{point.text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
