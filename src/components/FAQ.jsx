import { useId, useState } from "react";
import Reveal from "./Reveal";
import Section from "./Section";
import { faqs } from "../data/content";
import "../styles/FAQ.css";

/**
 * Frequently Asked Questions.
 * A single-open accordion: each question is a real <button> that controls
 * its answer region, so it works with keyboard and screen readers by default.
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const uid = useId();

  const toggle = (index) =>
    setOpenIndex((current) => (current === index ? -1 : index));

  return (
    <Section
      id="faqs"
      tone="lavender"
      eyebrow="FAQs"
      title="Frequently Asked Questions"
      center
    >
      <ul className="faq">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          const buttonId = `${uid}-q-${i}`;
          const panelId = `${uid}-a-${i}`;

          return (
            <Reveal
              as="li"
              key={item.question}
              delay={i * 60}
              className={`faq__item ${isOpen ? "is-open" : ""}`}
            >
              <h3 className="faq__heading">
                <button
                  type="button"
                  id={buttonId}
                  className="faq__question"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                >
                  <span>{item.question}</span>
                  <span className="faq__indicator" aria-hidden="true">
                    <span className="faq__indicator-bar" />
                    <span className="faq__indicator-bar" />
                  </span>
                </button>
              </h3>

              <div
                id={panelId}
                className="faq__panel"
                role="region"
                aria-labelledby={buttonId}
                // `inert` keeps collapsed answers out of the tab order in
                // browsers that support it; the CSS collapse handles the rest.
                inert={!isOpen ? "" : undefined}
              >
                <div className="faq__panel-inner">
                  {item.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
