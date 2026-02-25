"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", inquiry: "" });
  }

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-green-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-brand">
            Get Started
          </span>
          <h1 className="font-display text-4xl font-bold text-gray-900 md:text-5xl">
            Book Now
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Ready to find the perfect gift? Reach out and we&apos;ll get back
            to you within 24 hours.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-2">
          {/* Payment placeholder */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-cream-dark p-12 ring-1 ring-gray-100">
            <svg
              className="h-16 w-16 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <h3 className="mt-6 font-display text-lg font-semibold text-gray-600">
              Payment Method
            </h3>
            <p className="mt-2 text-center text-sm text-gray-400">
              Payment integration coming soon.
              <br />
              For now, please use the contact form to get started.
            </p>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 md:p-10">
            <h2 className="font-display text-2xl font-bold text-gray-900">
              Contact Us
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Fill out the form below and we&apos;ll reach out within 24 hours.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl bg-green-light p-8 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-green-brand"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="mt-4 font-semibold text-green-brand">
                  Thank you for reaching out!
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  We&apos;ll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-medium text-green-brand underline underline-offset-4 hover:text-green-accent"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 bg-cream px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-green-brand focus:ring-2 focus:ring-green-brand/10"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-gray-200 bg-cream px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-green-brand focus:ring-2 focus:ring-green-brand/10"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="inquiry"
                    className="mb-1.5 block text-sm font-medium text-gray-700"
                  >
                    Your General Inquiry
                  </label>
                  <textarea
                    id="inquiry"
                    required
                    rows={5}
                    value={formData.inquiry}
                    onChange={(e) =>
                      setFormData({ ...formData, inquiry: e.target.value })
                    }
                    className="w-full resize-none rounded-xl border border-gray-200 bg-cream px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-green-brand focus:ring-2 focus:ring-green-brand/10"
                    placeholder="Tell us about the occasion, the recipient, and any ideas you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-green-brand py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-brand/20 transition-all hover:bg-green-accent hover:shadow-xl"
                >
                  Send Inquiry
                </button>
              </form>
            )}

            <div className="mt-8 border-t border-gray-100 pt-6 text-center">
              <p className="text-sm text-gray-400">Or reach us directly at</p>
              <a
                href="mailto:Contact@collecnyc.com"
                className="mt-1 inline-block text-sm font-semibold text-green-brand hover:text-green-accent"
              >
                Contact@collecnyc.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
