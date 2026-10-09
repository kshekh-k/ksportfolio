export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  year: string;
  technologies: string[];
  challenge?: string;
  work?: string;
  result?: string;
  liveUrl?: string;
  websiteUrl?: string;
  featured?: boolean;
  tags?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "tufula",
    title: "Tufula — Gen-Z Fashion & Lifestyle Store",
    category: "Shopify E-Commerce & Brand Experience",
    description:
      "A Gen-Z-focused Shopify storefront featuring contemporary products and a youthful brand identity.",
    image: "/images/project-8.webp",
    year: "2026",
    technologies: ["Shopify", "Liquid", "JavaScript", "Tailwind CSS"],
    challenge:
      "Creating a distinctive shopping experience with simple product discovery and mobile navigation.",

    work: "Developed responsive storefront layouts and product-focused components aligned with Tufula's youthful brand.",

    result:
      "Delivered a modern e-commerce experience with clearer product presentation and responsive design.",
    featured: false,
    tags: ["Shopify", "E-Commerce", "Gen-Z", "Fashion & Lifestyle"],
    websiteUrl: "https://tufularetail.com/",
    liveUrl: "https://tufularetail.com/",
  },

  {
    id: "mindora-by-kamya",
    title: "Mindora by Kamya — Psychology & Wellbeing",
    category: "Psychology & Wellness Website",
    description:
      "A psychology and wellbeing website presenting professional services through a calm, welcoming digital experience.",
    image: "/images/project-4.webp",
    year: "2026",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JSON Content Architecture",
    ],
    challenge:
      "Communicating psychology services clearly while creating a comfortable browsing experience.",

    work: "Built a structured Next.js website with reusable JSON content, responsive layouts, and organized blog content.",

    result:
      "Delivered a cohesive, maintainable website with clear service information and organized content.",
    featured: true,
    tags: ["Psychology", "Wellbeing", "Next.js", "Content Architecture"],
    websiteUrl: "https://mindorabykamya.com/",
    liveUrl: "https://mindorabykamya.com/",
  },
  {
    id: "captain-fantastic",
    title: "Captain Fantastic — Kids Entertainment & Booking",
    category: "Interactive Web Application",
    description:
      "A kids' entertainment platform featuring interactive party packages and a seamless event booking experience.",

    image: "/images/project-1.webp",
    year: "2026",
    websiteUrl: "https://captain-fantastic.co.uk/",
    liveUrl: "https://captain-fantastic.co.uk/",
    technologies: ["Statamic", "Laravel", "Tailwind CSS", "Alpine.js"],
    challenge:
      "Simplifying entertainment package selection and reservations across desktop and mobile.",

    work: "Built a responsive Statamic and Laravel frontend with interactive packages, clear pricing, and streamlined booking flows.",

    result:
      "Delivered an engaging booking experience with improved mobile usability and simpler reservations.",

    featured: true,
    tags: ["Kids Entertainment", "Booking Platform", "Laravel", "UI/UX"],
  },
  {
    id: "rcs-cybertrack",
    title: "RCS CyberTrack — Cybersecurity Firewall SaaS",
    category: "Cybersecurity SaaS & Security Infrastructure",
    description:
      "A cybersecurity SaaS product combining a Python-powered firewall backend with a modern React.js management interface.",
    image: "/images/project-2.webp",
    year: "2026",
    technologies: ["Python", "React.js", "TypeScript", "Tailwind CSS"],
    challenge:
      "Making complex firewall operations and security information easier to manage.",

    work: "Developed a React.js interface for firewall management, security monitoring, and intuitive navigation, integrated with Python backend services.",

    result:
      "Established a modern interface for managing firewall functionality and security operations.",
    featured: true,
    tags: ["Cybersecurity", "Firewall", "SaaS", "Python", "React.js"],
  },
  {
    id: "blueocean-villas",
    title: "BlueOcean — Tour & Villa Accommodation",
    category: "Travel & Hospitality Website",
    description:
      "A travel and hospitality website showcasing villa accommodations, room options, and travel experiences.",

    image: "/images/project-3.webp",
    year: "2026",
    technologies: [
      "Figma UI/UX",
      "Improve AI UI",
      "WordPress",
      "PHP",
      "Tailwind CSS",
      "Responsive UI",
    ],
    challenge:
      "Presenting villa details and accommodation options through a clear, mobile-friendly experience.",

    work: "Created responsive layouts for property discovery, room details, and travel information with intuitive navigation.",

    result:
      "Delivered a polished website that makes exploring villa stays easier across devices.",
    featured: true,
    tags: ["Travel", "Villa Booking", "Hospitality", "Next.js"],
    websiteUrl: "https://blueocean.kshekh.com/",
    liveUrl: "https://blueocean.kshekh.com/",
  },
  {
    id: "rcs-infra-tech",
    title: "RCS Infra Tech — IT Solutions & Cybersecurity",
    category: "Enterprise IT & Cybersecurity",
    description:
      "An enterprise IT solutions website showcasing cybersecurity, cloud infrastructure, networking, and software services.",
    image: "/images/project-5.webp",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons"],
    challenge:
      "Making diverse IT services and cybersecurity solutions easier for businesses to understand.",

    work: "Developed a responsive Next.js website with reusable components, structured service pages, and CyberTrack firewall product presentation.",

    result:
      "Created a unified digital presence connecting enterprise IT services with cybersecurity solutions.",
    featured: true,
    tags: ["Enterprise IT", "Cybersecurity", "Cloud", "B2B"],
    websiteUrl: "https://rcsinfratech.com/",
    liveUrl: "https://rcsinfratech.com/",
  },
  {
    id: "tripconcierge",
    title: "TripConcierge — Travel Discovery & Experiences",
    category: "Travel Tech & Tourism Website",
    description:
      "A travel website designed to help users explore destinations, discover travel options, and plan experiences.",
    image: "/images/project-6.webp",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI"],
    challenge:
      "Organizing travel information into an intuitive, responsive browsing experience.",

    work: "Created reusable interface components, structured destination content, and responsive layouts for travel discovery.",

    result:
      "Delivered a consistent travel experience with clearer navigation and accessible destination information.",

    featured: false,
    tags: ["Travel Tech", "Tourism", "Next.js", "Web Design"],
    websiteUrl: "https://www.tripconcierge.co/",
    liveUrl: "https://www.tripconcierge.co/",
  },
  {
    id: "wetask",
    title: "WeTask — Gig-Based Work Marketplace",
    category: "Digital Marketplace & Web Application",
    description:
      "A gig-based work marketplace connecting users with task opportunities through an accessible digital platform.",
    image: "/images/project-7.webp",
    year: "2026",
    technologies: [
      "Figma UI/UX",
      "PHP",
      "TypeScript",
      "Tailwind CSS",
      "Responsive UI",
    ],
    challenge: "Making task discovery and work opportunities easy to navigate.",

    work: "Designed reusable UI components, structured task listings, and responsive layouts for the gig marketplace.",

    result:
      "Established a scalable interface foundation for discovering and exploring gig opportunities.",
    featured: false,
    tags: ["Marketplace", "Gig Economy", "Web Application", "React"],
    websiteUrl: "https://wetask.co.nz/",
    liveUrl: "https://wetask.co.nz/",
  },
];
