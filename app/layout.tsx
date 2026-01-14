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
  description: "AI Product Manager specializing in LLM-powered platforms, agentic systems, and scalable AI workflows. IIT Kharagpur graduate with experience at KiwiQ AI, Pixel Ads, and more.",
  keywords: ["AI Product Manager", "LLM Systems", "Agentic AI", "RAG Pipelines", "Product Management"],
  authors: [{ name: "Gaurav Kumar" }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Gaurav Kumar - AI Product Manager",
    description: "Building AI Products That Scale Intelligence into Real-World Impact",
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
