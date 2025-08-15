import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UChicago Open Letter",
  description: "An open letter landing page for the University of Chicago community.",
  openGraph: {
    title: "UChicago Open Letter",
    description: "An open letter landing page for the University of Chicago community.",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "UChicago Open Letter preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UChicago Open Letter",
    description: "An open letter landing page for the University of Chicago community.",
    images: ["/preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.variable} antialiased`}>{children}</body>
    </html>
  );
}
