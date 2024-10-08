"use client";

import { mapServiceIcons } from "@/constants";
import {
  faHeart,
  faStar as faStarRegular,
} from "@fortawesome/free-regular-svg-icons";
import {
  faStar,
  faHeart as faHeartSolid,
  faAngleUp,
  faBed,
  faBolt,
  faCheck,
  faThumbsUp,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

export function TourItemGrid({
  discount,
  images,
  isFlashSale,
  name,
  price,
  timeLaunched,
  totalRoms,
  specialOffers,
  travelerLoves,
  accompaniedServices,
  slug,
  stars,
}: {
  name: string;
  slug: string;
  isFlashSale: boolean;
  discount: number;
  images: string[];
  price: number;
  stars: number;
  timeLaunched: number;
  totalRoms: number;
  specialOffers: { name: string; content: string }[];
  travelerLoves: string[];
  accompaniedServices: { id: number; name: string; slug: string }[];
}): JSX.Element {
  const [showTravelerLoves, setShowTravelerLoves] = useState(false);
  const [showDetailSpecial, setShowDetailSpecial] = useState<number[]>([]);
  const [mountLike, setMountLike] = useState(false);

  return (
    <div className="group bg-white w-full shadow-md mb-10 grid grid-cols-12 gap-5 p-3 lg:p-5 rounded-md">
      <Link
        href={`/tour/${slug}`}
        className="relative w-full col-span-12 lg:col-span-5 h-fit block overflow-hidden mr-3"
      >
        <div>
          <div className="overflow-hidden ">
            <Image
              alt="image cruise"
              src={images[0]}
              width={570}
              height={306}
              className="w-full object-contain hover:scale-[1.15] transition-all duration-500"
            />
          </div>
          <div className="flex">
            <div className="basis-1/2 overflow-hidden">
              <Image
                alt="image cruise"
                src={images[1]}
                width={275}
                height={250}
                className="w-full h-full object-cover hover:scale-[1.15] transition-all duration-500"
              />
            </div>
            <div className="basis-1/2 overflow-hidden">
              <Image
                alt="image cruise"
                src={images[2]}
                width={275}
                height={250}
                className="w-full h-full object-cover hover:scale-[1.15] transition-all duration-500"
              />
            </div>
          </div>
        </div>
        <div
          className={classNames(
            "absolute top-2 left-2 flex text-xs font-bold text-white bg-[#ff5722] py-1 px-2 rounded-sm",
            {
              hidden: !isFlashSale && !discount,
            }
          )}
        >
          <div
            className={classNames("flex", {
              hidden: !isFlashSale,
            })}
          >
            <FontAwesomeIcon icon={faBolt} />
            <span className="">Flash Sale</span>
          </div>
          <span>-{discount}%</span>
        </div>

        <div
          onMouseEnter={() => setMountLike(true)}
          onMouseLeave={() => setMountLike(false)}
          className="group/like absolute top-2 right-2 text-white"
        >
          <FontAwesomeIcon
            icon={mountLike ? faHeartSolid : faHeart}
            className="text-2xl"
          />
        </div>
      </Link>

      <div className="col-span-12 lg:col-span-7">
        <div className="pb-2 border-b-[1px] border-[#ddd] border-dotted">
          <h2 className="text-[var(--secondary-color)] font-bold text-xl mb-2 ">
            <Link href={`/tour/${slug}`}>{name}</Link>
          </h2>
          <div className="flex items-center mb-2">
            <div className="flex">
              {/* {Array.from({ length: 6 }, (v, i) => i + 1).map((i, index) =>
                i <= stars ? (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className="mr-1 text-[orange] text-xs"
                  />
                ) : (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStarRegular}
                    className="mr-1 text-[var(--text-color-default)] text-xs"
                  />
                )
              )} */}
            </div>
            <div className="text-[var(--text-hover-default)] flex items-center text-sm">
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="p-1 rounded-full border-[1px]"
              />
              <span className="font-bold mr-1">Excellent</span>
              <span className="hover:underline cursor-pointer">
                - 34 Review
              </span>
            </div>
          </div>
        </div>
        <div className="py-3 w-full border-b-[1px] border-b-[#ddd] border-dotted flex items-center">
          <Image
            alt="image cruise"
            src={"/share/flash_cat.png"}
            width={87}
            height={47}
            className="object-contain"
          />
          <span className="block h-full relative text-center w-9 bg-[url(/home/top10Cruise/discount.svg)] bg-contain text-[11px] font-bold text-white bg-no-repeat">
            {discount}%
          </span>
          <span className="ml-4 bg-[#ffa90c] w-[3px] h-[50px]"></span>
        </div>
        <div className="py-3">
          <div className="flex items-center mb-2 text-[#888888] text-xs">
            <div className="flex mr-2">
              <FontAwesomeIcon
                icon={faClock}
                color="#bbb"
                className="relative top-1 mr-1"
              />
              <span className="text-[var(--text-hover-default)]">
                Launched:{timeLaunched}
              </span>
            </div>
            <div className="flex mr-2">
              <FontAwesomeIcon
                icon={faBed}
                className="relative top-1 mr-1"
                color="#bbb"
              />
              <span className="text-[var(--text-hover-default)]">
                Rooms:{totalRoms}
              </span>
            </div>
          </div>
          <div>
            <ul
              className={classNames("text-[var(--text-color-default)]", {
                "h-[140px] overflow-hidden": !showTravelerLoves,
                "h-auto": showTravelerLoves,
              })}
            >
              {travelerLoves.map((item, index) => (
                <li key={index} className="flex items-center">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-sm text-[var(--text-hover-default)] mr-1 py-2"
                  />
                  <p className="text-[#666] text-[13px] font-semibold">
                    {item}
                  </p>
                </li>
              ))}
            </ul>

            <span
              onClick={() => setShowTravelerLoves((pre) => !pre)}
              className={classNames(
                "cursor-pointer block text-sm w-full text-[var(--text-hover-default)] pt-3 mb-4",
                {
                  "shadow-[0px_-15px_15px_#fff]": !showTravelerLoves,
                }
              )}
            >
              ...{showTravelerLoves ? "Less" : "More"}
            </span>
            <div className="h-[2px] w-6 bg-[#BBBBBB] mt-4 rounded-md"></div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex">
            {accompaniedServices.map((service, index) => (
              <div key={index}>
                <FontAwesomeIcon
                  icon={mapServiceIcons[service.slug]}
                  data-tooltip-id={`tooltip-service-${service.slug}`}
                  data-tooltip-content={service.name}
                  data-tooltip-place="top"
                  className="text-[#333] text-xs p-2 rounded-full border-[1px] border-[#ddd] mx-1"
                />
                <Tooltip id={`tooltip-service-${service.slug}`} />
              </div>
            ))}
          </div>
          <div>
            <div className="flex items-end">
              <span className="text-sm text-[#999] block">Only From</span>
              <del
                className={classNames(
                  "mx-1 text-[#FF9900] font-bold text-2xl",
                  {
                    hidden: !discount,
                  }
                )}
              >
                ${price}
              </del>
              <span className="ml-1 text-2xl text-[var(--text-hover-default)] font-bold">
                ${Math.ceil(price - price * (discount / 100 || 0))}
              </span>
            </div>
            <div className="flex">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-[var(--text-hover-default)] text-base mr-1"
              />
              <span className="text-[#888888] text-xs font-bold">
                Best Price Guarantee
              </span>
            </div>
          </div>
        </div>

        <ul
          className={classNames({
            // "h-[52px] overflow-hidden": !showAllspecialOffers,
            // "h-auto": showAllspecialOffers,
          })}
        >
          {specialOffers.map((item, index) => (
            <li key={index}>
              <div
                className={classNames(
                  "flex justify-between pb-2 border-dotted cursor-pointer",
                  {
                    "border-b-[2px]": !showDetailSpecial.includes(index),
                  }
                )}
              >
                <label
                  onClick={() =>
                    setShowDetailSpecial((pre) =>
                      pre.includes(index)
                        ? pre.filter((i) => i != index)
                        : [...pre, index]
                    )
                  }
                  className="flex text-[red] font-bold text-sm"
                >
                  <span className="bg-[url(/home/top10Cruise/iconprice.svg)] bg-contain w-4 h-4 block relative top-1 mr-2"></span>
                  {index + 1}.{item.name}
                </label>
                <FontAwesomeIcon
                  icon={faAngleUp}
                  className={classNames(
                    "mr-1 text-[var(--text-hover-default)]",
                    {
                      "rotate-180": !showDetailSpecial.includes(index),
                    }
                  )}
                />
              </div>
              <div
                className={classNames(
                  "border-[1px] bg-[#F9F9F9] mb-3 p-[10px] w-full h-full overflow-hidden",
                  {
                    hidden: !showDetailSpecial.includes(index),
                  }
                )}
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
