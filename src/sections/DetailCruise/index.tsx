"use client";
import { mapServiceIcons } from "@/constants";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleUp,
  faStar,
  faBed,
  faBolt,
  faBookmark,
  faClock,
  faThumbsUp,
  faHeart as faHeartSolid,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import { Tooltip } from "react-tooltip";

const cruiseDetail = {
  name: "Ambassador Signature Cruise",
  timeLaunched: 2023,
  travelerLove: [
    "Style: Modern Luxurious",
    " Feature 39 opulent cabins, each with a private balcony and en-suite bathroom",
    " Ambassador New Menu Launch: Michelin-style À La Carte Dinner and Upgraded Vietnamese Seafood Buffet Lunch",
    " High-class service with highlights of premium Asian - European cuisine",
    " Diverse entertainment options on board: live music, spa, squid fishing, …",
    " Visit unique and famous scenic spots on the bay: Viet Hai Fishing Village, Dark and Bright Cave",
    " 5-star overnight cruise in Lan Ha Bay  ",
    " 5-star overnight cruise in Lan Ha Bay  ",
    " 5-star overnight cruise in Lan Ha Bay  ",
  ],
  totalStar: 5,
  isFlashSale: true,
  discount: 22,
  images: [
    "https://d1k2oi80tv211b.cloudfront.net/uploads/photo/ambassador-signature-cruise-Ambassador%20Signature%20Cruise-1717584285.jpg",
    "https://d1k2oi80tv211b.cloudfront.net/uploads/photo/ambassador-signature-cruise-Ambassador%20Signature%20Cruise-1717584285.jpg",
    "https://d1k2oi80tv211b.cloudfront.net/uploads/photo/ambassador-signature-cruise-Ambassador%20Signature%20Cruise-1717584285.jpg",
    "https://d1k2oi80tv211b.cloudfront.net/uploads/photo/ambassador-signature-cruise-Ambassador%20Signature%20Cruise-1717584285.jpg",
    "https://d1k2oi80tv211b.cloudfront.net/uploads/photo/ambassador-signature-cruise-Ambassador%20Signature%20Cruise-1717584285.jpg",
    "https://d1k2oi80tv211b.cloudfront.net/uploads/photo/ambassador-signature-cruise-Ambassador%20Signature%20Cruise-1717584285.jpg",
  ],
  isAllMeals: true,
  services: [
    {
      name: "All Meals Include",
      slug: "allMeals",
    },
  ],
  price: 300,
  styleCruise: "Modern",
  totalRoms: 100,
  content: `<p class="para-cruise" style="overflow: visible; height: auto;">Step on board the elegant and opulent Ambassador Signature Cruise for an unforgettable journey as you discover Lan Ha Bay's magnificence. With 39 trendy and modern cabins and a capacity for 120 guests, this 5-star floating hotel has everything you need for a feel-at-home journey in the middle of the sea: air conditioning, private balconies, en-suite bathrooms, and bathtubs. Along with first-rate accommodation, Ambassador Signature also offers a premium Asian – European cuisine experience as well as a complete complement of modern facilities, including a luxury spa on board, a piano lounge, and a restaurant &amp; bar.</p>`,
  serviceSpecial: [
    {
      name: "COMPLIMENTARY COOKING DEMONSTRATION",
      content: `<div class="content" style="width: 100%;">The best way to learn about a culture is through its culture. Join us for a cooking class onboard with our chef. You will learn how to prepare the delectable traditional Vietnamese dishes and explore more Vietnamese culinary culture.<br><br><b>Conditions:</b><br>- Applied for all booking.</div>`,
    },
    {
      name: "COMPLIMENTARY COOKING DEMONSTRATION",
      content: `<div class="content" style="width: 100%;">The best way to learn about a culture is through its culture. Join us for a cooking class onboard with our chef. You will learn how to prepare the delectable traditional Vietnamese dishes and explore more Vietnamese culinary culture.<br><br><b>Conditions:</b><br>- Applied for all booking.</div>`,
    },
    {
      name: "COMPLIMENTARY COOKING DEMONSTRATION",
      content: `<div class="content" style="width: 100%;">The best way to learn about a culture is through its culture. Join us for a cooking class onboard with our chef. You will learn how to prepare the delectable traditional Vietnamese dishes and explore more Vietnamese culinary culture.<br><br><b>Conditions:</b><br>- Applied for all booking.</div>`,
    },
    {
      name: "COMPLIMENTARY COOKING DEMONSTRATION",
      content: `<div class="content" style="width: 100%;">The best way to learn about a culture is through its culture. Join us for a cooking class onboard with our chef. You will learn how to prepare the delectable traditional Vietnamese dishes and explore more Vietnamese culinary culture.<br><br><b>Conditions:</b><br>- Applied for all booking.</div>`,
    },
  ],
};

