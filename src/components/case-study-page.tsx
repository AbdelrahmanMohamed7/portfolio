import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { BackToWorkLink, LiveSiteLink, RepositoryLink } from "./project-links";

export function CaseStudyPage({
  project,
  previousProject,
  nextProject,
}: {
  project: Project;
  previousProject: Project;
  nextProject: Project;
}) {
  return (
    <main className="min-h-screen bg-[#131b2e] text-[#f1f5f9]">
      <a className="skip-link" href="#case-study-content">
        Skip to case study
      </a>
      <header className="border-b border-white/12 bg-[#131b2e]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link
            className="focus-ring inline-flex min-h-11 items-center py-2 text-base font-bold text-white hover:text-[#5eead4]"
            href="/"
          >
            Abdelrahman Mohamed
          </Link>
          <a
            className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-[#14b8a6] px-5 py-2 text-sm font-bold text-[#0f172a] transition-colors hover:bg-[#2dd4bf]"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bodabanzen1818@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <Mail aria-hidden="true" size={17} />
            Contact me
          </a>
        </div>
      </header>

      <article id="case-study-content">
        <header className="mx-auto max-w-6xl px-5 pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-16">
          <BackToWorkLink />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-end lg:gap-14">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#fbbf24]">
                {project.category}
              </p>
              <h1 className="mt-3 max-w-4xl text-balance text-4xl font-black leading-[1.04] text-white sm:text-5xl lg:text-6xl">
                {project.name}
              </h1>
            </div>
            <div className="max-w-2xl lg:pb-1">
              <p className="text-pretty text-lg leading-8 text-[#cbd5e1]">
                {project.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <LiveSiteLink
                    href={project.liveUrl}
                    projectName={project.name}
                  />
                ) : null}
                {project.repositoryUrl ? (
                  <RepositoryLink
                    href={project.repositoryUrl}
                    projectName={project.name}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </header>

        <section
          aria-labelledby="technology-heading"
          className="border-y border-white/12 bg-[#0f172a] text-white"
        >
          <div className="mx-auto grid max-w-6xl gap-5 px-5 py-8 sm:grid-cols-[0.35fr_1fr] sm:items-start sm:py-10">
            <h2 className="text-xl font-bold" id="technology-heading">
              Technologies
            </h2>
            <ul className="flex flex-wrap gap-2.5 text-sm">
              {project.stack.map((technology) => (
                <li
                  className="rounded-full border border-[#14b8a6]/35 bg-[#14b8a6]/10 px-3.5 py-1 font-semibold text-[#5eead4]"
                  key={technology}
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="evidence-heading"
          className="mx-auto max-w-6xl px-5 py-14 sm:py-20 lg:py-24"
        >
          <div className="max-w-2xl">
            <h2
              className="text-balance text-3xl font-black text-white sm:text-4xl"
              id="evidence-heading"
            >
              Interface evidence
            </h2>
            <p className="mt-4 text-pretty leading-7 text-[#cbd5e1]">
              Screens from the project are presented with captions describing
              the visible interface.
            </p>
          </div>

          <div
            className={
              project.screenshotLayout === "phone"
                ? "mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
                : "mt-10 grid grid-cols-1 gap-10 md:grid-cols-2"
            }
          >
            {project.screenshots.map((screenshot, index) => (
              <figure
                className={
                  project.screenshotLayout === "wide" &&
                  project.screenshots.length % 2 === 1 &&
                  index === 0
                    ? "md:col-span-2"
                    : undefined
                }
                key={screenshot.src}
              >
                <div
                  className={`relative overflow-hidden rounded-xl border border-white/15 bg-[#0f172a] ${
                    project.screenshotLayout === "phone"
                      ? "aspect-[9/16]"
                      : "aspect-video"
                  }`}
                >
                  <Image
                    alt={screenshot.alt}
                    className="object-contain"
                    fill
                    priority={index === 0}
                    sizes={
                      project.screenshotLayout === "phone"
                        ? "(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 270px"
                        : "(max-width: 768px) 90vw, 960px"
                    }
                    src={screenshot.src}
                  />
                </div>
                <figcaption className="mt-3 text-sm leading-6 text-[#94a3b8]">
                  {screenshot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <nav
          aria-label="Case study navigation"
          className="border-y border-white/15 bg-[#182238]"
        >
          <div className="mx-auto grid max-w-6xl md:grid-cols-2">
            <Link
              className="focus-ring group flex min-h-28 flex-col justify-center border-b border-white/15 px-5 py-6 transition-colors hover:bg-[#1e293b] md:border-b-0 md:border-r"
              href={`/projects/${previousProject.slug}`}
            >
              <span className="text-sm text-[#94a3b8]">Previous case study</span>
              <span className="mt-1 flex items-center justify-between gap-4 text-lg font-bold text-white group-hover:text-[#5eead4]">
                {previousProject.name}
                <ArrowRight
                  aria-hidden="true"
                  className="rotate-180"
                  size={19}
                />
              </span>
            </Link>
            <Link
              className="focus-ring group flex min-h-28 flex-col justify-center px-5 py-6 transition-colors hover:bg-[#1e293b]"
              href={`/projects/${nextProject.slug}`}
            >
              <span className="text-sm text-[#94a3b8]">Next case study</span>
              <span className="mt-1 flex items-center justify-between gap-4 text-lg font-bold text-white group-hover:text-[#5eead4]">
                {nextProject.name}
                <ArrowRight aria-hidden="true" size={19} />
              </span>
            </Link>
          </div>
        </nav>
      </article>

      <footer className="bg-[#0f172a] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-pretty text-lg font-semibold">
            Interested in discussing this project or a software engineering
            opportunity?
          </p>
          <a
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#14b8a6] px-6 py-3 text-sm font-bold text-[#0f172a] transition-colors hover:bg-[#2dd4bf]"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bodabanzen1818@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <Mail aria-hidden="true" size={18} />
            Contact me
          </a>
        </div>
      </footer>
    </main>
  );
}
