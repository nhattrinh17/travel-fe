"use client";

import { CruiseItem } from "@/components/CruiseItem";
import { CruiseItemGrid } from "@/components/CruiseItemGrid";
import { IntroCruiseAndTour } from "@/components/IntroCruiseAndTour";
import { SliderAndSearch } from "@/components/SliderAndSearch";
import { IntroduceHome } from "@/components/home/Introduce";
import { useAppSelector } from "@/lib";
// import { destinationNear } from "@/mocks";
import {
  useCruise,
  useCruiseBudget,
  useCruiseLuxury,
} from "@/utils/handleCruise";
import {
  faBorderAll,
  faListUl,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export function LuxuryOrBudgetCruiseSection(): JSX.Element {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "";
  const [typeShow, setTypeShow] = useState("list");

  const { data: dataLuxury } = useCruiseLuxury();
  const { data: dataBudget } = useCruiseBudget();
  const dataShow = type == "luxury" ? dataLuxury : dataBudget;

  return (
    <div className="-mt-[var(--height-header)]">
      <SliderAndSearch />
      <IntroduceHome />
      <IntroCruiseAndTour
        title={
          type == "luxury"
            ? `All ${dataLuxury.length} Best Luxury Cruises Recommeded For You`
            : `All ${dataBudget.length}  Best Budget Cruises Recommeded For You`
        }
        description={
          type == "luxury"
            ? `<p style="text-align: center">Let's smooth your full-of-stress mind by letting the business days behind with the best services in our most luxurious cruises in the World Heritage site of  Stepping foot on one of the most exquisite vessels your vacation truly starts with world-class services, extraordinary travel itineraries, state-of-the-art amenities and high-end dishes, all of its finest. Take a look at best luxury cruises list below and relish the holiday of a lifetime with luxurious vacations.</p>`
            : `<p style="text-align: center">You think the chance to experience Cruises is just for opulent people? No way! With Budget Cruises, you will take the unique adventure to cruise through the World’s Heritage Site at very affordable price. So do not hesitate to book a tour for you to explore the bio-diverse nature with caves, karsts, beaches & lagoons, enjoy special feast of traditional Vietnamese cuisines and entertain with various activities on our high safety standard cruises.</p>`
        }
      />
      <section className="bg-[var(--bg-container-color)]  py-4">
        <div className="container">
          <div className="hidden lg:flex justify-end pb-3">
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
            {dataShow.map((cruise, index) =>
              typeShow == "grid" ? (
                <CruiseItemGrid key={index} {...cruise} />
              ) : (
                <CruiseItem key={index} marginBottom={0} {...cruise} />
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
