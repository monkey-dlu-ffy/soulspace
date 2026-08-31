import Section from "../components/Section";

export default function Terms() {
  return (
    <main id="main">
      <Section
        id="terms"
        eyebrow="Terms"
        title="Terms of Service"
        lead="The basics of using SoulSpace, in plain language."
      >
        <div className="prose" style={{ maxWidth: "62ch" }}>
          <p>
            By using the SoulSpace website and booking a session, you agree to
            use these services respectfully and in good faith.
          </p>
          <p>
            SoulSpace connects you with independent mental-health
            professionals. Details of each professional's qualifications,
            fees and availability are shared with you before a session is
            confirmed.
          </p>
          <p>
            Counselling offered through SoulSpace is not a substitute for
            emergency medical or psychiatric care — see our safety notice on
            the Contact page for what to do in a crisis.
          </p>
          <p>
            These terms may be updated from time to time. If you have
            questions about them, please get in touch before booking.
          </p>
        </div>
      </Section>
    </main>
  );
}
