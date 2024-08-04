"use client";

import { handleOpenLinkNewTab } from "@/share";
import {
  faHeart,
  faStar as faStarRegular,
} from "@fortawesome/free-regular-svg-icons";
import {
  faStar,
  faHeart as faHeartSolid,
  faBed,
  faBolt,
  faCheck,
  faThumbsUp,
  faBookmark,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function CruiseHomeLuxuryOrBudget({
  discount,
  images,
  isFlashSale,
  name,
  price,
  timeLaunched,
  totalRoom,
  stars,
  slug,
  isAllMeals,
  linkTripadvisor,
  reviewTripadvisor,
}: {
  name: string;
  isFlashSale: boolean;
  discount: number;
  images: string[];
  isAllMeals: boolean;
  price: number;
  timeLaunched: number;
  totalRoom: number;
  stars: number;
  slug: string;
  linkTripadvisor: string;
  reviewTripadvisor: number;
}): JSX.Element {
  const [mountLike, setMountLike] = useState(false);

  return (
    <div className="group w-full mb-5">
      <figure className="relative w-full overflow-hidden">
        <Link
          href={`/cruise/${slug}`}
          className="relative w-full block overflow-hidden pt-[52%]"
        >
          <Image
            alt="image cruise"
            src={images[0]}
            width={570}
            height={306}
            className="absolute w-full h-full top-0 bottom-0 left-0 right-0  object-cover group-hover:scale-[1.15] transition-all duration-500"
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
              "absolute bottom-2 left-0 px-2 py-1 text-white text-sm text-center font-bold text"
            )}
          >
            <h3>{name}</h3>
          </div>
        </Link>
      </figure>
      <div className="px-2 py-3 bg-white">
        <div className={classNames("flex items-center")}>
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
              width={24}
              height={16}
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
                  width={12}
                  height={12}
                  className="mr-[1px]"
                />
              ))}
              <span className="text-xs">
                - {reviewTripadvisor || 3651} Review
              </span>
            </div>
          </div>
        </div>

        <div className={classNames("flex items-center justify-between my-3")}>
          <div className="flex items-center text-[#888888] text-xs">
            <div className="flex mr-2">
              <FontAwesomeIcon
                icon={faClock}
                className="relative top-[2px] mr-1"
              />
              <span>Launched:{timeLaunched}</span>
            </div>
            <div className="flex mr-2">
              <FontAwesomeIcon
                icon={faBed}
                className="relative top-[2px] mr-1"
              />
              <span>Rooms:{totalRoom}</span>
            </div>
          </div>
        </div>

        <div className={classNames("flex justify-between items-center mb-3")}>
          <div className="flex items-end">
            <span className="text-xs text-[#999]">From</span>
            <del
              className={classNames("mx-1 text-[#FF9900] font-bold text-base", {
                hidden: !discount,
              })}
            >
              ${price}
            </del>
            <span className="ml-1 text-base text-[var(--text-hover-default)] font-bold">
              ${Math.ceil(price - price * (discount / 100 || 0))}
            </span>
            <span>/p.p</span>
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
    </div>
  );
}
