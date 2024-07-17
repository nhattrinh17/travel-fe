"use client";

import { DetailCruise } from "@/sections/DetailCruise";
import { Suspense } from "react";

export default function CruisePageBySlug({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  return <DetailCruise slug={params.slug} />;
}
