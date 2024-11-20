// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// tooltips
import "react-tooltip/dist/react-tooltip.css";
import "./globals.css";
import Script from "next/script";
import { MainLayout } from "@/layout/main";
import StoreProvider from "./StoreProvider";
import { Metadata } from "next";

// // import function to register Swiper custom elements
// import { register } from "swiper/element/bundle";
// // register Swiper custom elements
// register();

export const metadata: Metadata = {
  title: "Vietnam holiday packages 2024 & 2025",
  description:
    "Join TH Global Travel for unforgettable tours and cruises. Explore diverse destinations and book your adventure today! Great deals and tailored experiences await you.",
  keywords:
    "travel tours, cruise packages, book tours, family vacations, adventure travel, luxury cruises, TH Global Travel",
  robots: {
    index: true,
    follow: true,
  },
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/favicon.png",
      href: "/favicon.png",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/favicon.png",
      href: "/favicon.png",
    },
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NJ5PL7W3')
          `}
        </Script>
        <Script
          src="/assets/scripts/lang-config.js"
          strategy="beforeInteractive"
        />
        <Script
          src="/assets/scripts/translation.js"
          strategy="beforeInteractive"
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
          strategy="beforeInteractive"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TQ4RLJMGFL"
          strategy="beforeInteractive"
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TQ4RLJMGFL');
          `}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NJ5PL7W3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <StoreProvider>
          <MainLayout>{children}</MainLayout>
        </StoreProvider>
      </body>
    </html>
  );
}
