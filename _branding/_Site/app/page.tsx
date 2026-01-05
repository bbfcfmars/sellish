import Link from "next/link";
import SignupForm from "./signup-form";

const APP_STORE_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL || "https://apple.com"; // replace later
const PLAY_STORE_URL =
  process.env.NEXT_PUBLIC_PLAY_STORE_URL || ""; // optional

export default function Page() {
  return (
    <main className="container">
      <header className="topbar" role="banner">
        <div className="brand">
          <span className="dot" aria-hidden="true" />
          <span>Sellish</span>
        </div>
        <nav className="nav" aria-label="Main navigation">
          <a href="#how">How</a>
          <a href="#why">Why</a>
          <a href="#signup">Newsletter</a>
        </nav>
      </header>

      <section className="hero" role="region" aria-labelledby="hero-heading">
        <div className="hero-inner">
          <div>
            <h1 className="h1" id="hero-heading">Sell stuff in minutes, not hours.</h1>
            <p className="sub">
              Snap a photo. Get a clean listing draft and price guidance. Move
              through your backlog fast.
            </p>

            <div className="badges" id="how">
              <span className="badge">1) Photo</span>
              <span className="badge">2) Draft listing</span>
              <span className="badge">3) Post faster</span>
            </div>

            <div className="ctaRow">
              <a className="button primary" href={APP_STORE_URL} target="_blank" rel="noreferrer">
                Get the iOS app →
              </a>
              {PLAY_STORE_URL ? (
                <a className="button" href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                  Android →
                </a>
              ) : (
                <span className="small">Android: coming soon</span>
              )}
            </div>

            <div className="grid3" id="why">
              <div className="card">
                <h3>Faster drafts</h3>
                <p>Titles, descriptions, item details—generated and editable.</p>
              </div>
              <div className="card">
                <h3>Less friction</h3>
                <p>Spend time selling, not typing and retyping listings.</p>
              </div>
              <div className="card">
                <h3>Built for backlog</h3>
                <p>Move through piles quickly and keep momentum.</p>
              </div>
            </div>
          </div>

          <aside className="panel" id="signup">
            <h2 style={{ margin: "2px 0 8px", fontSize: 16 }}>Get updates</h2>
            <p className="notice" style={{ marginTop: 0, marginBottom: 12 }}>
              Newsletter + early access notes. No spam. Unsubscribe anytime.
            </p>
            <SignupForm />
            <p className="notice" style={{ marginTop: 10 }}>
              By subscribing you agree to our{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </aside>
        </div>
      </section>

      <footer className="footer" role="contentinfo">
        <div>© {new Date().getFullYear()} Sellish</div>
        <div style={{ display: "flex", gap: 12 }}>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="mailto:hello@sellish.com">Contact</a>
        </div>
      </footer>
    </main>
  );
}
