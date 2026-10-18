import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display_SC } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairSC = Playfair_Display_SC({
  variable: "--font-playfair-sc",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "The Seven Deadly Sins | Nanatsu no Taizai",
  description: "Official portal of Nanatsu no Taizai - The Seven Deadly Sins",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairSC.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FDF0DE] text-zinc-900 selection:bg-[#780000] selection:text-white">
        {children}
      </body>
    </html>
  );
}
