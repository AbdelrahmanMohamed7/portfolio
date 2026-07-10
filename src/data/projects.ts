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
  repositoryUrl: string;
  category: string;
  screenshots: readonly ProjectScreenshot[];
  featured: boolean;
  screenshotLayout: "phone" | "wide";
};

export const projects = [
  {
    slug: "restaurant-canteen",
    name: "Restaurant Canteen App",
    summary:
      "Flutter ordering app with Firebase authentication, cart management, location-aware checkout, order tracking, and customer/manager flows.",
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "Google Maps", "GetX"],
    repositoryUrl:
      "https://github.com/AbdelrahmanMohamed7/restaurant-canteen-app",
    category: "Mobile app",
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
    slug: "enterprise-payroll",
    name: "Enterprise Payroll System",
    summary:
      "Java desktop payroll platform for employee records, salary calculations, role-based access, database storage, and PDF reporting.",
    stack: ["Java", "Swing", "SQLite", "OOP", "PDF Reports"],
    repositoryUrl:
      "https://github.com/AbdelrahmanMohamed7/Enterprise-Payroll-System-Public",
    category: "Business system",
    featured: false,
    screenshotLayout: "wide",
    screenshots: [
      {
        src: "/projects/enterprise-payroll/salary-update.png",
        alt: "Enterprise Payroll System salary update screen",
        caption: "Salary update screen",
      },
      {
        src: "/projects/enterprise-payroll/employee-record.png",
        alt: "Enterprise Payroll System employee record management screen",
        caption: "Employee record management screen",
      },
      {
        src: "/projects/enterprise-payroll/salary-slip.png",
        alt: "Enterprise Payroll System salary slip generation screen",
        caption: "Salary slip generation screen",
      },
    ],
  },
  {
    slug: "medical-records",
    name: "Medical Records Access Platform",
    summary:
      "Vue and Express platform using Redis-backed permission mapping for secure off-chain medical record authorization workflows.",
    stack: ["Vue", "Express.js", "Redis", "Docker", "Access Control"],
    repositoryUrl:
      "https://github.com/AbdelrahmanMohamed7/medical-blockchain-project",
    category: "Full stack",
    featured: true,
    screenshotLayout: "wide",
    screenshots: [
      {
        src: "/projects/medical-records/role-panels.png",
        alt: "Medical Records Access Platform role-based panels",
        caption: "Role-based panels",
      },
      {
        src: "/projects/medical-records/token-login.png",
        alt: "Medical Records Access Platform token login screens",
        caption: "Token login screens",
      },
      {
        src: "/projects/medical-records/access-workflows.png",
        alt: "Medical Records Access Platform document and access workflows",
        caption: "Document and access workflows",
      },
    ],
  },
  {
    slug: "global-university",
    name: "Global University Ranking Engine",
    summary:
      "C++ analytics and recommendation engine for ranking data with searching, sorting, file handling, and performance benchmarking.",
    stack: ["C++", "Algorithms", "Data Structures", "File Handling"],
    repositoryUrl:
      "https://github.com/AbdelrahmanMohamed7/global-university-ranking-engine",
    category: "Algorithms",
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
    slug: "car-rental-fleet",
    name: "Car Rental Fleet Tracking System",
    summary:
      "Java desktop fleet management system for car registration, customer records, rental availability, returns, due dates, and fine tracking.",
    stack: ["Java", "Swing", "Desktop App", "CRUD", "Fleet Management"],
    repositoryUrl:
      "https://github.com/AbdelrahmanMohamed7/car-rental-fleet-tracker.git",
    category: "Desktop system",
    featured: false,
    screenshotLayout: "wide",
    screenshots: [
      {
        src: "/projects/car-rental-fleet/login-registration.png",
        alt: "Car Rental Fleet Tracking login and registration workflow",
        caption: "Login and registration workflow",
      },
      {
        src: "/projects/car-rental-fleet/car-register.png",
        alt: "Car Rental Fleet Tracking car registration screen",
        caption: "Car registration screen",
      },
      {
        src: "/projects/car-rental-fleet/customer-saved.png",
        alt: "Car Rental Fleet Tracking customer record saved screen",
        caption: "Customer record saved screen",
      },
      {
        src: "/projects/car-rental-fleet/rental-available.png",
        alt: "Car Rental Fleet Tracking rental screen for available car",
        caption: "Rental screen for an available car",
      },
      {
        src: "/projects/car-rental-fleet/rental-unavailable.png",
        alt: "Car Rental Fleet Tracking rental screen for unavailable car",
        caption: "Rental screen for an unavailable car",
      },
      {
        src: "/projects/car-rental-fleet/return-car.png",
        alt: "Car Rental Fleet Tracking return car and fine tracking screen",
        caption: "Return car and fine tracking screen",
      },
    ],
  },
  {
    slug: "procedural-physics",
    name: "Procedural 2D Console Physics Engine",
    summary:
      "C-based console physics project with a configurable game loop, score view, ASCII playfield rendering, and procedural motion behavior.",
    stack: ["C", "Console UI", "2D Physics", "Simulation", "Procedural Programming"],
    repositoryUrl:
      "https://github.com/AbdelrahmanMohamed7/Procedural-2D-Physics-Engine",
    category: "Systems project",
    featured: false,
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
] as const satisfies readonly Project[];

export type ProjectSlug = (typeof projects)[number]["slug"];

export const featuredProjects = projects.filter((project) => project.featured);
export const archivedProjects = projects.filter((project) => !project.featured);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProject(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}
