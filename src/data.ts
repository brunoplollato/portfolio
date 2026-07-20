// ============================================================
// PORTFOLIO DATA — Edit this file to customise your portfolio
// ============================================================

export const siteConfig = {
  name: "Bruno Lollato",
  title: "Senior Frontend Developer",
  email: "brunopa.lollato@gmail.com",
  github: "https://github.com/brunoplollato",
  linkedin: "https://www.linkedin.com/in/brunolollato/",
  twitter: "",
  description:
    "Performance-focused Senior Frontend Developer with 10+ years building scalable, internationalized web applications with React, Next.js, and TypeScript.",
  ogImage: "/og-image.png",
};

export const resumeFile = "/Bruno_Lollato_Resume_ATS.pdf";

export const aboutText = [
  "Performance-focused Senior Frontend Developer with over 10 years of experience designing and implementing scalable, internationalized web applications.",
  "Based in Ribeirão Preto, SP, I specialize in React, Next.js, and TypeScript, leverage LLMs to optimize architecture and maintainability, and build robust, accessible, high-conversion commerce interfaces in agile cross-functional teams.",
];

export const skills = [
  { category: "Frameworks", items: ["React.js", "Next.js", "Vite", "Vue.js"] },
  { category: "Languages", items: ["TypeScript (Advanced)", "JavaScript (ES6+)", "Portuguese (Native)", "English (B2/Professional)"] },
  { category: "State & API", items: ["TanStack Query (React Query)", "Zustand", "Context API"] },
  { category: "Performance & Testing", items: ["Core Web Vitals", "Jest", "React Testing Library", "Zod"] },
  { category: "Architecture & DevOps", items: ["Micro-frontends", "CI/CD (GitHub Actions)", "VTEX IO", "LLM Integration"] },
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
    company: "Datum",
    period: "09/25 — Present",
    location: "Remote",
    bullets: [
      "Architect and scale internationalized web platforms using React and Next.js, implementing locale-aware routing to ensure native-grade global experiences.",
      "Integrate LLM-driven development workflows for automated boilerplate and unit test scaffolding, increasing feature-delivery velocity by 35%.",
      "Establish AI-assisted code review standards, reducing cycle time for complex technical reviews by 50%.",
    ],
  },
  {
    type: "work" as const,
    role: "Senior Frontend Developer",
    company: "Develcode",
    period: "10/24 — 05/25",
    location: "Brazil",
    bullets: [
      "Engineered high-performance SPAs, reducing initial load times by 45% and achieving 95+ Lighthouse performance scores.",
      "Streamlined API state synchronization via React Query, decreasing redundant server-side calls by 40%.",
      "Built and validated complex multi-step forms with React Hook Form and Zod, reducing user input errors by 60%.",
      "Transitioned global state to Zustand, reducing boilerplate by 50% and improving re-render efficiency.",
    ],
  },
  {
    type: "work" as const,
    role: "Senior Frontend Developer",
    company: "Grupo GBI",
    period: "01/24 — 08/24",
    location: "Remote",
    bullets: [
      "Led performance and accessibility (WCAG 2.1 AA) initiatives, consistently maintaining 95+ Lighthouse scores.",
      "Configured automated CI/CD pipelines with GitHub Actions, reducing manual deployment overhead by 80% and cutting deployment time to under 8 minutes.",
      "Mentored junior engineers through structured pair programming, decreasing onboarding time for new hires by 40%.",
    ],
  },
  {
    type: "work" as const,
    role: "Senior Frontend Developer",
    company: "Trivod",
    period: "05/21 — 11/23",
    location: "Remote",
    bullets: [
      "Architected large-scale storefronts using React and VTEX IO, supporting a 30% increase in concurrent traffic.",
      "Implemented micro-frontend architecture to enable independent deployment cycles, reducing cross-team merge conflicts by 45%.",
      "Optimized mobile rendering for VTEX, resulting in a 20% lift in mobile conversions and a 70% reduction in Cumulative Layout Shifts (CLS).",
    ],
  },
  {
    type: "work" as const,
    role: "Frontend Developer",
    company: "Evolua Empresas",
    period: "11/17 — 10/20",
    location: "Brazil",
    bullets: [
      "Contributed to high-traffic production codebases, shipping 30+ UI features while maintaining 85%+ test coverage.",
      "Refactored legacy UI modules into functional React components, improving maintainability by 15%.",
    ],
  },
  {
    type: "work" as const,
    role: "Frontend Developer",
    company: "RGB Comunicação • JET e-business • Somenek Comunicação",
    period: "Prior to 11/17",
    location: "Brazil",
    bullets: [
      "Built foundational frontend experience across communication and e-business environments.",
    ],
  },
  {
    type: "education" as const,
    role: "Bachelor’s in Information Technology",
    company: "Descomplica Faculdade Digital",
    period: "Expected 01/27",
    location: "Brazil",
    bullets: [
      "Expected graduation date: January 2027.",
    ],
  },
];
