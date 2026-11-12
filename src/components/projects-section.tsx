import Image from "next/image";
import { getFeaturedProject } from "@/data/projects";
import { CaseStudyLink, LiveSiteLink, RepositoryLink } from "./project-links";

const nusuk = getFeaturedProject("nusuk-community")!;
const restaurant = getFeaturedProject("restaurant-canteen")!;
const university = getFeaturedProject("global-university")!;
const physics = getFeaturedProject("procedural-physics")!;

function StackList({ stack }: { stack: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2 text-xs font-semibold sm:text-sm">
      {stack.map((technology) => (
        <li
          className="rounded-full border border-[#14b8a6]/30 bg-[#14b8a6]/10 px-3 py-1 text-[#5eead4]"
          key={technology}
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}

export function ProjectsSection() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="scroll-mt-24 bg-[#182238] px-5 py-16 sm:py-20 lg:py-24"
      id="projects"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl border-t-4 border-[#14b8a6] pt-8">
          <h2
            className="text-balance text-3xl font-black leading-tight text-[#f8fafc] sm:text-4xl"
            id="projects-heading"
          >
            Selected projects &amp; production systems.
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-[#cbd5e1] sm:text-lg sm:leading-8">
            Starting with my live cloud-deployed .NET &amp; React platform,
            followed by mobile, algorithmic, and systems engineering work.
          </p>
        </header>

        {/* #1 Flagship Project: Nusuk Community */}
        <article className="mt-10 rounded-2xl border border-white/12 bg-[#1e293b]/90 p-6 shadow-xl sm:mt-12 sm:p-8 lg:mt-14 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {nusuk.category}
              </div>
              <h3 className="mt-4 text-balance text-3xl font-black leading-[1.08] text-white sm:text-4xl lg:text-5xl">
                {nusuk.name}
              </h3>
              <p className="mt-4 text-pretty text-base leading-7 text-[#cbd5e1] sm:text-lg sm:leading-8">
                {nusuk.summary}
              </p>
              <div className="mt-5">
                <StackList stack={nusuk.stack} />
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {nusuk.liveUrl ? (
                  <LiveSiteLink
                    href={nusuk.liveUrl}
                    projectName={nusuk.name}
                  />
                ) : null}
                <CaseStudyLink slug={nusuk.slug} />
                {nusuk.repositoryUrl ? (
                  <RepositoryLink
                    href={nusuk.repositoryUrl}
                    projectName={nusuk.name}
                  />
                ) : null}
              </div>
            </div>

            <figure>
              <div className="relative aspect-video overflow-hidden rounded-xl border border-white/15 bg-[#0f172a] shadow-lg">
                <Image
                  alt={nusuk.screenshots[0].alt}
                  className="object-cover object-top"
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 52vw"
                  src={nusuk.screenshots[0].src}
                />
              </div>
              <figcaption className="mt-3 text-sm leading-5 text-[#94a3b8]">
                {nusuk.screenshots[0].caption}
              </figcaption>
            </figure>
          </div>
        </article>

        {/* #2 Project: Restaurant Canteen App */}
        <article className="mt-12 border-t border-white/15 pt-12 sm:mt-16 sm:pt-16">
          <div className="grid items-center gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12">
            <div className="max-w-xl">
              <p className="text-sm font-bold uppercase tracking-wider text-[#fbbf24]">
                {restaurant.category}
              </p>
              <h3 className="mt-3 text-balance text-3xl font-black leading-tight text-white sm:text-4xl">
                {restaurant.name}
              </h3>
              <p className="mt-4 text-pretty text-base leading-7 text-[#cbd5e1]">
                {restaurant.summary}
              </p>
              <div className="mt-5">
                <StackList stack={restaurant.stack} />
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CaseStudyLink slug={restaurant.slug} />
                {restaurant.repositoryUrl ? (
                  <RepositoryLink
                    href={restaurant.repositoryUrl}
                    projectName={restaurant.name}
                  />
                ) : null}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
              {restaurant.screenshots.map((screenshot, index) => (
                <figure
                  className={index % 2 === 1 ? "sm:translate-y-4" : undefined}
                  key={screenshot.src}
                >
                  <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-white/15 bg-[#0f172a]">
                    <Image
                      alt={screenshot.alt}
                      className="object-contain"
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 170px"
                      src={screenshot.src}
                    />
                  </div>
                  <figcaption className="mt-2 text-xs leading-5 text-[#94a3b8]">
                    {screenshot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </article>

        {/* #3 & #4 Projects: Global University Ranking Engine & Procedural 2D Physics Engine */}
        <div className="mt-12 space-y-12 border-t border-white/15 pt-12 sm:mt-16 sm:space-y-16 sm:pt-16">
          <article className="grid items-center gap-7 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:gap-14">
            <figure>
              <div className="relative aspect-video overflow-hidden rounded-xl border border-white/15 bg-[#0f172a]">
                <Image
                  alt={university.screenshots[2].alt}
                  className="object-contain"
                  fill
                  sizes="(max-width: 768px) 90vw, 52vw"
                  src={university.screenshots[2].src}
                />
              </div>
              <figcaption className="mt-2 text-sm text-[#94a3b8]">
                {university.screenshots[2].caption}
              </figcaption>
            </figure>
            <div className="max-w-xl md:py-4">
              <p className="text-sm font-bold uppercase tracking-wider text-[#fbbf24]">
                {university.category}
              </p>
              <h3 className="mt-3 text-balance text-3xl font-black leading-tight text-white sm:text-4xl">
                {university.name}
              </h3>
              <p className="mt-4 text-pretty leading-7 text-[#cbd5e1]">
                {university.summary}
              </p>
              <div className="mt-5">
                <StackList stack={university.stack} />
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CaseStudyLink slug={university.slug} />
                {university.repositoryUrl ? (
                  <RepositoryLink
                    href={university.repositoryUrl}
                    projectName={university.name}
                  />
                ) : null}
              </div>
            </div>
          </article>

          <article className="grid items-center gap-7 border-t border-white/15 pt-12 md:grid-cols-[0.95fr_1.05fr] md:gap-10 md:pt-16 lg:gap-14">
            <div className="max-w-xl md:py-4">
              <p className="text-sm font-bold uppercase tracking-wider text-[#fbbf24]">
                {physics.category}
              </p>
              <h3 className="mt-3 text-balance text-3xl font-black leading-tight text-white sm:text-4xl">
                {physics.name}
              </h3>
              <p className="mt-4 text-pretty leading-7 text-[#cbd5e1]">
                {physics.summary}
              </p>
              <div className="mt-5">
                <StackList stack={physics.stack} />
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <CaseStudyLink slug={physics.slug} />
                {physics.repositoryUrl ? (
                  <RepositoryLink
                    href={physics.repositoryUrl}
                    projectName={physics.name}
                  />
                ) : null}
              </div>
            </div>
            <figure className="md:order-last">
              <div className="relative aspect-video overflow-hidden rounded-xl border border-white/15 bg-[#0f172a]">
                <Image
                  alt={physics.screenshots[1].alt}
                  className="object-contain"
                  fill
                  sizes="(max-width: 768px) 90vw, 55vw"
                  src={physics.screenshots[1].src}
                />
              </div>
              <figcaption className="mt-2 text-sm text-[#94a3b8]">
                {physics.screenshots[1].caption}
              </figcaption>
            </figure>
          </article>
        </div>
      </div>
    </section>
  );
}
