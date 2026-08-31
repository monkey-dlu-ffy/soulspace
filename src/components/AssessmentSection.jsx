import Button from "./Button";
import Reveal from "./Reveal";
import Section from "./Section";
import { assessmentAreas } from "../data/content";
import "../styles/AssessmentSection.css";

/** Self-reflection and screening tools. The scope note is part of the design,
 *  not fine print — it sits directly beside the call to action. */
export default function AssessmentSection() {
  return (
    <Section
      id="assessments"
      eyebrow="Assessments"
      title="A Few Minutes For Yourself"
      lead="Start understanding what you’re feeling."
    >
      <div className="assessment">
        <Reveal className="assessment__intro">
          <p>
            Our self-reflection and screening tools can help you explore areas
            such as:
          </p>
        </Reveal>

        <ul className="assessment__areas">
          {assessmentAreas.map((area, i) => (
            <Reveal as="li" key={area} delay={i * 70} className="assessment__area">
              <span className="assessment__bullet" aria-hidden="true">
                •
              </span>
              {area}
            </Reveal>
          ))}
        </ul>

        <Reveal className="assessment__foot" delay={120}>
          <p className="assessment__note">
            These tools are intended for self-reflection and screening, not
            diagnosis.
          </p>
          <Button href="/assessments" variant="primary">
            Explore Assessments
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
