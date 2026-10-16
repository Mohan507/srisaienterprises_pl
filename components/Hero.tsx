// // import Link from "next/link";
// // import { ArrowRight } from "lucide-react";

// // export default function Hero() {
// //   return (
// //     <section className="relative overflow-hidden bg-navy pt-32 pb-20 lg:pt-40 lg:pb-28">
// //       <div className="blueprint-grid pointer-events-none absolute inset-0" />
// //       <div
// //         className="pointer-events-none absolute -right-24 top-10 h-[420px] w-[420px] rounded-full bg-amber/10 blur-3xl"
// //         aria-hidden
// //       />

// //       <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-8 lg:px-10">
// //         <div className="animate-rise">
// //           <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-amber">
// //             Construction Company
// //           </p>
// //           <h1 className="font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
// //             Building tomorrow.
// //             <br />
// //             <span className="text-amber">Delivering excellence.</span>
// //           </h1>
// //           <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
// //             Professional construction solutions built on quality, safety and reliability.
// //             We turn your vision into lasting structures.
// //           </p>
// //           <div className="mt-9 flex flex-col gap-3 sm:flex-row">
// //             <Link
// //               href="/contact"
// //               className="inline-flex items-center justify-center gap-2 rounded-md bg-amber px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-amber-dark"
// //             >
// //               Get a Quote
// //               <ArrowRight size={16} />
// //             </Link>
// //             <Link
// //               href="/#projects"
// //               className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
// //             >
// //               View Projects
// //             </Link>
// //           </div>
// //         </div>

// //         <div className="animate-rise relative" style={{ animationDelay: "120ms" }}>
// //           <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 shadow-2xl shadow-black/40">
// //             <img
// //               src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop"
// //               alt="Engineer overlooking an active building construction site at sunset, with a tower crane in the background"
// //               className="h-full w-full object-cover"
// //             />
// //             <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
// //           </div>
// //           <div className="absolute -bottom-6 -left-6 hidden rounded-md border border-line bg-white px-5 py-4 shadow-xl sm:block">
// //             <p className="font-display text-2xl font-bold text-ink">250+</p>
// //             <p className="text-xs text-steel">Projects delivered</p>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import Link from "next/link";
// import Image from "next/image";
// import bgse from "../public/images/bgse.png";
// import {
//   ArrowRight,
//   CheckCircle2,
//   MoveUpRight,
// } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="group relative min-h-[720px] overflow-hidden bg-[#07111f] lg:min-h-[850px]">
//       {/* Full Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src={bgse}
//           alt="Modern construction project"
//           fill
//           priority
//           sizes="100vw"
//           className="
//             object-cover
//             object-center
//             scale-[1.04]
//             transition-transform
//             duration-[2000ms]
//             ease-out
//             group-hover:scale-[1.08]
//             motion-safe:animate-[heroZoom_14s_ease-in-out_infinite]
//           "
//         />

//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-[#07111f]/65" />

//         {/* Left-to-right readability overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/75 to-[#07111f]/30" />

//         {/* Bottom fade */}
//         <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-[#07111f]/20" />
//       </div>

//       {/* Architectural Grid */}
//       <div
//         className="
//           pointer-events-none
//           absolute inset-0
//           opacity-[0.10]
//           bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
//           bg-[size:70px_70px]
//           motion-safe:animate-[gridMove_20s_linear_infinite]
//         "
//       />

//       {/* Ambient Glow */}
//       <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#f5b942]/10 blur-[120px] motion-safe:animate-pulse" />

//       <div className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px]" />

//       {/* Main Content */}
//       <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-28 lg:min-h-[850px] lg:px-10">
//         <div className="grid w-full items-center lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">

//           {/* LEFT CONTENT */}
//           <div className="max-w-3xl motion-safe:animate-[fadeUp_700ms_ease-out_both]">

//             {/* Eyebrow */}
//             <div className="mb-7 flex items-center gap-3">
//               <span className="h-px w-10 bg-[#f5b942]" />

//               <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f5b942] sm:text-sm">
//                 Construction & Infrastructure
//               </span>
//             </div>

//             {/* Heading */}
//             <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl xl:text-[82px]">
//               Building
//               <br />
//               <span className="text-[#f5b942]">
//                 what lasts.
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="mt-8 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
//               We deliver high-performance construction solutions for
//               commercial, industrial, and infrastructure projects —
//               engineered for quality, safety, and long-term value.
//             </p>

//             {/* CTA */}
//             <div className="mt-9 flex flex-col gap-3 sm:flex-row">

