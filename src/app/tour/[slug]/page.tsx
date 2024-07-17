"use client";

import { DetailTourSection } from "@/sections/DetailTour";

export default function CruisePageBySlug({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  return <DetailTourSection slug={params.slug} />;
}
