"use client";

import { IntroCruiseAndTour } from "@/components/IntroCruiseAndTour";
import { SliderAndSearch } from "@/components/SliderAndSearch";
import { TourItem } from "@/components/TourItem";
import { TourItemGrid } from "@/components/TourItemGrid";
import { IntroduceHome } from "@/components/home/Introduce";
import { useAppSelector } from "@/lib";
import { useHomeTour } from "@/utils/handleTour";
import { faBorderAll, faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export function HomeTourSection(): JSX.Element {
  const searchParams = useSearchParams();
  const slugDestination = searchParams.get("name") || "";

  const [sort, setSort] = useState("");
  const [typeSort, setTypeSort] = useState("");
  const { packetTours } = useAppSelector((state) => state.packetTour);
  const packetTourBySlug = packetTours.find((i) => i.slug == slugDestination);
  const dataTour = useHomeTour(packetTourBySlug?.id, sort, typeSort);

  const [typeShow, setTypeShow] = useState("list");
  return (
    <div className="-mt-[var(--height-header)]">
      <SliderAndSearch />
      <IntroduceHome />
      <IntroCruiseAndTour
        title="All 43 Best Family Halong Bay Tour"
        description="With many years of experience working as Halong Bay Cruise expert as well as receiving and summarizing several valuable feedbacks from our old customers, I group a list of cruises for families based on common criteria such as cruises and cabins' features as well as their itineraries. These choices belong to all three classes of cruises in Halong Bay. Therefore, it is suitable for each family's requirement. These Halong bay cruises are commonly chosen by family due to their connecting cabins, large sundecks and elegant dining rooms & bars which will surely make your family feel comfortable."
      />
      <section className="bg-[var(--bg-container-color)]  py-4">
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
                <option
                  onClick={() => {
                    setSort("price");
                    setTypeSort("ASC");
                  }}
                >
                  Ascending
                </option>
                <option
                  onClick={() => {
                    setSort("price");
                    setTypeSort("DESC");
                  }}
                >
                  Descending
                </option>
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
          <div
            className={classNames("pb-5 grid", {
              "grid-cols-1 lg:grid-cols-2 gap-5": typeShow == "list",
            })}
          >
            {dataTour.map((tour, index) =>
              typeShow == "grid" ? (
                <TourItemGrid key={index} {...tour} />
              ) : (
                <TourItem key={index} marginBottom={0} {...tour} />
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
