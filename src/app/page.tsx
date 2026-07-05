import {
  ArrowUpRight,
  Code2,
  Database,
  ExternalLink,
  Mail,
  MapPin,
  Smartphone,
  Sparkles,
  Terminal,
} from "lucide-react";
import Image from "next/image";

const featuredProjects = [
  {
    name: "Restaurant Canteen App",
    summary:
      "Flutter ordering app with Firebase authentication, cart management, location-aware checkout, order tracking, and customer/manager flows.",
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "Google Maps", "GetX"],
    href: "https://github.com/AbdelrahmanMohamed7/restaurant-canteen-app",
    highlight: "Mobile app",
  },
  {
    name: "Enterprise Payroll System",
    summary:
      "Java desktop payroll platform for employee records, salary calculations, role-based access, database storage, and PDF reporting.",
    stack: ["Java", "Swing", "SQLite", "OOP", "PDF Reports"],
    href: "https://github.com/AbdelrahmanMohamed7/Enterprise-Payroll-System-Public",
    highlight: "Business system",
  },
  {
    name: "Medical Records Access Platform",
    summary:
      "Vue and Express platform using Redis-backed permission mapping for secure off-chain medical record authorization workflows.",
    stack: ["Vue", "Express.js", "Redis", "Docker", "Access Control"],
    href: "https://github.com/AbdelrahmanMohamed7/medical-blockchain-project",
    highlight: "Full stack",
  },
  {
    name: "Global University Ranking Engine",
    summary:
      "C++ analytics and recommendation engine for ranking data with searching, sorting, file handling, and performance benchmarking.",
    stack: ["C++", "Algorithms", "Data Structures", "File Handling"],
    href: "https://github.com/AbdelrahmanMohamed7/global-university-ranking-engine",
    highlight: "Algorithms",
  },
  {
    name: "Airport Concurrency Simulation",
    summary:
      "Java multi-threaded simulation engine for runway scheduling, gate allocation, and safe concurrent flight operations.",
    stack: ["Java", "Maven", "Concurrency", "Synchronization"],
    href: "https://github.com/AbdelrahmanMohamed7/Airport-Concurrency-Simulation",
    highlight: "Concurrency",
  },
  {
    name: "Little Lemon Restaurant",
    summary:
      "Responsive React restaurant website with navigation, table reservation flow, form validation, and modern UI styling.",
    stack: ["React", "JavaScript", "HTML", "CSS", "Responsive UI"],
    href: "https://github.com/AbdelrahmanMohamed7/Little-Lemon-Restaurant",
    highlight: "Frontend",
  },
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

