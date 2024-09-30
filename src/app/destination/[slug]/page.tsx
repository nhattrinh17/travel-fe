import { DetailDestinationSection } from "@/sections/DetailDestination";

export default function DestinationCruisePage({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  return <DetailDestinationSection slug={params.slug} />;
}
