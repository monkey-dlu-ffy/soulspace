import Button from "./Button";
import Reveal from "./Reveal";
import "../styles/PrivacySection.css";

/** Your Privacy Matters. Deliberately quiet — no imagery, just the commitment. */
export default function PrivacySection() {
  return (
    <section
      className="section privacy"
      id="privacy"
      aria-labelledby="privacy-title"
    >
      <div className="container">
        <Reveal className="privacy__panel" variant="scale">
          <span className="privacy__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4.5" y="10.5" width="15" height="10" rx="3" />
              <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
              <path d="M12 14.5v2" />
            </svg>
          </span>

          <p className="eyebrow">Confidentiality</p>
          <h2 id="privacy-title" className="section__title section__title--sm">
            Your Privacy Matters
          </h2>

          <div className="privacy__body">
            <p className="privacy__emphasis">What you share with us matters.</p>
            <p>Mental-health conversations are deeply personal.</p>
            <p>
              SoulSpace is committed to maintaining appropriate confidentiality
              and protecting your personal information.
            </p>
            <p>
              We aim to create an environment where you can speak openly,
              respectfully and without fear of judgment.
            </p>
            <p className="privacy__closing">Your story belongs to you.</p>
          </div>

          <Button href="/privacy" variant="secondary">
            Read Our Privacy &amp; Confidentiality Policy
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
