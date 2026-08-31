import CounsellingDetail from "../components/CounsellingDetail";
import { offlineImages } from "../data/images";

const offlineBlocks = [
  {
    type: "p",
    text: "SoulSpace offline sessions are designed to provide a calm and comfortable environment for meaningful conversations.",
  },
  { type: "cadence", items: ["Come in.", "Take a breath.", "Sit down.", "Talk."] },
  {
    type: "p",
    text: "You don’t need to perform or explain everything perfectly.",
  },
  { type: "emphasis", text: "This is your space." },
];

export default function OfflineCounselling() {
  return (
    <main id="main">
      <CounsellingDetail
        id="offline-counselling"
        eyebrow="Offline counselling"
        title="Offline Counselling"
        lead="A place where you can slow down."
        blocks={offlineBlocks}
        cta="Book Offline Session"
        images={offlineImages}
        carouselLabel="The SoulSpace centre"
        aspect="4 / 3"
        reverse
      />
    </main>
  );
}
