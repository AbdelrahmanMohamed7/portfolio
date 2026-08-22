import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "Abdelrahman Mohamed | Full-Stack Software Developer",
    template: "%s | Abdelrahman Mohamed",
  },
  description:
    "Portfolio of Abdelrahman Mohamed, a Full-Stack Software Developer who turns ideas into polished, user-friendly products.",
  applicationName: "Abdelrahman Mohamed Portfolio",
  authors: [{ name: "Abdelrahman Mohamed" }],
  creator: "Abdelrahman Mohamed",
  openGraph: {
    type: "website",
    title: "Abdelrahman Mohamed | Full-Stack Software Developer",
    description:
      "Polished, user-friendly products backed by clean, maintainable engineering.",
  },
  twitter: {
    card: "summary",
    title: "Abdelrahman Mohamed | Full-Stack Software Developer",
    description:
      "Polished, user-friendly products backed by clean, maintainable engineering.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
