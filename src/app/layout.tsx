import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KHIZAR IMRAN | Terminal",
  description: "Fullstack Developer | AI Products | Quant Trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="scanline" />
        {children}
      </body>
    </html>
  );
}
