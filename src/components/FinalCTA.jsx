import Button from "./Button";
import Reveal from "./Reveal";
import "../styles/FinalCTA.css";

/**
 * Closing call to action.
 * The breathing field from the hero returns here, bookending the page —
 * the reader ends where they began, having read everything in between.
 */
export default function FinalCTA() {
  return (
    <section className="cta" id="cta" aria-labelledby="cta-title">
      <div className="container cta__inner">
        <Reveal>
          <h2 id="cta-title" className="cta__title">
            You Are Allowed To Ask For Help.
          </h2>
        </Reveal>

        <Reveal delay={100} className="cta__body">
          <p>You don’t have to wait until you reach a breaking point.</p>
          <p>You don’t have to prove that your problem is “serious enough.”</p>
          <p>You don’t have to know exactly what you need.</p>
        </Reveal>

        <Reveal delay={180} className="cta__moment">
          <p className="cta__lead-in">Sometimes the first step is simply saying:</p>
          <p className="cta__quote">“I’m not feeling okay.”</p>
          <p className="cta__after">And that’s enough to begin.</p>
        </Reveal>

        <Reveal delay={240} className="cta__sign">
          <p className="cta__brand">SoulSpace</p>
          <p className="cta__tagline">A safe space for your mind.</p>
        </Reveal>

        <Reveal delay={300} className="btn-row btn-row--center">
          <Button href="/contact" variant="primary">
            Book Your First Session
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
