import { DetailCruise } from "@/sections/DetailCruise";
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
  const res = await fetch(`${process.env.API_URL}/cruise/${slug}/seo`).then(
    (res) => res.json()
  );

  // Kiểm tra xem dữ liệu có tồn tại không
  const cruiseBrief = res?.data;
  if (!cruiseBrief) {
    return {
      title: "Cruise Details",
      openGraph: {
        title: "Cruise Details",
        description: "No details available",
        images: [], // Không có hình ảnh
        url: `${process.env.URL_MAIN}/cruise/${slug}`,
      },
    };
  }

  // Xử lý URL hình ảnh
  const imageUrl = cruiseBrief.images?.split("*_*")[0]; // Lấy ảnh đầu tiên

  return {
    title: cruiseBrief?.name || "Cruise Details",
    openGraph: {
      title: cruiseBrief?.name || "Cruise Details",
      description: cruiseBrief?.contentBrief || "No description available",
      images: [imageUrl].filter(Boolean), // Chỉ thêm hình ảnh nếu có
      url: `${process.env.URL_MAIN}/cruise/${slug}`,
    },
  };
}

export default function CruisePageBySlug({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  return <DetailCruise slug={params.slug} />;
}
