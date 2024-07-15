"use client";

import { HomeCruiseSection } from "@/sections/HomeCruise";

export default function CruisePageBySlug({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  return <HomeCruiseSection slug={params.slug} />;
}
