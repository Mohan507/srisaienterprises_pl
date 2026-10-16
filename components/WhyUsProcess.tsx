
import {
  CalendarClock,
  Users,
  Award,
  ShieldCheck,
  Clock3,
  ClipboardCheck,
  HardHat,
  FileCheck2,
  ArrowUpRight,
} from "lucide-react";

const REASONS = [
  {
    icon: CalendarClock,
    eyebrow: "01",
    title: "Proven project experience",
    desc: "More than 15 years of construction experience across residential, commercial, and specialized building projects.",
  },
  {
    icon: Users,
    eyebrow: "02",
    title: "Experienced project teams",
    desc: "Qualified professionals working across planning, engineering, site execution, procurement, and project coordination.",
  },
  {
    icon: Award,
    eyebrow: "03",
    title: "Quality-driven execution",
    desc: "Structured quality practices and experienced supervision help maintain consistent standards from foundation through finishing.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "04",
    title: "Safety & compliance",
    desc: "Safety planning, site supervision, documented procedures, and compliance considerations are integrated into project delivery.",
  },
  {
    icon: Clock3,
    eyebrow: "05",
    title: "Schedule & cost discipline",
    desc: "Clear planning, progress monitoring, and proactive coordination help keep projects aligned with agreed objectives.",
  },
  {
    icon: ClipboardCheck,
    eyebrow: "06",
    title: "Transparent communication",
    desc: "Clients receive clear updates, defined responsibilities, and visibility into project progress throughout the build.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Discovery & Planning",
    desc: "We begin by understanding the site, scope, objectives, budget, timeline, and technical requirements.",
  },
  {
    number: "02",
    title: "Design & Pre-Construction",
    desc: "Plans, specifications, estimates, materials, sequencing, and execution requirements are coordinated before work begins.",
  },
  {
    number: "03",
    title: "Construction & Coordination",
    desc: "Our site teams manage daily execution, trades, materials, quality, safety, and coordination across the project.",
  },
  {
    number: "04",
    title: "Quality & Compliance",
    desc: "Progress is monitored through inspections, quality checks, documentation, and ongoing site supervision.",
  },
  {
    number: "05",
    title: "Completion & Handover",
    desc: "We complete final inspections, resolve outstanding items, coordinate documentation, and prepare the project for handover.",
  },
];

export default function WhyUsProcess() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-concrete-dark/60 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* =========================================================
          
        ========================================================== */}

        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Intro */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-amber-dark" />

              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-dark">
                Why Sri Sai Enterprises
              </p>
            </div>

            <h2 className="mt-5 max-w-lg font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
              A disciplined approach to construction delivery.
            </h2>

            <p className="mt-7 max-w-md text-[15px] leading-7 text-steel">
              Successful construction requires more than skilled
              workmanship. It requires planning, accountability, technical
              coordination, and consistent execution at every stage.
            </p>

            <p className="mt-4 max-w-md text-[13px] leading-6 text-steel-light">
              Our teams bring these disciplines together to give clients
              greater visibility, control, and confidence throughout the
              project lifecycle.
            </p>

            {/* Small trust statement */}
            <div className="mt-10 border-l-2 border-amber pl-5">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-ink">
                Our commitment
              </p>

              <p className="mt-2 text-sm leading-6 text-steel">
                Clear communication. Responsible execution. Measurable
                accountability.
              </p>
            </div>
          </div>

          {/* Capability grid */}
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {REASONS.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="group bg-white p-6 transition-colors duration-300 hover:bg-navy"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[10px] font-bold tracking-[0.18em] text-steel-light transition-colors group-hover:text-white/30">
                      {reason.eyebrow}
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-amber/15 text-amber-dark transition-all duration-300 group-hover:bg-amber group-hover:text-navy">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>
                  </div>

                  <h3 className="mt-9 font-display text-base font-bold text-ink transition-colors group-hover:text-white">
                    {reason.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-steel transition-colors group-hover:text-white/60">
                    {reason.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            DELIVERY PROCESS
        ========================================================== */}

        <div className="mt-28 border-t border-line pt-20 lg:mt-36 lg:pt-24">
          {/* Process header */}
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-amber-dark" />

                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-dark">
                  Delivery methodology
                </p>
              </div>

              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                From concept to completion.
              </h2>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-[15px] leading-7 text-steel">
                Every project follows a structured delivery process designed
                to identify risks early, maintain coordination, and keep
                stakeholders informed from the first conversation through
                final handover.
              </p>
            </div>
          </div>

          {/* Process timeline */}
          <div className="mt-14">
            <div className="hidden h-px bg-line lg:block" />

            <div className="grid lg:grid-cols-5">
              {STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className={`relative border-b border-line py-7 lg:border-b-0 lg:py-8 ${
                    index !== 0 ? "lg:border-l lg:pl-7" : "lg:pr-7"
                  }`}
                >
                  {/* Step marker */}
                  <div className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-display text-xs font-bold text-amber">
                      {step.number}
                    </span>

                    {index < STEPS.length - 1 && (
                      <span className="h-px flex-1 bg-line lg:hidden" />
                    )}
                  </div>

                  <h3 className="mt-6 max-w-[190px] font-display text-base font-bold leading-tight text-ink">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-[220px] text-sm leading-6 text-steel">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process assurance strip */}
          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
            <div className="flex items-center gap-4 bg-white p-5">
              <HardHat
                size={21}
                className="shrink-0 text-amber-dark"
                strokeWidth={1.8}
              />

              <div>
                <p className="text-xs font-bold text-ink">
                  Site safety
                </p>

                <p className="mt-1 text-[11px] leading-5 text-steel">
                  Active supervision and safety-focused site practices.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5">
              <FileCheck2
                size={21}
                className="shrink-0 text-amber-dark"
                strokeWidth={1.8}
              />

              <div>
                <p className="text-xs font-bold text-ink">
                  Quality control
                </p>

                <p className="mt-1 text-[11px] leading-5 text-steel">
                  Inspections and quality checks throughout execution.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5">
              <Users
                size={21}
                className="shrink-0 text-amber-dark"
                strokeWidth={1.8}
              />

              <div>
                <p className="text-xs font-bold text-ink">
                  Client visibility
                </p>

                <p className="mt-1 text-[11px] leading-5 text-steel">
                  Clear communication and progress coordination.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 flex flex-col gap-5 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold text-ink">
                Have a project in mind?
              </p>

              <p className="mt-1 text-xs leading-5 text-steel">
                Tell us about your requirements and let’s discuss the right
                approach for your project.
              </p>
            </div>

            <a
              href="contact"
              className="group inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:text-amber-dark"
            >
              Start a conversation

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

