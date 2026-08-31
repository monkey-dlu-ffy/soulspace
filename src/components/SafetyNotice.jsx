import Reveal from "./Reveal";
import "../styles/SafetyNotice.css";

/**
 * Safety and scope notice.
 * Given its own component and a distinct, higher-contrast treatment so it
 * is never mistaken for marketing copy or lost among the FAQs.
 */
export default function SafetyNotice() {
  return (
    <aside className="safety" aria-labelledby="safety-title">
      <div className="container">
        <Reveal className="safety__panel" variant="fade">
          <div className="safety__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7.5v5.5" />
              <path d="M12 16.3v.2" />
            </svg>
          </div>

          <div>
            <h2 id="safety-title" className="safety__title">
              Important
            </h2>
            <p className="safety__text">
              SoulSpace counselling services are not intended to replace
              emergency medical or psychiatric care.
            </p>
            <p className="safety__text">
              If you or someone else is at immediate risk of harm, seek emergency
              medical assistance or contact an appropriate emergency/crisis
              service in your location.
            </p>
          </div>
        </Reveal>
      </div>
    </aside>
  );
}
