import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saveuchicago.com"),
  title: "Save UChicago",
  description: "An open letter to the University of Chicago.",
  openGraph: {
    title: "Save UChicago",
    description: "An open letter to the University of Chicago.",
    url: "https://saveuchicago.com",
    siteName: "Save UChicago",
    images: [
      {
        url: "/preview.png?v=1",
        width: 1200,
        height: 630,
        alt: "Save UChicago preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Save UChicago",
    description: "An open letter to the University of Chicago.",
    images: ["https://saveuchicago.com/preview.png?v=1"],
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
