import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-16 lg:py-20">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
      <img
        src="https://images.unsplash.com/photo-1517080631580-38fa7fb87b26?q=80&w=1600&auto=format&fit=crop"
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 lg:flex-row lg:items-center lg:px-10">
        <div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-amber">
            Let&apos;s build together
          </p>
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
            Ready to start your next project?
          </h2>
          <p className="mt-2 text-sm text-white/70">Let&apos;s build something exceptional together.</p>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-amber px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-amber-dark"
        >
          Request a Quote
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
