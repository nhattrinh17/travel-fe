"use client";

import { CruiseItem } from "@/components/CruiseItem";
import { CruiseItemGrid } from "@/components/CruiseItemGrid";
import { IntroCruiseAndTour } from "@/components/IntroCruiseAndTour";
import { SliderAndSearch } from "@/components/SliderAndSearch";
import { IntroduceHome } from "@/components/home/Introduce";
// import { destinationNear } from "@/mocks";
import { useCruise } from "@/utils/handleCruise";
import { faBorderAll, faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export function HomeCruiseSection(): JSX.Element {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";

  const [typeShow, setTypeShow] = useState("list");

  const [sort, setSort] = useState("");
  const [typeSort, setTypeSort] = useState("");

  const { data } = useCruise(sort, typeSort, 0, 0, search);

  return (
    <div className="-mt-[var(--height-header)]">
      <SliderAndSearch />
      <IntroduceHome />
      <IntroCruiseAndTour
        title={search ? "SEARCH RESULTS" : "CRUISES FOR YOU"}
        description={
          search
            ? `<p style="text-align: center">If you couldn't find suitable cruise for yourself? Let us help you!</p>`
            : `<p style="text-align: center">These cruises are for you. Hope you enjoy them. Let us help you!</p>`
        }
        textListCruise={""}
        images={[]}
      />
      <section className="bg-[var(--bg-container-color)]  py-4">
        <div className="container">
          <div className="hidden lg:flex justify-between pb-3">
            <div className="flex items-center text-sm text-[#333]">
              <span className="font-bold">Sort by:</span>
              <select className="border-b-[1px] border-dashed bg-transparent mx-2 outline-none py-2 pl-1 pr-3">
                <option>--Star rating--</option>
                <option value={"ASC"}>Ascending</option>
                <option value={"DESC"}>Descending</option>
              </select>
              <select className="border-b-[1px] border-dashed bg-transparent mx-2 outline-none py-2 pl-1 pr-3">
                <option>--Guest rating--</option>
                <option value={"ASC"}>Ascending</option>
                <option value={"DESC"}>Descending</option>
              </select>
              <select
                onChange={(e) => {
                  setSort("price");
                  setTypeSort(e.target.value);
                }}
                className="border-b-[1px] border-dashed bg-transparent mx-2 outline-none py-2 pl-1 pr-3"
              >
                <option>--Pricing--</option>
                <option value={"ASC"}>Ascending</option>
                <option value={"DESC"}>Descending</option>
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
            {data.map((cruise, index) =>
              typeShow == "grid" ? (
                <CruiseItemGrid key={index} {...cruise} />
              ) : (
                <CruiseItem key={index} marginBottom={0} {...cruise} />
              )
            )}
          </div>
        </div>
      </section>

      {/* <section
        className={classNames("bg-[var(--bg-container-color)] py-4", {
          hidden: !idDestination && !idDetailLocation,
        })}
      >
        <div className="container">
          <div className="flex flex-col items-center mb-5">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-3xl text-[var(--primary-color)] mb-2"
            />
            <h2 className="my-3 text-2xl font-bold text-[var(--secondary-color)] w-full text-center relative line-text">
              {dataDetailLocation?.name || dataDestination?.name}
            </h2>
          </div>
          <div>
            {dataDestination?.detailLocations.map((item, index) => (
              <Link
                href={`/cruise?destination=${dataDestination.slug}&detail=${item.slug}`}
                key={index}
                className="bg-white border-[1px] rounded-lg p-4 grid grid-cols-1 lg:grid-cols-4 gap-5 mb-4"
              >
                <Link href={""} className="block">
                  <Image
                    alt="destination"
                    src={item.images.split("*_*")[0]}
                    width={260}
                    height={155}
                    className="w-full object-contain hover:opacity-95"
                  />
                </Link>
                <div className="col-span-1 lg:col-span-3">
                  <h4 className="text-[var(--text-hover-default)] text-xl font-bold mb-1">
                    {item.name}
                  </h4>
                  <div className="flex items-center">
                   
                    <div className="flex">
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="text-[#aaa] mx-1"
                      />
                      <span className="text-sm text-[#aaa]">{item.title}</span>
                    </div>
                  </div>
                  <p
                    className="text-start text-[#666] text-sm pt-1"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
