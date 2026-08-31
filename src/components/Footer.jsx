import Button from "./Button";
import Reveal from "./Reveal";
import SmartLink from "./SmartLink";
import { allNavLinks } from "../data/content";
import "../styles/Footer.css";

/** Site footer — brand, actions, and the full navigation as a flat list. */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Reveal className="footer__grid">
          <div className="footer__brand">
            <span className="footer__mark" aria-hidden="true" />
            <p className="footer__wordmark">SOULSPACE</p>
            <p className="footer__tagline">A safe space for your mind.</p>
            <p className="footer__descriptor">
              Online &amp; Offline Psychological Counselling
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <ul className="footer__links">
              {allNavLinks.map((link) => (
                <li key={link.label}>
                  <SmartLink href={link.href}>{link.label}</SmartLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="btn-row footer__actions">
            <Button href="/contact" variant="primary">
              Book a Session
            </Button>
            <Button href="/contact" variant="secondary">
              Talk to Us
            </Button>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
