import CounsellingDetail from "../components/CounsellingDetail";
import { onlineImages } from "../data/images";
import { onlineOptions } from "../data/content";

const onlineBlocks = [
  { type: "p", text: "Sometimes getting to a centre isn’t easy." },
  {
    type: "p",
    text: "With SoulSpace Online, you can connect with your counsellor through a private online session.",
  },
  { type: "label", text: "You can choose:" },
  { type: "list", items: onlineOptions },
  {
    type: "p",
    text: "All you need is a private space and a reliable internet connection.",
  },
];

export default function OnlineCounselling() {
  return (
    <main id="main">
      <CounsellingDetail
        id="online-counselling"
        tone="tint"
        eyebrow="Online counselling"
        title="Online Counselling"
        lead="Support, wherever you are."
        blocks={onlineBlocks}
        cta="Book Online Counselling"
        ctaHref="/contact"
        images={onlineImages}
        carouselLabel="Online counselling sessions"
        aspect="4 / 3"
      />
    </main>
  );
}
