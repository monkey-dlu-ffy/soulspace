import ImageCarousel from "./ImageCarousel";
import Reveal from "./Reveal";
import { environmentImages } from "../data/images";
import "../styles/AboutSection.css";

/**
 * Introduction / About SoulSpace.
 *
 * The "You may be…" lines are a list of things a reader might recognise in
 * themselves, so they're set as a real list and revealed one at a time —
 * the stagger mirrors the pace of reading them and stopping at one.
 */

const recognitions = [
  "Some days feel heavier than others.",
  "You may be overthinking everything.",
  "You may feel exhausted even when nothing seems “wrong.”",
  "You may be struggling with a relationship.",
  "You may be carrying something you’ve never told anyone.",
  "Or perhaps you simply feel like you’ve lost connection with yourself.",
];

export default function AboutSection() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="split">
          <div className="about__copy">
            <Reveal>
              <p className="eyebrow">About SoulSpace</p>
              <h2 id="about-title" className="section__title">
                You Don’t Have To Have Everything Figured Out.
              </h2>
            </Reveal>

            <ul className="about__list">
              {recognitions.map((line, i) => (
                <Reveal as="li" key={line} delay={120 + i * 90} className="about__line">
                  <span className="about__marker" aria-hidden="true" />
                  <span>{line}</span>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={200} className="about__closing prose">
              <p>
                You don’t need to wait until things become overwhelming to seek
                support.
              </p>
              <p className="prose__emphasis">
                At SoulSpace, we believe counselling isn’t only about treating
                problems.
              </p>
              <p>
                It’s also about understanding yourself, building emotional
                resilience and creating a healthier relationship with your
                thoughts, emotions and life.
              </p>
            </Reveal>
          </div>

          <Reveal className="split__media" variant="scale" delay={150}>
            <ImageCarousel
              images={environmentImages}
              aspect="3 / 4"
              interval={6500}
              label="Inside the SoulSpace counselling environment"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
