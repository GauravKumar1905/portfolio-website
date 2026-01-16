import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Gaurav Kumar - AI Product Manager",
  description: "AI Product Manager with hands-on experience building and scaling LLM-powered platforms from 0→1. Skilled in designing agentic workflows, multi-agent orchestration, and human-in-the-loop systems. IIT Kharagpur graduate.",
  keywords: ["AI Product Manager", "LLM Systems", "Agentic AI", "Multi-Agent Orchestration", "RAG Pipelines", "Product Management", "Prompt Engineering"],
  authors: [{ name: "Gaurav Kumar" }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Gaurav Kumar - AI Product Manager",
    description: "Building and scaling LLM-powered platforms from 0→1. Proven ability to translate complex AI capabilities into scalable product experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Script
          src="https://unpkg.com/@elevenlabs/convai-widget-embed@beta"
          async
          type="text/javascript"
        />
      </body>
    </html>
  );
}
