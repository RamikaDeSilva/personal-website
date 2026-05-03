import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ramika De Silva — Software Engineer",
  description:
    "Full-stack software engineer focused on production web applications, reliable APIs, and applied AI. Building Lumela, a story-driven language learning platform with Next.js, TypeScript, and PostgreSQL.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Ramika De Silva",
    "software engineer",
    "full-stack developer",
    "Lumela",
    "TypeScript",
    "Next.js",
    "React",
    "PostgreSQL",
    "applied AI",
    "language learning",
  ],
  authors: [{ name: "Ramika De Silva" }],
  creator: "Ramika De Silva",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ramikadesilva.com",
    title: "Ramika De Silva — Software Engineer",
    description:
      "Full-stack software engineer focused on production web applications, reliable APIs, and applied AI. Building Lumela, a story-driven language learning platform with Next.js, TypeScript, and PostgreSQL.",
    siteName: "Ramika De Silva",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramika De Silva — Software Engineer",
    description:
      "Full-stack software engineer focused on production web applications, reliable APIs, and applied AI. Building Lumela, a story-driven language learning platform with Next.js, TypeScript, and PostgreSQL.",
    creator: "@yourusername",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