const metrics = [
  ["13", "public repositories"],
  ["6", "featured portfolio projects"],
  ["9+", "languages and technologies"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#171717]">
      <header className="sticky top-0 z-30 border-b border-black/10 bg-[#f7f5ef]/92 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a className="text-sm font-semibold tracking-wide" href="#home">
            Abdelrahman Mohamed
          </a>
          <div className="hidden items-center gap-6 text-sm font-medium text-black/65 sm:flex">
            <a className="transition hover:text-black" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-black" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-black" href="#contact">
              Contact
            </a>
          </div>
          <a
            className="inline-flex h-10 items-center gap-2 rounded-md bg-[#171717] px-4 text-sm font-semibold text-white transition hover:bg-[#2b2b2b]"
            href="https://github.com/AbdelrahmanMohamed7"
            rel="noreferrer"
            target="_blank"
          >
            <Code2 size={17} />
            GitHub
          </a>
        </nav>
      </header>

      <section id="home" className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-sm font-medium text-black/70 shadow-sm">
              <Sparkles size={16} className="text-[#0f766e]" />
              Software Developer | Full-Stack Developer
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-[#111111] sm:text-6xl">
              Building practical software across mobile, web, backend, and
              data-driven systems.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/68">
              I build portfolio-ready applications with real workflows:
              Flutter mobile apps, Java desktop systems, React and Vue web
              experiences, backend services, databases, and algorithmic engines.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#0f766e] px-5 text-sm font-semibold text-white transition hover:bg-[#115e59]"
                href="#projects"
              >
                View Projects
                <ArrowUpRight size={18} />
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-black/15 bg-white px-5 text-sm font-semibold text-black transition hover:border-black/30 hover:bg-[#fffaf0]"
                href="https://www.linkedin.com/in/abdelrahman-mohamed-85a61522a/"
                rel="noreferrer"
                target="_blank"
              >
                <ExternalLink size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="border border-black/10 bg-white p-5 shadow-sm">
            <div className="flex items-center gap-4 border-b border-black/10 pb-5">
              <Image
                alt="Abdelrahman Mohamed GitHub profile"
                className="h-20 w-20 rounded-md object-cover"
                height={80}
                src="https://avatars.githubusercontent.com/u/96038001?v=4"
                width={80}
              />
              <div>
                <p className="text-xl font-semibold">Abdelrahman Mohamed</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-black/60">
                  <MapPin size={15} />
                  Egypt
                </p>
              </div>
            </div>
            <div className="grid gap-3 py-5">
              {metrics.map(([value, label]) => (
                <div
                  className="flex items-center justify-between border-b border-black/10 pb-3 last:border-0 last:pb-0"
                  key={label}
                >
                  <span className="text-3xl font-semibold text-[#0f766e]">
                    {value}
                  </span>
                  <span className="text-sm font-medium text-black/60">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <p className="border-t border-black/10 pt-5 text-sm leading-6 text-black/62">
              Focused on clean structure, usable interfaces, database-backed
              workflows, and practical software that can be cloned, understood,
              and extended.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#151515] py-10 text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3">
          {["Mobile apps", "Full-stack systems", "Algorithms & concurrency"].map(
            (item) => (
              <div className="flex items-center gap-3" key={item}>
                <span className="h-2.5 w-2.5 rounded-full bg-[#d9a441]" />
                <p className="text-lg font-semibold">{item}</p>
              </div>
            ),
          )}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f766e]">
            Featured work
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Projects that show range and real implementation depth.
          </h2>
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              className="border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              key={project.name}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-[#b06b00]">
                    {project.highlight}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    {project.name}
                  </h3>
                </div>
                <a
                  aria-label={`Open ${project.name} repository`}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-black/10 transition hover:border-black/25 hover:bg-[#f7f5ef]"
                  href={project.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <ArrowUpRight size={19} />
                </a>
              </div>
              <p className="mt-4 leading-7 text-black/66">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    className="rounded-md bg-[#eef3f1] px-3 py-1.5 text-sm font-medium text-[#16423c]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f766e]">
              Technical toolkit
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              A practical stack for building complete applications.
            </h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div className="border border-black/10 p-5" key={group.title}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#171717] text-white">
                    <Icon size={21} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        className="rounded-md border border-black/10 px-2.5 py-1 text-sm text-black/65"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f766e]">
              About
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              I care about software that is readable, useful, and complete.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-black/68">
            <p>
              My projects cover mobile apps, full-stack systems, desktop
              software, data processing, concurrency simulations, and low-level
              programming. That range helps me understand how software works
              from user interface to storage, logic, performance, and system
              behavior.
            </p>
            <p>
              I am currently improving my full-stack development workflow,
              clean architecture, deployment skills, and professional project
              presentation.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#151515] py-16 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d9a441]">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Let&apos;s build something clear, practical, and well-structured.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-[#151515] transition hover:bg-[#f7f5ef]"
                href="mailto:bodabanzen1818@gmail.com"
              >
                <Mail size={18} />
                Email
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
                href="https://github.com/AbdelrahmanMohamed7"
                rel="noreferrer"
                target="_blank"
              >
                <Code2 size={18} />
                GitHub
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
                href="https://www.linkedin.com/in/abdelrahman-mohamed-85a61522a/"
                rel="noreferrer"
                target="_blank"
              >
                <ExternalLink size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