export function DetailCruise({}: { slug: string }): JSX.Element {
  const [showSpecialOffer, setShowSpecialOffer] = useState(false);
  const [showDetailSpecial, setShowDetailSpecial] = useState<number[]>([]);
  const [mountLike, setMountLike] = useState(false);
  const [showTravelerLove, setShowTravelerLove] = useState(false);

  return (
    <div className="bg-[var(--bg-container-color)]">
      <div className="container">
        <section className="">
          <div className="py-3 border-b-[1px] border-dotted">
            <Image
              alt=""
              src={"/detailCruise/hat_save_dt_2.jpg"}
              width={1170}
              height={162}
              className="w-full object-contain"
            />
            <div className="flex justify-between">
              <div>
                <h1 className="text-[var(--text-hover-default)] font-bold">
                  {cruiseDetail.name}
                </h1>
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }, (v, i) => i + 1).map(
                    (i, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className="mr-1 text-[orange] text-xs"
                      />
                    )
                  )}
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
              <div className="flex items-center">
                <Image
                  alt="best price"
                  src={"/detailCruise/best-price-3.png"}
                  width={120}
                  height={65}
                />
                <div className="">
                  <span>Only From</span>
                  <div className="flex">
                    <del className="text-xl text-[var(--text-hover-default)]">
                      {cruiseDetail.price}
                    </del>
                    <span className="text-2xl text-[#FF9900] font-bold">
                      {Math.floor(
                        cruiseDetail.price -
                          (cruiseDetail.price * cruiseDetail.discount) / 100
                      )}
                    </span>
                  </div>
                </div>
                <span
                  onClick={() => setShowSpecialOffer((pre) => !pre)}
                  className="block bg-[url(/detailCruise/iconspecialoffer.svg)] h-[35px] bg-contain text-[red] hover:text[var(--text-hover-default)]"
                >
                  Special Offers
                </span>
              </div>
            </div>

            <ul
              className={classNames({
                hidden: !showSpecialOffer,
                block: showSpecialOffer,
              })}
            >
              {cruiseDetail.serviceSpecial.map((item, index) => (
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

          <div className="flex">
            <div className="flex items-center text-[#888888] text-xs">
              <div className="flex mr-2">
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="relative top-1 mr-1"
                />
                <span>Style:{cruiseDetail.styleCruise}</span>
              </div>
              <div className="flex mr-2">
                <FontAwesomeIcon
                  icon={faClock}
                  className="relative top-1 mr-1"
                />
                <span>Launched:{cruiseDetail.timeLaunched}</span>
              </div>
              <div className="flex mr-2">
                <FontAwesomeIcon icon={faBed} className="relative top-1 mr-1" />
                <span>Rooms:{cruiseDetail.totalRoms}</span>
              </div>
            </div>
            <div className="flex">
              {cruiseDetail.services.map((service, index) => (
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
        </section>
        {/* Image */}
        <section>
          <div className="grid grid-cols-5 gap-2 max-h-[376px] overflow-hidden">
            <div className="col-span-3 overflow-hidden relative h-full">
              <Image
                alt="aaaa"
                src={cruiseDetail.images[0]}
                width={820}
                height={440}
                className="object-contain hover:scale-[1.2] transition-all duration-500"
              />
              <div
                className={classNames(
                  "absolute top-2 left-2 flex text-xs font-bold text-white bg-[#ff5722] py-1 px-2 rounded-sm",
                  {
                    hidden: !cruiseDetail.isFlashSale && !cruiseDetail.discount,
                  }
                )}
              >
                <div
                  className={classNames("flex", {
                    hidden: !cruiseDetail.isFlashSale,
                  })}
                >
                  <FontAwesomeIcon icon={faBolt} />
                  <span className="">Flash Sale</span>
                </div>
                <span>-{cruiseDetail.discount}%</span>
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
                    hidden: !cruiseDetail.isAllMeals,
                  }
                )}
              >
                <p>All Meals Included</p>
              </div>
            </div>
            <div className="col-span-2 flex flex-col max-h-full">
              <div className="col-span-1 overflow-hidden relative basis-[39%] pb-1 ">
                <Image
                  alt="aaaa"
                  src={cruiseDetail.images[1]}
                  width={820}
                  height={440}
                  className="object-cover h-full hover:scale-[1.2] transition-all duration-500"
                />
              </div>
              <div className="col-span-1 overflow-hidden basis-[39%] pt-1">
                <Image
                  alt="aaaa"
                  src={cruiseDetail.images[2]}
                  width={820}
                  height={440}
                  className="object-cover h-full hover:scale-[1.2] transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Intro */}
        <section className="border-b-[1px] border-dotted grid grid-cols-4 gap-5">
          <div className="col-span-3">
            <div className="border-b-[1px] border-dotted">
              <FontAwesomeIcon icon={faHeart} />
              <h2>What travelers love about {cruiseDetail.name}</h2>
            </div>

            <div>
              <ul
                className={classNames({
                  "h-[200px] overflow-hidden": !showTravelerLove,
                  "h-auto": showTravelerLove,
                })}
              >
                {cruiseDetail.travelerLove.map((item, index) => (
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
                onClick={() => setShowTravelerLove((pre) => !pre)}
                className={classNames(
                  "cursor-pointer text-sm w-full flex items-center text-[var(--text-hover-default)] pt-3 mb-4",
                  {
                    "shadow-[0px_-15px_15px_#fff]": !showTravelerLove,
                  }
                )}
              >
                {showTravelerLove ? "Show less" : "Show More"}
                <FontAwesomeIcon icon={faSortDown} className="text-xs" />
              </span>
              <div className="h-[2px] w-6 bg-[#BBBBBB] mt-4 rounded-md"></div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <div className="w-28 h-28">
              <Image
                alt=""
                src={"/cruise/detail/cus-70921-414104168250-250.jpg"}
                width={90}
                height={90}
                className="rounded-full border-[1px] border-[#dfdfdf]"
              />
              <p className="text-center">
                <i>“</i>
                Rosie from Inside travel Vietnam was great organising our Renea
                Cruise to Bai Tu Long Bay in Vietnam. Everything was excellent,
                highly recommend.
                <span>
                  Bai Tu Long Bay Cruise organised by Rosie from Inside Travel
                  Vietnam -
                </span>
                Australia
              </p>
              <span>Read more...</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
