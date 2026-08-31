import Button from "./Button";
import ImageCarousel from "./ImageCarousel";
import { heroImages } from "../data/images";
import "../styles/HeroSection.css";

/**
 * Opening section.
 *
 * The ambient field behind the copy breathes on a 10s cycle — roughly four
 * seconds expanding and six settling — the same pacing used in grounding
 * exercises. It is the site's signature motion and is disabled entirely
 * under `prefers-reduced-motion`.
 */
export default function HeroSection() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 id="hero-title" className="hero__title">
            <span className="hero__brand rise" style={{ "--i": 0 }}>
              SOULSPACE
            </span>
            <span className="hero__headline rise" style={{ "--i": 1 }}>
              A safe space for your mind.
            </span>
          </h1>

          <p className="hero__statement rise" style={{ "--i": 2 }}>
            <span>Sometimes you don’t need advice.</span>
            <span>You just need someone who listens.</span>
          </p>

          <div className="hero__body rise" style={{ "--i": 3 }}>
            <p>
              SoulSpace is a professional psychological counselling centre
              offering online and offline counselling in a safe, confidential and
              non-judgmental environment.
            </p>
            <p>
              Whether you’re dealing with stress, anxiety, relationship
              difficulties, academic pressure, emotional exhaustion or simply
              feeling stuck — you don’t have to figure everything out alone.
            </p>
            <p className="hero__nudge">
              Take the first step toward understanding yourself better.
            </p>
          </div>

          <div className="btn-row rise" style={{ "--i": 4 }}>
            <Button href="/contact" variant="primary">
              Book a Session
            </Button>
            <Button href="/services" variant="secondary">
              Explore Our Services
            </Button>
          </div>
        </div>

        <div className="hero__media rise" style={{ "--i": 3 }}>
          <ImageCarousel
            images={heroImages}
            aspect="4 / 5"
            eager
            interval={7000}
            label="A glimpse of the SoulSpace experience"
          />
        </div>
      </div>
    </section>
  );
}
