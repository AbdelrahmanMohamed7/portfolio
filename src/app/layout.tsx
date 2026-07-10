import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "Abdelrahman Mohamed | Frontend & Full-Stack Developer",
    template: "%s | Abdelrahman Mohamed",
  },
  description:
    "Portfolio of Abdelrahman Mohamed, a frontend and full-stack developer building polished, accessible web experiences with reliable, maintainable engineering.",
  applicationName: "Abdelrahman Mohamed Portfolio",
  authors: [{ name: "Abdelrahman Mohamed" }],
  creator: "Abdelrahman Mohamed",
  openGraph: {
    type: "website",
    title: "Abdelrahman Mohamed | Frontend & Full-Stack Developer",
    description:
      "Polished, accessible web experiences backed by reliable, maintainable engineering.",
  },
  twitter: {
    card: "summary",
    title: "Abdelrahman Mohamed | Frontend & Full-Stack Developer",
    description:
      "Polished, accessible web experiences backed by reliable, maintainable engineering.",
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
