import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — COLLEC.NYC",
  description:
    "Explore our gifting service tiers: Advisory Only, Advisory & Handling, and Subscription plans.",
};

const tiers = [
  {
    name: "Advisory Only",
    price: "Free",
    period: "",
    description: "Perfect for those who just need a nudge in the right direction.",
    features: [
      "15-minute consultation",
      "Personalized gift recommendations",
      "Curated suggestions based on recipient",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Advisory & Handling",
    price: "$60",
    period: "per gift",
    description: "Our full-service option — we handle everything from idea to delivery.",
    features: [
      "15-minute consultation",
      "Curated handwritten letter",
      "Insurance included",
      "Standard handling & packaging",
      "Standard shipping (< 10 lbs)",
      "Personalized gift recommendation",
    ],
    cta: "Book Now",
    highlight: false,
  },
  {
    name: "Subscription",
    price: "$100",
    period: "/month",
    description: "For the serial gift-giver. Best value for frequent occasions.",
    features: [
      "Everything in Advisory & Handling",
      "Up to 5 recipients per month",
      "3-month minimum commitment",
      "Priority scheduling",
    ],
    cta: "Subscribe",
    highlight: true,
    badge: "Best Value",
  },
];

const extraCharges = [
  { item: "Insurance (gift value > $1,000)", price: "$2 per additional $100" },
  { item: "Premium packaging upgrade", price: "$10" },
  { item: "Expedited shipping (3 days, < 10 lbs)", price: "$40" },
  { item: "Courier delivery (Manhattan only)", price: "$50" },
];

const testimonials = [
  {
    quote:
      "COLLEC took care of everything — the gift was so personal, my partner thought I spent weeks planning it.",
    author: "Sarah M.",
    role: "Anniversary Gift",
  },
  {
    quote:
      "As someone who's terrible at gift-giving, this service was a lifesaver. My team loved their holiday gifts!",
    author: "James L.",
    role: "Corporate Gifting",
  },
  {
    quote:
      "The attention to detail is unmatched. They even included a handwritten note that was spot-on.",
    author: "Priya K.",
    role: "Birthday Gift",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-green-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-brand">
              Our Services
            </span>
            <h1 className="font-display text-4xl font-bold text-gray-900 md:text-5xl">
              Find the perfect plan for you
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              We adapt to your unique needs and work with you to find the
              solution that works best for you.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl p-8 transition-all ${
                  tier.highlight
                    ? "bg-green-brand text-white shadow-2xl shadow-green-brand/20 ring-2 ring-green-brand lg:scale-105"
                    : "bg-white shadow-sm ring-1 ring-gray-200 hover:shadow-md"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-bold uppercase tracking-wider text-green-brand shadow-sm">
                    {(tier as { badge?: string }).badge}
                  </span>
                )}

                <h3
                  className={`font-display text-xl font-bold ${tier.highlight ? "text-white" : "text-gray-900"}`}
                >
                  {tier.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span
                    className={`text-4xl font-bold ${tier.highlight ? "text-white" : "text-gray-900"}`}
                  >
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span
                      className={`text-sm ${tier.highlight ? "text-white/70" : "text-gray-500"}`}
                    >
                      {tier.period}
                    </span>
                  )}
                </div>

                <p
                  className={`mt-4 text-sm leading-relaxed ${tier.highlight ? "text-white/80" : "text-gray-500"}`}
                >
                  {tier.description}
                </p>

                <div
                  className={`my-8 h-px ${tier.highlight ? "bg-white/20" : "bg-gray-100"}`}
                />

                <ul className="flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <svg
                        className={`mt-0.5 h-4 w-4 flex-shrink-0 ${tier.highlight ? "text-white" : "text-green-brand"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={
                          tier.highlight ? "text-white/90" : "text-gray-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/book"
                  className={`mt-8 block rounded-xl py-3.5 text-center text-sm font-semibold transition-all ${
                    tier.highlight
                      ? "bg-white text-green-brand shadow-lg hover:bg-white/90"
                      : "bg-green-brand text-white shadow-lg shadow-green-brand/20 hover:bg-green-accent"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Extra charges */}
          <div className="mx-auto mt-16 max-w-2xl">
            <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-gray-400">
              Additional charges
            </h3>
            <div className="mt-6 divide-y divide-gray-100 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
              {extraCharges.map((charge) => (
                <div
                  key={charge.item}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <span className="text-gray-600">{charge.item}</span>
                  <span className="font-medium text-gray-900">
                    {charge.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center font-display text-3xl font-bold text-gray-900 md:text-4xl">
            What our clients say
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
              >
                <svg
                  className="mb-4 h-8 w-8 text-green-brand/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M11.3 2.6C6.1 5.1 3.4 8.4 3.4 12.5c0 3 1.7 5 4.2 5 2.1 0 3.7-1.5 3.7-3.5 0-2-1.3-3.4-3.1-3.4-.4 0-.8.1-1 .2.5-2.3 2.6-4.8 5.1-6.1L11.3 2.6zm10 0C16.1 5.1 13.4 8.4 13.4 12.5c0 3 1.7 5 4.2 5 2.1 0 3.7-1.5 3.7-3.5 0-2-1.3-3.4-3.1-3.4-.4 0-.8.1-1 .2.5-2.3 2.6-4.8 5.1-6.1L21.3 2.6z" />
                </svg>
                <p className="text-sm leading-relaxed text-gray-600">
                  {t.quote}
                </p>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-gray-900">
                    {t.author}
                  </p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
