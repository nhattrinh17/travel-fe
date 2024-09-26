import { FlashDealSection } from "@/sections/FlashDeal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Exclusive Deals on Tours & Cruises | TH Global Travel",
  description:
    "Our Flash Deals Halong bay Cruises is really working when you are flexible on dates. On this site, it is our great pleasure to offer you several discounted for Best Halong Bay Cruise deals with unbeatable price. Whether you are on a family trip, group or by yourself, simply take a look at the Halong Bay cruises below to get your best Halong Bay Cruise deals what you can not find anywhere else – Unbeatable Deals & Best Price Guarantee – Don’t miss out!!! Let come and join with us in the most exquisite vessels, experience the breath-taking view of Halong bay, enjoy the mouth-watering meals with our chef and take part in a wide range of exhilarating activities on the bay with one of our best flash deals.",
  openGraph: {
    title: "Exclusive Deals on Tours & Cruises",
    description:
      "Find the best travel deals on luxury cruises and tours. Book now to take advantage of limited-time offers for your next adventure.",
    url: "https://thglobaltravel.com/deals",
    images: [
      "https://yourimageurl.com/deals-page-banner.jpg", // Update with a relevant banner image URL
    ],
  },
};

export default function FlashDealPage(): JSX.Element {
  return <FlashDealSection />;
}
