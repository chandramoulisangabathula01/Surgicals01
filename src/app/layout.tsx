import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans", 
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MedSupply Pro",
  description: "Your trusted source for medical supplies and equipment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        

        <main className="min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}
