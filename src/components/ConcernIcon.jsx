/**
 * Abstract line marks for the concern cards.
 * Deliberately non-literal — a small visual anchor for scanning, not an
 * illustration of any condition. Each mark inherits `currentColor`.
 */
const MARKS = {
  "Anxiety & Overthinking": (
    <>
      <path d="M5 15c3 0 3-6 6-6s3 6 6 6 3-4 2-6" />
      <circle cx="12" cy="12" r="9" opacity=".28" />
    </>
  ),
  "Stress & Burnout": (
    <>
      <path d="M12 3c2.5 3.4 4.5 5.6 4.5 8.6A4.5 4.5 0 0 1 12 16a4.5 4.5 0 0 1-4.5-4.4C7.5 8.6 9.5 6.4 12 3Z" />
      <path d="M8 20h8" opacity=".45" />
    </>
  ),
  "Relationship Concerns": (
    <>
      <circle cx="9" cy="12" r="5.5" />
      <circle cx="15" cy="12" r="5.5" opacity=".45" />
    </>
  ),
  "Academic & Career Pressure": (
    <>
      <path d="M4 18V7l8-3 8 3v11" />
      <path d="M4 18h16" opacity=".45" />
      <path d="M12 4v14" opacity=".28" />
    </>
  ),
  "Low Mood & Emotional Difficulties": (
    <>
      <path d="M3 9c2.5 0 3 4 5.5 4S11 8 13.5 8 16 15 18.5 15 21 12 21 12" />
      <path d="M3 19h18" opacity=".28" />
    </>
  ),
  "Self-Esteem & Confidence": (
    <>
      <circle cx="12" cy="12" r="5" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4" opacity=".5" />
    </>
  ),
  "Family & Interpersonal Concerns": (
    <>
      <circle cx="12" cy="7" r="3" />
      <circle cx="6" cy="15" r="3" opacity=".5" />
      <circle cx="18" cy="15" r="3" opacity=".5" />
      <path d="M9.5 9.5 7.8 12.4M14.5 9.5l1.7 2.9" opacity=".35" />
    </>
  ),
  "Grief & Loss": (
    <>
      <path d="M12 21c-4.5-3-7-6.2-7-9.6A7 7 0 0 1 12 4a7 7 0 0 1 7 7.4c0 3.4-2.5 6.6-7 9.6Z" />
      <path d="M12 9v5" opacity=".4" />
    </>
  ),
  "Personal Growth": (
    <>
      <path d="M12 21v-8" />
      <path d="M12 13c0-3.5-2.2-6-5.5-6.3C6.2 10.4 8.5 13 12 13Z" opacity=".55" />
      <path d="M12 13c0-4 2.6-6.8 6.2-7.1C18.5 10 15.8 13 12 13Z" />
    </>
  ),
};

export default function ConcernIcon({ name }) {
  const mark = MARKS[name];
  if (!mark) return null;

  return (
    <svg
      className="concern-card__icon"
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {mark}
    </svg>
  );
}
