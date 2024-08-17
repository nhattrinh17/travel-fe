import { FooterLayout } from "@/components/layout/Footer";
import { HeaderLayout } from "@/components/layout/Header";
import { Metadata } from "next";
import Head from "next/head";
import Script from "next/script";

// export const metadata: Metadata = {
//   title: "Your Gateway to Vietnamese Adventures",
//   description: "Your Gateway to Vietnamese Adventures",
//   icons: [
//     {
//       media: "(prefers-color-scheme: light)",
//       url: "/favicon.png",
//       href: "/favicon.png",
//     },
//     {
//       media: "(prefers-color-scheme: dark)",
//       url: "/favicon.png",
//       href: "/favicon.png",
//     },
//   ],
// };

export function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TQ4RLJMGFL"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TQ4RLJMGFL');
          `}
        </Script>
      </head>
      <main>
        <HeaderLayout />
        {children}
        <FooterLayout />
      </main>
    </>
  );
}
