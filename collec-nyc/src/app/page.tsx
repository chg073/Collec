import Link from "next/link";

const categories = [
  {
    title: "For your Foodies",
    description: "Artisanal treats & culinary delights",
    icon: "🍽️",
  },
  {
    title: "For your Work Buddies",
    description: "Professional yet personal picks",
    icon: "💼",
  },
  {
    title: "For your Pet Owners",
    description: "Pamper their furry family members",
    icon: "🐾",
  },
  {
    title: "For your Loved Ones",
    description: "Heartfelt gifts that truly resonate",
    icon: "❤️",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:px-8">
          {/* Hero image placeholder */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream-dark">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-gray-400">
              <svg
                className="h-16 w-16 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm font-medium">Hero Image</span>
            </div>
          </div>

          {/* Hero copy */}
          <div className="flex flex-col items-start">
            <span className="mb-4 inline-block rounded-full bg-green-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-brand">
              Curated Gifting
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Elevate your special occasion
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 md:text-xl">
              A bespoke, thoughtfully curated gift designed just for them.
              Because the best gifts tell a story — your story.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/book"
                className="rounded-xl bg-green-brand px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-brand/25 transition-all hover:bg-green-accent hover:shadow-xl hover:shadow-green-accent/25"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:border-green-brand hover:text-green-brand"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-gray-900 md:text-4xl">
              Gifts for every relationship
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              We curate personalized gifts for the people who matter most in
              your life.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group cursor-pointer rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100 transition-all hover:-translate-y-1 hover:shadow-lg hover:ring-green-brand/20"
              >
                {/* Placeholder image area */}
                <div className="mb-6 flex aspect-[4/3] items-center justify-center rounded-xl bg-cream-dark text-4xl">
                  {cat.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-gray-900 group-hover:text-green-brand">
                  {cat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / value prop strip */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center sm:grid-cols-3 lg:px-8">
          {[
            { stat: "100%", label: "Personalized" },
            { stat: "NYC", label: "Based & Inspired" },
            { stat: "24hr", label: "Response Time" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-display text-3xl font-bold text-green-brand">
                {item.stat}
              </p>
              <p className="mt-1 text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
