import { HomeBlogSection } from "@/sections/Blog";
import { Suspense } from "react";

export default function BlogPage(): JSX.Element {
  return (
    <Suspense>
      <HomeBlogSection />
    </Suspense>
  );
}
