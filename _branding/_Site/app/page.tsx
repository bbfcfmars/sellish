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
          <h1 className="h1" id="hero-heading">
            Turn your phone camera into an ATM
          </h1>
          <p className="sub">
            Snap photos of stuff you don't use. AI writes the listing. You make money.
            Stop letting cash collect dust in your closet.
          </p>

          <div className="badges" id="how">
            <span className="badge">1. Take photo</span>
            <span className="badge">2. AI writes listing</span>
            <span className="badge">3. Post & profit</span>
          </div>

          <div className="ctaRow">
            <a className="button primary" href={APP_STORE_URL} target="_blank" rel="noreferrer">
              Download for iOS
            </a>
            {PLAY_STORE_URL && (
              <a className="button" href={PLAY_STORE_URL} target="_blank" rel="noreferrer">
                Download for Android
              </a>
            )}
          </div>
          {!PLAY_STORE_URL && (
            <p className="small" style={{ marginTop: 16 }}>Android coming soon</p>
          )}
        </div>
      </section>

      <div className="grid3" id="why">
        <div>
          <div className="card">
            <h3>Make money</h3>
            <p>Turn unused items into cash. Your clutter is someone else's treasure.</p>
          </div>
          <div className="card">
            <h3>Save time</h3>
            <p>No more spending an hour per listing. AI handles titles, descriptions, and pricing.</p>
          </div>
          <div className="card">
            <h3>Declutter easily</h3>
            <p>Move through your backlog fast. List everything in minutes, not hours.</p>
          </div>
        </div>
      </div>

      <aside className="panel" id="signup">
        <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12, textAlign: 'center' }}>Get early access</h2>
        <p className="notice" style={{ marginBottom: 24 }}>
          Newsletter + updates. No spam. Unsubscribe anytime.
        </p>
        <SignupForm />
        <p className="notice" style={{ marginTop: 16 }}>
          By subscribing you agree to our <Link href="/privacy" style={{ textDecoration: 'underline' }}>Privacy Policy</Link>.
        </p>
      </aside>

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
