import Link from "next/link";

const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL || "https://apple.com";

export default function Thanks() {
  return (
    <main className="container">
      <div className="hero" style={{ padding: 22 }}>
        <div className="hero-inner" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <h1 className="h1" style={{ fontSize: 34 }}>You’re on the list.</h1>
            <p className="sub">
              If you haven’t already, grab the app.
            </p>
            <div className="ctaRow">
              <a className="button primary" href={APP_STORE_URL} target="_blank" rel="noreferrer">
                Open App Store →
              </a>
              <Link className="button" href="/">Back home</Link>
            </div>
            <p className="notice" style={{ marginTop: 14 }}>
              If you used placeholder mode, emails are stored only in your browser. Add Formspree to collect centrally.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
