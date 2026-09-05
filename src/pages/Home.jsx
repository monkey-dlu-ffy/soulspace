import HeroSection from "../components/HeroSection";
import ConcernCards from "../components/ConcernCards";
import WhySoulSpace from "../components/WhySoulSpace";
import HowItWorks from "../components/HowItWorks";
import SessionInfo from "../components/SessionInfo";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";

/** Home — the landing page: hero, then the fastest path to "what's this for". */
export default function Home() {
  return (
    <main id="main">
      <HeroSection />
      <WhySoulSpace />
      <ConcernCards />
      <HowItWorks />
      <SessionInfo />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
