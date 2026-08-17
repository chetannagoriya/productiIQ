import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProductIQ AI — Trusted Product Intelligence",
  description: "Turn fragmented industrial product data into structured, validated, commerce-ready intelligence.",
  openGraph: {
    title: "ProductIQ AI",
    description: "Trusted product intelligence, from any source.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ProductIQ AI product intelligence platform" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
