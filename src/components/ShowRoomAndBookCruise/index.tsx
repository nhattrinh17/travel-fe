"use client";

import { useAppSelector } from "@/lib";
import { DatePickerCustomer } from "@/uiCore";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleUp,
  faArrowsUpDownLeftRight,
  faBed,
  faCalendarDays,
  faEye,
  faLocationDot,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import moment from "moment";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TypeRoomCruiseItem } from "../cruiseDetail/TypeRoomItem";

const cx = classNames.bind({});

export function ShowRoomAndBookCruise(): JSX.Element {
  const { cruiseDetail } = useAppSelector((state) => state.cruise);

  const [roomTypeActive, setRoomTypeActive] = useState<number>();
  const [showDetailSpecial, setShowDetailSpecial] = useState<number[]>([]);

  //   total person
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
  const [showSelectRoom, setShowSelectRoom] = useState(false);
  const [date, setDate] = useState(new Date().toISOString());
  const [showSelectDate, setShowSelectDate] = useState(false);
  const boxSelectDateRef = useRef<HTMLDivElement>(null);

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

  return cruiseDetail ? (
    <section className="py-4">
      <div className="flex mb-4 justify-between">
        <h3 className="text-xl text-[var(--secondary-color)] font-bold">
          <FontAwesomeIcon
            icon={faCheckSquare}
            className="text-[#25ab4b] text-2xl mr-3"
          />
          Select {cruiseDetail.name} Packages with Best Offers
        </h3>

        <div className="flex text-[#25ab4b]">
          <div className="flex items-center mr-4">
            <span className="block bg-[url(/detailCruise/icontripadvisor.svg)] w-[40px] h-full bg-contain bg-no-repeat"></span>
            <span className="text-sm font-bold">Travelers' Choice ®</span>
          </div>
          <div className="flex items-center ">
            <span className="block bg-[url(/detailCruise/iconbestprice.svg)] w-[40px] h-full bg-contain bg-no-repeat"></span>
            <span className="text-sm font-bold">Best Price Guarantee</span>
          </div>
        </div>
      </div>
      <ul className="my-3">
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
                "flex justify-between items-end py-[6px] border-l-2 border-[#ddd]  px-1 cursor-pointer bg-white mb-2"
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
              className={cx("border-[1px] bg-[#F9F9F9] mb-3 p-[10px]", {
                hidden: !showDetailSpecial.includes(index),
              })}
              dangerouslySetInnerHTML={{ __html: item.content }}
            ></div>
          </li>
        ))}
      </ul>
      <form
        className="bg-[var(--secondary1-color)] rounded-xl grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-8 p-3 font-bold"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="px-2 w-full mb-0 p-3 flex flex-col lg:flex-row items-center font-bold  h-full ">
          <select
            className={cx(
              "cursor-pointer w-full bg-transparent outline-none text-white border-b-[1px] border-b-[#fff] border-dashed flex items-center justify-between"
            )}
          >
            {cruiseDetail.itineraries.map((item: any, index: number) => (
              <option
                key={index}
                className="text-black font-bold"
              >{`${item.day} day » ${item.name}`}</option>
            ))}
          </select>
        </div>

        <div
          className={cx("px-2 lg:mb-w-full h-full  border-[#e6e6e6] relative")}
        >
          <label
            onClick={(e) => {
              e.stopPropagation();
              setShowSelectDate((pre) => !pre);
              setShowSelectRoom(false);
            }}
            htmlFor="select"
            className="cursor-pointer p-2 w-full text-white border-[2px] border-[#fdd872] border-dashed flex items-center justify-between"
          >
            {date ? moment(date).format("YYYY/MM/DD") : "Departure"}
            <FontAwesomeIcon icon={faCalendarDays} />
          </label>

          {showSelectDate ? (
            <div
              ref={boxSelectDateRef}
              className={cx("absolute z-10 top-[calc(100%+20px)]")}
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
            "mb-3 lg:mb-0 bg-white  w-full lg:w-[290px] relative h-full  border-[#e6e6e6]"
          )}
        >
          <label
            onClick={(e) => {
              e.stopPropagation();
              setShowSelectRoom((pre) => !pre);
              setShowSelectDate(false);
            }}
            htmlFor="select"
            className="cursor-pointer w-full h-full p-2 text-[var(--text-hover-default)] border-[1px] border-[#4da981] border-dashed flex items-center justify-between"
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
                  <p className="text-white">Room {i}</p>
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
            "mx-2 rounded-xl w-full p-3 uppercase text-white bg-[#d0720b]"
          )}
        >
          Check room rates
        </button>
      </form>

      <div className="shadow-sm bg-white mt-5 p-10">
        <div className="grid grid-cols-6 border-b-[1px] border-dotted text-[var(--text-color-default)]">
          <div className="col-span-6 lg:col-span-4 pb-2 ">
            <span className="font-bold">Room Types</span>
          </div>
          <div className=" hidden lg:block col-span-1 pb-2 px-3">
            <span className="font-bold block text-end">Max</span>
          </div>
          <div className="hidden lg:block col-span-1 pb-2 ">
            <span className="font-bold block text-end">Rate</span>
          </div>
        </div>
        {cruiseDetail.roomCruises.map((room: any, index: number) => (
          <div
            key={index}
            className={cx("py-3 border-dotted grid grid-cols-6", {
              "border-b-[1px]": cruiseDetail.roomCruises.length - 1 != index,
            })}
          >
            <div className="col-span-6 lg:col-span-4 block lg:flex">
              <figure className="w-full lg:w-[40%] ">
                <Image
                  alt="image room"
                  src={room.images[0]}
                  width={650}
                  height={388}
                  className="w-full object-contain hover:opacity-90"
                />
                <span
                  onClick={() => setRoomTypeActive(index)}
                  className="block cursor-pointer text-[13px] text-[var(--text-color-default)] mt-3"
                >
                  More info »
                </span>
              </figure>
              <div className="lg:ml-5">
                <h3
                  onClick={() => setRoomTypeActive(index)}
                  className="hover:underline cursor-pointer text-[var(--text-hover-default)] text-xl font-semibold"
                >
                  {room.name}
                </h3>
                <div className="flex">
                  {room.specialService.map((item: any, index: number) => (
                    <span
                      key={index}
                      className="block mr-2 rounded-sm bg-[#DDD] text-[10px] text-[var(--text-color-default)] py-1 px-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <ul className="text-[var(--text-color-default)] text-xs">
                  <li className="my-1">{room.totalRooms} Rooms</li>
                  <li
                    className={cx("flex items-center my-1", {
                      hidden: !room.isViewOcean,
                    })}
                  >
                    <FontAwesomeIcon className="mr-2" icon={faEye} />
                    <span>Ocean View</span>
                  </li>
                  <li className="flex items-center my-1">
                    <FontAwesomeIcon className="mr-2" icon={faBed} />
                    <span>{room.typeBed}</span>
                  </li>
                  <li className="flex items-center my-1">
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faArrowsUpDownLeftRight}
                    />
                    <span>{room.acreage}m²</span>
                  </li>
                  <li className="flex items-center my-1">
                    <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
                    <span>{room.location}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden lg:flex col-span-1 px-3 items-end justify-end my-auto">
              {Array.from({ length: room.maxPerson }, (v, i) => i + 1).map(
                (i, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faUser}
                    className={cx("text-[#aaa] mr-[1px]", {
                      "text-xs": index < 2,
                      "text-[10px]": index >= 2,
                    })}
                  />
                )
              )}
            </div>
            <div className="hidden lg:block col-span-1 my-auto ml-auto">
              <Image
                alt="flash sale"
                src={"/share/flash_text.png"}
                width={90}
                height={65}
                className="object-contain"
              />
              <span className="block mt-1 text-[#ffa500] text-xs font-semibold text-end">
                Available
              </span>
            </div>
          </div>
        ))}
        {roomTypeActive != undefined ? (
          <TypeRoomCruiseItem
            {...cruiseDetail.roomCruises[roomTypeActive]}
            onClose={() => setRoomTypeActive(undefined)}
          />
        ) : (
          <></>
        )}
      </div>
    </section>
  ) : (
    <></>
  );
}
