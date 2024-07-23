import { FooterLayout } from "@/components/layout/Footer";
import { HeaderLayout } from "@/components/layout/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Travel",
  description: "Global Travel",
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

export function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <main>
      <HeaderLayout />
      {children}
      <FooterLayout />
    </main>
  );
}
