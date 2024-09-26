import { HomeTourSection } from "@/sections/HomeTour";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Tour List - TH Global Travel",
  description:
    "Explore our exciting tour list with a variety of options for your travel adventures. Book your tour today!",
  keywords:
    "travel tours, book tours, budget tours, all-inclusive tours, TH Global Travel",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tour List - TH Global Travel",
    description:
      "Explore our exciting tour list with a variety of options for your travel adventures. Book your tour today!",
    url: "https://www.thglobaltravel.com/tour",
    type: "website",
    images: [
      {
        url: "https://thglobaltravel.com/home/bg-8.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour List - TH Global Travel",
    description:
      "Explore our exciting tour list with a variety of options for your travel adventures. Book your tour today!",
    images: "https://thglobaltravel.com/home/bg-8.jpg",
  },
};

export default function TourPage(): JSX.Element {
  return (
    <Suspense>
      <HomeTourSection />
    </Suspense>
  );
}
