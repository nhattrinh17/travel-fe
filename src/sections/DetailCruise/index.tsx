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
  faSubtract,
  faPlus,
  faCircleInfo,
  faComments,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import styles from "./styles.module.scss";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { Navigation } from "swiper/modules";
import { CruiseHomeLuxuryOrBudget } from "@/components/home/CruiseHomeLuxuryOrBudget";
import { PopupShowAllImages } from "@/components/ShowAllImages";
import { useCruise, useCruiseDetail } from "@/utils/handleCruise";
import { ShowRoomAndBookCruise } from "@/components/ShowRoomAndBookCruise";
import { ShowReviewCruiseAndTour } from "@/components/ShowReview";
import { useAppDispatch } from "@/lib";
import { resetDataCruiseDetail } from "@/lib/redux/app/cruise.slice";
import { LoadingModal } from "@/components/Loading";
import { handleOpenLinkNewTab } from "@/share";
import { ShowReviewCruiseTop } from "../ShowReviewCruiseTop";
import { useBlogCruise } from "@/utils/handleBlog";
import { SwiperLayout } from "@/uiCore";
import { BlogItem } from "@/components/BlogItem";
import { useRouter } from "next/navigation";
const cx = classNames.bind(styles);

export function DetailCruise({ slug }: { slug: string }): JSX.Element {
  const [showSpecialOffer, setShowSpecialOffer] = useState(false);
  const [showDetailSpecial, setShowDetailSpecial] = useState<number[]>([]);
  const [mountLike, setMountLike] = useState(false);
  const [showTravelerLoves, setShowTravelerLoves] = useState(false);
  const [showAllImages, setShowAllImages] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  // Data Cruise
  const cruiseDetail = useCruiseDetail(slug);

  // Itineraries
  const [itinerariesActive, setItinerariesActive] = useState<number[]>([]);

  // Overview and Review
  const [tabIndexActive, setTabIndexActive] = useState<number>(0);

  // May be like
  const { blogCruise } = useBlogCruise();

  const { data: dataCruiseSuggest } = useCruise(
    "",
    "",
    cruiseDetail?.destinationId,
    cruiseDetail?.detailLocationId
  );

  useEffect(() => {
    return () => {
      console.log("delete cruise details");
      dispatch(resetDataCruiseDetail());
    };
  }, []);

  return (
    <div className="bg-[var(--bg-container-color)]">
      {!!cruiseDetail ? (
        <div className="container">
          {/* header */}
          <section className="">
            <div className="py-3 border-b-[1px] border-dotted">
              <Image
                alt=""
                src={"/detailCruise/hat_save_dt_2.jpg"}
                width={1170}
                height={162}
                className="w-full object-contain"
              />
              <div className="flex justify-between pt-3 mb-3 flex-col lg:flex-row">
                <div>
                  <h1 className="text-[var(--text-hover-default)] font-bold text-2xl">
                    {cruiseDetail.name}
                  </h1>
                  <div className="flex items-center my-2">
                    {Array.from(
                      { length: cruiseDetail.stars },
                      (v, i) => i + 1
                    ).map((i, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className="mr-1 text-[orange] text-xs"
                      />
                    ))}
                    <div
                      className={cx(
                        "text-[var(--text-hover-default)] flex items-center text-sm",
                        {
                          hidden: cruiseDetail.linkTripadvisor,
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
                      className={cx(
                        "text-[var(--text-hover-default)] flex items-center text-sm",
                        {
                          hidden: !cruiseDetail.linkTripadvisor,
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
                        onClick={() =>
                          handleOpenLinkNewTab(cruiseDetail.linkTripadvisor)
                        }
                        className="flex cursor-pointer hover:underline"
                      >
                        {Array.from({ length: 5 }, (v, i) => i + 1).map(
                          (i, index) => (
                            <Image
                              key={index}
                              alt="cicel"
                              src={"/share/icontripadvisor2.svg"}
                              width={15}
                              height={15}
                              className="mr-[1px]"
                            />
                          )
                        )}
                        <span className="">
                          - {cruiseDetail.reviewTripadvisor || 3651} Review
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between lg:justify-center">
                  <Image
                    alt="flash sale"
                    src={"/share/flash_text.png"}
                    width={90}
                    height={65}
                    className="mr-4 hidden lg:block"
                  />
                  <Image
                    alt="best price"
                    src={"/share/best-price-3.png"}
                    width={120}
                    height={65}
                    className="mr-4  hidden lg:block"
                  />
                  <div className="">
                    <span className="ml-auto text-xs">Only From</span>
                    <div className="flex items-end">
                      <del className="text-base font-bold text-[var(--text-hover-default)] mr-2">
                        {cruiseDetail.price}$
                      </del>
                      <span className="text-2xl text-[#FF9900] font-bold">
                        {Math.floor(
                          cruiseDetail.price -
                            (cruiseDetail.price * cruiseDetail.discount) / 100
                        )}
                        $
                      </span>
                    </div>
                  </div>
                  <div
                    onClick={() => setShowSpecialOffer((pre) => !pre)}
                    className="bg-[url(/detailCruise/iconspecialoffer.svg)] flex items-center justify-center bg-no-repeat h-[35px] w-[170px] text-center text-[red] hover:text-[var(--text-hover-default)] cursor-pointer"
                  >
                    <span className="text-sm ml-6 font-bold">
                      {"Special Offers »"}
                    </span>
                  </div>
                </div>
              </div>

              <ul
                className={cx({
                  hidden: !showSpecialOffer,
                  block: showSpecialOffer,
                })}
              >
                {cruiseDetail.specialOffers.map((item: any, index: number) => (
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
                          "border-b-[2px]": !showDetailSpecial.includes(index),
                        }
                      )}
                    >
                      <label className="flex text-[red] font-bold text-sm">
                        <span className="bg-[url(/home/top10Cruise/iconprice.svg)] bg-contain bg-no-repeat w-4 h-4 block relative top-1 mr-2"></span>
                        {index + 1}.{item.name}
                      </label>
                      <FontAwesomeIcon
                        icon={faAngleUp}
                        className={cx("mr-1 text-[var(--text-hover-default)]", {
                          "rotate-180": !showDetailSpecial.includes(index),
                        })}
                      />
                    </div>
                    <div
                      className={cx(
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
            </div>

            <div className="flex my-3 flex-col lg:flex-row">
              <div className="flex mb-3 items-center text-[#888888] text-[13px]">
                <div className="flex mr-2">
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="relative top-[2px] mr-1"
                  />
                  <span>Style:{cruiseDetail.styleCruise}</span>
                </div>
                <div className="flex mr-2">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="relative top-[2px] mr-1"
                  />
                  <span>Launched:{cruiseDetail.timeLaunched}</span>
                </div>
                <div className="flex mr-2">
                  <FontAwesomeIcon
                    icon={faBed}
                    className="relative top-[2px] mr-1"
                  />
                  <span>Rooms:{cruiseDetail.totalRoom}</span>
                </div>
              </div>
              <div className="flex">
                {cruiseDetail.accompaniedServices.map(
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
            </div>
          </section>
          {/* Image */}
          <section>
            {showAllImages && cruiseDetail.images ? (
              <PopupShowAllImages
                images={cruiseDetail.images}
                onCancel={() => setShowAllImages(false)}
                title={cruiseDetail.name}
              />
            ) : (
              <></>
            )}
            <div
              onClick={() => setShowAllImages(true)}
              className="flex gap-2 max-h-[376px] overflow-hidden"
            >
              <div className="basis-full lg:basis-3/5 overflow-hidden relative h-fit">
                <Image
                  alt="aaaa"
                  src={cruiseDetail.images[0]}
                  width={820}
                  height={440}
                  className="object-contain hover:scale-[1.2] transition-all duration-500"
                />
                <div
                  className={cx(
                    "absolute top-2 left-2 flex text-xs font-bold text-white bg-[#ff5722] py-1 px-2 rounded-sm",
                    {
                      hidden:
                        !cruiseDetail.isFlashSale && !cruiseDetail.discount,
                    }
                  )}
                >
                  <div
                    className={cx("flex", {
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
                  className={cx(
                    "absolute bottom-2 left-0 px-2 py-1 text-white text-xs text-center bg-[#390]",
                    {
                      hidden: !cruiseDetail.isAllMeals,
                    }
                  )}
                >
                  <p>All Meals Included</p>
                </div>
                <div
                  className={cx(
                    "absolute bottom-1 right-0 px-2 py-1 text-white text-xs text-center underline cursor-pointer"
                  )}
                >
                  <p>See All {cruiseDetail.images.length} photos</p>
                </div>
              </div>
              <div className="flex-1 hidden lg:flex flex-col max-h-full overflow-hidden">
                <div className="col-span-1 overflow-hidden relative basis-1/2 pb-1 ">
                  <Image
                    alt="aaaa"
                    src={cruiseDetail.images[1]}
                    width={820}
                    height={440}
                    className="object-cover h-full hover:scale-[1.2] transition-all duration-500"
                  />
                </div>
                <div className="col-span-1 overflow-hidden basis-1/2 pt-1">
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
          <section className="border-b-[1px] pb-4 border-dotted grid grid-cols-4 gap-5">
            <div className="col-span-4 lg:col-span-3">
              <div className="border-b-[1px] border-dotted border-[#ddd] flex items-center py-4">
                <FontAwesomeIcon
                  icon={faHeartSolid}
                  className="text-[#59c45a] mr-2"
                />
                <h2 className="text-[var(--secondary-color)] text-[22px] font-bold">
                  What travelers love about {cruiseDetail.name}
                </h2>
              </div>

              <div>
                <ul
                  className={cx({
                    "h-[200px] overflow-hidden": !showTravelerLoves,
                    "h-auto": showTravelerLoves,
                  })}
                >
                  {cruiseDetail.travelerLoves.map(
                    (item: any, index: number) => (
                      <li key={index} className="flex items-center">
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="text-sm text-[var(--text-hover-default)] mr-1 py-2"
                        />
                        <p className="text-[#666] text-[13px] font-semibold">
                          {item}
                        </p>
                      </li>
                    )
                  )}
                </ul>

                <span
                  onClick={() => setShowTravelerLoves((pre) => !pre)}
                  className={cx(
                    "cursor-pointer text-sm w-full flex items-center text-[var(--text-hover-default)] pt-3 mb-4"
                  )}
                >
                  {showTravelerLoves ? "Show less" : "Show More"}
                  <FontAwesomeIcon
                    icon={faSortDown}
                    className="text-xs relative bottom-[2px]"
                  />
                </span>
                <div className="h-[2px] w-6 bg-[#BBBBBB] mt-4 rounded-md"></div>
              </div>
            </div>
            {cruiseDetail ? (
              <ShowReviewCruiseTop idCruise={cruiseDetail.id} />
            ) : (
              <></>
            )}
          </section>
          {/* Type Room */}
          <ShowRoomAndBookCruise bookingPage={false} />
          {/* Itineraries & Route */}
          <section className="py-3">
            <h2 className="text-[var(--secondary-color)] font-bold text-[22px] border-b-[2px] border-dotted pb-2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="mr-2 text-[var(--text-hover-default)]"
              />
              {cruiseDetail.name}: Itineraries & Routes
            </h2>

            <div className="py-5">
              {cruiseDetail.itineraries.map((itinerary: any, index: number) => (
                <div key={index} className="mb-5">
                  <div
                    onClick={() =>
                      setItinerariesActive((pre) => {
                        if (pre.includes(index))
                          return pre.filter((i) => i != index);
                        return [...pre, index];
                      })
                    }
                    className="flex group/header hover:bg-[#F9F9F9] cursor-pointer border-[1px] border-[#EEE] bg-white rounded-lg"
                  >
                    <div className="text-[var(--text-hover-default)] border-r-[1px] p-3 px-4 font-bold text-center">
                      <span className="block">{itinerary.day}</span>
                      <span className="block">Days</span>
                    </div>
                    <div className="flex-1 flex px-5 justify-between p-3 items-center">
                      <div>
                        <h2 className="text-lg text-[var(--text-hover-default)] font-bold mb-1">
                          {itinerary.name}
                        </h2>
                        <div className="flex items-center text-[#333] text-[13px]">
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            className="mr-1 text-xs"
                          />
                          <p>{itinerary.description}</p>
                        </div>
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faSubtract}
                          className={cx(
                            "text-2xl text-[#aaa] group-hover/header:text-[var(--text-hover-default)] cursor-pointer",
                            {
                              hidden: itinerariesActive.includes(index),
                            }
                          )}
                        />
                        <FontAwesomeIcon
                          icon={faPlus}
                          className={cx(
                            "text-2xl text-[#aaa] group-hover/header:text-[var(--text-hover-default)] cursor-pointer",
                            {
                              hidden: !itinerariesActive.includes(index),
                            }
                          )}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={cx("p-3 bg-white text-black", {
                      hidden: !itinerariesActive.includes(index),
                    })}
                    dangerouslySetInnerHTML={{ __html: itinerary.content }}
                  ></div>
                </div>
              ))}
            </div>
          </section>

          {/* Overview */}
          <section>
            <div className="flex justify-between border-b-[1px]">
              <div className="flex">
                <div
                  onClick={() => setTabIndexActive(0)}
                  className={cx(
                    "flex items-center px-2 border-b-[3px] mr-1 cursor-pointer hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)]",
                    {
                      "border-[var(--secondary-color)] text-[var(--secondary-color)]":
                        tabIndexActive == 0,
                      "border-transparent text-[#555]": tabIndexActive != 0,
                    }
                  )}
                >
                  <FontAwesomeIcon icon={faCircleInfo} className="mr-3" />
                  <span className="font-bold text-lg">Over views</span>
                </div>

                <div
                  onClick={() => setTabIndexActive(1)}
                  className={cx(
                    "flex items-center px-2 border-b-[3px] mx-1 cursor-pointer hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)]",
                    {
                      "border-[var(--secondary-color)] text-[var(--secondary-color)]":
                        tabIndexActive == 1,
                      "border-transparent text-[#555]": tabIndexActive != 1,
                    }
                  )}
                >
                  <FontAwesomeIcon icon={faComments} className="mr-3" />
                  <span className="font-bold text-lg">Reviews</span>
                </div>
              </div>
              <div>
                <div
                  onClick={() => setTabIndexActive(2)}
                  className={cx(
                    "flex items-center px-2 border-b-[3px] mx-1 cursor-pointer hover:border-[var(--secondary-color)] hover:text-[var(--secondary-color)]",
                    {
                      "border-[var(--secondary-color)] text-[var(--secondary-color)]":
                        tabIndexActive == 2,
                      "border-transparent text-[#555]": tabIndexActive != 2,
                    }
                  )}
                >
                  <FontAwesomeIcon icon={faCircleQuestion} className="mr-3" />
                  <span className="font-bold text-lg">Question & Answer</span>
                </div>
              </div>
            </div>
            <div
              className={cx({
                hidden: tabIndexActive != 0,
              })}
            >
              <div
                className="py-5 text-black"
                dangerouslySetInnerHTML={{ __html: cruiseDetail.detail }}
              ></div>
            </div>
            <div
              className={cx("py-5 px-2", {
                hidden: tabIndexActive != 1,
              })}
            >
              <ShowReviewCruiseAndTour idCruise={cruiseDetail.id} idTour={0} />
            </div>
          </section>

          {/* May also like */}
          <section className="bg-[#f1f1f1] py-5">
            <div className="container">
              <h2 className="my-3 text-2xl font-bold text-[var(--secondary-color)] w-full text-center relative line-text">
                You May Also Like...
              </h2>
            </div>

            <SwiperLayout
              ComponentRenderDeskTop={CruiseHomeLuxuryOrBudget}
              ComponentRenderMobile={CruiseHomeLuxuryOrBudget}
              data={dataCruiseSuggest}
              loop
              slidesPerViewDesktop={3}
              slidesPerViewMobile={1}
              spaceBetweenDesktop={30}
              spaceBetweenMobile={0}
              modules={[Navigation]}
            />

            <div className="container flex justify-center">
              <button className="mx-auto text-sm font-bold text-[var(--text-hover-default)] w-fit px-10 py-2 rounded-3xl border-[2px] border-dotted border-[#0cab5b] mt-3 hover:bg-[#06b28b] hover:text-white ">
                View more <span>{`»`}</span>
              </button>
            </div>
          </section>

          <section className="pb-5">
            <h2 className="my-3 text-2xl font-bold text-[var(--secondary-color)] w-full text-center relative line-text">
              Blog for you...
            </h2>

            <div className="relative container pt-5">
              <SwiperLayout
                ComponentRenderDeskTop={BlogItem}
                ComponentRenderMobile={BlogItem}
                data={blogCruise}
                loop
                slidesPerViewDesktop={3}
                slidesPerViewMobile={1}
                spaceBetweenDesktop={30}
                spaceBetweenMobile={0}
                modules={[Navigation]}
              />
            </div>
            <div className="container flex justify-center">
              <button
                onClick={() => router.push("/blog")}
                className="mx-auto text-sm font-bold text-[var(--text-hover-default)] w-fit px-10 py-2 rounded-3xl border-[2px] border-dotted border-[#0cab5b] mt-3 hover:bg-[#06b28b] hover:text-white "
              >
                View more <span>{`»`}</span>
              </button>
            </div>
          </section>
        </div>
      ) : (
        <LoadingModal />
      )}
    </div>
  );
}
