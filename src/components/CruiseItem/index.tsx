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
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

export function CruiseItem({
  discount,
  images,
  isFlashSale,
  isAllMeals,
  name,
  accompaniedServices,
  price,
  styleCruise,
  totalRoom,
  contentBrief,
  specialOffers,
  marginBottom,
  linkTripadvisor,
  reviewTripadvisor,
  slug,
  stars,
}: {
  name: string;
  slug: string;
  isFlashSale: boolean;
  discount: number;
  images: string[];
  isAllMeals: boolean;
  accompaniedServices: {
    name: string;
    slug: string;
  }[];
  price: number;
  stars: number;
  styleCruise: string;
  totalRoom: number;
  contentBrief: string;
  specialOffers: { name: string; content: string }[];
  linkTripadvisor: string;
  reviewTripadvisor: number;
  marginBottom: number;
}): JSX.Element {
  const [showContent, setShowContent] = useState(false);
  const [showAllSpecialOffers, setShowAllSpecialOffers] = useState(false);
  const [showDetailSpecial, setShowDetailSpecial] = useState<number[]>([]);
  const [mountLike, setMountLike] = useState(false);

  return (
    <div
      className={classNames("group w-full shadow-md flex flex-col")}
      style={{ marginBottom: marginBottom }}
    >
      <figure className="relative w-full overflow-hidden">
        <Link
          href={`/cruise/${slug}`}
          className="relative w-full block overflow-hidden pt-[54%]"
        >
          <Image
            alt="image cruise"
            src={images[0]}
            width={570}
            height={306}
            className="absolute w-full h-full top-0 bottom-0 left-0 right-0 object-cover group-hover:scale-[1.15] transition-all duration-500"
          />
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
              "absolute bottom-2 left-0 px-2 py-1 text-white text-xs text-center bg-[#390]",
              {
                hidden: !isAllMeals,
              }
            )}
          >
            <p>All Meals Included</p>
          </div>
        </Link>
      </figure>

      <div className="px-2 py-3 bg-white flex-1">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-[var(--secondary-color)] font-bold text-xl">
              <Link href={`/cruise/${slug}`}>{name}</Link>
            </h3>
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
          </div>

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
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
          <div
            className={classNames(
              "text-[var(--text-hover-default)] flex items-center text-sm mb-3",
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
            <span className="hover:underline cursor-pointer">- 34 Review</span>
          </div>
          <div
            className={classNames(
              "text-[var(--text-hover-default)] flex items-center text-sm mb-3",
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
          <div className="flex items-end mb-3">
            <span className="text-sm text-[#999]">From</span>
            <del
              className={classNames("mx-1 text-[#FF9900] font-bold text-2xl", {
                hidden: !discount,
              })}
            >
              ${price}
            </del>
            <span className="ml-1 text-2xl text-[var(--text-hover-default)] font-bold">
              ${Math.ceil(price - price * (discount / 100 || 0))}
            </span>
            <span>/p.p</span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-[#888888] text-xs">
            <div className="flex mr-2">
              <FontAwesomeIcon
                icon={faBookmark}
                className="relative top-[2px] mr-1"
              />
              <span>Style:{styleCruise}</span>
            </div>
            <div className="flex mr-2">
              <FontAwesomeIcon
                icon={faBed}
                className="relative top-[2px] mr-1"
              />
              <span>Rooms:{totalRoom}</span>
            </div>
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
        <div
          className={classNames("flex justify-end items-center", {
            hidden: !isFlashSale,
          })}
        >
          <Image
            alt="flash sale"
            src={"/home/top10Cruise/gif-flash.gif"}
            width={20}
            height={25}
          />
          <span className="uppercase  text-[#FF9900] font-bold text-xs mx-1">
            Flash Sale Now
          </span>
          <span className="inline-block text-center w-9 h-4 bg-[url(/home/top10Cruise/discount.svg)] bg-contain text-[11px] font-bold text-white bg-no-repeat">
            {discount}%
          </span>
        </div>
        <div
          className={classNames("w-full", {
            "pt-[25px]": !isFlashSale,
          })}
        >
          <div className="h-1 w-5 bg-[#BBBBBB] mt-4 rounded-md"></div>
          <div
            className={classNames("text-black", {
              "h-[36px] overflow-hidden": !showContent,
              "h-auto": showContent,
            })}
            dangerouslySetInnerHTML={{ __html: contentBrief }}
          ></div>
          <span
            onClick={() => setShowContent((pre) => !pre)}
            className={classNames(
              "cursor-pointer block text-sm w-full text-[#AAAA] pt-3 mb-4",
              {
                "shadow-[0px_-15px_15px_#fff]": !showContent,
              }
            )}
          >
            ...{showContent ? "Less" : "More"}
          </span>
        </div>
        <ul
          className={classNames({
            "h-[52px] overflow-hidden": !showAllSpecialOffers,
            "h-auto": showAllSpecialOffers,
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
                  "border-[1px] bg-[#F9F9F9] mb-3 p-[10px] text-black",
                  {
                    hidden: !showDetailSpecial.includes(index),
                  }
                )}
                dangerouslySetInnerHTML={{ __html: item.content }}
              ></div>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowAllSpecialOffers((pre) => !pre)}
          className={classNames(
            "cursor-pointer block text-sm w-full text-[#25ab4b] pt-3 mb-4",
            {
              "shadow-[0px_-15px_15px_#fff]": !showAllSpecialOffers,
            }
          )}
        >
          ...{showAllSpecialOffers ? "Less" : "More"}
        </span>
      </div>
    </div>
  );
}
