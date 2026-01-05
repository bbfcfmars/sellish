"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [msg, setMsg] = useState<string>("");

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

    // Submit to Web3Forms (free email capture)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "5522ee4c-373f-4483-abd9-b36ac10f059d",
          email: trimmed,
          subject: "New Sellish Newsletter Signup",
          from_name: "Sellish Website",
          source: "sellish.ai"
        })
      });

      const data = await res.json();

      if (data.success) {
        setStatus("ok");
        router.push("/thanks");
        return;
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      // Fallback: save to localStorage for backup
      try {
        const key = "sellish_waitlist_emails";
        const existing = JSON.parse(localStorage.getItem(key) || "[]") as string[];
        const next = Array.from(new Set([...existing, trimmed]));
        localStorage.setItem(key, JSON.stringify(next));
        setStatus("ok");
        router.push("/thanks");
      } catch {
        setStatus("err");
        setMsg("Could not save. Try again.");
      }
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

      {msg ? (
        <p className="notice" style={{ margin: 0 }} id="form-error" role="alert">
          {msg}
        </p>
      ) : null}
    </form>
  );
}
