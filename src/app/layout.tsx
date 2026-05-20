import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";
import { Manrope } from "next/font/google";
import Head from "next/head";
// import Script from "next/script";
import { poppins, grotesk, urban } from "@/lib/utils";
import Script from "next/script";

export const metadata: Metadata = {
  title: "LetsCr8T",
  description:
    "At LetsCr8T, we craft custom websites & digital experiences that engage your audience, elevate your brand, & drive growth — let’s get started!",

  openGraph: {
    title: "LetsCr8T",
    description:
      "Crafting unique digital experiences to engage audiences, elevate brands, and foster growth. Discover custom web design, development, and branding solutions with LetsCr8T.",
    type: "website",
    url: "https://letscr8t.xyz",
    images: [
      {
        url: "/Portfolio-hero.png",
        width: 1200,
        height: 630,
        alt: "LetsCr8T - Crafting custom digital experiences",
      },
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>LetsCr8T</title>
      <Head>
        <meta
          name="description"
          content="At LetsCr8T, we craft custom websites & digital experiences to engage your audience, elevate your brand, & drive growth."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#FF5A12" />
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="48x48"
          type="image/x-icon"
        />

        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Preload for Local Fonts */}
        <link
          rel="preload"
          href="/fonts/Urban Storm.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/BDOGrotesk-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </Head>
      <body
        className={`${poppins.className} ${urban.variable} ${grotesk.variable} overflow-x-hidden`}
      >
        {children}
        <Script id="tawk-to-script" strategy="lazyOnload">
          {`
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
      var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
      s1.async=true;
      s1.src='https://embed.tawk.to/672d41da4304e3196adf1118/1ic4ciff3';
      s1.charset='UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();
  `}
        </Script>
      </body>
    </html>
  );
}
