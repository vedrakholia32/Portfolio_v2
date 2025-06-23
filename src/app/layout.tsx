import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ved Rakholia - Full Stack Software Engineer",
  description: "Passionate full stack software engineer specializing in React, Next.js, and cloud architectures. Available for new opportunities and collaborations.",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "TypeScript", "Web Development"],
  authors: [{ name: "John Smith" }],
  creator: "John Smith",
  openGraph: {
    title: "John Smith - Full Stack Software Engineer",
    description: "Passionate full stack software engineer specializing in React, Next.js, and cloud architectures.",
    url: "https://johnsmith.dev",
    siteName: "John Smith Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Smith - Full Stack Software Engineer",
    description: "Passionate full stack software engineer specializing in React, Next.js, and cloud architectures.",
    creator: "@johnsmith",
  },
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
