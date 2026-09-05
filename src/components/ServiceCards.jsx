import Button from "./Button";
import ImageCarousel from "./ImageCarousel";
import Reveal from "./Reveal";
import Section from "./Section";
import { onlineImages, offlineImages } from "../data/images";
import "../styles/ServiceCards.css";

/** The two ways to meet a counsellor. Data-driven so the card markup exists once. */
const services = [
  {
    id: "online",
    title: "Online Counselling",
    body: [
      "Talk to a qualified mental-health professional from the comfort and privacy of your own space.",
    ],
    tagline: "Flexible. Private. Convenient.",
    cta: "Book Online Session",
    href: "#online-counselling",
    images: onlineImages,
    carouselLabel: "Online counselling sessions",
  },
  {
    id: "offline",
    title: "Offline Counselling",
    body: [
      "Prefer face-to-face conversations?",
      "Meet your counsellor in a calm, welcoming environment designed to help you feel comfortable and heard.",
    ],
    tagline: "Real conversations. Human connection.",
    cta: "Book Offline Session",
    href: "#offline-counselling",
    images: offlineImages,
    carouselLabel: "Offline counselling at our centre",
  },
];

export default function ServiceCards() {
  return (
    <Section
      id="services"
      tone="tint"
      eyebrow="Services"
      title="Find Your Space. Find Your Support."
      center
    >
      <div className="grid grid--2 services">
        {services.map((service, i) => (
          <Reveal
            as="article"
            key={service.id}
            delay={i * 130}
            className="service-card"
          >
            <div className="service-card__media">
              <ImageCarousel
                images={service.images}
                aspect="16 / 10"
                interval={5500 + i * 700}
                label={service.carouselLabel}
              />
            </div>

            <div className="service-card__body">
              <h3 className="service-card__title">{service.title}</h3>

              {service.body.map((line) => (
                <p key={line} className="service-card__text">
                  {line}
                </p>
              ))}

              <p className="service-card__tagline">{service.tagline}</p>

              <Button href={service.href} variant="soft">
                {service.cta}
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
