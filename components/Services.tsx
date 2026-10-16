
import {
  Building2,
  Home,
  Milestone,
  PaintRoller,
  ClipboardList,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    number: "01",
    icon: Building2,
    title: "Commercial Construction",
    desc: "Ground-up and complex commercial facilities delivered with disciplined cost, schedule, quality, and site coordination.",
    capabilities: [
      "Office & corporate facilities",
      "Retail & mixed-use",
      "Industrial & logistics",
    ],
  },
  {
    number: "02",
    icon: Home,
    title: "Residential & Multifamily",
    desc: "High-quality residential developments engineered for durability, efficiency, constructability, and long-term value.",
    capabilities: [
      "Multifamily developments",
      "Custom residential",
      "Housing communities",
    ],
  },
  {
    number: "03",
    icon: Milestone,
    title: "Civil & Infrastructure",
    desc: "Infrastructure and civil works executed with rigorous planning, technical coordination, and a safety-first approach.",
    capabilities: [
      "Roads & site development",
      "Utilities & drainage",
      "Public infrastructure",
    ],
  },
  {
    number: "04",
    icon: PaintRoller,
    title: "Renovation & Modernization",
    desc: "Strategic upgrades that improve performance, functionality, compliance, and the long-term value of existing assets.",
    capabilities: [
      "Facility modernization",
      "Tenant improvements",
      "Structural & interior upgrades",
    ],
  },
  {
    number: "05",
    icon: ClipboardList,
    title: "Program & Project Management",
    desc: "End-to-end project leadership providing owners with visibility, accountability, and control from planning through closeout.",
    capabilities: [
      "Pre-construction planning",
      "Cost & schedule control",
      "Procurement & coordination",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-concrete-dark/60 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-amber-dark" />

              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-dark">
                Our capabilities
              </p>
            </div>

            <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Built to deliver across
              <br />
              complex project environments.
            </h2>
          </div>

          <div className="max-w-xl lg:justify-self-end">
            <p className="text-[15px] leading-7 text-steel">
              From commercial developments and infrastructure programs to
              complex renovations, Sri Sai Enterprises provides integrated construction
              expertise across the full project lifecycle.
            </p>

            <p className="mt-3 text-[13px] leading-6 text-steel-light">
              Our teams bring together field experience, engineering
              knowledge, project controls, and disciplined execution to help
              owners manage complexity and deliver with confidence.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative flex min-h-[390px] flex-col bg-white p-7 transition-colors duration-300 hover:bg-navy"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-steel-light transition-colors group-hover:text-white/35">
                    {service.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-amber/15 text-amber-dark transition-all duration-300 group-hover:bg-amber group-hover:text-navy">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Content */}
                <div className="mt-10">
                  <h3 className="font-display text-lg font-bold leading-tight text-ink transition-colors group-hover:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-steel transition-colors group-hover:text-white/65">
                    {service.desc}
                  </p>
                </div>

                {/* Capabilities */}
                <div className="mt-auto pt-8">
                  <div className="border-t border-line pt-5 transition-colors group-hover:border-white/10">
                    <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.18em] text-steel-light transition-colors group-hover:text-white/35">
                      Core capabilities
                    </p>

                    <ul className="space-y-2">
                      {service.capabilities.map((capability) => (
                        <li
                          key={capability}
                          className="flex items-start gap-2 text-[11px] font-medium leading-5 text-steel transition-colors group-hover:text-white/60"
                        >
                          <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-amber-dark transition-colors group-hover:bg-amber" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-7 right-7 flex h-8 w-8 translate-y-2 items-center justify-center rounded-full border border-line opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:border-white/15 group-hover:opacity-100">
                  <ArrowUpRight
                    size={14}
                    className="text-amber"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom positioning statement */}
        <div className="mt-10 flex flex-col justify-between gap-5 border-t border-line pt-7 sm:flex-row sm:items-center">
          <p className="max-w-2xl text-xs leading-5 text-steel">
            <span className="font-bold text-ink">
              One partner. Multiple disciplines.
            </span>{" "}
            Integrated planning, construction, engineering coordination, and
            project controls under one accountable team.
          </p>

          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:text-amber-dark"
          >
            Discuss your project
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

