
"use client";

import { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  BadgeCheck,
  HardHat,
  Leaf,
  Headset,
  Quote,
  ArrowUpRight,
} from "lucide-react";
import {
  motion,
  useInView,
  useReducedMotion,
  animate,
  type Variants,
} from "motion/react";

function IconLinkedIn(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.24h4.56V23H.22V8.24zM8.34 8.24h4.37v2.02h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V23h-4.56v-6.86c0-1.64-.03-3.74-2.28-3.74-2.29 0-2.64 1.79-2.64 3.63V23H8.34V8.24z" />
    </svg>
  );
}

const STATS = [
  {
    value: 26,
    suffix: "+",
    label: "Years of experience",
  },
  {
    value: 250,
    suffix: "+",
    label: "Projects delivered",
  },
  {
    value: 100,
    suffix: "+",
    label: "Clients served",
  },
  {
    value: 5,
    suffix: "",
    label: "Industry awards",
  },
];

const DIFFERENTIATORS = [
  {
    icon: BadgeCheck,
    eyebrow: "01",
    title: "Licensed & fully insured",
    desc: "Established operational standards, appropriate licensing, bonding capacity, and insurance coverage to support complex commercial engagements.",
  },
  {
    icon: HardHat,
    eyebrow: "02",
    title: "Safety-led execution",
    desc: "A structured safety program with qualified site leadership, documented procedures, and continuous oversight across every active project.",
  },
  {
    icon: Leaf,
    eyebrow: "03",
    title: "Responsible construction",
    desc: "Practical sustainability strategies, responsible sourcing, and LEED-aligned practices where project requirements and conditions allow.",
  },
  {
    icon: Headset,
    eyebrow: "04",
    title: "Accountable project delivery",
    desc: "Clear ownership, transparent reporting, disciplined coordination, and responsive communication from pre-construction through closeout.",
  },
];

const CERTIFICATIONS = [
  "OSHA 30 Certified",
  "ISO 9001:2015",
  "LEED Accredited",
  "AGC Member",
  "EPA Lead-Safe",
];

const LEADERS = [
  {
    name: "Chitukula Narsimlu",
    role: "Founder & CEO",
    experience: "26+ years · Construction & engineering leadership",
    bio: "Founded Sri Sai Enterprises in 2000 with a focus on disciplined execution, technical excellence, and long-term client relationships.",
    photo: "",
    linkedin: "#",
  },
  {
    name: "Chitukula Mohan",
    role: "Chief Operating Officer",
    experience: " 5+ Operations · Project delivery · Commercial",
    bio: "Responsible for operational performance, project execution, resource planning, and maintaining consistent delivery standards across the organization.",
    photo: "",
    linkedin: "#",
  },
  
];

