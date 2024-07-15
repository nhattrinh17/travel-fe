// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// tooltips
import "react-tooltip/dist/react-tooltip.css";
import "./globals.css";
import Script from "next/script";
import { MainLayout } from "@/layout/main";

// // import function to register Swiper custom elements
// import { register } from "swiper/element/bundle";
// // register Swiper custom elements
// register();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
