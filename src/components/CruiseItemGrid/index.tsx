"use client";

import { mapServiceIcons } from "@/constants";
import { handleOpenLinkNewTab } from "@/share";
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

export function CruiseItemGrid({
  discount,
  images,
  isFlashSale,
  isAllMeals,
  name,
  accompaniedServices,
  price,
  timeLaunched,
  totalRoom,
  specialOffers,
  travelerLoves,
  stars,
  slug,
  linkTripadvisor,
  reviewTripadvisor,
  topCruise,
}: {
  name: string;
  slug: string;
  isFlashSale: boolean;
  stars: number;
  discount: number;
  images: string[];
  isAllMeals: boolean;
  accompaniedServices: {
    name: string;
    slug: string;
  }[];
  price: number;
  timeLaunched: number;
  totalRoom: number;
  specialOffers: { name: string; content: string }[];
  travelerLoves: string[];
  linkTripadvisor: string;
  reviewTripadvisor: number;
  topCruise?: number;
}): JSX.Element {
  const [showTravelerLoves, setShowTravelerLoves] = useState(false);
  const [showDetailSpecial, setShowDetailSpecial] = useState<number[]>([]);
  const [mountLike, setMountLike] = useState(false);

  return (
    <div className="group bg-white w-full shadow-md mb-10 grid grid-cols-12 gap-5 p-3 lg:p-5 rounded-md">
      <Link
        href={`/cruise/${slug}`}
        className="relative col-span-12 lg:col-span-5 max-w-full h-fit block overflow-hidden"
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
                className="w-full object-cover h-full hover:scale-[1.15] transition-all duration-500"
              />
            </div>
            <div className="basis-1/2 overflow-hidden">
              <Image
                alt="image cruise"
                src={images[2]}
                width={275}
                height={250}
                className="w-full object-cover h-full hover:scale-[1.15] transition-all duration-500"
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

        <div
          className={classNames(
            "absolute bottom-2 right-0 px-2 py-1 text-white text-xs text-center bg-[#390]",
            {
              hidden: !isAllMeals,
            }
          )}
        >
          <p>All Meals Included</p>
        </div>
      </Link>

      <div className="col-span-12 lg:col-span-7 relative">
        <div
          className={classNames(
            "absolute top-0 right-0 bg-[url(/home/icon-best.svg)] bg-no-repeat w-10 h-14 bg-contain flex justify-center",
            {
              hidden: !topCruise,
            }
          )}
        >
          <span className="font-bold text-[var(--text-hover-default)] mt-2">
            {topCruise}
          </span>
        </div>
        <div className="flex flex-col justify-between items-start pb-2 border-b-[1px] border-[#ddd] border-dotted">
          <h2 className="text-[var(--secondary-color)] font-bold text-xl mb-2">
            <Link href={`/cruise/${slug}`}>{name}</Link>
          </h2>
          <div className="flex items-center mb-2">
            <div className="flex">
              {Array.from({ length: 6 }, (v, i) => i + 1).map((i, index) =>
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
              )}
            </div>
            <div
              className={classNames(
                "text-[var(--text-hover-default)] flex items-center text-sm",
                {
                  hidden: linkTripadvisor,
                }
              )}
            >
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="p-1 rounded-full border-[1px]"
              />
              <span className="font-bold mr-1">Excellent</span>
              <span className="hover:underline cursor-pointer">
                - 34 Review
              </span>
            </div>
            <div
              className={classNames(
                "text-[var(--text-hover-default)] flex items-center text-sm",
                {
                  hidden: !linkTripadvisor,
                }
              )}
            >
              <Image
                alt="tripadvisor"
                src={"/share/tripadvisor-logo.svg"}
                width={29}
                height={18}
              />
              <span className="font-bold mr-1">Excellent</span>

              <div
                onClick={() => handleOpenLinkNewTab(linkTripadvisor)}
                className="flex cursor-pointer hover:underline"
              >
                {Array.from({ length: 5 }, (v, i) => i + 1).map((i, index) => (
                  <Image
                    key={index}
                    alt="cicel"
                    src={"/share/icontripadvisor2.svg"}
                    width={15}
                    height={15}
                    className="mr-[1px]"
                  />
                ))}
                <span className=""> - {reviewTripadvisor || 3651} Review</span>
              </div>
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
                className="relative top-[2px] mr-1"
              />
              <span className="text-[var(--text-hover-default)]">
                Launched:{timeLaunched}
              </span>
            </div>
            <div className="flex mr-2">
              <FontAwesomeIcon
                icon={faBed}
                className="relative top-[2px] mr-1"
                color="#bbb"
              />
              <span className="text-[var(--text-hover-default)]">
                Rooms:{totalRoom}
              </span>
            </div>
          </div>
          <div>
            <ul
              className={classNames({
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
        <div className="flex items-center justify-between mb-4">
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
            <div className="flex items-end pb-1">
              <span className="text-sm text-[#999]">Only From</span>
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
            // "h-[52px] overflow-hidden": !showAllServiceSpecial,
            // "h-auto": showAllServiceSpecial,
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
                  "border-[1px] bg-[#F9F9F9] mb-3 p-[10px]",
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
