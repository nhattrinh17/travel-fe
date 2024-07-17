"use client";

import { HomeTourSection } from "@/sections/HomeTour";
import { useSearchParams } from "next/navigation";

export default function TourPage(): JSX.Element {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";

  return <HomeTourSection slugDestination={name} />;
}
