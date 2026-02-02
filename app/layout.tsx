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

  title: "Jayamathi Ramesh — Tech Founder & Intelligent Systems Builder",

  description:
    "Jayamathi Ramesh, legally known as S R Jayamathi, is a tech founder building intelligent systems and platforms across AI, automation, and data.",

  keywords: [
    "Jayamathi Ramesh",
    "S R Jayamathi",
    "Jayamathi Tech Founder",
    "Jayamathi Ramesh Portfolio",
    "Jayamathi AI",
    "Jayamathi Automation",
    "Jayamathi Founder",
    "Intelligent Systems Builder",
  ],

  authors: [{ name: "Jayamathi Ramesh" }],

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* Structured Data: Person Entity */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jayamathi Ramesh",
              alternateName: ["S R Jayamathi", "Jayamathi"],
              url: SITE_URL,
              jobTitle: "Tech Founder",
              description:
                "Jayamathi Ramesh, also known as S R Jayamathi, is a tech founder building intelligent systems and platforms across AI, automation, and data.",
              sameAs: [
                "https://www.linkedin.com/in/jayamathi-ramesh-2993s/",
                "https://mud-slipper-649.notion.site/Jayamathi-s-Blog-2f24ae9979ef80a7b4e3c2362fbe540a?pvs=141",
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
