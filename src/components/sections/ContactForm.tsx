"use client";

import { useState } from "react";

const serviceOptions = [
  "Android app development",
  "macOS app development",
  "Website development",
  "Secure web app development",
  "Backend development",
  "Smart contract / Web3 support",
  "Penetration testing",
  "Vulnerability assessment",
  "Secure deployment and hardening",
  "Digital marketing",
  "Branding and creative campaign",
  "Lead generation"
];

const labelClassName =
  "mb-3 block font-label text-xs font-semibold uppercase tracking-[0.18em] text-muted-rose";
const fieldClassName =
  "w-full rounded-none border-0 border-b border-outline/35 bg-surface-lowest px-3 py-4 text-text outline-none transition-colors duration-300 placeholder:text-neutral-600 focus:border-primary focus:ring-0";

type SubmitState =
  | { status: "idle"; message: "" }
  | { status: "loading"; message: "Sending..." }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function ContactForm() {
  const [state, setState] = useState<SubmitState>({ status: "idle", message: "" });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setState({ status: "loading", message: "Sending..." });

    try {
      const payload = Object.fromEntries(formData.entries());
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setState({
          status: "error",
          message: result.message || "Something went wrong. Please try again."
        });
        return;
      }

      form.reset();
      setState({
        status: "success",
        message:
          result.message ||
          "Your inquiry has been received. We will review it and respond soon."
      });
    } catch {
      setState({
        status: "error",
        message: "The message could not be sent. Please use WhatsApp."
      });
    }
  }

  return (
    <form
      aria-busy={state.status === "loading"}
      className="space-y-8"
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Field
          autoComplete="name"
          label="Name"
          name="name"
          placeholder="Your name"
          required
        />
        <Field
          autoComplete="organization"
          label="Business Name"
          name="businessName"
          placeholder="Company or project"
        />
        <Field
          autoComplete="tel"
          inputMode="tel"
          label="Phone"
          name="phone"
          placeholder="+91 ..."
          required
        />
        <Field
          autoComplete="email"
          label="Email"
          name="email"
          placeholder="you@company.com"
          required
          type="email"
        />
      </div>

      <label className="block">
        <span className={labelClassName}>Service Needed</span>
        <select
          className={fieldClassName}
          name="serviceNeeded"
          required
        >
          <option disabled value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className={labelClassName}>Message</span>
        <textarea
          className={`${fieldClassName} min-h-40 resize-y`}
          name="message"
          placeholder="Tell us what you want to build, secure, launch, or grow."
          required
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          className="focus-ring inline-flex min-h-12 rounded-full bg-primary px-8 py-4 font-label text-xs font-bold uppercase tracking-[0.14em] text-on-primary shadow-redglow transition-all duration-300 ease-premium hover:bg-primary-soft motion-safe:hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={state.status === "loading"}
          type="submit"
        >
          {state.status === "loading" ? "Sending..." : "Start Project"}
        </button>
        {state.message ? (
          <p
            aria-live="polite"
            role={state.status === "error" ? "alert" : "status"}
            className={
              state.status === "error"
                ? "text-sm text-primary-soft"
                : "text-sm text-muted"
            }
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}

function Field({
  autoComplete,
  inputMode,
  label,
  name,
  placeholder,
  required = false,
  type = "text"
}: {
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block">
      <span className={labelClassName}>{label}</span>
      <input
        autoComplete={autoComplete}
        className={fieldClassName}
        inputMode={inputMode}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
      />
    </label>
  );
}
