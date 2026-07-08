import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://khizarimran.com"),
  title: "Khizar Imran",
  description: "Software Developer — Full-stack, AI/ML, AWS. Founder of Klaro-tech.",
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
