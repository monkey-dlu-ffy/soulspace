/* ==========================================================================
   SoulSpace — Site content
   --------------------------------------------------------------------------
   All written copy lives here, verbatim, so components stay presentational
   and the wording can be reviewed in one place.
   ========================================================================== */

/** Navigation. `group` items render as a dropdown on desktop and are
 *  flattened into the mobile menu. */
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About SoulSpace", href: "/about" },
  { label: "Our Professionals", href: "/professionals" },
  {
    label: "Services",
    href: "/services",
    group: [
      { label: "Services", href: "/services" },
      { label: "Online Counselling", href: "/online-counselling" },
      { label: "Offline Counselling", href: "/offline-counselling" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    group: [
      { label: "Resources", href: "/resources" },
      { label: "Assessments", href: "/assessments" },
      { label: "FAQs", href: "/faqs" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

/** Flat list used by the mobile menu and the footer. */
export const allNavLinks = [
  { label: "Home", href: "/" },
  { label: "About SoulSpace", href: "/about" },
  { label: "Our Professionals", href: "/professionals" },
  { label: "Services", href: "/services" },
  { label: "Online Counselling", href: "/online-counselling" },
  { label: "Offline Counselling", href: "/offline-counselling" },
  { label: "Resources", href: "/resources" },
  { label: "Assessments", href: "/assessments" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

/** Section 4 — What Can We Help You With? */
export const concerns = [
  {
    title: "Anxiety & Overthinking",
    text: "Constant worrying, racing thoughts, fear, restlessness and difficulty switching off.",
  },
  {
    title: "Stress & Burnout",
    text: "Feeling emotionally exhausted, overwhelmed or unable to keep up.",
  },
  {
    title: "Relationship Concerns",
    text: "Communication difficulties, conflict, emotional distance, breakups and relationship uncertainty.",
  },
  {
    title: "Academic & Career Pressure",
    text: "Exams, performance pressure, career uncertainty, workplace stress and professional challenges.",
  },
  {
    title: "Low Mood & Emotional Difficulties",
    text: "Feeling low, unmotivated, empty, disconnected or emotionally overwhelmed.",
  },
  {
    title: "Self-Esteem & Confidence",
    text: "Self-doubt, comparison, body image concerns and difficulty believing in yourself.",
  },
  {
    title: "Family & Interpersonal Concerns",
    text: "Difficult family dynamics, communication problems and interpersonal conflicts.",
  },
  {
    title: "Grief & Loss",
    text: "Support while navigating bereavement, separation, major life changes and loss.",
  },
  {
    title: "Personal Growth",
    text: "Self-understanding, emotional awareness, healthier habits, boundaries and personal development.",
  },
];

/** Section 5 — Why SoulSpace? */
export const whyPoints = [
  {
    icon: "🤍",
    title: "Confidential",
    text: "Your personal experiences deserve privacy, respect and confidentiality.",
  },
  {
    icon: "🧠",
    title: "Professional",
    text: "Connect with trained mental-health professionals using appropriate psychological approaches for your concerns.",
  },
  {
    icon: "🌱",
    title: "Personalised",
    text: "There is no single formula for mental wellbeing. Your support should be designed around you.",
  },
  {
    icon: "💻",
    title: "Online & Offline",
    text: "Choose the format that feels most comfortable for you.",
  },
  {
    icon: "🫶",
    title: "Non-Judgmental",
    text: "You don’t have to pretend that everything is okay here.",
  },
  {
    icon: "🔄",
    title: "Continuous Support",
    text: "Your journey doesn’t end when the session ends. We encourage reflection, practical strategies and continued growth.",
  },
];

/** Section 6 — How SoulSpace Works. A genuine four-step sequence, so the
 *  numbering carries real information. */
export const steps = [
  {
    number: "01",
    title: "Tell Us What You’re Going Through",
    lines: [
      "Share a few details about what you’re experiencing.",
      "You don’t need to have the right words.",
    ],
  },
  {
    number: "02",
    title: "Find the Right Support",
    lines: [
      "We’ll help you identify the type of professional and support that may be appropriate for your needs.",
    ],
  },
  {
    number: "03",
    title: "Choose Online or Offline",
    lines: ["Select the format that works best for your comfort and schedule."],
  },
  {
    number: "04",
    title: "Begin Your Conversation",
    lines: [
      "Meet your counsellor and start with a conversation.",
      "No pressure.",
      "No judgment.",
      "Just a safe space to begin.",
    ],
  },
];

/** Section 7 — Meet Your Mental Health Professionals.
 *  Names are placeholders exactly as supplied; no credentials are invented. */
export const professionals = [
  {
    id: "professional-1",
    name: "[Professional Name]",
    role: "Psychologist / Counsellor",
    focus: "Anxiety • Stress • Relationships • Self-esteem",
    imageKey: "one",
  },
  {
    id: "professional-2",
    name: "[Professional Name]",
    role: "Psychologist / Counsellor",
    focus: "Students • Career • Emotional wellbeing • Life transitions",
    imageKey: "two",
  },
  {
    id: "professional-3",
    name: "[Professional Name]",
    role: "Psychologist / Counsellor",
    focus: "Relationships • Family concerns • Personal growth",
    imageKey: "three",
  },
];

/** Section 12 — SoulSpace Journal. Themes, then featured article titles. */
export const journalThemes = [
  "Thoughts.",
  "Relationships.",
  "Stress.",
  "Loneliness.",
  "Boundaries.",
  "Confidence.",
  "Burnout.",
  "Healing.",
];

export const featuredArticles = [
  "Why do I overthink everything?",
  "How do I know if I’m emotionally burnt out?",
  "Is it normal to feel lonely even when you’re surrounded by people?",
  "How do I set healthy boundaries without feeling guilty?",
  "When should I consider counselling?",
  "What actually happens during a therapy session?",
];

/** Section 13 — Assessments. */
export const assessmentAreas = [
  "Stress",
  "Anxiety",
  "Sleep",
  "Emotional wellbeing",
  "Burnout",
  "Self-esteem",
];

/** Section 9 — Online counselling options. */
export const onlineOptions = [
  "Video counselling",
  "Audio counselling",
  "Flexible appointment scheduling",
  "Sessions from the privacy of your home",
];

/** Section 15 — Frequently Asked Questions. */
export const faqs = [
  {
    question: "Do I need a mental health diagnosis to see a counsellor?",
    answer: [
      "No. People seek counselling for many reasons, including stress, relationships, personal difficulties, emotional concerns and self-development.",
    ],
  },
  {
    question: "Is counselling confidential?",
    answer: [
      "Counselling is generally confidential, subject to applicable professional, legal and safety-related exceptions. Our confidentiality policy will be clearly explained before you begin.",
    ],
  },
  {
    question: "Can I choose between online and offline counselling?",
    answer: [
      "Yes. SoulSpace offers both online and offline options, depending on availability and suitability.",
    ],
  },
  {
    question: "How do I choose the right counsellor?",
    answer: [
      "You can browse professional profiles based on qualifications, experience and areas of focus. If you’re unsure, SoulSpace can help guide you toward an appropriate professional.",
    ],
  },
  {
    question: "How long is a session?",
    answer: [
      "Session duration and frequency may vary depending on the professional and your needs. Details will be shown before booking.",
    ],
  },
  {
    question: "What if I don’t know what to talk about?",
    answer: [
      "That’s completely okay.",
      "You can simply tell your counsellor:",
      "“I don’t really know where to start.”",
      "They can help you begin.",
    ],
  },
];
