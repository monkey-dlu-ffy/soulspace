/* ==========================================================================
   SoulSpace — Image sources
   --------------------------------------------------------------------------
   Every image on the site is referenced from this single file so that
   placeholder photography can be swapped for real, licensed assets without
   touching any component.

   TO REPLACE:
   1. Drop your images into /public/images/ (e.g. /public/images/hero-1.jpg)
   2. Change the `src` below to "/images/hero-1.jpg"
   3. Update the `alt` text to describe the new photograph accurately.

   NOTE: the URLs below are placeholders. If a remote placeholder fails to
   load, <LazyImage> falls back to an on-brand gradient panel, so the layout
   never breaks.
   ========================================================================== */

/** Shared query string so every placeholder is delivered at a sensible size. */
const q = "?auto=format&fit=crop&w=1200&q=70";
const u = (id) => `https://images.unsplash.com/${id}${q}`;

/** Hero — the opening impression: calm, human, unhurried. */
export const heroImages = [
  {
    src: u("photo-1516302752625-fcc3c50ae61f"),
    alt: "Soft morning light falling across a quiet room with a comfortable armchair",
  },
  {
    src: u("photo-1499209974431-9dddcece7f88"),
    alt: "A person sitting calmly by a window, resting and taking a moment for themselves",
  },
  {
    src: u("photo-1506126613408-eca07ce68773"),
    alt: "A person sitting cross-legged with eyes closed, breathing slowly",
  },
];

/** Counselling environment — the offline space itself. */
export const environmentImages = [
  {
    src: u("photo-1567767292278-a4f21aa2d36e"),
    alt: "A warm, softly lit counselling room with two comfortable chairs facing each other",
  },
  {
    src: u("photo-1524758631624-e2822e304c36"),
    alt: "A quiet seating corner with cushions, plants and natural light",
  },
  {
    src: u("photo-1541123437800-1bb1317badc2"),
    alt: "A calm interior with green plants beside a wide window",
  },
];

/** Professionals — portraits used on the profile cards. */
export const professionalImages = {
  one: [
    {
      src: u("photo-1573497019940-1c28c88b4f3e"),
      alt: "Portrait of a mental health professional in a consulting room",
    },
    {
      src: u("photo-1594824476967-48c8b964273f"),
      alt: "A counsellor listening attentively during a conversation",
    },
    {
      src: u("photo-1544005313-94ddf0286df2"),
      alt: "A counsellor seated in a bright room during a quiet moment",
    },
  ],
  two: [
    {
      src: u("photo-1622253692010-333f2da6031d"),
      alt: "Portrait of a mental health professional seated at a desk",
    },
    {
      src: u("photo-1580489944761-15a19d654956"),
      alt: "A counsellor making notes during a session",
    },
    {
      src: u("photo-1537511446984-935f663eb1f4"),
      alt: "A counsellor at a desk beside a window with soft daylight",
    },
  ],
  three: [
    {
      src: u("photo-1607990281513-2c110a25bd8c"),
      alt: "Portrait of a mental health professional in a calm office setting",
    },
    {
      src: u("photo-1551836022-d5d88e9218df"),
      alt: "A counsellor in conversation with a client",
    },
    {
      src: u("photo-1438761681033-6461ffad8d80"),
      alt: "Portrait of a counsellor in a warmly lit space",
    },
  ],
};

/** Online counselling — video and audio sessions from a private space. */
export const onlineImages = [
  {
    src: u("photo-1587560699334-cc4ff634909a"),
    alt: "A person joining a private video counselling session on a laptop at home",
  },
  {
    src: u("photo-1591696205602-2f950c417cb9"),
    alt: "A quiet home workspace set up for a private online conversation",
  },
  {
    src: u("photo-1610901157620-340856d0a50f"),
    alt: "A person wearing headphones during an audio counselling session",
  },
];

/** Offline counselling — meeting face to face. */
export const offlineImages = [
  {
    src: u("photo-1600880292203-757bb62b4baf"),
    alt: "Two people sitting across from one another in an unhurried conversation",
  },
  {
    src: u("photo-1521737604893-d14cc237f11d"),
    alt: "A welcoming reception area with soft seating",
  },
  {
    src: u("photo-1517048676732-d65bc937f952"),
    alt: "A calm meeting space arranged for a face-to-face conversation",
  },
];

/** Journal / wellness — self reflection and emotional wellbeing. */
export const journalImages = [
  {
    src: u("photo-1517842645767-c639042777db"),
    alt: "An open notebook and pen on a table beside a cup of tea",
  },
  {
    src: u("photo-1455390582262-044cdead277a"),
    alt: "A person writing quietly in a journal by a window",
  },
  {
    src: u("photo-1471107340929-a87cd0f5b5f3"),
    alt: "A still, open landscape at dawn suggesting space to think",
  },
];

/** Session information — what a first conversation looks like. */
export const sessionImages = [
  {
    src: u("photo-1573497019418-b400bb3ab074"),
    alt: "Two people seated together during a supportive conversation",
  },
  {
    src: u("photo-1543269865-cbf427effbad"),
    alt: "A relaxed conversation between two people in a bright room",
  },
  {
    src: u("photo-1516534775068-ba3e7458af70"),
    alt: "Two people talking quietly across a low table in a calm room",
  },
];
