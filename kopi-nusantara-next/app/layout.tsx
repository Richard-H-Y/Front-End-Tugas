import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kopi Nusantara",
  description: "Kopi Nusantara - Secangkir Kehangatan Khas Nusantara",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
