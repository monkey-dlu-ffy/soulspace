import Button from "./Button";
import ImageCarousel from "./ImageCarousel";
import Reveal from "./Reveal";
import Section from "./Section";
import { professionals } from "../data/content";
import { professionalImages } from "../data/images";
import "../styles/Professionals.css";

/**
 * Meet Your Mental Health Professionals.
 * Names and credentials are placeholders supplied by the client — nothing
 * about qualifications is invented here.
 */
export default function Professionals() {
  return (
    <Section
      id="professionals"
      tone="tint"
      eyebrow="Our professionals"
      title="Meet Your Mental Health Professionals"
      lead="The right person can make a difference."
      center
    >
      <Reveal className="professionals__intro">
        <p>
          Our professionals are selected based on their qualifications,
          experience, areas of expertise and commitment to ethical psychological
          care.
        </p>
      </Reveal>

      <ul className="grid grid--3 professionals">
        {professionals.map((person, i) => (
          <Reveal
            as="li"
            key={person.id}
            id={person.id}
            delay={i * 130}
            className="pro-card"
          >
            <div className="pro-card__media">
              <ImageCarousel
                images={professionalImages[person.imageKey]}
                aspect="4 / 5"
                shape="portrait"
                interval={7000 + i * 800}
                label={`Photographs of ${person.role}`}
              />
            </div>

            <div className="pro-card__body">
              <h3 className="pro-card__name">{person.name}</h3>
              <p className="pro-card__role">{person.role}</p>

              <div className="pro-card__focus">
                <p className="pro-card__focus-label">Areas of focus:</p>
                <p className="pro-card__focus-value">{person.focus}</p>
              </div>

              <div className="btn-row pro-card__actions">
                <Button
                  href={`/professionals#${person.id}`}
                  variant="secondary"
                  size="sm"
                  aria-label={`View profile of ${person.role}`}
                >
                  View Profile
                </Button>
                <Button
                  href="/contact"
                  variant="soft"
                  size="sm"
                  aria-label={`Book a session with ${person.role}`}
                >
                  Book Session
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal className="professionals__helper" delay={120}>
        <div>
          <h3 className="professionals__helper-title">
            Not sure who to choose?
          </h3>
          <p className="professionals__helper-text">
            Let SoulSpace help you find a suitable professional.
          </p>
        </div>
        <Button href="/contact" variant="primary">
          Help Me Choose
        </Button>
      </Reveal>
    </Section>
  );
}
