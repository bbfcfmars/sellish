"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [msg, setMsg] = useState<string>("");

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const formspreeUrl = useMemo(() => {
    if (!formspreeId) return "";
    return `https://formspree.io/f/${formspreeId}`;
  }, [formspreeId]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg("");

    const trimmed = email.trim();
    if (!isValidEmail(trimmed)) {
      setStatus("err");
      setMsg("Enter a valid email.");
      return;
    }

    setStatus("sending");

    // Mode A: Formspree (recommended)
    if (formspreeUrl) {
      try {
        const res = await fetch(formspreeUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email: trimmed, source: "sellish-web" })
        });

        if (!res.ok) throw new Error("Bad response");
        setStatus("ok");
        router.push("/thanks");
        return;
      } catch {
        // fall through to local fallback
      }
    }

    // Mode B: Local fallback so you can launch with zero setup
    try {
      const key = "sellish_waitlist_emails";
      const existing = JSON.parse(localStorage.getItem(key) || "[]") as string[];
      const next = Array.from(new Set([...existing, trimmed]));
      localStorage.setItem(key, JSON.stringify(next));
      setStatus("ok");
      router.push("/thanks?local=1");
    } catch {
      setStatus("err");
      setMsg("Could not save. Try again.");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address for newsletter
      </label>
      <input
        id="newsletter-email"
        className="input"
        placeholder="you@email.com"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        inputMode="email"
        autoComplete="email"
        aria-required="true"
        aria-describedby={msg ? "form-error" : undefined}
      />
      <button className="button primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Saving…" : "Join the newsletter"}
      </button>

      {!formspreeUrl ? (
        <p className="notice" style={{ margin: 0 }}>
          Email capture is in placeholder mode. Set <code>NEXT_PUBLIC_FORMSPREE_ID</code> to collect for real.
        </p>
      ) : null}

      {msg ? (
        <p className="notice" style={{ margin: 0 }} id="form-error" role="alert">
          {msg}
        </p>
      ) : null}
    </form>
  );
}
