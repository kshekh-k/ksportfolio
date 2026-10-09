export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
  tags: string[];
  icon: string;
  bentoSpan: string; // Tailwind grid span classes
  accentColor: "blue" | "cyan" | "emerald" | "sky";
}

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "UI/UX Design",
    description:
      "Interfaces designed around clarity, user psychology, and direct conversion. Clean visual systems that guide visitors straight to action.",
    highlight: "Wireframes · Figma Systems · Interactive Prototypes",
    tags: ["Figma", "User Journey", "Design Tokens", "Conversion"],
    icon: "Layout",
    bentoSpan: "lg:col-span-7",
    accentColor: "cyan",
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Fast, responsive interfaces built with modern React, Next.js, and Tailwind CSS with sub-second page loads.",
    highlight: "Component Architecture · Micro-interactions · Speed",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    icon: "Code2",
    bentoSpan: "lg:col-span-5",
    accentColor: "blue",
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "End-to-end web applications with reliable server architecture, clean REST/GraphQL APIs, database models, and secure auth.",
    highlight: "Decoupled Architecture · Edge APIs · Scalable Data",
    tags: ["Node.js", "PostgreSQL", "Edge Functions", "Auth"],
    icon: "Layers",
    bentoSpan: "lg:col-span-5",
    accentColor: "sky",
  },
  {
    number: "04",
    title: "Website Redesign",
    description:
      "Turn outdated, low-converting websites into sleek digital experiences engineered to outshine competitors and close leads.",
    highlight: "UX Audit · Modern Polish · Friction Elimination",
    tags: ["Conversion Audit", "Modernization", "Core Web Vitals"],
    icon: "Sparkles",
    bentoSpan: "lg:col-span-7",
    accentColor: "emerald",
  },
  {
    number: "05",
    title: "Next.js & React Apps",
    description:
      "Production-ready web applications with Server Components, streaming SSR, dynamic routing, and automated SEO optimization.",
    highlight: "Server Components · Turbopack · SEO Native",
    tags: ["Next.js 15+", "React 19", "Framer Motion", "Vercel"],
    icon: "Zap",
    bentoSpan: "lg:col-span-6",
    accentColor: "blue",
  },
  {
    number: "06",
    title: "WordPress / Headless CMS",
    description:
      "Custom bespoke WordPress themes and headless CMS solutions that empower your marketing team to edit content with ease.",
    highlight: "Custom Fields · Zero Bloat · Lightning Fast",
    tags: ["ACF Pro", "Custom Themes", "Headless", "Shopify"],
    icon: "Globe",
    bentoSpan: "lg:col-span-6",
    accentColor: "cyan",
  },
];
