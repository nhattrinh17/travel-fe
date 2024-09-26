import { HomeCruiseSection } from "@/sections/HomeCruise";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Cruise List - TH Global Travel",
  description:
    "Explore our exclusive range of cruises, offering breathtaking destinations and unforgettable experiences on the water. Book your cruise adventure today!",
  keywords:
    "cruise packages, luxury cruises, budget cruises, book cruises, TH Global Travel",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Cruise List - TH Global Travel",
    description:
      "Explore our exclusive range of cruises, offering breathtaking destinations and unforgettable experiences on the water. Book your cruise adventure today!",
    url: "https://www.thglobaltravel.com/cruise",
    type: "website",
    images: [
      {
        url: "https://thglobaltravel.com/share/sliders/slider1.jpg", // Update to an appropriate image
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cruise List - TH Global Travel",
    description:
      "Explore our exclusive range of cruises, offering breathtaking destinations and unforgettable experiences on the water. Book your cruise adventure today!",
    images: "https://thglobaltravel.com/share/sliders/slider1.jpg", // Update to an appropriate image
  },
};

export default function PageCruise() {
  return (
    <Suspense>
      <HomeCruiseSection />
    </Suspense>
  );
}
