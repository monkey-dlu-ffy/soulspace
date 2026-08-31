import Button from "../components/Button";

export default function NotFound() {
  return (
    <main id="main">
      <section className="section" style={{ textAlign: "center" }}>
        <div className="container">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            404
          </p>
          <h1 className="section__title">This page took a wrong turn.</h1>
          <p className="section__lead" style={{ marginInline: "auto" }}>
            Let's get you back to somewhere familiar.
          </p>
          <div className="btn-row btn-row--center" style={{ marginTop: "2rem" }}>
            <Button href="/" variant="primary">
              Back to Home
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
