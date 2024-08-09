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

export function DestinationCruiseSection(): JSX.Element {
  const searchParams = useSearchParams();
  const { destinations } = useAppSelector((state) => state.destination);

  return (
    <div className="-mt-[var(--height-header)]">
      <SliderAndSearch />
      <IntroduceHome />
      <IntroCruiseAndTour
        title={"HALONG BAY CRUISE DESTINATIONS"}
        description={`<p style="text-align: center">Let us introduce amazing Halong Bay Cruise Attractions you should not miss on your Halong Bay Cruise itinerary. The UNESCO-listed Halong Bay is actually devided into three different bays: Halong Bay, Bai Tu Long Bay, Lan Ha Bay with various overnight cruises. Check out your Halong bay cruise itinerary and follow us to explore the attractions your cruise will take you to.</p>`}
      />
      <section className="bg-[var(--bg-container-color)]  py-4">
        <div className="container">
          {destinations.map((destination) => (
            <div className="mb-8">
              <h2 className="my-3 text-2xl font-bold text-[var(--secondary-color)] w-full text-center relative line-text">
                {destination.name}
              </h2>

              <div className="pt-5 grid grid-cols-2 gap-4">
                {destination?.detailLocations.map((item, index) => (
                  <div
                    key={index}
                    className="relative bg-white border-[1px] rounded-lg p-4 grid grid-cols-1 lg:grid-cols-5 gap-5"
                  >
                    <Link
                      href={`/cruise?destination=${destination.slug}&detail=${item.slug}`}
                      className="block col-span-1 lg:col-span-2"
                    >
                      <Image
                        alt="destination"
                        src={item.images.split("*_*")[0]}
                        width={260}
                        height={155}
                        className="w-full object-contain hover:opacity-95"
                      />
                    </Link>
                    <div className="col-span-1 lg:col-span-3 pb-3">
                      <Link
                        href={`/cruise?destination=${destination.slug}&detail=${item.slug}`}
                      >
                        <h4 className="text-[var(--text-hover-default)] text-xl font-bold mb-1">
                          {item.name}
                        </h4>
                      </Link>
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
                          <span className="text-sm text-[#aaa]">
                            {item.title}
                          </span>
                        </div>
                      </div>
                      <p
                        className="text-start text-[#666] text-sm pt-1 line-clamp-6"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></p>
                    </div>
                    <Link
                      href={`/cruise?destination=${destination.slug}&detail=${item.slug}`}
                      className="text-[var(--text-hover-default)] text-xs absolute right-3 bottom-1"
                    >
                      More »
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
