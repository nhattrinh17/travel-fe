"use client";

import { CruiseItemGrid } from "@/components/CruiseItemGrid";
import { IntroCruiseAndTour } from "@/components/IntroCruiseAndTour";
import { SliderAndSearch } from "@/components/SliderAndSearch";
import { IntroduceHome } from "@/components/home/Introduce";
import { useCruiseFlashSale } from "@/utils/handleCruise";

export function FlashDealSection(): JSX.Element {
  const { data } = useCruiseFlashSale();

  return (
    <div className="-mt-[var(--height-header)]">
      <SliderAndSearch />
      <IntroduceHome />
      <IntroCruiseAndTour
        title={"All 7 Flash Deals Halong Bay Cruises Recommended For You"}
        description={`<p styles="text-align: center">Our Flash Deals Halong bay Cruises is really working when you are flexible on dates. On this site, it is our great pleasure to offer you several discounted for Best Halong Bay Cruise deals with unbeatable price. Whether you are on a family trip, group or by yourself, simply take a look at the Halong Bay cruises below to get your best Halong Bay Cruise deals what you can not find anywhere else – Unbeatable Deals & Best Price Guarantee – Don’t miss out!!!
Let come and join with us in the most exquisite vessels, experience the breath-taking view of Halong bay, enjoy the mouth-watering meals with our chef and take part in a wide range of exhilarating activities on the bay with one of our best flash deals.</p>`}
      />

      <div className="bg-[var(--bg-container-color)] py-10">
        <section className="container ">
          <div className="grid-cols-1">
            {data.slice(0, 6).map((cruise, index) => (
              <CruiseItemGrid key={index} {...cruise} topCruise={index + 1} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
