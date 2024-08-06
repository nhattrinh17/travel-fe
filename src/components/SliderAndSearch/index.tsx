"use client";

import { DatePickerCustomer } from "@/uiCore";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";

const cx = classNames.bind(styles);

export function SliderAndSearch(): JSX.Element {
  const [sliderActive, setSliderActive] = useState(0);
  const [optionSearch, setOptionSearch] = useState("cruise");
  const [search, setSearch] = useState("");
  const router = useRouter();

  // Room box
  const [showSelectRoom, setShowSelectRoom] = useState(false);
  const boxSelectRoomRef = useRef<HTMLDivElement>(null);
  const [totalRoom, setTotalRoom] = useState(1);
  const [totalAdult, setTotalAdult] = useState<{ [key: string]: number }[]>([
    {
      room1: 1,
    },
  ]);

  const [totalChildren, setTotalChildren] = useState<
    { [key: string]: number }[]
  >([
    {
      room1: 0,
    },
  ]);
  const [totalInfant, setTotalInfant] = useState<{ [key: string]: number }[]>([
    {
      room1: 0,
    },
  ]);

  // Date Box
  const [date, setDate] = useState("");
  const [showSelectDate, setShowSelectDate] = useState(false);
  const boxSelectDateRef = useRef<HTMLDivElement>(null);

  const sliders = [
    "/share/sliders/Hang_Mua_Caves_3.jpg",
    "/share/sliders/Halong bay.jpg",
    "/share/sliders/Tam Coc.jpeg",
    "/share/sliders/Vinh Ha Long.jpg",
  ];

  const logoCenter = "/share/trip24.png";
  const imageBottom = "/home/save10-40.svg";

  useEffect(() => {
    const nextSlider = () => {
      const newIndex =
        sliderActive == sliders.length - 1 ? 0 : sliderActive + 1;
      setSliderActive(newIndex);
    };

    const autoNextSlide = setTimeout(() => {
      nextSlider();
    }, 7000);

    return () => {
      clearTimeout(autoNextSlide);
    };
  }, [sliderActive]);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      if (e.target && boxSelectRoomRef?.current) {
        if (!boxSelectRoomRef.current.contains(e.target as Node)) {
          setShowSelectRoom(false);
        }
      }
      if (e.target && boxSelectDateRef?.current) {
        if (!boxSelectDateRef.current.contains(e.target as Node)) {
          setShowSelectDate(false);
        }
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className="h-[600px] lg:h-[640px]">
      <div className={cx("h-full w-full relative")}>
        <div className={cx("h-full overflow-hidden")}>
          <Image
            alt="slider"
            src={sliders[sliderActive]}
            width={2000}
            height={970}
            className="w-full h-full object-cover animate-zoomInZoomOut"
            loading="eager"
          />
        </div>
        <div className="z-10 absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <Image
            alt="logoCenter"
            src={logoCenter}
            width={160}
            height={160}
            className="object-contain"
            loading="eager"
          />

          <div className="py-5">
            <Image
              alt="imageBottom"
              src={imageBottom}
              width={388}
              height={160}
              className="object-contain hidden lg:block"
              loading="eager"
            />
          </div>

          <div className="bg-[#03a3a8cc] py-4 px-5 rounded-t-xl mb-4 lg:mb-0">
            <div className="flex">
              <button
                onClick={() => setOptionSearch("cruise")}
                className={cx("py-2 px-4 text-xs font-bold  mr-2", {
                  "bg-[var(--text-hover-default)] text-white":
                    optionSearch == "cruise",
                  "text-black bg-white mb-1": optionSearch != "cruise",
                })}
              >
                Cruises
              </button>
              <button
                onClick={() => setOptionSearch("tour")}
                className={cx("py-2 px-4 text-xs font-bold ", {
                  "bg-[var(--text-hover-default)] text-white":
                    optionSearch == "tour",
                  "text-black bg-white mb-1": optionSearch != "tour",
                })}
              >
                Tour
              </button>
            </div>
            <form
              className="bg-white flex flex-col lg:flex-row items-center p-3 font-bold"
              onSubmit={(e) => {
                e.preventDefault();
                const isHome =
                  window.location.pathname == "/" ||
                  window.location.pathname == "/flash-deal";
                if (isHome) {
                  if (optionSearch == "cruise") {
                    router.push(`/cruise?search=${search}`);
                  } else {
                    router.push(`/tour?search=${search}`);
                  }
                } else {
                  const urlParams = new URLSearchParams(window.location.search);
                  urlParams.set("search", search);
                  window.location.search = urlParams.toString();
                }
              }}
            >
              <div className="px-2 my-3 py-3 lg:pb-0 w-[300px]  h-full relative text-[var(--text-hover-default)]">
                <label
                  htmlFor="search"
                  className={cx(
                    "cursor-pointer absolute left-2 right-2 top-1/2 -translate-y-1/2 z-10",
                    {
                      hidden: search,
                    }
                  )}
                >
                  {optionSearch == "cruise" ? "Cruise name:" : "Tour name:"}
                  <span className="text-[#bcbcbc]">Ha Long, Hai Phong...</span>
                </label>
                <input
                  id="search"
                  type="text"
                  value={search}
                  required
                  onChange={(e) => setSearch(e.target.value)}
                  className="absolute left-2 right-2 top-1/2 -translate-y-1/2 outline-none border-b-[1px] border-b-[#4da981] border-dashed"
                />
              </div>
              <div className="px-2 mb-3 lg:mb-0 p3 bg-white flex flex-col lg:flex-row items-center font-bold w-full lg:w-[120px] lg:border-l-[1px] lg:border-r-[1px] h-full  border-[#e6e6e6]">
                <select
                  className={cx(
                    "cursor-pointer w-full outline-none text-[var(--text-hover-default)] border-b-[1px] border-b-[#4da981] border-dashed flex items-center justify-between",
                    {
                      hidden: optionSearch == "tour",
                    }
                  )}
                >
                  <option>1 night</option>
                  <option>2 night</option>
                </select>
                <select
                  className={cx(
                    "cursor-pointer outline-none text-[var(--text-hover-default)] border-b-[1px] border-b-[#4da981] border-dashed flex items-center justify-between",
                    {
                      hidden: optionSearch == "cruise",
                    }
                  )}
                >
                  <option>Daily</option>
                  <option>Packet</option>
                </select>
              </div>

              <div
                className={cx(
                  "px-2 mb-3 lg:mb-0 w-full lg:w-[148px] lg:border-r-[1px] h-full  border-[#e6e6e6] relative",
                  {
                    hidden: optionSearch == "tour",
                  }
                )}
              >
                <label
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSelectDate((pre) => !pre);
                    setShowSelectRoom(false);
                  }}
                  htmlFor="select"
                  className="cursor-pointer w-full text-[var(--text-hover-default)] border-b-[1px] border-b-[#4da981] border-dashed flex items-center justify-between"
                >
                  {date ? date : "Departure"}
                  <FontAwesomeIcon icon={faCalendarDays} />
                </label>

                {showSelectDate ? (
                  <div
                    ref={boxSelectDateRef}
                    className={cx("absolute z-[20] top-[calc(100%+20px)]")}
                  >
                    <DatePickerCustomer
                      onChangePicker={(date) => setDate(date)}
                      selectsRange={false}
                      dateFormat="YYYY/MM/DD"
                      showDate={false}
                      minDate={new Date()}
                    />
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div
                className={cx(
                  "px-2 mb-3 lg:mb-0  w-full lg:w-[290px] relative lg:border-r-[1px] h-full  border-[#e6e6e6]",
                  {
                    hidden: optionSearch == "tour",
                  }
                )}
              >
                <label
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSelectRoom((pre) => !pre);
                    setShowSelectDate(false);
                  }}
                  htmlFor="select"
                  className="cursor-pointer w-full p-1 text-[var(--text-hover-default)] border-[1px] border-[#4da981] border-dashed flex items-center justify-between"
                >
                  {totalRoom} Room(s),
                  {totalAdult.reduce(
                    (pre, item, index) => (pre += item[`room${index + 1}`]),
                    0
                  )}
                  Adult(s),
                  {totalChildren.reduce(
                    (pre, item, index) => (pre += item[`room${index + 1}`]),
                    0
                  ) +
                    totalInfant.reduce(
                      (pre, item, index) => (pre += item[`room${index + 1}`]),
                      0
                    )}
                  Children
                </label>

                <div
                  ref={boxSelectRoomRef}
                  className={cx(
                    "absolute z-50 top-[calc(100%+20px)] max-w-[calc(100%+32px)] lg:max-w-max lg:w-[415px] left-0 p-3 pb-8 bg-white shadow-[0_6px_13px_-4px_#1816184d] border-[1px] border-[#ccc] rounded-md",
                    {
                      hidden: !showSelectRoom,
                    }
                  )}
                >
                  <FontAwesomeIcon
                    onClick={() => setShowSelectRoom(false)}
                    icon={faXmark}
                    className="absolute right-2 bottom-1 cursor-pointer p-2"
                  />
                  <div>
                    <p className="text-[#888]">No, Rooms</p>
                    <select
                      className="outline-none cursor-pointer border-[1px] border-[#d7d7d7] py-1 pl-1 pr-3 font-thin"
                      onChange={(e) => setTotalRoom(+e.target.value)}
                    >
                      <option value={"1"}>1</option>
                      <option value={"2"}>2</option>
                      <option value={"3"}>3</option>
                      <option value={"4"}>4</option>
                    </select>
                  </div>
                  {Array.from({ length: totalRoom }, (v, i) => i + 1).map(
                    (i, index) => (
                      <div key={index} className="py-2">
                        <p className="text-[var(--text-hover-default)]">
                          Room {i}
                        </p>
                        <div className="flex font-thin flex-wrap lg:flex-nowrap items-center">
                          <div className="mr-3">
                            <label
                              className="text-[#888] text-xs block my-1"
                              id={`option-type-${i}`}
                            >
                              Type
                            </label>
                            <select className="outline-none cursor-pointer border-[1px] border-[#d7d7d7] py-1 pl-1 pr-3">
                              <option value={"Double"}>Double</option>
                              <option value={"Twin"}>Twin</option>
                              <option value={"Single"}>Single</option>
                            </select>
                          </div>
                          <div className="mr-3">
                            <label
                              className="text-[#888] text-xs block my-1 "
                              id={`option-adult-${i}`}
                            >
                              {"Adult(>10)"}
                            </label>
                            <select
                              className="outline-none min-w-[60px] cursor-pointer border-[1px] border-[#d7d7d7] py-1 pl-1 pr-3 w-full"
                              onChange={(e) => {
                                setTotalAdult((pre) => {
                                  const newData = [...pre];
                                  const nameRoom = `room${i}`;
                                  const dataRom = newData.find(
                                    (r) => r[nameRoom] >= 0
                                  );
                                  if (dataRom) {
                                    dataRom[nameRoom] = +e.target.value;
                                  } else {
                                    newData.push({
                                      [nameRoom]: +e.target.value,
                                    });
                                  }
                                  return newData;
                                });
                              }}
                            >
                              <option value={"0"}>0</option>
                              <option value={"1"}>1</option>
                              <option value={"2"}>2</option>
                              <option value={"3"}>3</option>
                              <option value={"4"}>4</option>
                            </select>
                          </div>
                          <div className="mr-3">
                            <label
                              className="text-[#888] text-xs block my-1 "
                              id={`option-child-${i}`}
                            >
                              {"Child(4 - 10)"}
                            </label>
                            <select
                              className="outline-none min-w-[60px] cursor-pointer border-[1px] border-[#d7d7d7] py-1 pl-1 pr-3 w-full"
                              onChange={(e) => {
                                setTotalChildren((pre) => {
                                  const newData = [...pre];
                                  const nameRoom = `room${i}`;
                                  const dataRom = newData.find(
                                    (r) => r[nameRoom] >= 0
                                  );
                                  if (dataRom) {
                                    dataRom[nameRoom] = +e.target.value;
                                  } else {
                                    newData.push({
                                      [nameRoom]: +e.target.value,
                                    });
                                  }
                                  return newData;
                                });
                              }}
                            >
                              <option value={"0"}>0</option>
                              <option value={"1"}>1</option>
                              <option value={"2"}>2</option>
                            </select>
                          </div>
                          <div className="mr-3">
                            <label
                              className="text-[#888] text-xs block my-1 "
                              id={`option-child-${i}`}
                            >
                              {"Child(0 - 3)"}
                            </label>
                            <select
                              className="outline-none min-w-[60px] cursor-pointer border-[1px] border-[#d7d7d7] py-1 pl-1 pr-3 w-full"
                              onChange={(e) => {
                                setTotalInfant((pre) => {
                                  const newData = [...pre];
                                  const nameRoom = `room${i}`;
                                  const dataRom = newData.find(
                                    (r) => r[nameRoom] >= 0
                                  );
                                  if (dataRom) {
                                    dataRom[nameRoom] = +e.target.value;
                                  } else {
                                    newData.push({
                                      [nameRoom]: +e.target.value,
                                    });
                                  }
                                  return newData;
                                });
                              }}
                            >
                              <option value={"0"}>0</option>
                              <option value={"1"}>1</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              <button
                className={cx(
                  "submit_search",
                  "mx-2 rounded-xl w-[230px] p-3 uppercase text-white bg-[#d0720b]"
                )}
              >
                Search Cruises
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
