import { HomeBlogSection } from "@/sections/Blog";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Travel Tips, Tours & Cruises Blog | TH Global Travel",
  description:
    "Discover expert travel tips, insider guides, and in-depth articles on tours, cruises, and global adventures. Stay updated with TH Global Travel's blog for your next journey.",
  openGraph: {
    title: "Travel Blog: Tours, Cruises & Expert Tips",
    description:
      "Explore the world with our blog! Get expert travel tips, destination guides, and the latest trends in tours and cruises. Plan your next adventure with confidence.",
    url: "https://thglobaltravel.com/blog",
  },
};

export default function BlogPage(): JSX.Element {
  return (
    <Suspense>
      <HomeBlogSection />
    </Suspense>
  );
}
