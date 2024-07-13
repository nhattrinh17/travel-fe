"use client";

import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "next/image";
import { useEffect, useState } from "react";

const cx = classNames.bind({});

export function SliderAndSearch(): JSX.Element {
  const [sliderActive, setSliderActive] = useState(0);
  const [optionSearch, setOptionSearch] = useState("tour");
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

  const sliders = [
    "https://d1k2oi80tv211b.cloudfront.net/chl/images/background/bg-22.webp",
    "https://d1k2oi80tv211b.cloudfront.net/chl/images/background/bg-55.webp",
    "https://d1k2oi80tv211b.cloudfront.net/chl/images/background/bg-33.webp",
  ];

  const logoCenter = "https://d1k2oi80tv211b.cloudfront.net/trip24.webp";
  const imageBottom =
    "https://d1k2oi80tv211b.cloudfront.net/chl/images/save10-40.svg";

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

  return (
    <section className="lg:h-[640px]">
      <div className={cx("h-full overflow-hidden relative")}>
        <Image
          alt="slider"
          src={sliders[sliderActive]}
          width={2000}
          height={970}
          className="w-full h-full object-cover animate-zoomInZoomOut"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <Image
            alt="logoCenter"
            src={logoCenter}
            width={160}
            height={160}
            className="object-contain"
          />

          <div className="py-5">
            <Image
              alt="imageBottom"
              src={imageBottom}
              width={388}
              height={160}
              className="object-contain"
            />
          </div>

          <div className="bg-[#03a3a8cc] py-3 px-5 rounded-t-xl">
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
              className="bg-white flex items-center p-3 font-bold"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="px-2 w-[300px]  h-full relative">
                <label
                  htmlFor="search"
                  className="cursor-pointer text-[var(--text-hover-default)] absolute left-2 right-2 top-1/2 -translate-y-1/2 z-10"
                >
                  {optionSearch == "cruise" ? "Cruise name:" : "Tour name:"}
                  <span className="text-[#bcbcbc]">Ha Long, Hai Phong...</span>
                </label>
                <input
                  id="search"
                  type="text"
                  required
                  className="absolute left-2 right-2 top-1/2 -translate-y-1/2 outline-none border-b-[1px] border-b-[#4da981] border-dashed"
                />
              </div>
              <div className="px-2 w-[120px] border-l-[1px] border-r-[1px] h-full  border-[#e6e6e6]">
                <select
                  className={cx(
                    "cursor-pointer outline-none text-[var(--text-hover-default)] border-b-[1px] border-b-[#4da981] border-dashed flex items-center justify-between",
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
                  "px-2 w-[148px] border-r-[1px] h-full  border-[#e6e6e6]",
                  {
                    hidden: optionSearch == "tour",
                  }
                )}
              >
                <label
                  htmlFor="select"
                  className="cursor-pointer text-[var(--text-hover-default)] border-b-[1px] border-b-[#4da981] border-dashed flex items-center justify-between"
                >
                  Departure
                  <FontAwesomeIcon icon={faCalendarDays} />
                </label>
              </div>
              <div
                className={cx(
                  "px-2 py w-[290px] relative border-r-[1px] h-full  border-[#e6e6e6]",
                  {
                    hidden: optionSearch == "tour",
                  }
                )}
              >
                <label
                  htmlFor="select"
                  className="cursor-pointer p-1 text-[var(--text-hover-default)] border-[1px] border-[#4da981] border-dashed flex items-center justify-between"
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

                <div className="absolute z-20 top-[calc(100%+4px)] left-0 p-3">
                  <div>
                    <p>No, Rooms</p>
                    <select
                      className="outline-none"
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
                        <div className="flex">
                          <div className="">
                            <label id={`option-type-${i}`}>Type</label>
                            <select className="outline-none">
                              <option value={"Double"}>Double</option>
                              <option value={"Twin"}>Twin</option>
                              <option value={"Single"}>Single</option>
                            </select>
                          </div>
                          <div className="">
                            <label id={`option-adult-${i}`}>
                              {"Adult(>10)"}
                            </label>
                            <select
                              className="outline-none"
                              onChange={(e) => {}}
                            >
                              <option value={"0"}>0</option>
                              <option value={"1"}>1</option>
                              <option value={"2"}>2</option>
                              <option value={"3"}>3</option>
                              <option value={"4"}>4</option>
                            </select>
                          </div>
                          <div className="">
                            <label id={`option-child-${i}`}>
                              {"Child(4 - 10)"}
                            </label>
                            <select className="outline-none">
                              <option value={"0"}>0</option>
                              <option value={"1"}>1</option>
                              <option value={"2"}>2</option>
                            </select>
                          </div>
                          <div className="">
                            <label id={`option-child-${i}`}>
                              {"Child(0 - 3)"}
                            </label>
                            <select className="outline-none">
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
                className="mx-2 rounded-xl w-[230px] p-3 uppercase text-white bg-[#d0720b]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #e6b834 0%, #f5a42a 51%, #d0720b 100%) ",
                }}
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
