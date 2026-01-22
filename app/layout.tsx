import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "S R Jayamathi | Tech Founder | Intelligent Systems Builder",
  description: "Building intelligent systems that turn complexity into clarity. Explore the architecture behind the vision.",
  keywords: ["AI Systems", "Tech Founder", "Digital Infrastructure", "Automation", "Data Platforms"],
  authors: [{ name: "S R Jayamathi" }],
  openGraph: {
    title: "S R Jayamathi | Tech Founder | Intelligent Systems Builder",
    description: "An interactive journey through how I think, build, and shape technology.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
