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
      "User-focused designs that look great and convert better across multi-device journey maps.",
    highlight: "Wireframes · Figma Systems · Interactive Prototypes",
    tags: ["Figma", "UI/UX Design", "Conversion"],
    icon: "PencilSparkles",
    bentoSpan: "lg:col-span-7",
    accentColor: "cyan",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Fast, secure and scalable websites for your business built on decoupled architecture.",
    highlight: "Component Architecture · Micro-interactions · Speed",
    tags: ["React", "Next.js", "Tailwind CSS"],
    icon: "Code2",
    bentoSpan: "lg:col-span-5",
    accentColor: "blue",
  },
  {
    number: "03",
    title: "SaaS & Web Apps",
    description:
      "Custom web applications to power your ideas, real-time data flows, and team operations.",
    highlight: "Decoupled Architecture · Edge APIs · Scalable Data",
    tags: ["Node.js", "PostgreSQL", "Auth"],
    icon: "LayoutDashboard",
    bentoSpan: "lg:col-span-5",
    accentColor: "sky",
  },
  {
    number: "04",
    title: "WordPress Website",
    description:
      "Our WordPress development service creates dynamic, SEO-Friendly websites that are easy to manage.",
    highlight: "UX Audit · Modern Polish · Friction Elimination",
    tags: ["Custom", "Elementor", "TailwindCSS"],
    icon: "IconBrandWordpress",
    bentoSpan: "lg:col-span-7",
    accentColor: "emerald",
  },
];
