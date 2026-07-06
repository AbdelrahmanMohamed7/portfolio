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

type FeaturedProject = {
  name: string;
  summary: string;
  stack: string[];
  href: string;
  highlight: string;
  screenshots?: { src: string; alt: string }[];
  screenshotLayout?: "phone" | "wide";
};

const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const featuredProjects: FeaturedProject[] = [
  {
    name: "Restaurant Canteen App",
    summary:
      "Flutter ordering app with Firebase authentication, cart management, location-aware checkout, order tracking, and customer/manager flows.",
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "Google Maps", "GetX"],
    href: "https://github.com/AbdelrahmanMohamed7/restaurant-canteen-app",
    highlight: "Mobile app",
    screenshots: [
      {
        src: "/projects/restaurant-canteen/home.png",
        alt: "Restaurant Canteen App food court home screen",
      },
      {
        src: "/projects/restaurant-canteen/categories.png",
        alt: "Restaurant Canteen App category browsing screen",
      },
      {
        src: "/projects/restaurant-canteen/orders.png",
        alt: "Restaurant Canteen App order history screen",
      },
      {
        src: "/projects/restaurant-canteen/cart.png",
        alt: "Restaurant Canteen App cart checkout screen",
      },
    ],
  },
  {
    name: "Enterprise Payroll System",
    summary:
      "Java desktop payroll platform for employee records, salary calculations, role-based access, database storage, and PDF reporting.",
    stack: ["Java", "Swing", "SQLite", "OOP", "PDF Reports"],
    href: "https://github.com/AbdelrahmanMohamed7/Enterprise-Payroll-System-Public",
    highlight: "Business system",
    screenshotLayout: "wide",
    screenshots: [
      {
        src: "/projects/enterprise-payroll/salary-update.png",
        alt: "Enterprise Payroll System salary update screen",
      },
      {
        src: "/projects/enterprise-payroll/employee-record.png",
        alt: "Enterprise Payroll System employee record management screen",
      },
      {
        src: "/projects/enterprise-payroll/salary-slip.png",
        alt: "Enterprise Payroll System salary slip generation screen",
      },
    ],
  },
  {
    name: "Medical Records Access Platform",
    summary:
      "Vue and Express platform using Redis-backed permission mapping for secure off-chain medical record authorization workflows.",
    stack: ["Vue", "Express.js", "Redis", "Docker", "Access Control"],
    href: "https://github.com/AbdelrahmanMohamed7/medical-blockchain-project",
    highlight: "Full stack",
    screenshotLayout: "wide",
    screenshots: [
      {
        src: "/projects/medical-records/role-panels.png",
        alt: "Medical Records Access Platform role-based panels",
      },
      {
        src: "/projects/medical-records/token-login.png",
        alt: "Medical Records Access Platform token login screens",
      },
      {
        src: "/projects/medical-records/access-workflows.png",
        alt: "Medical Records Access Platform document and access workflows",
      },
    ],
  },
  {
    name: "Global University Ranking Engine",
    summary:
      "C++ analytics and recommendation engine for ranking data with searching, sorting, file handling, and performance benchmarking.",
    stack: ["C++", "Algorithms", "Data Structures", "File Handling"],
    href: "https://github.com/AbdelrahmanMohamed7/global-university-ranking-engine",
    highlight: "Algorithms",
    screenshotLayout: "wide",
    screenshots: [
      {
        src: "/projects/global-university/user-options.png",
        alt: "Global University Ranking Engine normal user options menu",
      },
      {
        src: "/projects/global-university/university-list.png",
        alt: "Global University Ranking Engine ranked university list output",
      },
      {
        src: "/projects/global-university/search-benchmark.png",
        alt: "Global University Ranking Engine university search with benchmark results",
      },
      {
        src: "/projects/global-university/university-details.png",
        alt: "Global University Ranking Engine detailed university metrics output",
      },
      {
        src: "/projects/global-university/admin-feedback.png",
        alt: "Global University Ranking Engine admin feedback review screen",
      },
      {
        src: "/projects/global-university/admin-report.png",
        alt: "Global University Ranking Engine admin top university report output",
      },
    ],
  },
  {
    name: "Airport Concurrency Simulation",
    summary:
      "Java multi-threaded simulation engine for runway scheduling, gate allocation, and safe concurrent flight operations.",
    stack: ["Java", "Maven", "Concurrency", "Synchronization"],
    href: "https://github.com/AbdelrahmanMohamed7/Airport-Concurrency-Simulation",
    highlight: "Concurrency",
    screenshotLayout: "wide",
    screenshots: [
      {
        src: "/projects/airport-concurrency/landing-flow.png",
        alt: "Airport Concurrency Simulation landing and gate synchronization log",
      },
      {
        src: "/projects/airport-concurrency/statistics.png",
        alt: "Airport Concurrency Simulation completion statistics log",
      },
    ],
  },
  {
    name: "Procedural 2D Console Physics Engine",
    summary:
      "C-based console physics project with a configurable game loop, score view, ASCII playfield rendering, and procedural motion behavior.",
    stack: ["C", "Console UI", "2D Physics", "Simulation", "Procedural Programming"],
    href: "https://github.com/AbdelrahmanMohamed7/Procedural-2D-Physics-Engine",
    highlight: "Systems project",
    screenshotLayout: "wide",
    screenshots: [
      {
        src: "/projects/procedural-physics/menu.png",
        alt: "Procedural 2D Console Physics Engine menu screen",
      },
      {
        src: "/projects/procedural-physics/gameplay.png",
        alt: "Procedural 2D Console Physics Engine ASCII gameplay screen",
      },
    ],
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
    <main className="min-h-screen bg-[#f4efe5] text-[#151412]">
      <header className="sticky top-0 z-30 border-b border-black/10 bg-[#f4efe5]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a className="group leading-tight" href="#home">
            <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-[#87651f]">
              Welcome to
            </span>
            <span className="block text-base font-bold tracking-tight text-[#151412] transition group-hover:text-[#0f766e] sm:text-xl">
              Abdelrahman Mohamed Portfolio
            </span>
          </a>
          <div className="hidden items-center rounded-full border border-black/10 bg-white/55 p-1 text-sm font-semibold text-black/62 shadow-sm md:flex">
            {navItems.map((item) => (
              <a
                className="rounded-full px-4 py-2 transition hover:bg-[#151412] hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#151412] px-5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0f766e] hover:shadow-md"
            href="https://github.com/AbdelrahmanMohamed7"
            rel="noreferrer"
            target="_blank"
          >
            <Code2 size={17} />
            GitHub
          </a>
        </nav>
      </header>

      <section id="home" className="mx-auto max-w-6xl px-5 pb-18 pt-14 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/70 shadow-sm">
              <Sparkles size={16} className="text-[#0f766e]" />
              Software Developer | Full-Stack Developer
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-[#151412] sm:text-6xl lg:text-7xl">
              Building practical software across mobile, web, backend, and
              data-driven systems.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
              I build portfolio-ready applications with real workflows:
              Flutter mobile apps, Java desktop systems, React and Vue web
              experiences, backend services, databases, and algorithmic engines.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0f766e] px-6 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#115e59] hover:shadow-md"
                href="#projects"
              >
                View Projects
                <ArrowUpRight size={18} />
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-6 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:border-black/30 hover:bg-[#fffaf0] hover:shadow-sm"
                href="/resume/abdelrahman-mohamed-resume.pdf"
                target="_blank"
              >
                <ExternalLink size={18} />
                Resume
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/15 bg-white px-6 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:border-black/30 hover:bg-[#fffaf0] hover:shadow-sm"
                href="https://www.linkedin.com/in/abdelrahman-mohamed-85a61522a/"
                rel="noreferrer"
                target="_blank"
              >
                <ExternalLink size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          <aside className="rounded-sm border border-black/10 bg-[#151412] p-5 text-white shadow-xl shadow-black/10">
            <div className="flex items-center gap-4 border-b border-black/10 pb-5">
              <Image
                alt="Abdelrahman Mohamed GitHub profile"
                className="h-20 w-20 rounded-sm border border-white/15 object-cover"
                height={80}
                src="https://avatars.githubusercontent.com/u/96038001?v=4"
                width={80}
              />
              <div>
                <p className="text-xl font-semibold">Abdelrahman Mohamed</p>
                <p className="mt-1 flex items-center gap-2 text-sm text-white/60">
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
                  <span className="text-3xl font-black text-[#d9a441]">
                    {value}
                  </span>
                  <span className="text-sm font-medium text-white/60">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <p className="border-t border-white/10 pt-5 text-sm leading-6 text-white/68">
              Focused on clean structure, usable interfaces, database-backed
              workflows, and practical software that can be cloned, understood,
              and extended.
            </p>
          </aside>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-16">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
            Featured work
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            Projects that show range and real implementation depth.
          </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-black/58">
            Selected projects across mobile, desktop, full-stack, algorithms,
            and systems programming.
          </p>
        </div>

        <div className="mt-9 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              className="group border border-black/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-[#0f766e]/35 hover:shadow-xl hover:shadow-black/10"
              key={project.name}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#b06b00]">
                    {project.highlight}
                  </p>
                  <h3 className="mt-2 text-2xl font-black transition group-hover:text-[#0f766e]">
                    {project.name}
                  </h3>
                </div>
                <a
                  aria-label={`Open ${project.name} repository`}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-[#f7f5ef] transition group-hover:-translate-y-0.5 group-hover:bg-[#151412] group-hover:text-white"
                  href={project.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <ArrowUpRight size={19} />
                </a>
              </div>
              <p className="mt-4 leading-7 text-black/68">{project.summary}</p>
              {project.screenshots && project.screenshots.length > 0 ? (
                <div
                  className={
                    project.screenshotLayout === "wide"
                      ? "mt-5 grid grid-cols-1 gap-2 bg-[#f4efe5] p-2 sm:grid-cols-2"
                      : "mt-5 grid grid-cols-2 gap-2 bg-[#f4efe5] p-2 sm:grid-cols-4"
                  }
                >
                  {project.screenshots.map((screenshot) => (
                    <div
                      className={
                        project.screenshotLayout === "wide"
                          ? "relative aspect-video overflow-hidden border border-black/10 bg-black/5"
                          : "relative aspect-[9/16] overflow-hidden border border-black/10 bg-black/5"
                      }
                      key={screenshot.src}
                    >
                      <Image
                        alt={screenshot.alt}
                        className="object-cover"
                        fill
                        sizes={
                          project.screenshotLayout === "wide"
                            ? "(max-width: 768px) 90vw, 260px"
                            : "(max-width: 640px) 45vw, (max-width: 1024px) 20vw, 130px"
                        }
                        src={screenshot.src}
                      />
                    </div>
                  ))}
                </div>
              ) : null}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    className="rounded-full bg-[#eef3f1] px-3 py-1.5 text-sm font-semibold text-[#16423c] transition group-hover:bg-[#e1eee9]"
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

      <section id="skills" className="bg-[#151412] py-16 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d9a441]">
              Technical toolkit
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              A practical stack for building complete applications.
            </h2>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div
                  className="group border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-[#d9a441]/45 hover:bg-white/[0.07]"
                  key={group.title}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-[#d9a441] text-[#151412] transition group-hover:bg-white">
                    <Icon size={21} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        className="rounded-full border border-white/10 px-2.5 py-1 text-sm text-white/70 transition group-hover:border-white/20 group-hover:text-white"
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

      <section id="about" className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 border-y border-black/10 py-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0f766e]">
              About
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              I build with curiosity, structure, and a focus on real use.
            </h2>
          </div>
          <div className="text-lg leading-8 text-black/70">
            <p>
              I am a software developer who likes turning practical ideas into
              working products. My projects range from Flutter mobile apps and
              React/Vue web interfaces to Java desktop systems, C++ algorithmic
              engines, and backend/data-driven workflows. I care about writing
              software that is understandable, useful, and presented clearly
              enough for other developers to explore and build on.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#0f0f0e] py-16 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-8 border border-white/10 bg-[#171715] p-6 shadow-xl shadow-black/20 lg:grid-cols-[1fr_1.2fr] lg:items-end lg:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d9a441]">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Let&apos;s build something clear, practical, and well-structured.
              </h2>
              <p className="mt-4 max-w-xl leading-7 text-white/62">
                Open to software development opportunities, collaboration, and
                conversations around full-stack, mobile, and practical product
                engineering.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[#151515] transition hover:-translate-y-0.5 hover:bg-[#f7f5ef]"
                href="mailto:bodabanzen1818@gmail.com"
              >
                <Mail size={18} />
                Email
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                href="/resume/abdelrahman-mohamed-resume.pdf"
                target="_blank"
              >
                <ExternalLink size={18} />
                Resume
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                href="https://github.com/AbdelrahmanMohamed7"
                rel="noreferrer"
                target="_blank"
              >
                <Code2 size={18} />
                GitHub
              </a>
              <a
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
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
