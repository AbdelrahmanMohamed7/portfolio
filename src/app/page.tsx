import {
  ArrowUpRight,
  Code2,
  Database,
  ExternalLink,
  Mail,
  MapPin,
  Smartphone,
  Terminal,
} from "lucide-react";
import Image from "next/image";
import { ProjectsSection } from "@/components/projects-section";

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    title: "Mobile",
    icon: Smartphone,
    skills: ["Flutter", "Dart", "Firebase", "Google Maps", "GetX"],
  },
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Vue", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Backend & Data",
    icon: Database,
    skills: ["Express.js", "Redis", "SQLite", "Firestore", "Realtime Database"],
  },
  {
    title: "Core Engineering",
    icon: Terminal,
    skills: ["Java", "Python", "C++", "C", "Rust", "Assembly", "Algorithms"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4efe5] text-[#151412]">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="sticky top-0 z-30 border-b border-black/15 bg-[#f4efe5]">
        <nav aria-label="Primary navigation" className="mx-auto max-w-6xl px-5 py-3">
          <div className="flex items-center justify-between gap-4">
            <a
              className="focus-ring inline-flex min-h-11 flex-col justify-center text-left text-base font-bold tracking-tight transition-colors hover:text-[#0f766e] sm:text-lg"
              href="#main-content"
            >
              <span>Abdelrahman Mohamed</span>
              <span className="text-[0.72rem] font-semibold tracking-[0.14em] text-[#59554d]">
                Full-Stack Software Developer
              </span>
            </a>
            <div className="hidden items-center gap-1 text-sm font-semibold md:flex">
              {navItems.map((item) => (
                <a
                  className="focus-ring inline-flex min-h-11 items-center rounded-full px-4 transition-colors hover:bg-[#151412] hover:text-white"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-[#151412] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#0f766e]"
              href="mailto:bodabanzen1818@gmail.com"
            >
              <Mail aria-hidden="true" size={16} />
              Contact me
            </a>
          </div>
          <div className="mt-2 flex items-center gap-1 overflow-x-auto pb-1 text-sm font-semibold md:hidden">
            {navItems.map((item) => (
              <a
                className="focus-ring inline-flex min-h-11 shrink-0 items-center rounded-full px-4 transition-colors hover:bg-[#151412] hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section id="main-content" className="scroll-mt-32 px-5 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <p className="text-base font-bold text-[#0f766e]">
              Full-Stack Software Developer
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-5xl font-black leading-[1.02] text-[#151412] sm:text-6xl lg:text-7xl">
              I turn ideas into polished, user-friendly products.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[#45423c]">
              Full-stack software backed by clean, maintainable engineering.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#0f766e] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#115e59]"
                href="#projects"
              >
                View my work
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <a
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/20 bg-transparent px-6 py-3 text-sm font-bold text-black transition-colors hover:border-[#0f766e] hover:text-[#0f766e]"
                href="/resume/abdelrahman-mohamed-resume.pdf"
                target="_blank"
              >
                <ExternalLink aria-hidden="true" size={18} />
                Download résumé
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>

          <aside className="border-y border-black/20 py-6 lg:border-y-0 lg:border-l lg:py-2 lg:pl-8">
              <div className="flex items-center gap-4">
                <Image
                  alt="Illustrated portrait of Abdelrahman Mohamed"
                  className="h-20 w-20 rounded-sm border border-black/15 object-cover"
                  height={80}
                  priority
                  src="/images/abdelrahman-illustrated-avatar.jpg"
                  width={80}
                />
              <div>
                <p className="text-xl font-semibold">Abdelrahman Mohamed</p>
                <p className="mt-1 text-sm font-semibold text-[#59554d]">
                  Full-Stack Software Developer
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm text-[#59554d]">
                  <MapPin aria-hidden="true" size={15} />
                  Egypt
                </p>
              </div>
            </div>
            <p className="mt-6 border-t border-black/15 pt-5 text-pretty text-base leading-7 text-[#45423c]">
              I build practical digital products that are clear, reliable, and
              easy to use.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold">
              <a
                className="focus-ring inline-flex min-h-11 items-center py-2 text-[#0f766e] underline decoration-[#0f766e]/35 underline-offset-4 hover:decoration-[#0f766e]"
                href="https://github.com/AbdelrahmanMohamed7"
                rel="noreferrer"
                target="_blank"
              >
                GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                className="focus-ring inline-flex min-h-11 items-center py-2 text-[#0f766e] underline decoration-[#0f766e]/35 underline-offset-4 hover:decoration-[#0f766e]"
                href="https://www.linkedin.com/in/abdelrahman-mohamed-85a61522a/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <ProjectsSection />

      <section id="skills" className="scroll-mt-32 bg-[#151412] px-5 py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="max-w-xl">
            <h2 className="text-balance text-3xl font-black leading-tight sm:text-4xl">
              Technologies used across the work.
            </h2>
            <p className="mt-4 text-pretty leading-7 text-white/75">
              Grouped by the kinds of systems and interfaces represented in the
              portfolio.
            </p>
          </div>
          <div className="border-t border-white/20">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  className="grid gap-4 border-b border-white/20 py-6 sm:grid-cols-[0.48fr_1fr] sm:items-start"
                  key={group.title}
                >
                  <div className="flex items-center gap-3">
                    <Icon aria-hidden="true" className="text-[#d9a441]" size={21} />
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-white/80">
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-32 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl border-y border-black/15 py-12 text-center">
          <h2 className="text-2xl font-semibold leading-tight sm:text-[1.75rem]">
            About
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-lg leading-8 text-[#45423c]">
            I&apos;m a Full-Stack Software Developer building practical web,
            mobile, backend, and desktop applications with clean, maintainable
            code.
          </p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-32 bg-[#0f0f0e] px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 border-y border-white/20 py-8 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-16 lg:py-10">
            <div>
              <h2 className="text-balance text-3xl font-black leading-tight sm:text-4xl">
                Let&apos;s build something useful.
              </h2>
              <p className="mt-4 max-w-xl text-pretty leading-7 text-white/75">
                Open to software development opportunities, collaborations,
                and practical product ideas.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <a
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#151515] transition-colors hover:bg-[#f4efe5]"
                href="mailto:bodabanzen1818@gmail.com"
              >
                <Mail aria-hidden="true" size={18} />
                Contact me
              </a>
              <a
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white hover:text-[#151412]"
                href="/resume/abdelrahman-mohamed-resume.pdf"
                target="_blank"
              >
                <ExternalLink aria-hidden="true" size={18} />
                Download résumé
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <a
              className="focus-ring inline-flex min-h-11 items-center py-2 underline decoration-white/30 underline-offset-4 hover:decoration-white"
              href="https://github.com/AbdelrahmanMohamed7"
              rel="noreferrer"
              target="_blank"
            >
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              className="focus-ring inline-flex min-h-11 items-center py-2 underline decoration-white/30 underline-offset-4 hover:decoration-white"
              href="https://www.linkedin.com/in/abdelrahman-mohamed-85a61522a/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              className="focus-ring inline-flex min-h-11 items-center py-2 underline decoration-white/30 underline-offset-4 hover:decoration-white"
              href="mailto:bodabanzen1818@gmail.com"
            >
              bodabanzen1818@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
