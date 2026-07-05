import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdelrahman Mohamed | Software Developer",
  description:
    "Professional portfolio for Abdelrahman Mohamed, a Software Developer and Full-Stack Developer building mobile, web, backend, and data-driven projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
