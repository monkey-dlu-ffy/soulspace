import Button from "./Button";
import Reveal from "./Reveal";
import Section from "./Section";
import useInView from "../hooks/useInView";
import { steps } from "../data/content";
import "../styles/HowItWorks.css";

/**
 * How SoulSpace Works.
 *
 * A genuine four-step sequence, so the numerals carry real information about
 * order. The rail between the nodes draws itself once the list is in view.
 */
export default function HowItWorks() {
  const [railRef, railVisible] = useInView({ threshold: 0.1 });

  return (
    <Section
      id="how"
      eyebrow="How it works"
      title="How SoulSpace Works"
      center
    >
      <ol
        className={`steps ${railVisible ? "is-drawn" : ""}`}
        ref={railRef}
      >
        {steps.map((step, i) => (
          <Reveal
            as="li"
            key={step.number}
            delay={i * 150}
            className="step"
            style={{ "--i": i }}
          >
            <div className="step__marker" aria-hidden="true">
              <span className="step__number">{step.number}</span>
            </div>

            <div className="step__body">
              <h3 className="step__title">
                <span className="step__number-inline" aria-hidden="true">
                  {step.number} —{" "}
                </span>
                {step.title}
              </h3>
              {step.lines.map((line) => (
                <p key={line} className="step__text">
                  {line}
                </p>
              ))}
            </div>
          </Reveal>
        ))}
      </ol>

      <Reveal className="btn-row btn-row--center steps__cta" delay={120}>
        <Button href="/contact" variant="primary">
          Take the First Step
        </Button>
      </Reveal>
    </Section>
  );
}
