export const siteConfig = {
  name: "Mike Andorful",
  title: "Frontend Engineer",
  location: "Accra, Ghana 🇬🇭",
  email: "andorfulmichaelebo@gmail.com",
  github: "https://github.com/myches",
  linkedin: "https://linkedin.com/in/michael-ebo-andorful",
  twitter: "https://twitter.com/mikeandorful",
  resumeUrl: "https://drive.google.com/file/d/1c8ioCAkiOl7xGTC_307_dL20n5a3hf2T/view?usp=sharing",
  available: true,
  bio: "I build fast, accessible, and obsessively polished web experiences. Specialising in React + Next.js with TypeScript, I care deeply about the details that separate a good product from a great one — motion, performance, component architecture, and the spaces between.",
  stats: [
    { value: "3+", label: "years building" },
    { value: "20+", label: "projects shipped" },
    { value: "∞", label: "console.log()s written" },
    { value: "1", label: "focus: make it great" },
  ],
};

export const skills = [
  {
    group: "Core",
    items: [
      { name: "React", variant: "react" },
      { name: "TypeScript", variant: "ts" },
      { name: "Next.js", variant: "next" },
      { name: "JavaScript", variant: "ts" },
    ],
  },
  {
    group: "Styling",
    items: [
      { name: "Tailwind", variant: "purple" },
      { name: "CSS Modules", variant: "purple" },
      { name: "Framer Motion", variant: "purple" },
      { name: "shadcn/ui", variant: "purple" },
    ],
  },
  {
    group: "State / Data",
    items: [
      { name: "Zustand", variant: "amber" },
      { name: "React Query", variant: "amber" },
      { name: "Redux", variant: "amber" },
      { name: "SWR", variant: "amber" },
    ],
  },
  {
    group: "Tooling",
    items: [
      { name: "Git", variant: "green" },
      { name: "Vite", variant: "green" },
      { name: "Vitest", variant: "green" },
      { name: "Firebase", variant: "green" },
    ],
  },
];

export const projects = [
   {
    id: "01",
    featured: false,
    name: "Fluxdev ERP",
    description:
      "An ERP with complete manufacturing management solution that integrates production, inventory, finance, and workforce management into one powerful platform. ",
    stack: [
      { name: "React js", variant: "next" },
      { name: "TypeScript", variant: "ts" },
      { name: "Tailwind", variant: "purple" },
      { name: "MDX", variant: "green" },
    ],
    status: "wip" as const,
    demoUrl: "https://erp.fluxdevs.com/",
    codeUrl: "https://github.com/FluxDevsTeam/ERP_Frontend ",
  },
  {
    id: "02",
    featured: true,
    name: "Kids Design Company",
    description:
      "A kids accessories ecommerce website that deals in various products related to infants ",
    stack: [
      { name: "React", variant: "react" },
      { name: "TypeScript", variant: "ts" },
      { name: "Radix UI", variant: "purple" },
      { name: "Storybook", variant: "amber" },
    ],
    status: "live" as const,
    demoUrl: "https://kidsdesigncompany.com/",
    codeUrl: "https://github.com/FluxDevsTeam/KidsDesignEcommerceFrontend",
  },
  {
    id: "03",
    featured: false,
    name: "Reform Teachers",
    description:
      " A dedicated website for educators for professional development, resource sharing, and collaboration.",
    stack: [
      { name: "Next.js", variant: "next" },
      { name: "TypeScript", variant: "ts" },
      { name: "Recharts", variant: "green" },
      { name: "React Query", variant: "amber" },
    ],
    status: "live" as const,
    demoUrl: "https://reformedteachers.netlify.app/ ",
    codeUrl: "https://github.com/FluxDevsTeam/reformed_teachers",
  },
 
];

export const experience = [
  {
    period: "2026 — Present",
    role: "Frontend Engineer",
    company: "Slightly Techie",
    description:
      "Building React/Next.js products — from  MVPs to scaling existing codebases. TypeScript-first, component-driven development with a strong focus on performance and accessibility.",
  },
  {
    period: "2024 — Present",
    role: "Frontend Developer",
    company: "Fluxdevs",
    description:
      "Developed and maintained client-facing React applications. Introduced TypeScript to legacy codebases and built a shared component library that cut UI dev time by 30%.",
  },
  {
    period: "2022 - 2024",
    role: "Frontend Developer",
    company: "Freelance ",
    description:
      "Built websites and web apps for businesses .",
  },
];

export type SkillVariant = "react" | "ts" | "next" | "green" | "amber" | "purple";
export type ProjectStatus = "live" | "wip";
