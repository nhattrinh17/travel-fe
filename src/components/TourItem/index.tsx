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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

export function TourItem({
  discount,
  images,
  isFlashSale,
  name,
  price,
  contentBrief,
  specialOffers,
  marginBottom,
  accompaniedServices,
  totalStar,
  slug,
}: {
  name: string;
  slug: string;
  totalStar: number;
  isFlashSale: boolean;
  discount: number;
  images: string[];
  price: number;
  contentBrief: string;
  specialOffers: { name: string; content: string }[];
  accompaniedServices: { id: number; name: string; slug: string }[];
  marginBottom: number;
}): JSX.Element {
  const [showContent, setShowContent] = useState(false);
  const [showAllServiceSpecial, setShowAllServiceSpecial] = useState(false);
  const [showDetailSpecial, setShowDetailSpecial] = useState<number[]>([]);
  const [mountLike, setMountLike] = useState(false);

  return (
    <div
      className="group w-full shadow-md"
      style={{ marginBottom: marginBottom }}
    >
      <Link
        href={`/tour/${slug}`}
        className="relative w-full block overflow-hidden"
      >
        <Image
          alt="image cruise"
          src={images[0]}
          width={570}
          height={306}
          className="w-full object-contain group-hover:scale-[1.15] transition-all duration-500"
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
      </Link>

      <div className="px-2 py-3">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-[var(--secondary-color)] font-bold text-xl">
              <Link href={`/tour/${slug}`}>{name}</Link>
            </h3>
            <div className="flex">
              {Array.from({ length: 5 }, (v, i) => i + 1).map((i, index) =>
                i <= totalStar ? (
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
          <div className="flex flex-1 ml-4">
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
        <div className="flex justify-between items-center mb-3">
          <div className="text-[var(--text-hover-default)] flex items-center text-sm">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="p-1 rounded-full border-[1px]"
            />
            <span className="font-bold mr-1">Excellent</span>
            <span className="hover:underline cursor-pointer"> - 34 Review</span>
          </div>
          <div className="flex items-end">
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
        <div className="flex items-center justify-between mb-3 h-[25px]">
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
          <div className="flex ml-auto">
            <FontAwesomeIcon
              icon={faCheck}
              className="text-[var(--text-hover-default)] text-base mr-1"
            />
            <span className="text-[#888888] text-xs font-bold">
              Best Price Guarantee
            </span>
          </div>
        </div>

        <div className={classNames("w-full")}>
          <div className="h-1 w-5 bg-[#BBBBBB] mt-4 rounded-md"></div>
          <div
            className={classNames({
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
            "h-[52px] overflow-hidden": !showAllServiceSpecial,
            "h-auto": showAllServiceSpecial,
          })}
        >
          {specialOffers.map((item, index) => (
            <li key={index}>
              <div className="flex justify-between pb-2 border-b-[2px] border-dotted">
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
                      "rotate-180": showDetailSpecial.includes(index),
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
        <span
          onClick={() => setShowAllServiceSpecial((pre) => !pre)}
          className={classNames(
            "cursor-pointer block text-sm w-full text-[#25ab4b] pt-3 mb-4",
            {
              "shadow-[0px_-15px_15px_#fff]": !showAllServiceSpecial,
            }
          )}
        >
          ...{showAllServiceSpecial ? "Less" : "More"}
        </span>
      </div>
    </div>
  );
}
