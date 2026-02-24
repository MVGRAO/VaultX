import "./globals.css";

export const metadata = {
  title: "VaultX Techolution — Engineering Intelligent Systems",
  description:
    "AI-driven software, scalable backend systems, and automation platforms designed for performance, security, and growth.",
  keywords: [
    "AI software development",
    "backend systems",
    "SaaS development",
    "automation",
    "Hyderabad",
    "India"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
