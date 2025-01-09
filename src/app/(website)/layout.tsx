import type { Metadata } from "next";
import { Bodoni_Moda, Bodoni_Moda_SC } from "next/font/google";
import "~/styles/globals.css";
import Lenis from "~/contexts/Lenis";

const bodoniModaSc = Bodoni_Moda_SC({
  variable: "--font-bodoni-moda-sc",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rosie & Troy's Wedding, May 17th, 2025", 
  description: "Join us on May 17th, 2025 for our wedding in Auburn, California",
  keywords: [
    "Troy and Rosie", 
    "Rosie and Troy", 
    "Rosie & Troy", 
    "Troy & Rosie", 
    "Rosie & Troy's Wedding", 
    "Rosie & Troy's Wedding, May 17th, 2025", 
    "wedding", 
    "wedding planning", 
    "wedding website", 
    "wedding websites", 
    ],
  
  authors: [
    { name: "piecemakr", url: "https://piecemakr.com" }
  ],

  openGraph: {
    title: "Rosie & Troy, May 17th, 2025",
    description: "",
    url: "https://rosieandtroy.com",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Troy and Rosie in Carmel, California",
      }
    ],
    siteName: "Rosie & Troy's Wedding, May 17th, 2025",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodoniModaSc.variable} ${bodoniModa.variable} antialiased`}>
        <Lenis>{children}</Lenis>
      </body>
    </html>
  );
}
