"use client";

import { FormEvent, useState } from "react";

type SubmissionState = "idle" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const encodedBody = new URLSearchParams();

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        encodedBody.append(key, value);
      }
    });

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodedBody.toString(),
      });

      if (!response.ok) {
        throw new Error(`Unexpected response ${response.status}`);
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Failed to submit contact form", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="mt-24 rounded-3xl border border-night/10 bg-white/80 p-10 shadow-sm"
    >
      <p className="text-xs uppercase tracking-[0.35em] text-night/40">Collaborate</p>
      <h2 className="mt-3 text-3xl font-semibold text-night md:text-4xl">Let’s design clarity together.</h2>
      <p className="mt-4 max-w-2xl text-lg text-night/70">
        Tell me about the problem you’re trying to solve. I’ll respond within two business days with first steps.
      </p>
      <form
        className="mt-6 grid gap-4 md:grid-cols-2"
        name="project-inquiry"
        method="post"
        data-netlify="true"
        onSubmit={handleSubmit}
        noValidate
      >
        <input type="hidden" name="form-name" value="project-inquiry" />
        <label className="flex flex-col text-sm font-medium text-night/70">
          Name
          <input
            type="text"
            name="name"
            required
            className="mt-2 rounded-lg border border-night/20 bg-transparent px-4 py-3 text-base text-night outline-none transition-colors focus:border-night"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-night/70">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-2 rounded-lg border border-night/20 bg-transparent px-4 py-3 text-base text-night outline-none transition-colors focus:border-night"
          />
        </label>
        <label className="md:col-span-2 flex flex-col text-sm font-medium text-night/70">
          What challenge are you navigating?
          <textarea
            name="message"
            rows={4}
            className="mt-2 rounded-lg border border-night/20 bg-transparent px-4 py-3 text-base text-night outline-none transition-colors focus:border-night"
          ></textarea>
        </label>
        <button
          type="submit"
          className="md:col-span-2 inline-flex w-fit items-center rounded-full bg-night px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ivory transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending…" : "Send message"}
        </button>
        {status === "success" && (
          <p className="md:col-span-2 text-sm text-green-600" role="status">
            Thank you! I’ll be in touch within two business days.
          </p>
        )}
        {status === "error" && (
          <p className="md:col-span-2 text-sm text-red-600" role="alert">
            Something went wrong. Please try again or email me directly.
          </p>
        )}
      </form>
    </section>
  );
}
