import Button from "./Button";
import ConcernIcon from "./ConcernIcon";
import Reveal from "./Reveal";
import Section from "./Section";
import { concerns } from "../data/content";
import "../styles/ConcernCards.css";

/**
 * What Can We Help You With?
 * Nine concern areas, plus a deliberately open "Other Concerns" card for
 * anyone whose experience doesn't sit neatly in one of them.
 */
export default function ConcernCards() {
  return (
    <Section
      id="concerns"
      eyebrow="What we help with"
      title="What Can We Help You With?"
      center
      lead="You don’t need to know exactly what’s wrong before reaching out."
    >
      <Reveal className="concerns__subline">
        <p>We can help you explore what you’re experiencing.</p>
      </Reveal>

      <ul className="grid grid--3 concerns">
        {concerns.map((concern, i) => (
          <Reveal
            as="li"
            key={concern.title}
            delay={(i % 3) * 90}
            className="card concern-card"
          >
            <span className="concern-card__badge" aria-hidden="true">
              <ConcernIcon name={concern.title} />
            </span>
            <h3 className="card__title">{concern.title}</h3>
            <p className="card__text">{concern.text}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal className="concern-other" delay={120}>
        <div className="concern-other__copy">
          <h3 className="concern-other__title">Other Concerns</h3>
          <p className="concern-other__lead">Not sure where your concern fits?</p>
          <p className="concern-other__text">That’s completely okay.</p>
          <p className="concern-other__text">
            Start with a conversation. We’ll help you understand the next step.
          </p>
        </div>

        <Button href="/contact" variant="primary">
          Talk to Us
        </Button>
      </Reveal>
    </Section>
  );
}
