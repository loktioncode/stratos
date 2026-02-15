import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Stratos - Expert Business Consultancy & Cyber Security",
  description: "Stratos provides expert business consultancy and cyber security services to help organizations navigate the complexities of modern business with strategic IT solutions.",
  keywords: ["Business Consultancy", "Cyber Security", "IT Strategy", "Digital Transformation", "IT Staff Augmentation", "UAE", "Dubai", "Cybersecurity Services", "Risk Assessment"],
  authors: [{ name: "Stratos Digital" }],
  openGraph: {
    title: "Stratos - Business Consultancy & Cyber Security",
    description: "Expert business consultancy and cyber security services for modern organizations.",
    url: "https://stratos.digital",
    siteName: "Stratos Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stratos - Business Consultancy & Cyber Security",
    description: "Expert business consultancy and cyber security services.",
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
