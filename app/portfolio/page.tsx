import type { Metadata } from "next";
import PortfolioNav from "@/components/portfolio/PortfolioNav";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioWork from "@/components/portfolio/PortfolioWork";
import PortfolioAbout from "@/components/portfolio/PortfolioAbout";
import PortfolioExperience from "@/components/portfolio/PortfolioExperience";
import PortfolioTestimonials from "@/components/portfolio/PortfolioTestimonials";
import PortfolioFooter from "@/components/portfolio/PortfolioFooter";

export const metadata: Metadata = {
  title: "Kamran Shekh — UI/UX Designer & Full-Stack Developer",
  description:
    "Curated portfolio of digital products, websites, and web applications designed and engineered by Kamran Shekh.",
  alternates: {
    canonical: "https://kshekh.com/portfolio",
  },
  openGraph: {
    title: "Kamran Shekh — UI/UX Designer & Full-Stack Developer",
    description:
      "Curated selection of digital products, interface designs, and web applications designed and developed by Kamran Shekh.",
    url: "https://kshekh.com/portfolio",
    siteName: "Kamran Shekh Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Kamran Shekh — Portfolio & Selected Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamran Shekh — UI/UX Designer & Full-Stack Developer",
    description:
      "Curated selection of digital products, interface designs, and web applications.",
    images: ["/images/hero-showcase.jpg"],
  },
};

export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* 1. Minimal Header */}
      <PortfolioNav />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* 2. Hero / Portfolio Introduction */}
        <PortfolioHero />

        {/* 3. Selected Work */}
        <PortfolioWork />

        {/* 4. Short About & Expertise */}
        <PortfolioAbout />

        {/* 5. Experience / Capabilities */}
        <PortfolioExperience />

        {/* 6. Short Testimonials / Client Feedback */}
        <PortfolioTestimonials />
      </main>

      {/* 7. Minimal Footer */}
      <PortfolioFooter />
    </div>
  );
}
