import { HomeCruiseSection } from "@/sections/HomeCruise";
import { Suspense } from "react";

export default function PageCruise() {
  return (
    <Suspense>
      <HomeCruiseSection />
    </Suspense>
  );
}
