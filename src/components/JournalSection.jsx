import Button from "./Button";
import ImageCarousel from "./ImageCarousel";
import Reveal from "./Reveal";
import SmartLink from "./SmartLink";
import { featuredArticles, journalThemes } from "../data/content";
import { journalImages } from "../data/images";
import "../styles/JournalSection.css";

/**
 * SoulSpace Journal.
 * Article cards carry only their real titles — no invented excerpts,
 * dates or authors.
 */
export default function JournalSection() {
  return (
    <section
      className="section section--blush journal"
      id="resources"
      aria-labelledby="journal-title"
    >
      <div className="container">
        <div className="split">
          <div>
            <Reveal>
              <p className="eyebrow">Resources</p>
              <h2 id="journal-title" className="section__title">
                SoulSpace Journal
              </h2>
              <p className="journal__lead">
                Things we don’t always know how to talk about.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <ul className="journal__themes">
                {journalThemes.map((theme, i) => (
                  <li key={theme} style={{ "--i": i }}>
                    {theme}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={160}>
              <p className="journal__text">
                Our journal brings together simple, evidence-informed
                mental-health education designed to help you understand yourself
                a little better.
              </p>
            </Reveal>
          </div>

          <Reveal className="split__media" variant="scale" delay={130}>
            <ImageCarousel
              images={journalImages}
              aspect="4 / 3"
              interval={7200}
              label="Self reflection and wellbeing"
            />
          </Reveal>
        </div>

        {/* ---- Featured articles ---- */}
        <Reveal className="journal__articles-head">
          <h3 className="journal__articles-title">Featured Articles</h3>
        </Reveal>

        <ul className="grid grid--3 journal__articles">
          {featuredArticles.map((article, i) => (
            <Reveal
              as="li"
              key={article}
              delay={(i % 3) * 90}
              className="article-card"
            >
              <SmartLink className="article-card__link" href="/resources">
                <h4 className="article-card__title">{article}</h4>
                <span className="article-card__cue" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h13M13 6.5 18.5 12 13 17.5" />
                  </svg>
                </span>
              </SmartLink>
            </Reveal>
          ))}
        </ul>

        <Reveal className="btn-row btn-row--center journal__cta" delay={100}>
          <Button href="/resources" variant="primary">
            Explore SoulSpace Journal
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
