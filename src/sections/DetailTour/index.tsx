"use client";

import {
  faCalendarDays,
  faEnvelope,
  faStar as faStarRegular,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faAngleUp,
  faChevronLeft,
  faChevronRight,
  faPhone,
  faStar,
  faTag,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { top10DailyTour } from "@/mocks";
import { TourHomeTop10Item } from "@/components/home/TourHomeTopItem";
import { useAppSelector } from "@/lib";
import { getTourBySlug } from "@/utils/api";
import { redirect } from "next/navigation";
import { PopupShowAllImages } from "@/components/ShowAllImages";
import { Tooltip } from "react-tooltip";
import { mapServiceIcons } from "@/constants";
import { useHomeTour } from "@/utils/handleTour";
import { LoadingModal } from "@/components/Loading";

const cx = classNames.bind(styles);

export function DetailTourSection({ slug }: { slug: string }): JSX.Element {
  const [tabActive, setTabActive] = useState<number>(0);
  const [showDetailSpecial, setShowDetailSpecial] = useState<number[]>([]);
  const [showAllImages, setShowAllImages] = useState(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [quantity, setQuantity] = useState<number>();
  const sectionMayAlsoRef = useRef<HTMLElement>(null);

  const [tourDetails, setTourDetails] = useState<any>(null);

  const dataTourSuggest = useHomeTour(tourDetails?.packetTourId, "id", "DESC");

  useEffect(() => {
    async function fetchData() {
      const res = await getTourBySlug(slug);
      if (res?.data) {
        const data = res.data;
        data.images = data.images.split("*_*");
        data.itineraries = data.itineraries.sort(
          (a: any, b: any) => a.day - b.day
        );
        data.totalStar = 4;
        setTourDetails(data);
      } else {
        redirect("/");
      }
    }

    fetchData();
  }, []);

  return (
    <div className="bg-[var(--bg-container-color)]">
      {!!tourDetails ? (
        <div>
          {/* Intro */}
          <section>
            <div
              className="w-full h-[600px] bg-cover flex items-center justify-center"
              style={{
                backgroundImage: `url(${
                  tourDetails?.images && tourDetails?.images[0]
                })`,
              }}
            >
              <div className="text-white">
                <h1
                  className="text-lg lg:text-3xl font-bold text-center"
                  style={{ textShadow: "#0000008f 2px 2px" }}
                >
                  {tourDetails.name}
                </h1>
                <div className="flex justify-center items-center mt-3">
                  {Array.from({ length: 5 }, (v, i) => i + 1)?.map((i, index) =>
                    i <= tourDetails.totalStar ? (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className="mr-1 text-[orange] text-sm"
                      />
                    ) : (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStarRegular}
                        className="mr-1 text-[var(--text-color-default)] text-sm"
                      />
                    )
                  )}
                  <span
                    className=""
                    style={{ textShadow: "#0000008f 2px 2px" }}
                  >
                    (54 review)
                  </span>
                </div>
              </div>
            </div>
          </section>

          <div className="container mt-5 lg:-mt-20 pb-20 ">
            <div className="grid grid-cols-4 gap-10">
              <div className="col-span-4 lg:col-span-3">
                <div className="hidden lg:flex border-b-[3px] border-[var(--primary-color)]">
                  <div
                    onClick={() => setTabActive(0)}
                    className={cx("cursor-pointer py-3 px-7 uppercase mr-2", {
                      "bg-white text-black": tabActive !== 0,
                      "bg-[var(--primary-color)] text-white": tabActive == 0,
                    })}
                  >
                    <h3 className="font-bold">Detail</h3>
                  </div>
                  <div
                    onClick={() => setTabActive(1)}
                    className={cx("cursor-pointer py-3 px-7 uppercase mr-2", {
                      "bg-white text-black": tabActive !== 1,
                      "bg-[var(--primary-color)] text-white": tabActive == 1,
                    })}
                  >
                    <h3 className="font-bold">Itinerary</h3>
                  </div>
                  <div
                    onClick={() => setTabActive(2)}
                    className={cx("cursor-pointer py-3 px-7 uppercase mr-2", {
                      "bg-white text-black": tabActive !== 2,
                      "bg-[var(--primary-color)] text-white": tabActive == 2,
                    })}
                  >
                    <h3 className="font-bold">Deals</h3>
                  </div>
                  <div
                    onClick={() => setTabActive(3)}
                    className={cx("cursor-pointer py-3 px-7 uppercase mr-2", {
                      "bg-white text-black": tabActive !== 3,
                      "bg-[var(--primary-color)] text-white": tabActive == 3,
                    })}
                  >
                    <h3 className="font-bold">Photo</h3>
                  </div>
                </div>
                <div className="flex flex-wrap lg:overflow-hidden">
                  {/* Detail */}
                  <div className="basis-full flex-1 shadow-md mb-3 lg:mb-0">
                    <div
                      onClick={() => setTabActive(0)}
                      className={cx(
                        "cursor-pointer py-3 px-7 uppercase block lg:hidden",
                        {
                          "bg-white text-black": tabActive !== 0,
                          "bg-[var(--primary-color)] text-white":
                            tabActive == 0,
                        }
                      )}
                    >
                      <h3 className="font-bold">Detail</h3>
                    </div>
                    <div
                      className={cx(" bg-white py-5 px-10", {
                        "block animate-fadeIn": tabActive == 0,
                        hidden: tabActive != 0,
                      })}
                    >
                      <div
                        dangerouslySetInnerHTML={{ __html: tourDetails.detail }}
                      ></div>
                    </div>
                  </div>
                  {/* Itinerany */}
                  <div className="basis-full flex-1 shadow-md mb-3 lg:mb-0">
                    <div
                      onClick={() => setTabActive(1)}
                      className={cx(
                        "cursor-pointer py-3 px-7 uppercase block lg:hidden",
                        {
                          "bg-white text-black": tabActive !== 1,
                          "bg-[var(--primary-color)] text-white":
                            tabActive == 1,
                        }
                      )}
                    >
                      <h3 className="font-bold">Itinerary</h3>
                    </div>
                    <div
                      className={cx(" bg-white py-5 px-10", {
                        "block animate-fadeIn": tabActive == 1,
                        hidden: tabActive != 1,
                      })}
                    >
                      {tourDetails.itineraries?.map(
                        (itinerary: any, index: number) => (
                          <div key={index} className={cx("flex ")}>
                            <div
                              className={cx(
                                "mr-5 relative",
                                "wrapper__box--day"
                              )}
                            >
                              <div className="bg-[var(--primary-color)] rounded-full w-14 h-14 relative z-[2]">
                                <div
                                  className={cx(
                                    "w-full h-full relative text-white font-semibold text-xl flex justify-center items-center",
                                    "box--day"
                                  )}
                                >
                                  {index + 1}
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 ">
                              <h5 className="text-xl font-bold my-3">
                                Day {itinerary.day}: {itinerary.name}
                              </h5>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: itinerary.content,
                                }}
                              ></div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  {/* Deals */}
                  <div className="basis-full flex-1 shadow-md mb-3 lg:mb-0">
                    <div
                      onClick={() => setTabActive(2)}
                      className={cx(
                        "cursor-pointer py-3 px-7 uppercase block lg:hidden",
                        {
                          "bg-white text-black": tabActive !== 2,
                          "bg-[var(--primary-color)] text-white":
                            tabActive == 2,
                        }
                      )}
                    >
                      <h3 className="font-bold">Deals</h3>
                    </div>
                    <div
                      className={cx(" bg-white py-5 px-10", {
                        "block animate-fadeIn": tabActive == 2,
                        hidden: tabActive != 2,
                      })}
                    >
                      <div className="flex items-center py-5 justify-end">
                        <Image
                          alt="flash sale"
                          src={"/share/flash_text.png"}
                          width={90}
                          height={65}
                          className="mr-2 lg:mr-4"
                        />
                        <Image
                          alt="best price"
                          src={"/share/best-price-3.png"}
                          width={120}
                          height={65}
                          className="mr-4 hidden lg:block"
                        />
                        <div className="mr-2 lg:mr-4">
                          <span className="ml-auto text-xs">Only From</span>
                          <div className="flex items-end">
                            <del className="text-base font-bold text-[var(--text-hover-default)] mr-2">
                              {tourDetails.price}$
                            </del>
                            <span className="text-2xl text-[#FF9900] font-bold">
                              {Math.floor(
                                tourDetails.price -
                                  (tourDetails.price * tourDetails.discount) /
                                    100
                              )}
                              $
                            </span>
                          </div>
                        </div>
                        <div className="bg-[url(/detailCruise/iconspecialoffer.svg)] flex items-center justify-center bg-no-repeat h-[35px] w-[170px] text-center text-[red] hover:text-[var(--text-hover-default)] cursor-pointer">
                          <span className="text-[10px] lg:text-sm ml-6 font-bold">
                            {"Special Offers »"}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-1 ml-4">
                        {tourDetails.accompaniedServices.map(
                          (service: any, index: number) => (
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
                          )
                        )}
                      </div>
                      <div
                        className="py-5"
                        dangerouslySetInnerHTML={{
                          __html: tourDetails.content,
                        }}
                      ></div>
                      <ul>
                        {tourDetails.specialOffers?.map(
                          (item: any, index: number) => (
                            <li key={index}>
                              <div
                                onClick={() =>
                                  setShowDetailSpecial((pre) =>
                                    pre.includes(index)
                                      ? pre.filter((i) => i != index)
                                      : [...pre, index]
                                  )
                                }
                                className={cx(
                                  "flex justify-between items-end p-1 border-dotted cursor-pointer bg-white mb-2",
                                  {
                                    "border-b-[2px]":
                                      !showDetailSpecial.includes(index),
                                  }
                                )}
                              >
                                <label className="flex text-[red] font-bold text-sm">
                                  <span className="bg-[url(/home/top10Cruise/iconprice.svg)] bg-contain bg-no-repeat w-4 h-4 block relative top-1 mr-2"></span>
                                  {index + 1}.{item.name}
                                </label>
                                <FontAwesomeIcon
                                  icon={faAngleUp}
                                  className={cx(
                                    "mr-1 text-[var(--text-hover-default)]",
                                    {
                                      "rotate-180":
                                        !showDetailSpecial.includes(index),
                                    }
                                  )}
                                />
                              </div>
                              <div
                                className={cx(
                                  "border-[1px] bg-[#F9F9F9] mb-3 p-[10px]",
                                  {
                                    hidden: !showDetailSpecial.includes(index),
                                  }
                                )}
                                dangerouslySetInnerHTML={{
                                  __html: item.content,
                                }}
                              ></div>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                  {/* Photo */}
                  <div className="basis-full flex-1 shadow-md mb-3 lg:mb-0">
                    <div
                      onClick={() => setTabActive(3)}
                      className={cx(
                        "cursor-pointer py-3 px-7 uppercase block lg:hidden",
                        {
                          "bg-white text-black": tabActive !== 3,
                          "bg-[var(--primary-color)] text-white":
                            tabActive == 3,
                        }
                      )}
                    >
                      <h3 className="font-bold">Photo</h3>
                    </div>
                    <div
                      className={cx(" bg-white py-5 px-10", {
                        "block animate-fadeIn": tabActive == 3,
                        hidden: tabActive != 3,
                      })}
                    >
                      <Image
                        onClick={() => setShowAllImages((pre) => !pre)}
                        alt={tourDetails.name}
                        src={tourDetails.images && tourDetails.images[0]}
                        width={750}
                        height={420}
                        className="w-full object-contain "
                      />
                      <div className="grid grid-cols-3 gap-5 mt-5">
                        {tourDetails.images
                          ?.slice(0, 5)
                          ?.map((image: string, index: number) => (
                            <Image
                              onClick={() => setShowAllImages((pre) => !pre)}
                              key={index}
                              alt={tourDetails.name}
                              src={image}
                              width={250}
                              height={175}
                              className="w-full h-full object-cover "
                            />
                          ))}
                        <div
                          onClick={() => setShowAllImages((pre) => !pre)}
                          className={cx(
                            "w-full h-full cursor-pointer bg-slate-200 text-lg flex items-center justify-center font-semibold text-[var(--text-color-default)]",
                            {
                              hidden: tourDetails.images?.length <= 4,
                            }
                          )}
                        >
                          Show More...
                        </div>
                      </div>
                    </div>

                    {/* All Image */}
                    {showAllImages ? (
                      <PopupShowAllImages
                        images={tourDetails.images}
                        onCancel={() => setShowAllImages(false)}
                        title={tourDetails.name}
                      />
                    ) : (
                      <></>
                    )}
                  </div>

                  {/* Review */}
                  <div className="mt-3 basis-full flex-1 bg-white shadow-md">
                    <h2 className="my-3 uppercase text-2xl font-bold text-[var(--secondary-color)] w-full text-center relative line-text">
                      Tour review
                    </h2>
                    <div className="py-5">
                      <div className="border-b-[1px] border-dotted">
                        <div className="px-10 border-b-[1px] border-dotted pb-5">
                          {Array.from({ length: 5 }, (v, i) => i + 1)?.map(
                            (i, index) => (
                              <FontAwesomeIcon
                                key={index}
                                icon={faStar}
                                className="mr-1 text-[orange] text-sm"
                              />
                            )
                          )}
                          <span>4.000 based on 1 review</span>
                        </div>
                        <div className="grid grid-cols-4 gap-5 py-3 px-10">
                          <div className="flex flex-col items-center">
                            <Image
                              alt="user review"
                              src={"/home/sup3.jpg"}
                              width={112}
                              height={112}
                              className="object-contain rounded-full"
                            />
                            <span className="mt-2 text-center block font-bold text-[var(--text-hover-default)]">
                              Minh Nhat
                            </span>
                          </div>
                          <div className="col-span-3 lg:col-span-3">
                            <div className="flex justify-between my-2">
                              <div className="flex">
                                {Array.from(
                                  { length: 5 },
                                  (v, i) => i + 1
                                )?.map((i, index) => (
                                  <FontAwesomeIcon
                                    key={index}
                                    icon={faStar}
                                    className="mr-1 text-[orange] text-xs"
                                  />
                                ))}
                              </div>
                              <span className="text-[var(text-color-default)] font-semibold">
                                June 21, 2024{" "}
                              </span>
                            </div>
                            <p>
                              Pretium vel nascetur maecenas fames. Aptent.
                              Montes nisl mollis duis sapien egestas litora
                              dictumst arcu augue felis odio ultrices Potenti
                              sit natoque vel dis diam faucibus vitae proin
                              habitasse dapibus.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 px-10">
                        <h5 className="text-lg text-black">Leave a Review</h5>
                        <div className="flex my-3 items-center">
                          <span className="mr-3">Rating</span>
                          {Array.from({ length: 5 }, (v, i) => i + 1)?.map(
                            (i, index) => (
                              <FontAwesomeIcon
                                key={index}
                                icon={faStarRegular}
                                className="mr-1 text-[orange] text-xs"
                              />
                            )
                          )}
                        </div>

                        <textarea
                          className="mb-3 min-h-[200px] py-2 px-3 w-full lg:w-1/2 outline-none border-[1px]"
                          placeholder="Your review"
                        ></textarea>
                        <input
                          className="mb-3 py-2 px-3 w-full lg:w-1/2 block outline-none border-[1px]"
                          type="text"
                          placeholder="Name"
                        />
                        <input
                          className="mb-3 py-2 px-3 w-full lg:w-1/2 block outline-none border-[1px]"
                          type="text"
                          placeholder="Email"
                        />
                        <button className="py-2 px-5 bg-[var(--secondary1-color)] text-white rounded-sm">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Booking */}
              <div className="col-span-4 lg:col-span-1 ">
                <div className="my-12">
                  <div className="flex items-center justify-center py-2 px-5 text-white bg-[var(--primary-color)]">
                    <FontAwesomeIcon
                      icon={faTag}
                      className="rotate-90 text-2xl"
                    />
                    <del className="text-base font-bold  mx-2">
                      {tourDetails.price}$
                    </del>
                    <span className="text-2xl  font-bold">
                      {Math.floor(
                        tourDetails.price -
                          (tourDetails.price * tourDetails.discount) / 100
                      )}
                      $
                    </span>
                  </div>
                  <div className="bg-[#334960e6] text-center text-base text-white py-3">
                    One tour per person
                  </div>
                </div>
                <form className="bg-[var(--primary-color)] relative py-9 px-4">
                  <h3 className="text-white text-center mb-3 font-semibold">
                    Book the tour
                  </h3>
                  <div className="relative p-2 bg-white mb-2">
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Name"
                      required
                      className="w-full outline-none border-none text-black"
                    />
                    <FontAwesomeIcon
                      icon={faUser}
                      className="absolute top-1/2 -translate-y-1/2 right-2 text-[var(--text-hover-default)]"
                    />
                  </div>
                  <div className="relative p-2 bg-white mb-2">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Email address"
                      required
                      className="w-full outline-none border-none text-black"
                    />
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="absolute top-1/2 -translate-y-1/2 right-2 text-[var(--text-hover-default)]"
                    />
                  </div>
                  <div className="relative p-2 bg-white mb-2">
                    <input
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      type="text"
                      placeholder="Phone number"
                      required
                      className="w-full outline-none border-none text-black"
                    />
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="absolute top-1/2 -translate-y-1/2 right-2 text-[var(--text-hover-default)]"
                    />
                  </div>
                  <div className="relative p-2 bg-white mb-2">
                    <input
                      type="date"
                      placeholder="Date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full outline-none border-none text-black"
                    />
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="absolute top-1/2 -translate-y-1/2 right-2 text-[var(--text-hover-default)]"
                    />
                  </div>
                  <div className="relative p-2 bg-white mb-2">
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(+e.target.value)}
                      placeholder="Quantity"
                      required
                      className="w-full outline-none border-none text-black"
                    />
                    <FontAwesomeIcon
                      icon={faUserPlus}
                      className="absolute top-1/2 -translate-y-1/2 right-2 text-[var(--text-hover-default)]"
                    />
                  </div>
                  <div className="absolute left-0 right-0 -bottom-3 flex justify-center">
                    <button
                      type="submit"
                      className={cx(
                        "uppercase px-5 py-2 bg-[var(--text-hover-default)] text-white font-medium rounded-md",
                        {
                          "text-slate-500 cursor-not-allowed":
                            !name ||
                            !phoneNumber ||
                            !email ||
                            !date ||
                            !quantity,
                        }
                      )}
                    >
                      Book now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="container pb-5">
            <h2 className="my-3 text-2xl font-bold text-[var(--secondary-color)] w-full text-center relative line-text">
              You May Also Like...
            </h2>

            <div className="relative container pt-5">
              <FontAwesomeIcon
                onClick={() => {
                  if (sectionMayAlsoRef.current) {
                    const preBtnSwiper =
                      sectionMayAlsoRef.current.querySelector(
                        ".swiper-button-prev"
                      );
                    if (preBtnSwiper) (preBtnSwiper as HTMLElement).click();
                  }
                }}
                className="cursor-pointer w-5 h-5 absolute top-1/3 -translate-y-1/2 z-10 text-[#555555cc] bg-[#ffffff99] hover:bg-[#ffffffe6] drop-shadow-md p-3 rounded-full -left-2 "
                icon={faChevronLeft}
              />

              <div className="hidden lg:block">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  navigation={{}}
                  modules={[Navigation]}
                  className="swiper-luxury"
                  loop
                >
                  {dataTourSuggest?.map((cruise, index) => (
                    <SwiperSlide key={index}>
                      <TourHomeTop10Item {...cruise} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="block lg:hidden">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={0}
                  className="swiper-luxury"
                  loop
                >
                  {dataTourSuggest?.map((cruise, index) => (
                    <SwiperSlide key={index}>
                      <TourHomeTop10Item {...cruise} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <FontAwesomeIcon
                onClick={() => {
                  if (sectionMayAlsoRef.current) {
                    const preBtnSwiper =
                      sectionMayAlsoRef.current.querySelector(
                        ".swiper-button-next"
                      );
                    if (preBtnSwiper) (preBtnSwiper as HTMLElement).click();
                  }
                }}
                className="cursor-pointer w-5 h-5 absolute top-1/3 -translate-y-1/2 z-10 text-[#555555cc] bg-[#ffffff99] hover:bg-[#ffffffe6] drop-shadow-md p-3 rounded-full -right-2 "
                icon={faChevronRight}
              />
            </div>

            <div className="container flex justify-center">
              <button className="mx-auto text-sm font-bold text-[var(--text-hover-default)] w-fit px-10 py-2 rounded-3xl border-[2px] border-dotted border-[#0cab5b] mt-3 hover:bg-[#06b28b] hover:text-white ">
                View more <span>{`»`}</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <LoadingModal />
      )}
    </div>
  );
}
