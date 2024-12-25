import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Media App",
  description: "Social media app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}__className_d65c78 vsc-initialized bg-slate-100`}
          data-new-gr-c-s-check-loaded="14.1214.0"
          data-gr-ext-installed=""
          cz-shortcut-listen="true"
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
