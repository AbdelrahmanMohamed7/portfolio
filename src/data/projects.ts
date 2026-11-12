export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption: string;
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  stack: readonly string[];
  liveUrl?: string;
  repositoryUrl?: string;
  category: string;
  screenshots: readonly ProjectScreenshot[];
  featured: boolean;
  screenshotLayout: "phone" | "wide";
};

export const projects: readonly Project[] = [
  {
    slug: "nusuk-community",
    name: "Nusuk Community Platform",
    summary:
      "Live bilingual (Arabic/English) full-stack community platform for sharing and discovering verified Nusuk Challenge invitation codes. Built with a React.js and Vite frontend on Vercel and a containerized C# ASP.NET Core RESTful Web API (.NET) + Entity Framework Core + Microsoft SQL Server backend on Microsoft Azure.",
    stack: [
      "C#",
      "ASP.NET Core Web API (.NET)",
      "Entity Framework Core",
      "SQL Server",
      "React.js",
      "Vite",
      "Docker",
      "Microsoft Azure",
    ],
    liveUrl: "https://nusukcodes.site",
    category: "Flagship Full-Stack Platform (Live Production)",
    featured: true,
    screenshotLayout: "wide",
    screenshots: [
      {
        src: "/projects/nusuk-community/home.png",
        alt: "Nusuk Community platform live production interface showing bilingual Arabic and English community code hub",
        caption:
          "Live bilingual community platform (nusukcodes.site) powered by ASP.NET Core Web API, Microsoft SQL Server, and React.js",
      },
    ],
  },
  {
    slug: "restaurant-canteen",
    name: "Restaurant Canteen App",
    summary:
      "Cross-platform Flutter ordering application with Firebase authentication, real-time Cloud Firestore menu synchronization, cart management, Google Maps location-aware checkout, order tracking, and role-based customer/manager workflows.",
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "Google Maps", "GetX"],
    repositoryUrl:
      "https://github.com/AbdelrahmanMohamed7/restaurant-canteen-app",
    category: "Cross-Platform Mobile App",
    featured: true,
    screenshotLayout: "phone",
    screenshots: [
      {
        src: "/projects/restaurant-canteen/home.png",
        alt: "Restaurant Canteen App food court home screen",
        caption: "Food court home screen",
      },
      {
        src: "/projects/restaurant-canteen/categories.png",
        alt: "Restaurant Canteen App category browsing screen",
        caption: "Category browsing screen",
      },
      {
        src: "/projects/restaurant-canteen/orders.png",
        alt: "Restaurant Canteen App order history screen",
        caption: "Order history screen",
      },
      {
        src: "/projects/restaurant-canteen/cart.png",
        alt: "Restaurant Canteen App cart checkout screen",
        caption: "Cart checkout screen",
      },
    ],
  },
  {
    slug: "global-university",
    name: "Global University Ranking Engine",
    summary:
      "High-performance C++ analytics and recommendation engine for processing large-scale university ranking datasets with custom data structures, sorting and searching algorithms, file I/O, and execution benchmarking.",
    stack: [
      "C++",
      "Data Structures",
      "Sorting & Search Algorithms",
      "File Handling",
      "Benchmarking",
    ],
    repositoryUrl:
      "https://github.com/AbdelrahmanMohamed7/global-university-ranking-engine",
    category: "Algorithms & Data Structures",
    featured: true,
    screenshotLayout: "wide",
    screenshots: [
      {
        src: "/projects/global-university/user-options.png",
        alt: "Global University Ranking Engine normal user options menu",
        caption: "Normal user options menu",
      },
      {
        src: "/projects/global-university/university-list.png",
        alt: "Global University Ranking Engine ranked university list output",
        caption: "Ranked university list output",
      },
      {
        src: "/projects/global-university/search-benchmark.png",
        alt: "Global University Ranking Engine university search with benchmark results",
        caption: "University search with benchmark results",
      },
      {
        src: "/projects/global-university/university-details.png",
        alt: "Global University Ranking Engine detailed university metrics output",
        caption: "Detailed university metrics output",
      },
      {
        src: "/projects/global-university/admin-feedback.png",
        alt: "Global University Ranking Engine admin feedback review screen",
        caption: "Admin feedback review screen",
      },
      {
        src: "/projects/global-university/admin-report.png",
        alt: "Global University Ranking Engine admin top university report output",
        caption: "Admin top university report output",
      },
    ],
  },
  {
    slug: "procedural-physics",
    name: "Procedural 2D Console Physics Engine",
    summary:
      "C-based real-time console physics simulation featuring a configurable game loop, collision detection, score tracking, ASCII playfield rendering, and procedural motion behavior.",
    stack: [
      "C",
      "Console UI",
      "2D Physics Simulation",
      "Real-Time Game Loop",
      "Procedural Programming",
    ],
    repositoryUrl:
      "https://github.com/AbdelrahmanMohamed7/Procedural-2D-Physics-Engine",
    category: "Systems & Simulation",
    featured: true,
    screenshotLayout: "wide",
    screenshots: [
      {
        src: "/projects/procedural-physics/menu.png",
        alt: "Procedural 2D Console Physics Engine menu screen",
        caption: "Console menu screen",
      },
      {
        src: "/projects/procedural-physics/gameplay.png",
        alt: "Procedural 2D Console Physics Engine ASCII gameplay screen",
        caption: "ASCII gameplay screen",
      },
    ],
  },
];

export type ProjectSlug = (typeof projects)[number]["slug"];

export const featuredProjects = projects.filter((project) => project.featured);
export const archivedProjects = projects.filter((project) => !project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProject(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}
