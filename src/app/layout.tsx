import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Experiments Lab | Web & ML APIs Playground",
  description: "Explore cutting-edge experimental web and ML APIs through interactive toy applications with a hacker aesthetic.",
  keywords: ["web experiments", "machine learning", "web apis", "webxr", "neural networks", "web development", "hacker"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        <div className="scanline" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
