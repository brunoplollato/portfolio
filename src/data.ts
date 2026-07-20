// ============================================================
// PORTFOLIO DATA — Edit this file to customise your portfolio
// ============================================================

export const siteConfig = {
  name: "Bruno Pollato",
  title: "Frontend Developer",
  email: "hello@brunopollato.dev",
  github: "https://github.com/brunoplollato",
  linkedin: "https://linkedin.com/in/brunopollato",
  twitter: "https://twitter.com/brunopollato",
  description:
    "Frontend Developer passionate about crafting pixel-perfect, performant web experiences with modern React and TypeScript.",
  ogImage: "/og-image.png",
};

export const aboutText = [
  "Hi! I'm Bruno, a Frontend Developer with a passion for building clean, performant, and accessible user interfaces. I specialise in React and TypeScript ecosystems, turning complex product requirements into delightful digital experiences.",
  "When I'm not writing code, you'll find me contributing to open-source projects, learning about web performance, or exploring the latest in UI/UX design.",
];

export const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript (ES2022+)", "HTML5", "CSS3 / Sass"] },
  { category: "Frameworks & Libraries", items: ["React", "Next.js", "Vite", "Tailwind CSS", "Framer Motion"] },
  { category: "State & Data", items: ["Zustand", "React Query", "Redux Toolkit", "SWR", "Zod"] },
  { category: "Testing", items: ["Vitest", "React Testing Library", "Playwright", "Jest"] },
  { category: "Tools & DevOps", items: ["Git / GitHub", "Docker", "CI/CD (GitHub Actions)", "Figma", "Storybook"] },
  { category: "Backend Basics", items: ["Node.js", "REST APIs", "GraphQL", "Supabase", "Firebase"] },
];

export const projects = [
  {
    title: "E-Commerce Storefront",
    description:
      "A fully responsive e-commerce platform with product filtering, cart management, and Stripe checkout integration. Built for performance with code-splitting and lazy-loading throughout.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Prisma"],
    github: "https://github.com/brunoplollato",
    demo: "#",
    featured: true,
  },
  {
    title: "Real-time Dashboard",
    description:
      "Analytics dashboard with real-time data visualisation, configurable widgets, and role-based access control. Processes over 10 000 data points per second without sacrificing UI responsiveness.",
    tech: ["React", "TypeScript", "Recharts", "WebSockets", "Zustand"],
    github: "https://github.com/brunoplollato",
    demo: "#",
    featured: true,
  },
  {
    title: "Design System",
    description:
      "Component library of 40+ production-grade UI components built with accessibility-first principles. Fully documented with Storybook and published to npm for internal reuse.",
    tech: ["React", "TypeScript", "Storybook", "Radix UI", "Vitest"],
    github: "https://github.com/brunoplollato",
    demo: "#",
    featured: true,
  },
  {
    title: "AI Writing Assistant",
    description:
      "Browser extension and web app that integrates with OpenAI GPT-4 to assist with copywriting, emails, and documentation. Used by 2 000+ active users.",
    tech: ["React", "TypeScript", "OpenAI API", "Chrome Extensions API"],
    github: "https://github.com/brunoplollato",
    demo: "#",
    featured: false,
  },
  {
    title: "Task Management SaaS",
    description:
      "Collaborative project-management tool with drag-and-drop boards, Gantt charts, and GitHub integration. Includes real-time collaborative editing.",
    tech: ["Next.js", "TypeScript", "Supabase", "dnd-kit", "Tailwind CSS"],
    github: "https://github.com/brunoplollato",
    demo: "#",
    featured: false,
  },
  {
    title: "Portfolio v1",
    description:
      "The previous iteration of this portfolio, built with plain HTML/CSS/JavaScript. A nostalgia trip and testament to how far the web has come.",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://github.com/brunoplollato",
    demo: "#",
    featured: false,
  },
];

export const experience = [
  {
    type: "work" as const,
    role: "Senior Frontend Developer",
    company: "Acme Corp",
    period: "2022 — Present",
    location: "Remote",
    bullets: [
      "Led frontend architecture for a SaaS platform serving 50 000+ users, reducing bundle size by 40%.",
      "Mentored 3 junior developers and drove adoption of TypeScript and automated testing across the team.",
      "Collaborated with design and product teams to ship 12 major features per quarter.",
    ],
  },
  {
    type: "work" as const,
    role: "Frontend Developer",
    company: "Startup XYZ",
    period: "2020 — 2022",
    location: "São Paulo, Brazil",
    bullets: [
      "Built and maintained consumer-facing React applications from scratch to production.",
      "Improved Core Web Vitals scores to green across all monitored pages.",
      "Integrated REST and GraphQL APIs and implemented robust client-side caching.",
    ],
  },
  {
    type: "education" as const,
    role: "B.Sc. Computer Science",
    company: "University of São Paulo",
    period: "2016 — 2020",
    location: "São Paulo, Brazil",
    bullets: [
      "Graduated with honours; focus on software engineering and human-computer interaction.",
      "Final project: accessible screen-reader-friendly course management system.",
    ],
  },
];
