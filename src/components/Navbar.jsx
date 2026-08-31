import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import SmartLink from "./SmartLink";
import { navLinks, allNavLinks } from "../data/content";
import "../styles/Navbar.css";

/**
 * Sticky site navigation.
 * Desktop: inline links, with grouped items in accessible dropdowns.
 * Mobile: hamburger toggle revealing the full, flat menu.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);

  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const location = useLocation();

  /* Condense the bar once the page has moved past the hero's first fold. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll while the mobile menu is open. */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Escape closes whatever is open; a click outside closes dropdowns. */
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setOpenGroup(null);
      if (menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenGroup(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  const closeAll = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };

  /* Close any open menu/dropdown whenever the route changes. */
  useEffect(() => {
    closeAll();
  }, [location.pathname]);

  return (
    <header
      ref={navRef}
      className={`navbar ${scrolled ? "is-scrolled" : ""} ${
        menuOpen ? "is-open" : ""
      }`}
    >
      <div className="container navbar__inner">
        <SmartLink className="navbar__brand" href="/" onClick={closeAll}>
          <span className="navbar__mark" aria-hidden="true" />
          <span className="navbar__wordmark">SOULSPACE</span>
        </SmartLink>

        {/* ---- Desktop navigation ---- */}
        <nav className="navbar__nav" aria-label="Primary">
          <ul className="navbar__list">
            {navLinks.map((link) =>
              link.group ? (
                <li
                  key={link.label}
                  className={`navbar__item navbar__item--group ${
                    openGroup === link.label ? "is-open" : ""
                  }`}
                  onMouseEnter={() => setOpenGroup(link.label)}
                  onMouseLeave={() => setOpenGroup(null)}
                >
                  <button
                    type="button"
                    className="navbar__link navbar__link--trigger"
                    aria-expanded={openGroup === link.label}
                    aria-haspopup="true"
                    onClick={() =>
                      setOpenGroup(openGroup === link.label ? null : link.label)
                    }
                  >
                    {link.label}
                    <svg
                      className="navbar__caret"
                      viewBox="0 0 12 12"
                      width="11"
                      height="11"
                      aria-hidden="true"
                    >
                      <path
                        d="M2.5 4.5 6 8l3.5-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <ul className="navbar__dropdown">
                    {link.group.map((child) => (
                      <li key={child.label}>
                        <SmartLink
                          className="navbar__dropdown-link"
                          href={child.href}
                          onClick={closeAll}
                        >
                          {child.label}
                        </SmartLink>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.label} className="navbar__item">
                  <SmartLink className="navbar__link" href={link.href}>
                    {link.label}
                  </SmartLink>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="navbar__actions">
          <Button href="/contact" variant="primary" size="sm" className="navbar__cta">
            Book a Session
          </Button>

          {/* ---- Mobile toggle ---- */}
          <button
            ref={toggleRef}
            type="button"
            className="navbar__burger"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="navbar__burger-bar" />
            <span className="navbar__burger-bar" />
          </button>
        </div>
      </div>

      {/* ---- Mobile menu ---- */}
      <div
        id="mobile-menu"
        className="navbar__mobile"
        hidden={!menuOpen}
        aria-label="Mobile"
      >
        <nav>
          <ul className="navbar__mobile-list">
            {allNavLinks.map((link, i) => (
              <li key={link.label} style={{ "--i": i }}>
                <SmartLink href={link.href} onClick={closeAll}>
                  {link.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__mobile-actions">
          <Button href="/contact" variant="primary" full onClick={closeAll}>
            Book a Session
          </Button>
          <Button href="/contact" variant="secondary" full onClick={closeAll}>
            Talk to Us
          </Button>
        </div>
      </div>
    </header>
  );
}
