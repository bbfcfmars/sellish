import Link from "next/link";

export default function Privacy() {
  return (
    <main className="container">
      <div className="hero" style={{ padding: 22 }}>
        <div className="hero-inner" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <h1 className="h1" style={{ fontSize: 34 }}>Privacy Policy</h1>
            <p className="sub">
              Placeholder policy. Replace with your real policy before significant traffic.
            </p>
            <div className="card">
              <h3>Newsletter</h3>
              <p>We collect your email only to send product updates. Unsubscribe anytime.</p>
            </div>
            <p className="notice" style={{ marginTop: 14 }}>
              <Link href="/">Back</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
