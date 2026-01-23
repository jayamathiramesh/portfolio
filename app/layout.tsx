import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = "https://jayamathi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "S R Jayamathi | Tech Founder | Intelligent Systems Builder",
  description:
    "Tech founder building intelligent systems and platforms across AI, automation, and data. Exploring how ideas become scalable, real-world technology.",

  keywords: [
    "Tech Founder",
    "AI Systems",
    "Automation Platforms",
    "Data Platforms",
    "Digital Infrastructure",
    "Systems Builder",
    "Product Mindset",
    "AI Founder Portfolio",
  ],

  authors: [{ name: "S R Jayamathi" }],

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* Minimal Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "S R Jayamathi",
              url: SITE_URL,
              jobTitle: "Tech Founder",
              description:
                "Tech founder building intelligent systems and platforms across AI, automation, and data.",
              sameAs: [
                "https://www.linkedin.com/in/jayamathi-ramesh-2993s/",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
