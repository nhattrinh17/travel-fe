import { HomeTourSection } from "@/sections/HomeTour";
import { Suspense } from "react";

export default function TourPage(): JSX.Element {
  return (
    <Suspense>
      <HomeTourSection />
    </Suspense>
  );
}
