"use client";

import { CruiseItemGrid } from "@/components/CruiseItemGrid";
import { IntroCruiseAndTour } from "@/components/IntroCruiseAndTour";
import { SliderAndSearch } from "@/components/SliderAndSearch";
import { IntroduceHome } from "@/components/home/Introduce";
import { cruiseHome } from "@/mocks";
import { faBorderAll, faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useState } from "react";

export function HomeCruiseSection({ slug }: { slug: string }): JSX.Element {
  const [typeShow, setTypeShow] = useState("list");

  return (
    <div className="-mt-[var(--height-header)]">
      <SliderAndSearch />
      <IntroduceHome />
      <IntroCruiseAndTour
        title="All 43 Best Family Halong Bay Cruises"
        description="With many years of experience working as Halong Bay Cruise expert as well as receiving and summarizing several valuable feedbacks from our old customers, I group a list of cruises for families based on common criteria such as cruises and cabins' features as well as their itineraries. These choices belong to all three classes of cruises in Halong Bay. Therefore, it is suitable for each family's requirement. These Halong bay cruises are commonly chosen by family due to their connecting cabins, large sundecks and elegant dining rooms & bars which will surely make your family feel comfortable."
      />
      <div className="bg-[#f1f1f1]">
        <div className="container">
          <div className="hidden lg:flex justify-between pb-3">
            <div className="flex items-center text-sm text-[#333]">
              <span className="font-bold">Sort by:</span>
              <select className="border-b-[1px] border-dashed bg-transparent mx-2 outline-none py-2 pl-1 pr-3">
                <option>--Star rating--</option>
                <option>Ascending</option>
                <option>Descending</option>
              </select>
              <select className="border-b-[1px] border-dashed bg-transparent mx-2 outline-none py-2 pl-1 pr-3">
                <option>--Guest rating--</option>
                <option>Ascending</option>
                <option>Descending</option>
              </select>
              <select className="border-b-[1px] border-dashed bg-transparent mx-2 outline-none py-2 pl-1 pr-3">
                <option>--Pricing--</option>
                <option>Ascending</option>
                <option>Descending</option>
              </select>
            </div>
            <div className="flex">
              <div
                onClick={() => setTypeShow("list")}
                className={classNames(
                  "h-[32px] w-[40px] border-[1px] border-[#e1e1e1] text-black cursor-pointer rounded-sm flex items-center justify-center",
                  {
                    "bg-white": typeShow == "list",
                  }
                )}
              >
                <FontAwesomeIcon
                  icon={faListUl}
                  color="#000"
                  className="text-xl"
                />
              </div>
              <div
                onClick={() => setTypeShow("grid")}
                className={classNames(
                  "h-[32px] w-[40px] border-[1px] border-[#e1e1e1] text-black cursor-pointer rounded-sm flex items-center justify-center",
                  {
                    "bg-white": typeShow == "grid",
                  }
                )}
              >
                <FontAwesomeIcon
                  icon={faBorderAll}
                  color="#000"
                  className="text-xl"
                />
              </div>
            </div>
          </div>
          <div className="pb-5">
            <CruiseItemGrid {...cruiseHome[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}
