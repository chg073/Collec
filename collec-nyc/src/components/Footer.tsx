"use client";

import Link from "next/link";
import { useState } from "react";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Story", href: "/about" },
  ],
  Services: [
    { label: "Advisory", href: "/services" },
    { label: "Pricing", href: "/services" },
  ],
  "Get in Touch": [
    { label: "Book Now", href: "/book" },
    { label: "Contact@collecnyc.com", href: "mailto:Contact@collecnyc.com" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-brown-brand text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Newsletter */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-2xl font-bold">
              COLLEC.NYC
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Bespoke, thoughtfully curated gifts designed just for the people
              who matter most.
            </p>
            <div className="mt-6">
              <p className="mb-2 text-sm font-medium">
                Subscribe to our newsletter
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmail("");
                }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 rounded-lg bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/50 outline-none ring-1 ring-white/20 transition-all focus:bg-white/15 focus:ring-white/40"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brown-brand transition-all hover:bg-white/90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} COLLEC.NYC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
