"use client";

import { CruiseItem } from "@/components/CruiseItem";
import { CruiseItemGrid } from "@/components/CruiseItemGrid";
import { IntroCruiseAndTour } from "@/components/IntroCruiseAndTour";
import { SliderAndSearch } from "@/components/SliderAndSearch";
import { IntroduceHome } from "@/components/home/Introduce";
import { useAppDispatch, useAppSelector } from "@/lib";
import { resetDataCruise } from "@/lib/redux/app/cruise.slice";
import { DestinationItem } from "@/lib/redux/app/destination.slice";
// import { destinationNear } from "@/mocks";
import { useCruise } from "@/utils/handleCruise";
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
import { useEffect, useState } from "react";

export function DetailDestinationSection({
  slug,
}: {
  slug: string;
}): JSX.Element {
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  const search = searchParams.get("search") || "";
  const [typeShow, setTypeShow] = useState("list");

  const { destinations } = useAppSelector((state) => state.destination);

  let dataDestination: DestinationItem | undefined;
  let dataDetailLocation:
    | {
        id: number;
        title: string;
        images: string;
        description: string;
        name: string;
      }
    | undefined;
  if (destinations.length) {
    for (let index = 0; index < destinations.length; index++) {
      const destination = destinations[index];
      if (destination.slug == slug) {
        dataDestination = destination;
        break;
      } else {
        const dataDetailLocation = destination.detailLocations.find(
          (location) => location.slug == slug
        );
        if (dataDetailLocation) {
          dataDestination = destination;
        }
      }
    }
  }

  const [sort, setSort] = useState("");
  const [typeSort, setTypeSort] = useState("");

  const { data } = useCruise(
    sort,
    typeSort,
    dataDestination?.id,
    dataDetailLocation?.id,
    search
  );

  useEffect(() => {
    return () => {
      dispatch(resetDataCruise());
    };
  }, [searchParams]);

  return (
    <div className="-mt-[var(--height-header)]">
      <SliderAndSearch />
      <IntroduceHome />
      <IntroCruiseAndTour
        title={
          dataDetailLocation?.title ||
          dataDestination?.title ||
          "SEARCH RESULTS"
        }
        description={
          dataDetailLocation?.description ||
          dataDestination?.description ||
          `<p style="text-align: center">If you couldn't find suitable cruise for yourself? Let us help you!</p>`
        }
        textListCruise={
          dataDetailLocation?.title
            ? `${dataDestination?.title} visit ${dataDetailLocation.title}`
            : ""
        }
        images={
          dataDetailLocation?.title
            ? dataDetailLocation.images.split("*_*")
            : []
        }
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

      <section
        className={classNames("bg-[var(--bg-container-color)] py-4", {
          hidden: !dataDestination && !dataDetailLocation,
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
                    {/* <div className="flex">
                      {item.services.map((service, index) => (
                        <div key={index}>
                          <FontAwesomeIcon
                            icon={mapServiceIcons[service.slug]}
                            data-tooltip-id={`tooltip-service-${service.slug}`}
                            data-tooltip-content={service.name}
                            data-tooltip-place="top"
                            className="text-[#aaa] text-xs p-2 rounded-full border-[1px] border-[#ddd] mx-1"
                          />
                          <Tooltip id={`tooltip-service-${service.slug}`} />
                        </div>
                      ))}
                    </div> */}
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
      </section>
    </div>
  );
}
