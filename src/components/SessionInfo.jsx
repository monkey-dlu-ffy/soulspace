import ImageCarousel from "./ImageCarousel";
import Reveal from "./Reveal";
import { sessionImages } from "../data/images";
import "../styles/SessionInfo.css";

/** What Happens In A Session? — answers the question people actually arrive with. */
export default function SessionInfo() {
  return (
    <section
      className="section session"
      id="session"
      aria-labelledby="session-title"
    >
      <div className="container">
        <div className="split split--reverse">
          <div>
            <Reveal>
              <p className="eyebrow">Your first session</p>
              <h2 id="session-title" className="section__title">
                What Happens In A Session?
              </h2>
            </Reveal>

            <Reveal delay={100} className="session__wondering">
              <p className="session__wondering-label">You may be wondering:</p>
              <blockquote className="session__quote">
                <p>“What am I supposed to say?”</p>
              </blockquote>
            </Reveal>

            <Reveal delay={150} className="prose session__prose">
              <p className="prose__emphasis">There’s no perfect way to start.</p>
              <p>
                Your first session is an opportunity to talk about what’s been
                happening, understand your concerns and discuss what you would
                like help with.
              </p>
              <p>
                Your counsellor may ask questions, listen to your experiences and
                help you identify patterns, emotions or difficulties that may be
                affecting you.
              </p>
              <p>
                Together, you can decide what the next steps may look like.
              </p>
              <p>
                You don’t have to prepare a perfect explanation of your life.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="session__closing">Just come as you are.</p>
            </Reveal>
          </div>

          <Reveal className="split__media" variant="scale" delay={120}>
            <ImageCarousel
              images={sessionImages}
              aspect="1 / 1"
              interval={7500}
              label="What a counselling session looks like"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
