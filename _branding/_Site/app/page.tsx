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
          <svg className="logo" viewBox="0 0 229.48 69.42" aria-label="Sellish">
            <g>
              <path d="M22.87,40.52c-4.94-1.4-9.22-2.79-9.22-7.17s3.54-6.71,8.38-6.71c3.54,0,6.52,1.49,9.04,4.38l5.22-5.03c-3.73-4.1-8.48-6.05-14.16-6.05-8.94,0-15.84,5.22-15.84,13.69s6.8,11.55,14.25,13.69c5.03,1.4,9.5,2.89,9.5,7.45s-3.82,7.27-9.04,7.27H0s.02,6.71.02,6.71h20.71c9.59,0,16.67-5.68,16.67-14.34s-6.89-11.64-14.53-13.88Z"/>
              <path d="M61.15,19.93c-13.41,0-22.45,10.34-22.45,24.41s8.94,24.41,22.36,24.41c9.13,0,16.02-4.1,20.12-12.3l-6.61-3.17c-2.79,5.4-7.17,8.38-13.32,8.38-8.66,0-14.16-6.52-14.81-15.56h35.58c.09-1.02.19-1.86.19-2.89,0-13.88-7.55-23.29-21.05-23.29ZM46.72,39.96c1.4-7.73,6.61-13.13,14.44-13.13s12.48,5.31,13.41,13.13h-27.85Z"/>
              <rect x="86.4" width="7.92" height="67.44"/>
              <rect x="101.95" width="7.92" height="67.44"/>
              <polygon points="125.15 49.11 125.33 23.35 117.42 23.35 117.42 67.44 125.33 67.44 125.33 58.32 117.68 49.11 125.15 49.11"/>
              <path d="M121.33,16.64c3.26,0,5.5-2.14,5.5-5.22s-2.24-5.22-5.5-5.22-5.4,2.14-5.4,5.22,2.24,5.22,5.4,5.22Z"/>
              <path d="M217.69,17.29c.06.14.12.28.18.41l2.07,4.25h.14l2.05-4.25c.08-.14.16-.28.22-.43v4.69h1.24v-6.73h-1.59l-1.93,4.25-2.03-4.25h-1.57v6.73h1.24v-4.67Z"/>
              <polygon points="212.36 21.95 213.63 21.95 213.63 16.44 215.58 16.44 215.58 15.24 210.43 15.24 210.43 16.44 212.36 16.44 212.36 21.95"/>
              <path d="M219.04,62.72c-4.81,0-7.19-2.94-7.19-7.59h-1.28s1.27,0,1.27,0v-18.05c0-11.7-3.37-16.33-16.89-16.33h-12.87V4.69h-7.93v25.31l-7.47-8.36s-8.24-.1-8.44-.09c-.18,0-.34.02-.5.05h0c-7.21.73-13.01,6.75-15.91,16.51l-1.59,5.4c-2.07,7.15-3.6,7.15-6.64,7.15h-12.26l5.3,6.11,8.52,9.82,1.1,1.27h6.11c10.85,0,16.95-5.04,20.4-16.86l1.58-5.38c1.94-6.65,3.42-7.15,5.47-7.15h4.34v29.34h7.93V28.33c2.74,0,11.54.02,13.03.09,4.78.24,8.75,1.73,8.88,8.82l-.07,17.87h0c.02,8.64,6.54,14.31,15.37,14.31h10.16l.02-6.7h-10.44ZM166.31,33.52c-4.06,0-5.6,4.15-7.19,9.58l-1.31,4.45c-2.48,8.49-6.01,15.39-13.59,15.39l-5.32.02-7.63-8.33,6.44-.07c4.41,0,6.3-4.36,8.23-11l1.31-4.45c1.72-5.76,5.64-12.3,10.53-12.34,0-.06,5.51-.03,5.51-.03l6.01,6.79h-2.99Z"/>
            </g>
          </svg>
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

      <div className="grid4" id="why">
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
          <div className="card">
            <h3>Sell <em>Faster</em>!</h3>
            <p>Sellish will list your items across multiple marketplaces for the most exposure. Sell more stuff in less time, and maximize profit with our AI Deal Optimizer.</p>
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
