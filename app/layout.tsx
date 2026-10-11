import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Kshekh — UI/UX Designer & Full-Stack Developer",
    template: "%s | Kshekh",
  },
  description:
    "Experienced UI/UX Designer & Full-Stack Web Developer creating high-converting websites, modern Next.js web apps, and design systems. Top Rated on Fiverr with 200+ projects delivered.",
  keywords: [
    "UI/UX Designer",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "TypeScript",
    "Website Redesign",
    "Conversion Rate Optimization",
    "Fiverr Top Rated Freelancer",
    "Kamran Shekh",
  ],
  authors: [{ name: "Kamran Shekh", url: SITE_CONFIG.url }],
  creator: "Kamran Shekh",
  publisher: "Kamran Shekh",
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: "Kamran Shekh — UI/UX Designer & Full-Stack Developer",
    description:
      "Designing and building websites that turn attention into action. Top Rated Freelancer on Fiverr with 12+ years of experience.",
    url: SITE_CONFIG.url,
    siteName: "Kamran Shekh Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Kamran Shekh — UI/UX Designer & Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamran Shekh — UI/UX Designer & Full-Stack Developer",
    description:
      "Designing and building websites that turn attention into action. Top Rated on Fiverr.",
    images: ["/images/hero-showcase.jpg"],
    creator: "@kshekh",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo-icon.svg",
    apple: "/images/logo-icon.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://kshekh.com/#person",
      name: "Kamran Shekh",
      jobTitle: "UI/UX Designer & Full-Stack Developer",
      url: "https://kshekh.com",
      sameAs: [
        SITE_CONFIG.fiverrUrl,
        SITE_CONFIG.linkedinUrl,
        SITE_CONFIG.githubUrl,
      ],
      description:
        "Senior UI/UX Designer and Full-Stack Next.js Developer with 12+ years experience building high-converting websites and digital products.",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://kshekh.com/#service",
      name: "Kamran Shekh Design & Web Development",
      url: "https://kshekh.com",
      image: "https://kshekh.com/images/hero-showcase.jpg",
      priceRange: "$$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased light`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('ks-theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-slate-100 transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
