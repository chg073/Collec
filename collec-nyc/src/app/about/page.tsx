import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — COLLEC.NYC",
  description:
    "Learn about COLLEC — a bespoke gifting company based in New York City.",
};

export default function AboutPage() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <span className="mb-4 inline-block rounded-full bg-green-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-brand">
          Our Story
        </span>
        <h1 className="font-display text-4xl font-bold text-gray-900 md:text-5xl">
          About the Company
        </h1>

        <div className="mt-12 space-y-8 text-base leading-relaxed text-gray-600 md:text-lg md:leading-relaxed">
          <p>
            In an increasingly digital world where connection often feels
            fleeting and transactional, we believe in returning to something
            more intentional. At COLLEC, we restore the art of thoughtful
            gifting — where every detail is considered, every choice is
            purposeful, and every gesture feels personal.
          </p>

          <p>
            Gifting, to us, is not an obligation but an expression: a way to
            say <em>I see you, I know you, you matter.</em>
          </p>

          <p>
            We are here to ensure that each gift reflects the recipient&apos;s
            personality and preference. We approach the process with both
            discernment and creativity to find gifts that feel effortless yet
            meaningful. Our philosophy is simple: the most memorable gifts are
            the ones that feel unmistakably personal.
          </p>

          <p>
            Based in New York City, we are endlessly inspired by the diversity
            of our surroundings. From distinctive local and international
            makers, refined provisions, and unexpected finds, we source with
            intention — seeking out pieces that carry quality. The city&apos;s
            energy shapes our perspective: modern, elevated, and always
            evolving.
          </p>

          <p>
            At COLLEC, we are here to make thoughtful giving effortless — so
            you can celebrate every meaningful relationship in your life with
            confidence and care.
          </p>
        </div>

        {/* Values */}
        <div className="mt-20 grid gap-8 sm:grid-cols-3">
          {[
            {
              title: "Intentional",
              desc: "Every gift is chosen with purpose and meaning, never generic.",
            },
            {
              title: "Personal",
              desc: "We learn who the recipient truly is before we ever start sourcing.",
            },
            {
              title: "Elevated",
              desc: "Inspired by NYC's energy — modern, refined, always evolving.",
            },
          ].map((val) => (
            <div
              key={val.title}
              className="rounded-2xl bg-cream p-8 ring-1 ring-gray-100"
            >
              <h3 className="font-display text-lg font-bold text-green-brand">
                {val.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
