import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { BackToWorkLink, RepositoryLink } from "./project-links";

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
    <main className="min-h-screen bg-[#f4efe5] text-[#151412]">
      <a className="skip-link" href="#case-study-content">
        Skip to case study
      </a>
      <header className="border-b border-black/15">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link
            className="focus-ring inline-flex min-h-11 items-center py-2 text-base font-bold"
            href="/"
          >
            Abdelrahman Mohamed
          </Link>
          <a
            className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-[#151412] px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-[#0f766e]"
            href="mailto:bodabanzen1818@gmail.com"
          >
            <Mail aria-hidden="true" size={17} />
            Contact me
          </a>
        </div>
      </header>

      <article id="case-study-content">
        <header className="mx-auto max-w-6xl px-5 pb-12 pt-8 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-16">
          <BackToWorkLink />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-14">
            <div>
              <p className="text-sm font-bold text-[#87651f]">{project.category}</p>
              <h1 className="mt-3 max-w-4xl text-balance text-5xl font-black leading-[1.02] sm:text-6xl lg:text-7xl">
                {project.name}
              </h1>
            </div>
            <div className="max-w-2xl lg:pb-1">
              <p className="text-pretty text-lg leading-8 text-[#45423c]">
                {project.summary}
              </p>
              <div className="mt-6">
                <RepositoryLink
                  href={project.repositoryUrl}
                  projectName={project.name}
                />
              </div>
            </div>
          </div>
        </header>

        <section
          aria-labelledby="technology-heading"
          className="bg-[#151412] text-white"
        >
          <div className="mx-auto grid max-w-6xl gap-5 px-5 py-8 sm:grid-cols-[0.35fr_1fr] sm:items-start sm:py-10">
            <h2 className="text-xl font-bold" id="technology-heading">
              Technologies
            </h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/85">
              {project.stack.map((technology) => (
                <li key={technology}>{technology}</li>
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
              className="text-balance text-3xl font-black sm:text-4xl"
              id="evidence-heading"
            >
              Interface evidence
            </h2>
            <p className="mt-4 text-pretty leading-7 text-[#45423c]">
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
                  className={`relative overflow-hidden border border-black/15 bg-white ${
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
                        : "(max-width: 768px) 90vw, 560px"
                    }
                    src={screenshot.src}
                  />
                </div>
                <figcaption className="mt-3 text-sm leading-6 text-[#59554d]">
                  {screenshot.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <nav
          aria-label="Case study navigation"
          className="border-y border-black/20"
        >
          <div className="mx-auto grid max-w-6xl md:grid-cols-2">
            <Link
              className="focus-ring group flex min-h-28 flex-col justify-center border-b border-black/20 px-5 py-6 transition-colors hover:bg-white md:border-b-0 md:border-r"
              href={`/projects/${previousProject.slug}`}
            >
              <span className="text-sm text-[#59554d]">Previous case study</span>
              <span className="mt-1 flex items-center justify-between gap-4 text-lg font-bold">
                {previousProject.name}
                <ArrowRight
                  aria-hidden="true"
                  className="rotate-180"
                  size={19}
                />
              </span>
            </Link>
            <Link
              className="focus-ring group flex min-h-28 flex-col justify-center px-5 py-6 transition-colors hover:bg-white"
              href={`/projects/${nextProject.slug}`}
            >
              <span className="text-sm text-[#59554d]">Next case study</span>
              <span className="mt-1 flex items-center justify-between gap-4 text-lg font-bold">
                {nextProject.name}
                <ArrowRight aria-hidden="true" size={19} />
              </span>
            </Link>
          </div>
        </nav>
      </article>

      <footer className="bg-[#0f0f0e] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-pretty text-lg font-semibold">
            Interested in discussing this project or another opportunity?
          </p>
          <a
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#151412] transition-colors hover:bg-[#f4efe5]"
            href="mailto:bodabanzen1818@gmail.com"
          >
            <Mail aria-hidden="true" size={18} />
            Contact me
          </a>
        </div>
      </footer>
    </main>
  );
}
