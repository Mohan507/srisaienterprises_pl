import type { Metadata } from "next";
import "./globals.css";

// NOTE: This build uses the system font stack (see app/globals.css) so it
// works fully offline. If you have network access to Google Fonts, you can
// restore the branded typefaces like so:
//
//   import { Space_Grotesk, Inter } from "next/font/google";
//   const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", weight: ["500","600","700"] });
//   const body = Inter({ subsets: ["latin"], variable: "--font-body", weight: ["400","500","600","700"] });
//
// ...then add `${display.variable} ${body.variable}` to the <body> className below.

export const metadata: Metadata = {
  title: "Sri Sai Enterprises — Construction & Engineering",
  description:
    "Sri Sai Enterprises is a construction and engineering firm building stronger communities since 2008. Commercial, residential, civil and infrastructure projects delivered on time and on budget.",
  keywords: [
    "construction company",
    "engineering",
    "commercial construction",
    "residential construction",
    "civil infrastructure",
    "Sri Sai Enterprises",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased bg-concrete text-ink">
        {children}
      </body>
    </html>
  );
}
