import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "Abdelrahman Mohamed | Full-Stack Software Developer (.NET)",
    template: "%s | Abdelrahman Mohamed",
  },
  description:
    "Portfolio of Abdelrahman Mohamed, a Full-Stack Software Developer (.NET) specializing in C#, ASP.NET Core (.NET), RESTful Web APIs, SQL Server, React.js, and Microsoft Azure.",
  applicationName: "Abdelrahman Mohamed Portfolio",
  authors: [{ name: "Abdelrahman Mohamed" }],
  creator: "Abdelrahman Mohamed",
  openGraph: {
    type: "website",
    title: "Abdelrahman Mohamed | Full-Stack Software Developer (.NET)",
    description:
      "Full-stack web applications and cloud-ready backend systems built with C#, ASP.NET Core (.NET), SQL Server, React.js, and Microsoft Azure.",
  },
  twitter: {
    card: "summary",
    title: "Abdelrahman Mohamed | Full-Stack Software Developer (.NET)",
    description:
      "Full-stack web applications and cloud-ready backend systems built with C#, ASP.NET Core (.NET), SQL Server, React.js, and Microsoft Azure.",
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