//               <Link
//                 href="/contact"
//                 className="
//                   group/btn
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-md
//                   bg-[#f5b942]
//                   px-7
//                   py-4
//                   text-sm
//                   font-semibold
//                   text-[#07111f]
//                   shadow-xl
//                   shadow-black/20
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:bg-[#e5a92f]
//                   hover:shadow-2xl
//                 "
//               >
//                 Start a Project

//                 <ArrowRight
//                   size={17}
//                   className="transition-transform duration-300 group-hover/btn:translate-x-1"
//                 />
//               </Link>

//               <Link
//                 href="/#projects"
//                 className="
//                   group/projects
//                   inline-flex
//                   items-center
//                   justify-center
//                   gap-2
//                   rounded-md
//                   border
//                   border-white/20
//                   bg-white/5
//                   px-7
//                   py-4
//                   text-sm
//                   font-semibold
//                   text-white
//                   backdrop-blur-md
//                   transition-all
//                   duration-300
//                   hover:-translate-y-1
//                   hover:border-white/40
//                   hover:bg-white/10
//                 "
//               >
//                 Explore Projects

//                 <MoveUpRight
//                   size={16}
//                   className="
//                     opacity-60
//                     transition-transform
//                     duration-300
//                     group-hover/projects:translate-x-1
//                     group-hover/projects:-translate-y-1
//                   "
//                 />
//               </Link>
//             </div>

//             {/* Trust Indicators */}
//             <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-6">

//               <div className="flex items-center gap-2 text-sm text-white/60">
//                 <CheckCircle2
//                   size={16}
//                   className="text-[#f5b942]"
//                 />
//                 Quality Assured
//               </div>

//               <div className="flex items-center gap-2 text-sm text-white/60">
//                 <CheckCircle2
//                   size={16}
//                   className="text-[#f5b942]"
//                 />
//                 Safety First
//               </div>

//               <div className="flex items-center gap-2 text-sm text-white/60">
//                 <CheckCircle2
//                   size={16}
//                   className="text-[#f5b942]"
//                 />
//                 On-Time Delivery
//               </div>

//             </div>
//           </div>

//           {/* RIGHT SIDE — INTENTIONALLY EMPTY
//               The bgse.png image is now the full-screen background. */}
//           <div className="hidden lg:block" />
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30 md:flex">
//         <span className="h-px w-8 bg-white/20" />
//         Scroll to explore
//         <span className="h-px w-8 bg-white/20" />
//       </div>
//     </section>
//   );
// }


import Link from "next/link";
import Image from "next/image";
import bgse from "../public/images/bgse.png";
import {
  ArrowRight,
  CheckCircle2,
  MoveUpRight,
} from "lucide-react";

const trustPoints = [
  "Quality-focused execution",
  "Safety-driven delivery",
  "Built for long-term value",
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="group/hero relative isolate flex min-h-[min(760px,100svh)] overflow-hidden bg-[#07111f] sm:min-h-[720px] lg:min-h-[800px]"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-30">
        <Image
          src={bgse}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] motion-safe:transition-transform motion-safe:duration-[1800ms] motion-safe:ease-out motion-safe:group-hover/hero:scale-[1.035]"
        />
      </div>

      {/* Background overlays */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[#07111f]/55"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/80 to-[#07111f]/40"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#07111f] via-transparent to-[#07111f]/25"
      />

      {/* Architectural grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:clamp(36px,5vw,72px)_clamp(36px,5vw,72px)]"
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[min(70vw,600px)] rounded-full bg-[#f5b942]/10 blur-[100px]"
      />

      {/* Main content */}
      <div className="mx-auto flex w-full max-w-7xl items-center px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="w-full max-w-4xl">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3 sm:mb-7">
            <span
              aria-hidden="true"
              className="h-px w-8 shrink-0 bg-[#f5b942] sm:w-10"
            />

            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#f5b942] sm:text-xs sm:tracking-[0.25em]">
              Construction &amp; Infrastructure
            </p>
          </div>

          {/* Heading */}
          <h1
  id="hero-title"
  className="max-w-4xl font-display text-[clamp(2.75rem,7.5vw,5.75rem)] font-bold leading-[1.05] tracking-[-0.04em] text-white"
>
  Your Vision.
  <br />
  <span className="text-[#f5b942]">
    Our Commitment.
  </span>
</h1>

<p className="mt-6 max-w-2xl text-base leading-7 text-white/80 sm:mt-8 sm:text-lg sm:leading-8">
  From the first foundation to the final finish, we're here
  to bring your construction vision to life with quality,
  precision, and care — building lasting value at every step.
</p>

          {/* Action buttons */}
          <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="group/primary inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#f5b942] px-6 py-3.5 text-sm font-semibold text-[#07111f] shadow-lg shadow-black/20 transition-colors duration-200 hover:bg-[#e5a92f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b942] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f] sm:w-auto sm:px-7"
            >
              Discuss Your Project

              <ArrowRight
                aria-hidden="true"
                size={17}
                className="transition-transform duration-200 group-hover/primary:translate-x-1"
              />
            </Link>

            <Link
              href="/#projects"
              className="group/projects inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/25 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-200 hover:border-white/45 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f] sm:w-auto sm:px-7"
            >
              Explore Our Projects

              <MoveUpRight
                aria-hidden="true"
                size={16}
                className="opacity-75 transition-transform duration-200 group-hover/projects:translate-x-0.5 group-hover/projects:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Trust indicators */}
          <ul className="mt-10 flex max-w-3xl flex-wrap gap-x-5 gap-y-3 border-t border-white/15 pt-5 sm:mt-12 sm:gap-x-7 sm:pt-6">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="inline-flex items-center gap-2 text-sm leading-5 text-white/75"
              >
                <CheckCircle2
                  aria-hidden="true"
                  size={16}
                  className="shrink-0 text-[#f5b942]"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45 md:flex"
      >
        <span className="h-px w-8 bg-white/30" />
        Scroll to explore
        <span className="h-px w-8 bg-white/30" />
      </div>
    </section>
  );
}
