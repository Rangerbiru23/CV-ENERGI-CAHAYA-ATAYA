import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://energicahayaataya.co.id'),
  title: "CV ENERGI CAHAYA ATAYA - Spesialis Konstruksi Gedung Kesehatan",
  description: "CV ENERGI CAHAYA ATAYA adalah mitra terpercaya dalam pembangunan fasilitas kesehatan yang modern, aman, dan berkelanjutan. Spesialis konstruksi rumah sakit, klinik, dan fasilitas medis di Balikpapan.",
  keywords: ["CV ENERGI CAHAYA ATAYA", "konstruksi gedung kesehatan", "konstruksi rumah sakit", "kontraktor rumah sakit", "bangunan kesehatan", "konstruksi Balikpapan", "kontraktor profesional"],
  authors: [{ name: "CV ENERGI CAHAYA ATAYA" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "CV ENERGI CAHAYA ATAYA - Spesialis Konstruksi Gedung Kesehatan",
    description: "Mitra terpercaya dalam pembangunan fasilitas kesehatan modern di Indonesia",
    url: "https://energicahayaataya.co.id",
    siteName: "CV ENERGI CAHAYA ATAYA",
    type: "website",
    images: [
      {
        url: "/hero-construction.jpg",
        width: 1440,
        height: 720,
        alt: "Konstruksi Rumah Sakit Modern oleh CV ENERGI CAHAYA ATAYA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV ENERGI CAHAYA ATAYA - Spesialis Konstruksi Gedung Kesehatan",
    description: "Mitra terpercaya dalam pembangunan fasilitas kesehatan modern di Indonesia",
    images: ["/hero-construction.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
