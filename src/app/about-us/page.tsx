import { AboutUsSection } from "@/sections/AboutUs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - TH Global Travel",
  description:
    "TH Global Travel is a leading travel agency offering top-notch travel experiences worldwide. Our mission is to provide personalized, hassle-free travel services with exceptional customer support. Explore breathtaking destinations, immerse in diverse cultures, and make unforgettable memories with us.",
  openGraph: {
    title: "About Us - TH Global Travel",
    description:
      "Discover TH Global Travel, your trusted partner for world-class travel experiences. Our expertise ensures seamless travel adventures, tailored to your preferences.",
    url: "https://thglobaltravel.com/about-us",
    images: [
      {
        url: "https://thglobaltravel.com/about-us/sliders/slider1.jpg",
        alt: "TH Global Travel Team",
      },
    ],
  },
  twitter: {
    title: "About Us - TH Global Travel",
    description:
      "Join us at TH Global Travel for extraordinary journeys across the globe. Let us handle the details while you enjoy the adventure!",
  },
};
export default function ContactPage(): JSX.Element {
  return <AboutUsSection />;
}
