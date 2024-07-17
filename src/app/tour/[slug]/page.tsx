"use client";

import { DetailTourSection } from "@/sections/DetailTour";
import { Suspense } from "react";

export default function CruisePageBySlug({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  return <DetailTourSection slug={params.slug} />;
}
