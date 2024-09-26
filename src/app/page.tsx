import { HomeSection } from "@/sections/home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vietnam holiday packages 2024 & 2025",
  description:
    "Join TH Global Travel for unforgettable tours and cruises. Explore diverse destinations and book your adventure today! Great deals and tailored experiences await you.",
  keywords:
    "travel tours, cruise packages, book tours, family vacations, adventure travel, luxury cruises, TH Global Travel",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "TH Global Travel - Explore Tours and Cruises",
    description:
      "Join TH Global Travel for unforgettable tours and cruises. Explore diverse destinations and book your adventure today!",
    url: "https://www.thglobaltravel.com",
    type: "website",
    images: [
      {
        url: "https://thglobaltravel.com/share/sliders/slider1.jpg", // Cập nhật với hình ảnh phù hợp
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TH Global Travel - Explore Tours and Cruises",
    description:
      "Join TH Global Travel for unforgettable tours and cruises. Explore diverse destinations and book your adventure today!",
    images: "https://thglobaltravel.com/share/sliders/slider1.jpg", // Cập nhật với hình ảnh phù hợp
  },
};

export default function HomePage() {
  return <HomeSection />;
}
