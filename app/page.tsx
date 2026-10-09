import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ValueSection from "@/components/ValueSection";
import ServicesBento from "@/components/ServicesBento";
import FeaturedWork from "@/components/FeaturedWork";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section (Immediate 3-Second Clarity & Conversion) */}
        <Hero />

        {/* 2. Trust / Credibility Marquee Strip */}
        <TrustBar />

        {/* 3. Problem / Value Proposition Section */}
        <ValueSection />

        {/* 4. Services - Bento Grid Architecture */}
        <ServicesBento />

        {/* 5. Selected Work - Main Portfolio Showcases with Challenge/Work/Result */}
        <FeaturedWork />

        {/* 6. Before / After Interactive Visual Transformation */}
        <BeforeAfter />

        {/* 7. Testimonials / Verified Client Social Proof Marquee */}
        <Testimonials />

        {/* 8. Thank You / Closing Section */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
