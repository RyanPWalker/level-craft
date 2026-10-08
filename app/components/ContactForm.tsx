"use client";

import { useState, type FormEvent } from "react";
import { site } from "../site";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Estimate request form, posted to Formspree. Submits with fetch so visitors stay on the page;
 * without JavaScript it falls back to a normal form post and Formspree's own thank-you page.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="form-success" role="status">
        <h2>Thanks, we got your request.</h2>
        <p>
          We&apos;ll be in touch soon. If it&apos;s urgent, call{" "}
          <a href={site.phone.href}>{site.phone.display}</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" action={site.formEndpoint} method="POST" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="New estimate request from the website" />
      {/* Honeypot: hidden from people, filled in by bots, which Formspree then discards. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="form-honeypot" aria-hidden="true" />

      <div className="form-row">
        <label className="field">
          <span className="field-label">
            Name <span className="field-required">Required</span>
          </span>
          <input type="text" name="name" autoComplete="name" required />
        </label>
        <label className="field">
          <span className="field-label">
            Phone <span className="field-required">Required</span>
          </span>
          <input type="tel" name="phone" autoComplete="tel" required />
        </label>
      </div>
      <label className="field">
        <span className="field-label">
          Email <span className="field-optional">Optional</span>
        </span>
        <input type="email" name="email" autoComplete="email" />
      </label>
      <label className="field">
        <span className="field-label">
          Message <span className="field-optional">Optional</span>
        </span>
        <textarea name="message" rows={5} placeholder="Tell us about your project: the scope, location, and timing." />
      </label>

      {status === "error" && (
        <p className="form-error" role="alert">
          Sorry, your request didn&apos;t go through. Please try again, or call{" "}
          <a href={site.phone.href}>{site.phone.display}</a>.
        </p>
      )}

      <button type="submit" className="btn" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Request"}
      </button>
    </form>
  );
}
