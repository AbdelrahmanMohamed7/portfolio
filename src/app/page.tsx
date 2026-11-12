import {
  ArrowUpRight,
  Cloud,
  Code2,
  ExternalLink,
  Mail,
  MapPin,
  Server,
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
    title: "Backend & APIs",
    icon: Server,
    skills: [
      "C#",
      "ASP.NET Core (.NET)",
      "RESTful Web APIs",
      "Entity Framework Core (EF Core)",
      "LINQ",
      "Object-Oriented Programming (OOP)",
    ],
  },
  {
    title: "Database & Cloud",
    icon: Cloud,
    skills: [
      "Microsoft SQL Server",
      "Azure SQL Database",
      "Microsoft Azure",
      "Docker",
      "Vercel",
    ],
  },
  {
    title: "Frontend & Mobile",
    icon: Code2,
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite",
      "Responsive UI",
      "Flutter & Dart (Firebase)",
    ],
  },
  {
    title: "Core CS & Tools",
    icon: Terminal,
    skills: [
      "Data Structures & Algorithms",
      "C++",
      "C",
      "Python",
      "Git & GitHub",
      "Visual Studio",
      "VS Code",
      "Linux & VMware",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#131b2e] text-[#f1f5f9]">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="sticky top-0 z-30 border-b border-white/12 bg-[#131b2e]/95 backdrop-blur">
        <nav aria-label="Primary navigation" className="mx-auto max-w-6xl px-5 py-3">
          <div className="flex items-center justify-between gap-4">
            <a
              className="focus-ring inline-flex min-h-11 flex-col justify-center text-left text-base font-bold tracking-tight text-white transition-colors hover:text-[#5eead4] sm:text-lg"
              href="#main-content"
            >
              <span>Abdelrahman Mohamed</span>
              <span className="text-[0.72rem] font-semibold tracking-[0.12em] text-[#94a3b8]">
                Full-Stack Software Developer (.NET)
              </span>
            </a>
            <div className="hidden items-center gap-1 text-sm font-semibold md:flex">
              {navItems.map((item) => (
                <a
                  className="focus-ring inline-flex min-h-11 items-center rounded-full px-4 text-[#cbd5e1] transition-colors hover:bg-white/10 hover:text-white"
                  href={item.href}
                  key={item.href}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-[#14b8a6] px-4 py-2 text-sm font-bold text-[#0f172a] transition-colors hover:bg-[#2dd4bf]"
              href="#contact"
            >
              <Mail aria-hidden="true" size={16} />
              Contact me
            </a>
          </div>
          <div className="mt-2 flex items-center gap-1 overflow-x-auto pb-1 text-sm font-semibold md:hidden">
            {navItems.map((item) => (
              <a
                className="focus-ring inline-flex min-h-11 shrink-0 items-center rounded-full px-4 text-[#cbd5e1] transition-colors hover:bg-white/10 hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section
        id="main-content"
        className="scroll-mt-32 px-5 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.22fr_0.78fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#14b8a6]/35 bg-[#14b8a6]/10 px-3.5 py-1 text-sm font-bold text-[#5eead4]">
              Full-Stack Software Developer (.NET)
            </p>
            <h1 className="mt-5 max-w-4xl text-balance text-5xl font-black leading-[1.04] text-white sm:text-6xl lg:text-7xl">
              I build scalable full-stack web apps and resilient .NET backend
              systems.
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-[#cbd5e1]">
              Focused on C#, ASP.NET Core (.NET), RESTful Web APIs, Entity
              Framework Core, Microsoft SQL Server, React.js, and Microsoft
              Azure — delivering clean, maintainable software from database
              architecture to responsive interfaces.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#14b8a6] px-6 py-3 text-sm font-bold text-[#0f172a] transition-colors hover:bg-[#2dd4bf]"
                href="#projects"
              >
                View my work
                <ArrowUpRight aria-hidden="true" size={18} />
              </a>
              <a
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-[#2dd4bf] hover:text-[#5eead4]"
                href="/resume/abdelrahman-mohamed-resume.pdf"
                target="_blank"
              >
                <ExternalLink aria-hidden="true" size={18} />
                Download résumé
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>

          <aside className="rounded-2xl border border-white/12 bg-[#1a243b] p-6 shadow-lg lg:p-8">
            <div className="flex items-center gap-4">
              <Image
                alt="Abdelrahman Mohamed GitHub profile"
                className="h-20 w-20 rounded-xl border border-white/15 object-cover"
                height={80}
                priority
                src="/avatar.png"
                width={80}
              />
              <div>
                <p className="text-xl font-bold text-white">
                  Abdelrahman Mohamed
                </p>
                <p className="mt-1 text-sm font-semibold text-[#5eead4]">
                  Full-Stack Software Developer (.NET)
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm text-[#94a3b8]">
                  <MapPin aria-hidden="true" size={15} />
                  Cairo, Egypt
                </p>
              </div>
            </div>
            <p className="mt-6 border-t border-white/12 pt-5 text-pretty text-base leading-7 text-[#cbd5e1]">
              I design and ship full-stack software backed by clean C# and .NET
              APIs, optimized SQL Server schemas, containerized Azure deployments,
              and polished React interfaces.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold">
              <a
                className="focus-ring inline-flex min-h-11 items-center py-2 text-[#5eead4] underline decoration-[#5eead4]/40 underline-offset-4 hover:decoration-[#5eead4]"
                href="https://github.com/AbdelrahmanMohamed7"
                rel="noreferrer"
                target="_blank"
              >
                GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                className="focus-ring inline-flex min-h-11 items-center py-2 text-[#5eead4] underline decoration-[#5eead4]/40 underline-offset-4 hover:decoration-[#5eead4]"
                href="https://www.linkedin.com/in/abdelrahman-mohamed-85a61522a/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a
                className="focus-ring inline-flex min-h-11 items-center py-2 text-[#5eead4] underline decoration-[#5eead4]/40 underline-offset-4 hover:decoration-[#5eead4]"
                href="https://nusukcodes.site"
                rel="noreferrer"
                target="_blank"
              >
                Nusuk Live<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <ProjectsSection />

      <section
        id="skills"
        className="scroll-mt-32 border-y border-white/12 bg-[#0f172a] px-5 py-16 text-white sm:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="max-w-xl">
            <h2 className="text-balance text-3xl font-black leading-tight sm:text-4xl">
              Core technical stack.
            </h2>
            <p className="mt-4 text-pretty leading-7 text-[#cbd5e1]">
              Focused on the .NET backend ecosystem, relational databases, cloud
              deployments, and modern React interfaces.
            </p>
          </div>
          <div className="border-t border-white/15">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  className="grid gap-4 border-b border-white/15 py-6 sm:grid-cols-[0.48fr_1fr] sm:items-start"
                  key={group.title}
                >
                  <div className="flex items-center gap-3">
                    <Icon aria-hidden="true" className="text-[#fbbf24]" size={21} />
                    <h3 className="text-lg font-semibold text-white">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="flex flex-wrap gap-2 text-sm">
                    {group.skills.map((skill) => (
                      <li
                        className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[#e2e8f0]"
                        key={skill}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-32 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/12 bg-[#1a243b] px-6 py-12 text-center sm:px-10">
          <h2 className="text-2xl font-bold leading-tight text-white sm:text-[1.75rem]">
            About
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-lg leading-8 text-[#cbd5e1]">
            I&apos;m a Full-Stack Software Developer (.NET) based in Cairo, Egypt,
            holding a Dual Bachelor&apos;s degree in Computer Science from De
            Montfort University, UK &amp; Asia Pacific University, Malaysia. I
            specialize in building reliable backend APIs with C#, ASP.NET Core,
            Entity Framework Core, and Microsoft SQL Server, paired with fast,
            accessible React frontends and cloud deployments on Microsoft Azure.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-32 border-t border-white/12 bg-[#0f172a] px-5 py-16 text-white sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 border-y border-white/15 py-8 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-16 lg:py-10">
            <div>
              <h2 className="text-balance text-3xl font-black leading-tight sm:text-4xl">
                Let&apos;s talk about Full-Stack or .NET Backend opportunities.
              </h2>
              <p className="mt-4 max-w-xl text-pretty leading-7 text-[#cbd5e1]">
                Open to full-stack (.NET) and backend software engineering
                roles, collaboration, and product development.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-end">
              <a
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#14b8a6] px-6 py-3 text-sm font-bold text-[#0f172a] transition-colors hover:bg-[#2dd4bf]"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bodabanzen1818@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <Mail aria-hidden="true" size={18} />
                Email me (Gmail)
              </a>
              <a
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-[#2dd4bf] hover:text-[#5eead4]"
                href="/resume/abdelrahman-mohamed-resume.pdf"
                target="_blank"
              >
                <ExternalLink aria-hidden="true" size={18} />
                Download résumé
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#cbd5e1]">
            <a
              className="focus-ring inline-flex min-h-11 items-center py-2 underline decoration-white/30 underline-offset-4 hover:text-[#5eead4] hover:decoration-[#5eead4]"
              href="https://github.com/AbdelrahmanMohamed7"
              rel="noreferrer"
              target="_blank"
            >
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              className="focus-ring inline-flex min-h-11 items-center py-2 underline decoration-white/30 underline-offset-4 hover:text-[#5eead4] hover:decoration-[#5eead4]"
              href="https://www.linkedin.com/in/abdelrahman-mohamed-85a61522a/"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              className="focus-ring inline-flex min-h-11 items-center py-2 underline decoration-white/30 underline-offset-4 hover:text-[#5eead4] hover:decoration-[#5eead4]"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bodabanzen1818@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              bodabanzen1818@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
