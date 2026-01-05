"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log to console in dev, or to error tracking service in production
    console.error("Error boundary caught:", error);
  }, [error]);

  return (
    <main className="container">
      <div className="hero" style={{ padding: 22 }}>
        <div className="hero-inner" style={{ gridTemplateColumns: "1fr" }}>
          <div style={{ textAlign: "center" }}>
            <h1 className="h1" style={{ fontSize: 34 }}>Something went wrong</h1>
            <p className="sub" style={{ margin: "16px auto" }}>
              An unexpected error occurred. Try again or contact support if the problem persists.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 20 }}>
              <button onClick={reset} className="button primary">
                Try again
              </button>
              <Link href="/" className="button">
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
