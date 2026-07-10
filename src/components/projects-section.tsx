import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { archivedProjects, getFeaturedProject } from "@/data/projects";
import { CaseStudyLink, RepositoryLink } from "./project-links";

const restaurant = getFeaturedProject("restaurant-canteen")!;
const medical = getFeaturedProject("medical-records")!;
const university = getFeaturedProject("global-university")!;

function StackList({ stack }: { stack: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-sm font-semibold text-[#16423c]">
      {stack.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  );
}

export function ProjectsSection() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="scroll-mt-24 bg-[#f7f5ef] px-5 py-16 sm:py-20 lg:py-24"
      id="projects"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl border-t-4 border-[#151412] pt-8">
          <h2
            className="text-balance text-3xl font-black leading-tight sm:text-4xl"
            id="projects-heading"
          >
            Selected work, presented for a closer look.
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-[#45423c] sm:text-lg sm:leading-8">
            Start with the flagship project, then explore the focused case
            studies or scan the archive for the rest.
          </p>
        </header>

        <article className="mt-10 border-y border-black/15 py-8 sm:mt-12 sm:py-10 lg:mt-16 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
            <div className="max-w-xl">
              <p className="text-sm font-bold text-[#87651f]">
                {restaurant.category}
              </p>
              <h3 className="mt-3 text-balance text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl">
                {restaurant.name}
              </h3>
              <p className="mt-5 text-pretty text-base leading-7 text-[#45423c] sm:text-lg sm:leading-8">
                {restaurant.summary}
              </p>
              <div className="mt-5">
                <StackList stack={restaurant.stack} />
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CaseStudyLink slug={restaurant.slug} />
                <RepositoryLink
                  href={restaurant.repositoryUrl}
                  projectName={restaurant.name}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
              {restaurant.screenshots.map((screenshot, index) => (
                <figure
                  className={index % 2 === 1 ? "sm:translate-y-6" : undefined}
                  key={screenshot.src}
                >
                  <div className="relative aspect-[9/16] overflow-hidden border border-black/15 bg-white">
                    <Image
                      alt={screenshot.alt}
                      className="object-contain"
                      fill
                      priority={index === 0}
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 170px"
                      src={screenshot.src}
                    />
                  </div>
                  <figcaption className="mt-2 text-sm leading-5 text-[#59554d]">
                    {screenshot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </article>

        <div className="py-12 sm:py-16 lg:py-20">
          <article className="grid items-center gap-7 md:grid-cols-[1.08fr_0.92fr] md:gap-10 lg:gap-14">
            <figure>
              <div className="relative aspect-video overflow-hidden border border-black/15 bg-white">
                <Image
                  alt={medical.screenshots[0].alt}
                  className="object-contain"
                  fill
                  sizes="(max-width: 768px) 90vw, 52vw"
                  src={medical.screenshots[0].src}
                />
              </div>
              <figcaption className="mt-2 text-sm text-[#59554d]">
                {medical.screenshots[0].caption}
              </figcaption>
            </figure>
            <div className="max-w-xl md:py-6">
              <p className="text-sm font-bold text-[#87651f]">{medical.category}</p>
              <h3 className="mt-3 text-balance text-3xl font-black leading-tight sm:text-4xl">
                {medical.name}
              </h3>
              <p className="mt-4 text-pretty leading-7 text-[#45423c]">
                {medical.summary}
              </p>
              <div className="mt-5">
                <StackList stack={medical.stack} />
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CaseStudyLink slug={medical.slug} />
                <RepositoryLink
                  href={medical.repositoryUrl}
                  projectName={medical.name}
                />
              </div>
            </div>
          </article>

          <article className="mt-14 grid items-center gap-7 border-t border-black/15 pt-12 md:mt-20 md:grid-cols-[0.88fr_1.12fr] md:gap-10 md:pt-16 lg:gap-14">
            <div className="max-w-xl md:py-6">
              <p className="text-sm font-bold text-[#87651f]">
                {university.category}
              </p>
              <h3 className="mt-3 text-balance text-3xl font-black leading-tight sm:text-4xl">
                {university.name}
              </h3>
              <p className="mt-4 text-pretty leading-7 text-[#45423c]">
                {university.summary}
              </p>
              <div className="mt-5">
                <StackList stack={university.stack} />
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CaseStudyLink slug={university.slug} />
                <RepositoryLink
                  href={university.repositoryUrl}
                  projectName={university.name}
                />
              </div>
            </div>
            <figure className="md:order-last">
              <div className="relative aspect-video overflow-hidden border border-black/15 bg-white">
                <Image
                  alt={university.screenshots[2].alt}
                  className="object-contain"
                  fill
                  sizes="(max-width: 768px) 90vw, 55vw"
                  src={university.screenshots[2].src}
                />
              </div>
              <figcaption className="mt-2 text-sm text-[#59554d]">
                {university.screenshots[2].caption}
              </figcaption>
            </figure>
          </article>
        </div>

        <section aria-labelledby="archive-heading" className="border-t border-black/20 pt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="text-2xl font-black" id="archive-heading">
              Project archive
            </h3>
            <p className="max-w-md text-sm leading-6 text-[#59554d]">
              Additional completed projects with verified repository links.
            </p>
          </div>
          <div className="mt-6 border-y border-black/20">
            {archivedProjects.map((project) => (
              <article
                className="grid gap-4 border-b border-black/15 py-6 last:border-b-0 md:grid-cols-[1fr_1.45fr_0.95fr_auto] md:items-center md:gap-6"
                key={project.slug}
              >
                <div>
                  <p className="text-sm font-bold text-[#87651f]">
                    {project.category}
                  </p>
                  <h4 className="mt-1 text-lg font-bold leading-6">{project.name}</h4>
                </div>
                <p className="text-sm leading-6 text-[#45423c]">{project.summary}</p>
                <p className="text-sm leading-6 text-[#16423c]">
                  {project.stack.join(" · ")}
                </p>
                <a
                  className="focus-ring inline-flex min-h-11 items-center gap-2 py-2 text-sm font-bold text-[#0f766e] underline decoration-[#0f766e]/35 underline-offset-4 hover:decoration-[#0f766e]"
                  href={project.repositoryUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Repository
                  <ArrowUpRight aria-hidden="true" size={16} />
                  <span className="sr-only">
                    for {project.name} (opens in a new tab)
                  </span>
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
