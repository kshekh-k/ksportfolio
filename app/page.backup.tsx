import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ValueSection from "@/components/ValueSection";
import ServicesBento from "@/components/ServicesBento";
import FeaturedWork from "@/components/FeaturedWork";
import BeforeAfter from "@/components/BeforeAfter";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import FiverrBridge from "@/components/FiverrBridge";
import Contact from "@/components/Contact";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

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

        {/* 7. Why Work With Me (Differentiation & Real Client Value) */}
        <WhyWorkWithMe />

        {/* 8. Process (5-Step Scroll Progress & Milestones) */}
        <Process />

        {/* 9. Technology / Curated Stack */}
        <TechStack />

        {/* 10. Testimonials / Verified Client Social Proof Marquee */}
        <Testimonials />

        {/* 11. Fiverr Trust Bridge (Dedicated Conversion Module) */}
        <FiverrBridge />

        {/* 12. Contact / Low-Friction Handoff */}
        <Contact />

        {/* 13. Final Dramatic CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Bottom Mobile Fiverr CTA */}
      <StickyMobileCTA />
    </div>
  );
}
