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

  title: "S R Jayamathi — Tech Founder & Intelligent Systems Builder",
  description:
    "S R Jayamathi, also known as Jayamathi Ramesh, is a tech founder building intelligent systems and platforms across AI, automation, and data.",


  keywords: [
    "S R Jayamathi",
    "Jayamathi",
    "Jayamathi Ramesh",
    "Jayamathi Tech Founder",
    "S R Jayamathi Portfolio",
    "Jayamathi AI",
    "Jayamathi Automation",
    "Jayamathi Founder",
    "Tech Founder Jayamathi",
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
              alternateName: [
                "Jayamathi Ramesh",
                "Jayamathi"
              ],
              url: SITE_URL,
              jobTitle: "Tech Founder",
              description:
                "S R Jayamathi, also known as Jayamathi Ramesh, is a tech founder building intelligent systems and platforms across AI, automation, and data.",
              sameAs: [
                "https://www.linkedin.com/in/jayamathi-ramesh-2993s/",
                "https://mud-slipper-649.notion.site/Jayamathi-s-Blog-2f24ae9979ef80a7b4e3c2362fbe540a?pvs=141"
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
