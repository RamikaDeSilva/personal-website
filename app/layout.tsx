import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ramika De Silva — Software Engineer & Startup Builder",
  description:
    "Building Lumela, a story-driven language learning platform. Exploring the intersection of business and technology to build impactful software.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Ramika De Silva",
    "Lumela",
    "AI",
    "language learning",
    "founder",
    "developer",
    "builder",
    "startup",
  ],
  authors: [{ name: "Ramika De Silva" }],
  creator: "Ramika De Silva",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ramikadesilva.com",
    title: "Ramika De Silva — Software Engineer & Startup Builder",
    description:
      "Building Lumela, a story-driven language learning platform. Exploring the intersection of business and technology to build impactful software.",
    siteName: "Ramika De Silva",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramika De Silva — Software Engineer & Startup Builder",
    description:
      "Building Lumela, a story-driven language learning platform. Exploring the intersection of business and technology to build impactful software.",
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
