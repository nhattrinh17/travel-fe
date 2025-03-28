"use client";

import { faBars, faSortDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { COOKIE_NAME, LanguageSwitcher } from "../LanguageSwitch";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { TourHeaderItem } from "../TourHeaderItem";
import { CruisesHeaderItem } from "../CruisesHeaderItem";
import { languageList } from "@/constants";
import { usePacketTour } from "@/utils/handlePacketTour";
import { useTourNav } from "@/utils/handleTour";
import { useDestination } from "@/utils/handleDestination";
import { useRouter } from "next/navigation";
import { resetDataBlog } from "@/lib/redux/app/blog.slice";
import { useAppDispatch } from "@/lib";

const cx = classNames.bind(styles);

export function HeaderLayout(): JSX.Element {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [showNav, setShowNav] = useState(true);
  const [language, setLanguage] = useState<{
    name: string;
    positionY: number;
  }>({ name: "en", positionY: -4 });
  const [showAllTour, setShowAllTour] = useState(false);
  const [showPacketTour, setShowPacketTour] = useState(false);
  const [showDailyTour, setShowDailyTour] = useState(false);
  const [showCruises, setShowCruises] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  // const dataNav
  const { data: dataPacketTour } = usePacketTour();
  const { data: dataDailyTour } = useTourNav();
  const { data: dataDestination } = useDestination();

  useEffect(() => {
    const cookies = parseCookies();
    const languageCookie = cookies[COOKIE_NAME]?.split("/")[2];

    if (languageCookie) {
      setLanguage(
        languageList.find((i) => i.name == languageCookie) || {
          name: "en",
          positionY: -4,
        }
      );
    }
  }, []);

  useEffect(() => {
    // Hàm để kiểm tra kích thước màn hình và cập nhật trạng thái showFilter
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    // Gọi hàm handleResize ngay khi component mount để thiết lập trạng thái ban đầu
    handleResize();

    // Thêm event listener cho sự kiện resize
    window.addEventListener("resize", handleResize);

    // Dọn dẹp event listener khi component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="bg-[var(--bg-header-color)] h-[var(--height-header)] sticky top-0 left-0 right-0 z-[11]">
      <div className="container flex items-center h-full justify-between [&>div,&>a]:transition-colors [&>div,&>a]:ease-linear">
        <Link href={"/"} className="h-[80%] w-full max-w-[20%] mr-4">
          <Image
            alt="Logo Viet Travel"
            src={"/logo.png"}
            height={100}
            width={511}
            className="w-full h-full object-contain"
          />
        </Link>
        <div
          className={cx(
            "flex-1 bg-[url(/home/bg-8.jpg)] h-full bg-no-repeat bg-cover fixed top-0 left-0 right-0 bottom-0 lg:relative lg:bg-none",
            {
              hidden: !showNav,
              block: showNav,
            }
          )}
        >
          <FontAwesomeIcon
            onClick={() => setShowNav(false)}
            icon={faXmark}
            className="block lg:hidden absolute top-5 right-4 text-2xl z-[1] text-white"
          />
          <div
            className={cx(
              "fixed top-0 left-0 right-0 bottom-0 lg:relative items-center flex flex-col lg:flex-row justify-center  lg:justify-between bg-[#0e2240e6] lg:bg-transparent h-full"
            )}
          >
            <div
              onMouseEnter={() => setShowPacketTour(true)}
              onClick={() => setShowPacketTour((pre) => !pre)}
              onMouseLeave={() => {
                setShowAllTour(false);
                setShowPacketTour(false);
              }}
              className={cx(
                "relative px-2 cursor-pointer text-center w-full lg:w-auto py-1 lg:py-0 lg:hover:bg-[var(--primary-color)] text-white font-bold lg:h-full"
              )}
            >
              {/* PC */}
              <Link
                href={"/packages-tour"}
                className="hidden lg:flex h-full w-auto items-center justify-center"
              >
                <h2 className="uppercase text-xs">Packages Tours</h2>
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="w-3 ml-2 relative -top-1"
                />
              </Link>

              <div
                onClick={(e) => {
                  e.preventDefault();
                  setShowNav(false);
                  router.push("/packages-tour");
                }}
                className="flex lg:hidden w-full items-center justify-center"
              >
                <h2 className="uppercase text-xl">Packages Tours</h2>
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="w-3 ml-2 relative -top-1"
                />
              </div>

              <div
                className={cx(
                  "lg:absolute left-0 top-full lg:bg-[var(--primary-color)] p-2 w-full lg:w-[740px] grid-cols-4 gap-2",
                  {
                    "block lg:grid": showPacketTour,
                    hidden: !showPacketTour,
                  }
                )}
              >
                {dataPacketTour.map((tour, index) => (
                  <div
                    key={`${tour.id}-${index}`}
                    className={cx("", {
                      block: index < 11 || showAllTour,
                      "lg:hidden": index >= 11 && !showAllTour,
                    })}
                  >
                    <TourHeaderItem
                      cancelNavMobile={() => setShowNav(false)}
                      {...tour}
                      typeTour="packet"
                    />
                  </div>
                ))}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAllTour(true);
                  }}
                  className={cx(
                    "w-full h-full hidden items-center justify-center bg-[url(/home/op50.png)] hover:text-[var(--text-hover-default)]",
                    {
                      hidden: showAllTour || dataPacketTour.length <= 11,
                      "lg:flex": !showAllTour && dataPacketTour.length > 11,
                    }
                  )}
                >
                  <h3>See More ...</h3>
                </div>
              </div>
            </div>
            <div
              onMouseEnter={() => setShowDailyTour(true)}
              onClick={() => setShowDailyTour((pre) => !pre)}
              onMouseLeave={() => {
                setShowAllTour(false);
                setShowDailyTour(false);
              }}
              className={cx(
                "relative px-2 cursor-pointer text-center w-full lg:w-auto py-1 lg:py-0 lg:hover:bg-[var(--primary-color)] text-white font-bold lg:h-full"
              )}
            >
              <Link
                href={"/daily-tour"}
                className="hidden lg:flex lg:h-full w-full lg:w-auto items-center justify-center"
              >
                <h2 className="uppercase text-xl lg:text-xs">Daily Tours</h2>

                <FontAwesomeIcon
                  icon={faSortDown}
                  className="w-3 ml-2 relative -top-1"
                />
              </Link>

              <div
                onClick={(e) => {
                  e.preventDefault();
                  setShowNav(false);
                  router.push("/daily-tour");
                }}
                className="flex lg:hidden w-full items-center justify-center"
              >
                <h2 className="uppercase text-xl">Daily Tours</h2>
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="w-3 ml-2 relative -top-1"
                />
              </div>

              <div
                className={cx(
                  "lg:absolute left-0 top-full lg:bg-[var(--primary-color)] p-2 w-full lg:w-[740px] grid-cols-4 gap-2",
                  {
                    "block lg:grid": showDailyTour,
                    hidden: !showDailyTour,
                  }
                )}
              >
                {dataDailyTour.map((tour, index) => (
                  <div
                    key={index}
                    className={cx("", {
                      block: index < 11 || showAllTour,
                      "lg:hidden": index >= 11 && !showAllTour,
                    })}
                  >
                    <TourHeaderItem
                      cancelNavMobile={() => setShowNav(false)}
                      {...tour}
                      key={index}
                      typeTour="daily"
                    />
                  </div>
                ))}
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAllTour(true);
                  }}
                  className={cx(
                    "w-full h-full hidden items-center justify-center bg-[url(/home/op50.png)] hover:text-[var(--text-hover-default)]",
                    {
                      hidden: showAllTour || dataDailyTour.length <= 11,
                      "lg:flex": !showAllTour && dataDailyTour.length > 11,
                    }
                  )}
                >
                  <h3>See More ...</h3>
                </div>
              </div>
            </div>
            <div
              onMouseEnter={() => setShowCruises(true)}
              onClick={() => setShowCruises((pre) => !pre)}
              onMouseLeave={() => setShowCruises(false)}
              className={cx(
                "relative px-2 cursor-pointer w-full lg:w-auto lg:hover:bg-[var(--primary-color)] text-white font-bold lg:h-full"
              )}
            >
              <Link
                href={"/destination"}
                className="hidden lg:flex h-full w-auto py-0 items-center justify-center"
              >
                <h2 className="uppercase text-xl lg:text-xs">Cruises</h2>
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="w-3 ml-2 relative -top-1"
                />
              </Link>

              <Link
                href={"/destination"}
                onClick={(e) => {
                  e.preventDefault();
                  setShowNav(false);
                  router.push("/destination");
                }}
                className="flex lg:hidden w-full py-1 items-center justify-center"
              >
                <h2 className="uppercase text-xl lg:text-xs">Cruises</h2>
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="w-3 ml-2 relative -top-1"
                />
              </Link>

              <div
                className={cx(
                  "lg:absolute top-full grid-cols-3 p-2 left-[-200%] gap-2 w-full h-fit lg:w-[740px] bg-[#ffffff11] lg:bg-[var(--primary-color)]",
                  {
                    // "grid-cols-3 left-[-200%]": dataDestination.length >= 3,
                    // [`grid-cols-${dataDestination.length}`]:
                    //   dataDestination.length < 3,
                    "block lg:grid": showCruises,
                    hidden: !showCruises,
                  }
                )}
              >
                {dataDestination.map((cruise, index) => (
                  <CruisesHeaderItem
                    key={index}
                    {...cruise}
                    cancelNavMobile={() => setShowNav(false)}
                  />
                ))}
              </div>
            </div>
            {/* PC */}

            <Link
              href={"/flash-deal"}
              className="px-2 cursor-pointer py-1 lg:py-0 lg:hover:bg-[var(--primary-color)] text-white font-bold h-full hidden lg:flex items-center"
            >
              <Image
                alt="flash deal"
                src={"/home/gif-flash.gif"}
                width={20}
                height={25}
              />
              <h2 className="uppercase text-xl lg:text-xs">Flash Deals</h2>
            </Link>
            {/* Mobile */}
            <Link
              href={"/flash-deal"}
              onClick={(e) => {
                e.preventDefault();
                setShowNav(false);
                router.push("/flash-deal");
              }}
              className="flex lg:hidden px-2 cursor-pointer py-1 text-white font-bold items-center"
            >
              <Image
                alt="flash deal"
                src={"/home/gif-flash.gif"}
                width={20}
                height={25}
              />
              <h2 className="uppercase text-xl lg:text-xs">Flash Deals</h2>
            </Link>
            {/* PC */}
            <Link
              href={"/blog"}
              onClick={(e) => {
                e.preventDefault();
                router.push("/blog");
                dispatch(resetDataBlog());
              }}
              className="hidden lg:flex h-full px-2 cursor-pointer py-0 hover:bg-[var(--primary-color)] text-white font-bold items-center"
            >
              <h2 className="uppercase text-xl lg:text-xs">Blogs</h2>
            </Link>
            {/* Mobile */}
            <Link
              href={"/blog"}
              onClick={(e) => {
                e.preventDefault();
                setShowNav(false);
                router.push("/blog");
                dispatch(resetDataBlog());
              }}
              className="flex lg:hidden px-2 cursor-pointer py-1 text-white font-bold items-center"
            >
              <h2 className="uppercase text-xl lg:text-xs">Blogs</h2>
            </Link>
            {/* PC */}
            <Link
              href={"/about-us"}
              className="hidden lg:flex px-2 cursor-pointer py-0 hover:bg-[var(--primary-color)] text-white font-bold h-full items-center"
            >
              <h2 className="uppercase text-xl lg:text-xs">About US</h2>
            </Link>
            {/* Mobile */}
            <Link
              href={"/about-us"}
              onClick={(e) => {
                e.preventDefault();
                setShowNav(false);
                router.push("/about-us");
              }}
              className="flex lg:hidden px-2 cursor-pointer py-1 text-white font-bold items-center"
            >
              <h2 className="uppercase text-xl lg:text-xs">About US</h2>
            </Link>
            {/* PC */}
            <Link
              href={"/contact-us"}
              className="hidden lg:flex px-2 cursor-pointer py-1 hover:bg-[var(--primary-color)] text-white font-bold h-full items-center"
            >
              <h2 className="uppercase text-xl lg:text-xs">Contact US</h2>
            </Link>
            {/* Mobile */}
            <Link
              href={"/contact-us"}
              onClick={(e) => {
                e.preventDefault();
                setShowNav(false);
                router.push("/contact-us");
              }}
              className="flex lg:hidden px-2 cursor-pointer py-1 text-white font-bold items-center"
            >
              <h2 className="uppercase text-xl lg:text-xs">Contact US</h2>
            </Link>

            <div
              onClick={() => {
                const btnHelpMe = document.querySelector(
                  "#help-me-find-cruise"
                ) as any;
                if (btnHelpMe) {
                  btnHelpMe.click();
                }
              }}
              className="px-2 cursor-pointer py-1 lg:py-0 lg:hover:bg-[var(--primary-color)] text-white font-bold lg:h-full hidden lg:flex items-center"
            >
              <Image
                alt="HELP"
                src={"/home/sup3.jpg"}
                width={40}
                height={40}
                className="object-contain rounded-full"
              />
              <span className="uppercase text-xs ml-1">Need Help?</span>
            </div>

            <div
              onMouseEnter={() => setShowLanguage(true)}
              onClick={() => setShowLanguage((pre) => !pre)}
              onMouseLeave={() => setShowLanguage(false)}
              className={cx(
                "px-2 cursor-pointer py-1 lg:py-0 lg:hover:bg-[var(--primary-color)] text-white font-bold w-full lg:w-auto lg:h-full relative"
              )}
            >
              <div className="flex items-center uppercase justify-center lg:h-full">
                <span>{language?.name?.split("-")[0]}</span>
                <div
                  className="mx-1 bg-[url(/co-quoc-gia.png)] bg-[length:100%] bg-no-repeat w-8 h-5"
                  style={{
                    backgroundPositionY: language?.positionY,
                    backgroundPositionX: 0,
                  }}
                ></div>
                <FontAwesomeIcon
                  icon={faSortDown}
                  className="w-3 relative -top-1"
                />
              </div>
              <div
                className={cx("w-full lg:absolute top-full right-0", {
                  "block lg:grid": showLanguage,
                  hidden: !showLanguage,
                })}
              >
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center h-full lg:hidden cursor-pointer">
          <Image
            alt="help"
            src={"/home/icon-contactvietnam.svg"}
            width={30}
            height={30}
            className="mr-2"
          />
          <div
            onClick={() => setShowNav(true)}
            className="h-full flex items-center"
          >
            <FontAwesomeIcon icon={faBars} color="white" />
          </div>
        </div>
      </div>
    </header>
  );
}
