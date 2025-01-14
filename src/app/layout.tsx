import type { Metadata } from "next";
import { Bowlby_One_SC, DM_Mono } from "next/font/google";

import "./globals.css";
import Header from "./components/Header";
import { SVGFilters } from "./components/SvgFilters";
import { Footer } from "./components/Footer";

const bowlby = Bowlby_One_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bowlby",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suburbia Skate",
  description: "Awesome Skate Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bowlby.variable} ${dmMono.variable} antialiased font-mono font-medium text-zinc-800`}
      >
        <main>
          <Header />
          {children}
        </main>
        <Footer />
        <SVGFilters />
      </body>
    </html>
  );
}
