import type { Metadata } from "next";
import Script from "next/script";
import { Suspense } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource/playfair-display/latin-400.css";
import "@fontsource/playfair-display/latin-400-italic.css";
import Navbar from "@/components/navigation/Navbar";
import ConditionalFooter from "@/components/layout/ConditionalFooter";
import CustomCursor from "@/components/ui/CustomCursor";
import ThemeInit from "./ThemeInit";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashiat Abdulkadir — Product Designer & Design Engineer",
  description:
    "Portfolio of a product designer specialising in enterprise SaaS, fintech, compliance platforms, and complex product workflows.",
  icons: {
    icon: [
      {
        url: "/favicon-light.svg",
        type: "image/svg+xml",
        sizes: "any",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.svg",
        type: "image/svg+xml",
        sizes: "any",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var saved=localStorage.getItem("theme");var theme=saved==="light"||saved==="dark"?saved:(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.setAttribute("data-theme",theme)}catch(e){document.documentElement.setAttribute("data-theme","light")}})();`}
        </Script>
        <ThemeInit />
        <CustomCursor label="You" />
        <Navbar />
        <main id="top" className="flex-1 pt-16">{children}</main>
        <Suspense fallback={null}>
          <ConditionalFooter />
        </Suspense>
      </body>
    </html>
  );
}
