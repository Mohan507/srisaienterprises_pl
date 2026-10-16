
"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Ramulu and the team handled our home construction with great care. From the initial planning to the final finishing, communication was clear and the quality of work was excellent.",
    name: "Ramulu",
    role: "Homeowner, Hyderabad",
  },
  {
    quote:
      "We were very happy with the way the entire project was managed. The team kept us updated throughout the construction and paid close attention to the details that mattered to our family.",
    name: "Praveen",
    role: "Homeowner, Secunderabad",
  },
  {
    quote:
      "Building a home can be stressful, but the team made the process much easier for us. Their site supervision, workmanship and commitment to quality gave us confidence at every stage.",
    name: "Jeevan",
    role: "Homeowner, Telangana",
  },
  {
    quote:
      "What stood out was their professionalism and willingness to listen. They understood what we wanted and delivered a home that feels practical, comfortable and built to last.",
    name: "Mahesh",
    role: "Homeowner, Hyderabad",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  return (
    <section className="bg-concrete py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-amber-dark">
              Client feedback
            </p>

            <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
              Trusted by the families
              <br className="hidden sm:block" /> we build for.
            </h2>
          </div>

          {/* Desktop controls */}
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-all hover:border-amber hover:bg-amber hover:text-navy"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-all hover:border-amber hover:bg-amber hover:text-navy"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={`group flex min-h-[280px] flex-col border p-6 transition-all duration-300 ${
                i === index
                  ? "border-amber bg-white shadow-xl shadow-black/5"
                  : "hidden border-line bg-white/60 md:flex"
              }`}
            >
              {/* Stars */}
              <div className="flex gap-0.5 text-amber">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={14}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-5 flex-1 text-sm leading-7 text-steel">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Client */}
              <div className="mt-7 flex items-center gap-3 border-t border-line pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-amber">
                  {t.name.charAt(0)}
                </span>

                <div>
                  <p className="text-sm font-bold text-ink">{t.name}</p>
                  <p className="mt-0.5 text-xs text-steel">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile controls */}
        <div className="mt-8 flex items-center justify-between sm:hidden">
          <p className="text-xs font-semibold uppercase tracking-wider text-steel">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(count).padStart(2, "0")}
          </p>

          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-amber hover:text-amber-dark"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-amber hover:text-amber-dark"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

