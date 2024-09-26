import { DetailBlogSection } from "@/sections/DetailBlog";
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
  const res = await fetch(`${process.env.API_URL}/blog/${slug}/seo`).then(
    (res) => res.json()
  );

  // Kiểm tra xem dữ liệu có tồn tại không
  const blogBrief = res?.data;
  if (!blogBrief) {
    return {
      title: "Blog Details",
      openGraph: {
        title: "Blog Details",
        description: "No details available",
        images: [], // Không có hình ảnh
        url: `${process.env.URL_MAIN}/blog/${slug}`,
      },
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blogBrief?.name || "Blog Details",
    openGraph: {
      title: blogBrief?.name || "Blog Details",
      description: blogBrief?.description || "No description available",
      images: [blogBrief.images, ...previousImages],
      url: `${process.env.URL_MAIN}/blog/${slug}`,
    },
  };
}

export default function BlogPageBySlug({
  params,
}: {
  params: { slug: string };
}): JSX.Element {
  return <DetailBlogSection slug={params.slug} />;
}