const FEATURED_QUOTE = {
  quote:
    "Strong projects are built long before construction begins. We believe disciplined planning, experienced people, and clear accountability are what turn complex requirements into reliable outcomes.",
  name: "Chitukula Narsimlu",
  role: "Founder & CEO, Sri Sai Enterprises",
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const rise: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function CountUp({
  value,
  suffix = "",
  duration = 1.5,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-10% 0px",
  });

  const reduceMotion = useReducedMotion();

  const [display, setDisplay] = useState(
    reduceMotion ? value : 0
  );

  useEffect(() => {
    if (!inView || reduceMotion) return;

    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });

    return () => controls.stop();
  }, [inView, value, duration, reduceMotion]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function LeaderPhoto({
  name,
  photo,
}: {
  name: string;
  photo: string;
}) {
  if (photo) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={photo}
        alt={name}
        className="h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
      />
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center bg-navy text-white/50">
      <div className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/15">
          <span className="font-display text-lg font-semibold">
            {name.charAt(0)}
          </span>
        </div>

        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
          Leadership profile
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-concrete py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* =========================================================
            COMPANY OVERVIEW
        ========================================================== */}

        <motion.div
          className="grid items-start gap-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-24"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-15% 0px",
          }}
        >
          {/* LEFT COLUMN */}

          <div>
            <motion.div variants={rise}>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-amber-dark" />

                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-dark">
                  About Sri Sai Enterprises
                </p>
              </div>

              <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                Built on experience.
                <br />
                Trusted with complexity.
              </h2>

              <p className="mt-7 max-w-xl text-[16px] leading-8 text-steel">
                Since 2000, Sri Sai Enterprises has delivered commercial construction,
                civil works, and technically demanding projects with a focus on
                safety, quality, schedule discipline, and long-term value.
              </p>

              <p className="mt-4 max-w-xl text-[15px] leading-7 text-steel">
                Our approach combines experienced field leadership, technical
                expertise, and disciplined project controls to give owners,
                developers, and partners greater confidence at every stage of
                delivery.
              </p>
            </motion.div>

            {/* DIFFERENTIATORS */}

            <motion.div
              variants={rise}
              className="mt-12 border-t border-line"
            >
              {DIFFERENTIATORS.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex gap-5 border-b border-line py-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-navy text-amber transition-transform duration-300 group-hover:translate-y-[-2px]">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold tracking-[0.16em] text-steel-light">
                          {item.eyebrow}
                        </span>

                        <h3 className="text-sm font-bold text-ink">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-2 max-w-lg text-sm leading-6 text-steel">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}

          <motion.div variants={rise}>
            <div className="relative">
              <div className="relative aspect-[5/4] overflow-hidden rounded-sm bg-navy shadow-2xl shadow-black/10">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
                  alt="Construction supervisors reviewing project plans on site"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/75 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber">
                        Established 2000
                      </p>

                      {/* <p className="mt-2 max-w-sm font-display text-xl font-semibold leading-tight text-white">
                        Construction expertise backed by decades of delivery.
                      </p> */}
                    </div>

                    <div className="hidden shrink-0 sm:flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-navy/40 text-white backdrop-blur-sm">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating trust card */}

              <div className="absolute -bottom-7 -left-7 hidden w-52 rounded-sm border border-white/10 bg-navy p-5 shadow-xl sm:block">
                <ShieldCheck
                  size={23}
                  className="text-amber"
                  strokeWidth={1.8}
                />

                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                  Our standard
                </p>

                <p className="mt-1 font-display text-base font-semibold text-white">
                  Safety. Quality. Accountability.
                </p>
              </div>
            </div>

            {/* STATS */}

            <div className="mt-14 grid grid-cols-2 border-y border-line sm:grid-cols-4">
              {STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`py-6 ${
                    index > 0
                      ? "border-l border-line pl-5 sm:pl-6"
                      : ""
                  }`}
                >
                  <p className="font-display text-3xl font-bold tracking-tight text-ink">
                    <CountUp
                      value={stat.value}
                      suffix={stat.suffix}
                    />
                  </p>

                  <p className="mt-1.5 text-[11px] font-medium uppercase tracking-wide text-steel">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CREDENTIALS */}

            {/* <div className="mt-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-steel-light">
                Credentials & affiliations
              </p>

              <div className="mt-4 flex flex-wrap gap-x-7 gap-y-3">
                {CERTIFICATIONS.map((certification) => (
                  <span
                    key={certification}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-steel"
                  >
                    <BadgeCheck
                      size={14}
                      className="text-amber-dark"
                    />

                    {certification}
                  </span>
                ))}
              </div>
            </div> */}
          </motion.div>
        </motion.div>

        {/* =========================================================
            LEADERSHIP
        ========================================================== */}

        <motion.div
          className="mt-28 border-t border-line pt-20 lg:mt-36 lg:pt-24"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-15% 0px",
          }}
        >
          <motion.div
            variants={rise}
            className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-amber-dark" />

                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-dark">
                  Leadership
                </p>
              </div>

              <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                Experienced leadership.
                <br />
                Accountable delivery.
              </h2>
            </div>

            <p className="max-w-xl text-[15px] leading-7 text-steel lg:justify-self-end">
              Our leadership team brings together construction,
              engineering, operations, and commercial expertise to maintain
              clear accountability from pre-construction through final
              handover.
            </p>
          </motion.div>

          {/* LEADERS */}

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {LEADERS.map((leader) => (
              <motion.article
                key={leader.name + leader.role}
                variants={rise}
                className="group overflow-hidden rounded-sm border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
              >
                <div className="aspect-[4/3] overflow-hidden bg-navy">
                  <LeaderPhoto
                    name={leader.name}
                    photo={leader.photo}
                  />
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-dark">
                    {leader.role}
                  </p>

                  <h3 className="mt-2 font-display text-xl font-bold text-ink">
                    {leader.name}
                  </h3>

                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-wide text-steel-light">
                    {leader.experience}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-steel">
                    {leader.bio}
                  </p>

                  <a
                    href={leader.linkedin}
                    aria-label={`${leader.name} on LinkedIn`}
                    className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-ink transition-colors hover:text-amber-dark"
                  >
                    <IconLinkedIn
                      width={14}
                      height={14}
                    />

                    LinkedIn

                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          {/* =======================================================
              EXECUTIVE STATEMENT
          ======================================================== */}

          <motion.div
            variants={rise}
            className="relative mt-12 overflow-hidden rounded-sm bg-navy"
          >
            <div className="absolute right-0 top-0 h-full w-1/3 bg-white/[0.025]" />

            <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:p-14">
              <Quote
                className="text-amber"
                size={30}
                strokeWidth={2}
              />

              <div>
                <p className="max-w-3xl font-display text-xl font-medium leading-relaxed text-white sm:text-2xl">
                  “{FEATURED_QUOTE.quote}”
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-sm font-bold text-white">
                    {FEATURED_QUOTE.name}
                  </span>

                  <span className="hidden text-white/25 sm:block">
                    /
                  </span>

                  <span className="text-sm text-white/55">
                    {FEATURED_QUOTE.role}
                  </span>
                </div>
              </div>

              <div className="hidden h-16 w-px bg-white/10 lg:block" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

