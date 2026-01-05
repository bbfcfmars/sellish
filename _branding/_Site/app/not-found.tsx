import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container">
      <div className="hero" style={{ padding: 22 }}>
        <div className="hero-inner" style={{ gridTemplateColumns: "1fr" }}>
          <div style={{ textAlign: "center" }}>
            <h1 className="h1" style={{ fontSize: 34 }}>404 — Page not found</h1>
            <p className="sub" style={{ margin: "16px auto" }}>
              This page doesn't exist, or it moved somewhere else.
            </p>
            <Link href="/" className="button primary">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
