"use client";

import { HomeCruiseSection } from "@/sections/HomeCruise";
import { useSearchParams } from "next/navigation";

export default function PageCruise() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name") || "";

  return <HomeCruiseSection slug={name} />;
}
