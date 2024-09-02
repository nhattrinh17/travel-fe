import { DetailTourSection } from "@/sections/DetailTour";
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
  const res = await fetch(`${process.env.API_URL}/tour/${slug}/seo`).then(
    (res) => res.json()
  );

  // Kiểm tra xem dữ liệu có tồn tại không
  const tourBrief = res?.data;
  if (!tourBrief) {
    return {
      title: "Tour Details",
      openGraph: {
        title: "Tour Details",
        description: "No details available",
        images: [], // Không có hình ảnh
        url: `${process.env.URL_MAIN}/tour/${slug}`,
      },
    };
  }

  const previousImages = (await parent).openGraph?.images || [];
  // Xử lý URL hình ảnh
  const imageUrl = tourBrief.images?.split("*_*")[0]; // Lấy ảnh đầu tiên

  return {
    title: tourBrief?.name || "Tour Details",
    openGraph: {
      title: tourBrief?.name || "Tour Details",
      description: tourBrief?.contentBrief || "No description available",
      images: [imageUrl, ...previousImages],
      url: `${process.env.URL_MAIN}/tour/${slug}`,
    },
  };
}

export default function TourPageBySlug({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  return <DetailTourSection slug={params.slug} />;
}
