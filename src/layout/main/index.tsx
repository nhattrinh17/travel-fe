import { FooterLayout } from "@/components/layout/Footer";
import { HeaderLayout } from "@/components/layout/Header";

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
