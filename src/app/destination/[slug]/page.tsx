import { DetailDestinationSection } from "@/sections/DetailDestination";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Hàm generateMetadata để tạo metadata động cho trang
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const res = await fetch(
    `${process.env.API_URL}/destination/${slug}/seo`
  ).then((res) => res.json());

  let destinationBrief = res?.data;
  // Get data detail location when not found destination
  if (!destinationBrief) {
    const resLocation = await fetch(
      `${process.env.API_URL}/detail-location/${slug}/seo`
    ).then((res) => res.json());
    destinationBrief = resLocation?.data;
  }

  if (!destinationBrief) {
    return {
      title: "TH Global Trave Destination",
      openGraph: {
        title: "TH Global Trave Destination",
        description: "No details available",
        images: [], // Không có hình ảnh
        url: `${process.env.URL_MAIN}/blog/${slug}`,
      },
    };
  }

  const images = destinationBrief?.images
    ? destinationBrief?.images?.split("*_*")
    : [destinationBrief?.image];

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: destinationBrief?.name || "TH Global Trave Destination",
    openGraph: {
      title: destinationBrief?.name || "TH Global Trave Destination",
      description: destinationBrief?.title || "No description available",
      images: [...images, ...previousImages],
      url: `${process.env.URL_MAIN}/destination/${slug}`,
    },
  };
}

export default function DestinationCruisePage({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  return <DetailDestinationSection slug={params.slug} />;
}
