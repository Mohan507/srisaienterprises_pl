"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Calendar,
  Play,
  X,
} from "lucide-react";

type Project = {
  name: string;
  location: string;
  year: string;
  category: "Residential" | "Commercial";
  image: string;
  videoUrl?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Modern Residence",
    location: "Banjara Hills, Hyderabad, Telangana",
    year: "2024",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",

    // Add your YouTube URL here
    // videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },

  {
    name: "Contemporary Family Home",
    location: "Kompally, Hyderabad, Telangana",
    year: "2024",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",

    // videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },

  {
    name: "Premium Residence",
    location: "Manikonda, Hyderabad, Telangana",
    year: "2023",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1400&auto=format&fit=crop",

    // videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },

  {
    name: "Automotive Showroom",
    location: "Bowenpally, Hyderabad, Telangana",
    year: "2023",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",

    // videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },

  {
    name: "Luxury Residence",
    location: "Jubilee Hills, Hyderabad, Telangana",
    year: "2022",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1400&auto=format&fit=crop",

    // videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },

  {
    name: "Five-Storey Commercial Building",
    location: "Punjagutta, Hyderabad, Telangana",
    year: "2022",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",

    // videoUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  },
];

const FILTERS = [
  "All",
  "Residential",
  "Commercial",
  "Videos",
] as const;

type Filter = (typeof FILTERS)[number];

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);

    // youtube.com/watch?v=VIDEO_ID
    if (parsedUrl.hostname.includes("youtube.com")) {
      const videoId = parsedUrl.searchParams.get("v");

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      }

      // youtube.com/shorts/VIDEO_ID
      if (parsedUrl.pathname.startsWith("/shorts/")) {
        const videoId = parsedUrl.pathname.split("/")[2];

        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        }
      }
    }

    // youtu.be/VIDEO_ID
    if (parsedUrl.hostname === "youtu.be") {
      const videoId = parsedUrl.pathname.slice(1);

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
      }
    }

    return null;
  } catch {
    return null;
  }
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === "All") return true;

    if (activeFilter === "Videos") {
      return Boolean(project.videoUrl);
    }

    return project.category === activeFilter;
  });

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden bg-concrete py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* Header */}
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-amber-dark" />

                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-dark">
                  Our projects
                </p>
              </div>

              <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">
                Homes built with
                <br />
                care and precision.
              </h2>
            </div>

            <div className="max-w-xl lg:justify-self-end">
              <p className="text-[15px] leading-7 text-steel">
                From thoughtfully designed family homes to selected
                commercial developments, we bring the same attention
                to quality, workmanship, and dependable project
                delivery to every build.
              </p>
            </div>
          </div>

          {/* Project Filters */}
          <div className="mt-10 flex flex-wrap items-center gap-2 border-y border-line py-4">
            <span className="mr-3 text-[10px] font-bold uppercase tracking-[0.18em] text-steel">
              Explore
            </span>

            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;

              const videoCount = PROJECTS.filter(
                (project) => project.videoUrl
              ).length;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`inline-flex items-center gap-2 rounded-sm px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition-all ${
                    isActive
                      ? "bg-navy text-white"
                      : "text-steel hover:bg-white hover:text-ink"
                  }`}
                >
                  {filter}

                  {filter === "Videos" && videoCount > 0 && (
                    <span
                      className={`flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[9px] ${
                        isActive
                          ? "bg-amber text-navy"
                          : "bg-line text-steel"
                      }`}
                    >
                      {videoCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Projects */}
          {filteredProjects.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <article
                  key={project.name}
                  className="group relative overflow-hidden rounded-sm bg-navy shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.name} in ${project.location}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent opacity-90" />

                    {/* Category */}
                    <div className="absolute left-5 top-5">
                      <span className="rounded-sm border border-white/15 bg-navy/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Number */}
                    <div className="absolute right-5 top-5">
                      <span className="font-display text-sm font-bold text-white/50">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Video Button */}
                    {project.videoUrl && (
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedProject(project)
                        }
                        aria-label={`Watch ${project.name} video`}
                        className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-amber text-navy shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white"
                      >
                        <Play
                          size={17}
                          fill="currentColor"
                          className="ml-0.5"
                        />
                      </button>
                    )}
                  </div>

                  {/* Content */}
                  <div className="bg-navy p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-lg font-bold leading-tight text-white">
                        {project.name}
                      </h3>

                      {project.videoUrl && (
                        <span className="shrink-0 text-[9px] font-bold uppercase tracking-[0.12em] text-amber">
                          Video
                        </span>
                      )}
                    </div>

                    <div className="mt-4 flex flex-col gap-2 text-[11px] font-medium text-white/55">
                      <span className="flex items-center gap-1.5">
                        <MapPin
                          size={13}
                          className="text-amber"
                          strokeWidth={1.8}
                        />
                        {project.location}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <Calendar
                          size={13}
                          className="text-amber"
                          strokeWidth={1.8}
                        />
                        {project.year}
                      </span>
                    </div>

                    {/* Watch Project */}
                    {project.videoUrl && (
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedProject(project)
                        }
                        className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:text-amber"
                      >
                        Watch project
                        <Play
                          size={12}
                          fill="currentColor"
                        />
                      </button>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* No Videos State */
            <div className="mt-10 flex min-h-[260px] flex-col items-center justify-center border border-dashed border-line bg-white/40 px-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-amber">
                <Play size={18} fill="currentColor" />
              </div>

              <h3 className="mt-5 font-display text-lg font-bold text-ink">
                Project videos coming soon
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-steel">
                We are preparing selected project walkthroughs,
                construction updates, and completed project videos.
              </p>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-12 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold text-ink">
                Planning a new home or commercial project?
              </p>

              <p className="mt-1 text-xs leading-5 text-steel">
                Speak with our team about your requirements, site,
                and construction plans.
              </p>
            </div>

            <Link
              href="contact"
              className="group inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:text-amber-dark"
            >
              Start a conversation

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedProject?.videoUrl && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.name} project video`}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden bg-navy shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close video"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-amber hover:text-navy"
            >
              <X size={18} />
            </button>

            {/* Video */}
            <div className="aspect-video w-full bg-black">
              {getYouTubeEmbedUrl(
                selectedProject.videoUrl
              ) ? (
                <iframe
                  src={
                    getYouTubeEmbedUrl(
                      selectedProject.videoUrl
                    ) || undefined
                  }
                  title={`${selectedProject.name} project video`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="flex h-full items-center justify-center p-6 text-center text-sm text-white/70">
                  Invalid YouTube video URL.
                </div>
              )}
            </div>

            {/* Video Information */}
            <div className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-amber">
                  {selectedProject.category}
                </p>

                <h3 className="mt-1 font-display text-lg font-bold text-white">
                  {selectedProject.name}
                </h3>
              </div>

              <p className="flex items-center gap-1.5 text-xs text-white/50">
                <MapPin size={13} />
                {selectedProject.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

