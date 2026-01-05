import Link from "next/link";

export default function Terms() {
  return (
    <main className="container">
      <div className="hero" style={{ padding: 22 }}>
        <div className="hero-inner" style={{ gridTemplateColumns: "1fr" }}>
          <div>
            <h1 className="h1" style={{ fontSize: 34 }}>Terms</h1>
            <p className="sub">
              Placeholder terms. Replace with your real terms before significant traffic.
            </p>
            <div className="card">
              <h3>General</h3>
              <p>Service provided as-is. You control what you post and where you post it.</p>
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
