"use client";

import { useAppDispatch, useAppSelector } from "@/lib";
import { DatePickerCustomer } from "@/uiCore";
import { faCheckSquare, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleUp,
  faArrowsUpDownLeftRight,
  faBed,
  faBookmark,
  faCalendarDays,
  faCheck,
  faClock,
  faEye,
  faLocationDot,
  faStar,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import moment from "moment";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TypeRoomCruiseItem } from "../cruiseDetail/TypeRoomItem";
import styles from "./styles.module.scss";
import { setDataBookingCruise } from "@/lib/redux/app/cruise.slice";
import { useRouter } from "next/navigation";
import { TypeOtherServiceBooking, countries } from "@/constants";
import { bookingCruise } from "@/utils/api";
import { Tooltip } from "react-tooltip";

const cx = classNames.bind(styles);

export function ShowRoomAndBookCruise({
  bookingPage,
}: {
  bookingPage: boolean;
}): JSX.Element {
  const { cruiseDetail, booking: dataBooking } = useAppSelector(
    (state) => state.cruise
  );
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [roomTypeActive, setRoomTypeActive] = useState<number>();
  const dataRoomActive = cruiseDetail?.roomCruises.find(
    (r) => r.id == roomTypeActive
  );
  const [showDetailSpecial, setShowDetailSpecial] = useState<number[]>([]);

  const [dataRoomSelect, setDataRoomSelect] = useState<
    { indexRoom: number; nameRoom: string; price: number; image: string }[]
  >([]);

  const itinerariesSelect = useRef(cruiseDetail?.itineraries[0]?.id);
  // const [itinerariesSelect, setItinerariesSelect] = useState(

  // );

  //   total person
  const [refreshDataMarts, setRefreshDataMarts] = useState(true);
  const dataMartsRoom = useRef<
    { typeRoom: string; adult: number; child: number; infant: number }[]
  >([]);
  const boxSelectRoomRef = useRef<HTMLDivElement>(null);

  // Date Box
  const [showSelectRoom, setShowSelectRoom] = useState(false);
  const [date, setDate] = useState(new Date().toISOString());
  const [showSelectDate, setShowSelectDate] = useState(false);
  const boxSelectDateRef = useRef<HTMLDivElement>(null);

  // Other service
  const [dataOtherService, setDataOtherService] = useState<
    {
      name: string;
      description: string;
      adult?: number;
      child?: number;
      infant?: number;
      time?: string;
      price?: number;
    }[]
  >([]);
  const [dataTransfer, setDataTransfer] = useState<{
    price?: number;
    name?: string;
    address?: string;
    options?: string[];
  }>({});
  const [optionTransfer, setOptionTransfer] = useState<string>();

  // contact info
  const [phoneCountry, setPhoneCountry] = useState(countries[0].dial_code);
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState(countries[0].name);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<number>();
  const [otherRequest, setOtherRequest] = useState("");
  const [textWarning, setTextWarning] = useState("");

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

  useEffect(() => {
    if (refreshDataMarts) {
      const newData: any[] = [];
      Array.from({ length: dataBooking.totalRom }, (v, i) => i + 1).forEach(
        (i, index) => {
          const adultIndex = dataBooking.dataAdult.find((e) => e[`room${i}`]);
          const childIndex = dataBooking.dataChildren.find(
            (e) => e[`room${i}`]
          );
          const infantIndex = dataBooking.dataInfant.find((e) => e[`room${i}`]);
          const typeRoomIndex = dataBooking.dataTypeRoom.find(
            (e) => e[`room${i}`]
          );
          newData.push({
            typeRoom: typeRoomIndex ? typeRoomIndex[`room${i}`] : "Double",
            adult: adultIndex ? adultIndex[`room${i}`] : 2,
            child: childIndex ? childIndex[`room${i}`] : 0,
            infant: infantIndex ? infantIndex[`room${i}`] : 0,
          });
        }
      );
      dataMartsRoom.current = newData;
      setRefreshDataMarts(false);
    }
  }, [refreshDataMarts]);

  const handleScrollToElement = (event: any) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const yOffset = -200; // Khoảng cách từ đầu trang
      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return cruiseDetail ? (
    <section className="py-4 ">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h3
          className={cx(
            "text-xl mb-4 text-[var(--secondary-color)] font-bold",
            {
              hidden: bookingPage,
            }
          )}
        >
          <FontAwesomeIcon
            icon={faCheckSquare}
            className="text-[#25ab4b] text-2xl mr-3"
          />
          Select {cruiseDetail.name} Packages with Best Offers
        </h3>
        <div className="mb-4">
          <h3
            className={cx(
              "text-xl text-[var(--secondary-color)] font-bold flex items-center",
              {
                hidden: !bookingPage,
              }
            )}
          >
            {cruiseDetail.name}
            <div className="ml-2 text-[orange]">
              {Array.from(
                { length: cruiseDetail.totalStar + 1 },
                (v, i) => i + 1
              ).map((i, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className="mr-1 text-[orange] text-xs"
                />
              ))}
            </div>
          </h3>
          <div
            className={cx("flex items-center text-[#888888] text-[13px]", {
              hidden: !bookingPage,
            })}
          >
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
        </div>

        <div className="flex mb-4 text-[#25ab4b]">
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
      <form
        id="check-rate"
        className="bg-[var(--secondary1-color)] rounded-xl grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-8 p-3 font-bold"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="px-2 w-full mb-0 p-3 flex flex-col lg:flex-row items-center font-bold  h-full ">
          <select
            defaultValue={itinerariesSelect.current}
            onChange={(e) => (itinerariesSelect.current = +e.target.value)}
            className={cx(
              "cursor-pointer w-full bg-transparent outline-none text-white border-b-[1px] border-b-[#fff] border-dashed flex items-center justify-between"
            )}
          >
            {cruiseDetail.itineraries.map((item, index: number) => (
              <option
                value={item.id}
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
            {dataBooking?.totalRom} Room(s),
            {dataBooking.dataAdult.reduce(
              (pre, item, index) => (pre += item[`room${index + 1}`] || 0),
              0
            )}
            Adult(s),
            {dataBooking.dataChildren.reduce(
              (pre, item, index) => (pre += item[`room${index + 1}`] || 0),
              0
            ) +
              dataBooking.dataInfant.reduce(
                (pre, item, index) => (pre += item[`room${index + 1}`] || 0),
                0
              )}
            Children
          </label>

          <div
            ref={boxSelectRoomRef}
            className={cx(
              "absolute z-50 top-[calc(100%+20px)] max-w-[calc(100%+32px)] lg:max-w-max lg:w-[415px] left-0 p-3 pb-8 bg-white shadow-[0_6px_13px_-4px_#1816184d] border-[1px] border-[#ccc] rounded-md text-black",
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
                defaultValue={dataBooking.totalRom}
                onChange={(e) =>
                  dispatch(
                    setDataBookingCruise({
                      totalRom: +e.target.value,
                    })
                  )
                }
              >
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
              </select>
            </div>
            {Array.from({ length: dataBooking.totalRom }, (v, i) => i + 1).map(
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
                      <select
                        onChange={(e) => {
                          const newData = JSON.parse(
                            JSON.stringify(dataBooking.dataTypeRoom)
                          );
                          const nameRoom = `room${i}`;
                          const dataRom = newData.find((r: any) => r[nameRoom]);
                          if (dataRom) {
                            dataRom[nameRoom] = e.target.value;
                          } else {
                            newData.push({
                              [nameRoom]: e.target.value,
                            });
                          }
                          dispatch(
                            setDataBookingCruise({
                              dataTypeRoom: newData,
                            })
                          );
                        }}
                        defaultValue={"Double"}
                        className="outline-none cursor-pointer border-[1px] border-[#d7d7d7] py-1 pl-1 pr-3"
                      >
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
                          const newData = JSON.parse(
                            JSON.stringify(dataBooking.dataAdult)
                          );
                          const nameRoom = `room${i}`;
                          const dataRom = newData.find(
                            (r: any) => r[nameRoom] >= 0
                          );
                          if (dataRom) {
                            dataRom[nameRoom] = +e.target.value;
                          } else {
                            newData.push({
                              [nameRoom]: +e.target.value,
                            });
                          }
                          dispatch(
                            setDataBookingCruise({
                              dataAdult: newData,
                            })
                          );
                        }}
                        defaultValue={2}
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
                          const newData = JSON.parse(
                            JSON.stringify(dataBooking.dataChildren)
                          );
                          const nameRoom = `room${i}`;
                          const dataRom = newData.find(
                            (r: any) => r[nameRoom] >= 0
                          );
                          if (dataRom) {
                            dataRom[nameRoom] = +e.target.value;
                          } else {
                            newData.push({
                              [nameRoom]: +e.target.value,
                            });
                          }
                          dispatch(
                            setDataBookingCruise({
                              dataChildren: newData,
                            })
                          );
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
                          const newData = JSON.parse(
                            JSON.stringify(dataBooking.dataInfant)
                          );
                          const nameRoom = `room${i}`;
                          const dataRom = newData.find(
                            (r: any) => r[nameRoom] >= 0
                          );
                          if (dataRom) {
                            dataRom[nameRoom] = +e.target.value;
                          } else {
                            newData.push({
                              [nameRoom]: +e.target.value,
                            });
                          }
                          dispatch(
                            setDataBookingCruise({
                              dataInfant: newData,
                            })
                          );
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
          onClick={() => {
            if (bookingPage) {
              // console.log("Before setDataRoomSelect:", dataRoomSelect);
              setDataRoomSelect((pre) => {
                return [];
              });
              // console.log("After setDataRoomSelect:", dataRoomSelect);
              setRefreshDataMarts(true);
            } else {
              router.push(`/booking/cruise?name=${cruiseDetail.slug}`);
            }
          }}
          className={cx(
            "submit_search",
            "lg:mx-2  rounded-xl w-full lg:w-[230px] p-3 uppercase text-white bg-[#d0720b]"
          )}
        >
          Check room rates
        </button>
      </form>
      {/* Cruise Detail */}
      <div
        className={cx("shadow-sm bg-white mt-5 p-10", {
          hidden: bookingPage,
        })}
      >
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
        {cruiseDetail.roomCruises
          .filter(
            (r) =>
              r.itinerariesId ==
              (itinerariesSelect.current || cruiseDetail?.itineraries[0]?.id)
          )
          .map((room, index: number) => (
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
                    onClick={() => setRoomTypeActive(room.id)}
                    className="block cursor-pointer text-[13px] text-[var(--text-color-default)] mt-3"
                  >
                    More info »
                  </span>
                </figure>
                <div className="lg:ml-5">
                  <h3
                    onClick={() => setRoomTypeActive(room.id)}
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
                {Array.from({ length: room.maxAdult }, (v, i) => i + 1).map(
                  (i, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faUser}
                      className={cx("text-[#aaa] mr-[1px] text-xs")}
                    />
                  )
                )}
                {Array.from({ length: room.maxChildren }, (v, i) => i + 1).map(
                  (i, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faUser}
                      className={cx("text-[#aaa] mr-[1px] text-[10px]")}
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
      </div>
      <ul
        className={cx("flex pt-10 text-[var(--text-color-default)]", {
          hidden: !bookingPage,
        })}
      >
        <li
          className={cx("flex-1 text-center relative", "booking-steps__item")}
        >
          <a
            href="#check-rate"
            onClick={handleScrollToElement}
            data-tooltip-id={`tooltip-check-rate`}
            data-tooltip-content={"Check room rate"}
            data-tooltip-place="top"
            className="mx-auto text-base hover:bg-[var(--text-hover-default)] hover:text-white cursor-pointer relative z-[1] flex items-center w-10 h-10 justify-center rounded-full bg-white border-[1px] border-[#f5f5f5]"
          >
            1
            <Tooltip id={`tooltip-check-rate`} />
          </a>
          <p className="text-xs">Check room rate</p>
        </li>
        <li
          className={cx("flex-1 text-center relative", "booking-steps__item")}
        >
          <a
            href="#select-room"
            onClick={handleScrollToElement}
            data-tooltip-id={`tooltip-select-room`}
            data-tooltip-content={"Select your room(s)"}
            data-tooltip-place="top"
            className="mx-auto text-base hover:bg-[var(--text-hover-default)] hover:text-white cursor-pointer relative z-[1] flex items-center w-10 h-10 justify-center rounded-full bg-white border-[1px] border-[#f5f5f5]"
          >
            2
            <Tooltip id={`tooltip-select-room`} />
          </a>
          <p className="text-xs">Select your room(s)</p>
        </li>
        <li
          className={cx("flex-1 text-center relative", "booking-steps__item")}
        >
          <a
            href="#submit-booking"
            onClick={handleScrollToElement}
            data-tooltip-id={`tooltip-submit-booking`}
            data-tooltip-content={"Confirm & submit"}
            data-tooltip-place="top"
            className="mx-auto text-base hover:bg-[var(--text-hover-default)] hover:text-white cursor-pointer relative z-[1] flex items-center w-10 h-10 justify-center rounded-full bg-white border-[1px] border-[#f5f5f5]"
          >
            3
            <Tooltip id={`tooltip-submit-booking`} />
          </a>
          <p className="text-xs">Confirm & submit</p>
        </li>
      </ul>
      {/* Cruise Booking */}
      <div
        id="select-room"
        className={cx({
          hidden: !bookingPage,
        })}
      >
        {dataMartsRoom.current?.map((item, index) => (
          <div
            key={index}
            className="py-5 px-3 bg-white shadow-sm mt-10 rounded-md"
          >
            <div className="flex items-end justify-center flex-wrap text-xs lg:text-lg text-[var(--secondary1-color)]">
              <FontAwesomeIcon
                icon={faBed}
                className="text-sm lg:text-xl mr-1 relative -top-1"
              />
              <span className="font-bold">Room {index + 1}</span>:
              <span className="ml-1">{item.typeRoom} -</span>
              <span className="font-bold mx-1">{item.adult} Adult</span>
              <span className="text-xs">{"(>11)"}</span>
              <span className="font-bold mx-1">,{item.child} Child</span>
              <span className="text-xs">{"(5 - 11)"}</span>
              <span className="font-bold mx-1">, {item.infant} Infant </span>
              <span className="text-xs">{"(0 - 4)"}</span>
            </div>
            <div className="mt-6 border-[1px] border-[#ddd] border-r-0 grid grid-cols-12 text-xs lg:text-sm bg-[var(--secondary1-color)]">
              <div className="flex-1 border-r-[1px] text-center border-[#ddd] py-[6px] text-white font-bold col-span-7 lg:col-span-6">
                <span>Room's info</span>
              </div>
              <div className="hidden lg:block border-r-[1px] text-center border-[#ddd] py-[6px] text-white font-bold col-span-2">
                <span>Pax</span>
              </div>
              <div className="my-auto border-r-[1px] text-center border-[#ddd] py-[6px] text-white font-bold col-span-3 lg:col-span-1">
                <span>Price per person</span>
              </div>
              <div className="border-r-[1px] text-center hidden lg:block border-[#ddd] py-[6px] text-white font-bold col-span-2">
                <span>Notes</span>
              </div>
              <div className="border-r-[1px] text-center border-[#ddd] py-[6px] text-white font-bold col-span-2 lg:col-span-1">
                <span>Select</span>
              </div>
            </div>
            {cruiseDetail.roomCruises
              .filter(
                (room) =>
                  room.itinerariesId ==
                    (itinerariesSelect.current ||
                      cruiseDetail?.itineraries[0]?.id) &&
                  room.maxAdult >= item.adult &&
                  room.maxChildren >= item.child + item.infant
                // && room.typeBed
                //   .toLowerCase()
                //   .includes(item.typeRoom.toLowerCase())
              )
              // .sort((r1, r2) => r1.price - r2.price)
              .map((room1, index1) => (
                <div
                  key={index1}
                  className="grid grid-cols-12 hover:bg-[#eff9eb] items-start border-[1px] border-[#ddd] border-r-0 "
                >
                  <div className="py-1 px-1 border-r-[1px] border-[#ddd] flex flex-col lg:flex-row col-span-7 lg:col-span-6">
                    <Image
                      alt="room"
                      src={room1.images[0]}
                      width={60}
                      height={53}
                      className="w-16 h-auto object-contain"
                    />
                    <div className="flex-1 ml-2">
                      <h4
                        onClick={() => setRoomTypeActive(room1.id)}
                        className="text-base text-[var(--text-hover-default)] mb-1 font-bold hover:underline cursor-pointer"
                      >
                        {room1.name}
                      </h4>
                      <div className="flex">
                        {room1.specialService.map(
                          (item: any, index: number) => (
                            <span
                              key={index}
                              className="block w-fit mr-2 rounded-sm bg-[#DDD] text-[10px] text-[var(--text-color-default)] py-1 px-2"
                            >
                              {item}
                            </span>
                          )
                        )}
                      </div>
                      <div className="flex mt-1">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="mr-2 text-[var(--text-hover-default)]"
                        />
                        <span className="text-[var(--text-color-default)] text-[10px]">
                          Included tax 10%, Service charge 5%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-between border-r-[1px] h-full text-center border-[#ddd] py-[6px] col-span-2">
                    <div className="flex items-end justify-center w-full">
                      {Array.from(
                        { length: room1.maxAdult },
                        (v, i) => i + 1
                      ).map((i, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={faUser}
                          className={cx("text-[#aaa] mr-[1px] text-sm")}
                        />
                      ))}
                      {Array.from(
                        { length: room1.maxChildren },
                        (v, i) => i + 1
                      ).map((i, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={faUser}
                          className={cx("text-[#aaa] mr-[1px] text-xs")}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="border-r-[1px] w-full h-full text-center border-[#ddd] py-[6px] col-span-3 lg:col-span-1">
                    <span className=" h-full text-[#fc8f30] font-bold text-lg flex items-center justify-center">
                      {room1.price}$
                    </span>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: room1.notes,
                    }}
                    className="border-r-[1px] h-full text-[var(--text-color-default)] px-2 hidden lg:flex justify-center items-center border-[#ddd] py-[6px] col-span-2"
                  ></div>
                  <div className="border-r-[1px] h-full flex justify-center text-center border-[#ddd] py-[6px] col-span-2 lg:col-span-1">
                    <input
                      onChange={() => {
                        setDataRoomSelect((pre) => {
                          const newData = [...pre];
                          const dataOld = newData?.find(
                            (i) => i.indexRoom == index + 1
                          );

                          if (dataOld) {
                            dataOld.nameRoom = room1.name;
                            dataOld.price = room1.price;

                            return newData;
                          } else {
                            newData.push({
                              indexRoom: index + 1,
                              nameRoom: room1.name,
                              price: room1.price,
                              image: room1.images[0],
                            });

                            return newData;
                          }
                        });
                      }}
                      type="radio"
                      name={`select-room-${index}`}
                      className="bg-[var(--text-color-default)] checked:"
                    />
                  </div>
                </div>
              ))}
          </div>
        ))}
        {/* Other service */}
        <div className="mt-10 bg-white rounded-md py-5 px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 text-black">
          <div className="h-auto">
            <h6 className="border-b-[1px] border-[#f5f5f5] text-[var(--text-hover-default)] text-xl font-bold pb-3">
              Other Service
            </h6>
            <div className="py-3">
              {cruiseDetail.otherServiceBookings
                .filter((i) => i.type == TypeOtherServiceBooking.other)
                .map((service, index) => (
                  <div key={index} className="">
                    <div className="flex">
                      <input
                        onChange={(e) => {
                          const checkService = dataOtherService.find(
                            (item) => item?.name == service.name
                          );
                          if (!e.target.checked && checkService) {
                            setDataOtherService((pre) => {
                              return pre.filter(
                                (item) => item?.name != service.name
                              );
                            });
                          } else if (e.target.checked && !checkService) {
                            setDataOtherService((pre) => {
                              return [
                                ...pre,
                                {
                                  name: service.name,
                                  description: service.description,
                                  price: service.price,
                                  time: "8:00",
                                },
                              ];
                            });
                          }
                        }}
                        checked={dataOtherService.some(
                          (item) => item?.name == service.name
                        )}
                        id={`other-service-${index}`}
                        type="checkbox"
                        className="mr-2"
                      />
                      <label
                        htmlFor={`other-service-${index}`}
                        dangerouslySetInnerHTML={{
                          __html: service.description,
                        }}
                      ></label>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-4 ml-2">
                      <div>
                        <select
                          value={
                            dataOtherService.find(
                              (item) => item?.name == service.name
                            )?.adult || 0
                          }
                          onChange={(e) => {
                            setDataOtherService((pre) => {
                              const newDta = [...pre];
                              const checkService = newDta.find(
                                (item) => item?.name == service.name
                              );
                              if (checkService) {
                                checkService.adult = +e.target.value;
                                return newDta;
                              } else {
                                return [
                                  ...pre,
                                  {
                                    name: service.name,
                                    adult: +e.target.value,
                                    description: service.description,
                                    price: service.price,
                                    time: "8:00",
                                  },
                                ];
                              }
                            });
                          }}
                          className="px-3 border-[1px] rounded-md w-full lg:w-auto outline-none py-[2px]"
                        >
                          <option value={0}>Adult</option>
                          {Array.from({ length: 11 }, (v, i) => i + 1).map(
                            (i, index) => (
                              <option key={index} value={i}>
                                {i}
                              </option>
                            )
                          )}
                        </select>
                      </div>

                      <div>
                        <select
                          value={
                            dataOtherService.find(
                              (item) => item?.name == service.name
                            )?.child || 0
                          }
                          onChange={(e) => {
                            setDataOtherService((pre) => {
                              const newDta = [...pre];
                              const checkService = newDta.find(
                                (item) => item?.name == service.name
                              );
                              if (checkService) {
                                checkService.child = +e.target.value;
                                return newDta;
                              } else {
                                return [
                                  ...pre,
                                  {
                                    name: service.name,
                                    child: +e.target.value,
                                    description: service.description,
                                    price: service.price,
                                    time: "8:00",
                                  },
                                ];
                              }
                            });
                          }}
                          className="px-3 border-[1px] rounded-md w-full lg:w-auto outline-none py-[2px]"
                        >
                          <option value={0}>Child</option>
                          {Array.from({ length: 4 }, (v, i) => i + 1).map(
                            (i, index) => (
                              <option key={index} value={i}>
                                {i}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                      <div>
                        <select
                          value={
                            dataOtherService.find(
                              (item) => item?.name == service.name
                            )?.infant || 0
                          }
                          onChange={(e) => {
                            setDataOtherService((pre) => {
                              const newDta = [...pre];
                              const checkService = newDta.find(
                                (item) => item?.name == service.name
                              );
                              if (checkService) {
                                checkService.infant = +e.target.value;
                                return newDta;
                              } else {
                                return [
                                  ...pre,
                                  {
                                    name: service.name,
                                    infant: +e.target.value,
                                    description: service.description,
                                    price: service.price,
                                    time: "8:00",
                                  },
                                ];
                              }
                            });
                          }}
                          className="px-3 border-[1px] rounded-md w-full lg:w-auto outline-none py-[2px]"
                        >
                          <option value={0}>Infant</option>
                          {Array.from({ length: 4 }, (v, i) => i + 1).map(
                            (i, index) => (
                              <option key={index} value={i}>
                                {i}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                      <div>
                        <select
                          value={
                            dataOtherService.find(
                              (item) => item?.name == service.name
                            )?.time || ""
                          }
                          onChange={(e) => {
                            setDataOtherService((pre: any) => {
                              const newDta = [...pre];
                              const checkService = newDta.find(
                                (item) => item?.name == service.name
                              );
                              if (checkService) {
                                checkService.time = e.target.value;
                                return newDta;
                              } else {
                                return [
                                  ...pre,
                                  {
                                    name: service.name,
                                    time: +e.target.value,
                                    price: service.price,
                                  },
                                ];
                              }
                            });
                          }}
                          className="px-3 border-[1px] w-full lg:w-auto rounded-md outline-none py-[2px]"
                        >
                          <option value={"8:00"}>8: 00 AM</option>
                          {/* <option value={"10:30"}>10:30</option>
                          <option value={"11:30"}>11:30</option>
                          <option value={"13:30"}>13:30</option>
                          <option value={"14:30"}>14:30</option> */}
                        </select>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="">
            <h6 className="border-b-[1px] border-[#f5f5f5] text-[var(--text-hover-default)] text-xl font-bold pb-3">
              Transfer(optional)
            </h6>
            <div className="py-3">
              {cruiseDetail.otherServiceBookings
                .filter((i) => i.type == TypeOtherServiceBooking.transfer)
                .map((service, index) => (
                  <div key={index} className="">
                    <div className="flex items-start">
                      <input
                        defaultChecked={service.name == optionTransfer}
                        onChange={() => {
                          setOptionTransfer(service.name);

                          setDataTransfer((pre) => {
                            return {
                              name: service.name,
                              address: "",
                              price: service.price,
                              options: [],
                            };
                          });
                        }}
                        name={`service-transfer`}
                        type="radio"
                        className="mr-2 mt-1"
                      />
                      <div className="">
                        <label
                          dangerouslySetInnerHTML={{
                            __html: service.description,
                          }}
                        ></label>
                        <div
                          className={cx("ml-2", {
                            hidden: service.name != optionTransfer,
                          })}
                        >
                          <input
                            type="text"
                            value={dataTransfer.address}
                            onChange={(e) => {
                              setDataTransfer((pre) => {
                                if (pre) {
                                  const newData = { ...pre };
                                  newData.address = e.target.value;
                                  return newData;
                                } else {
                                  return {};
                                }
                              });
                            }}
                            placeholder="Pick-up & Drop-off Address"
                            className="border-[1px] outline-none w-full mt-3 text-xs py-[6px] px-3"
                          />
                          <div className="flex justify-between mt-3 text-[var(--text-color-default)]">
                            {service.options?.trim() ? (
                              service.options
                                .split("*_*")
                                .map((option, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center"
                                  >
                                    <input
                                      onChange={(e) => {
                                        setDataTransfer((pre) => {
                                          if (pre) {
                                            const newData = { ...pre };
                                            if (!e.target.checked) {
                                              newData.options =
                                                newData.options?.filter(
                                                  (i) => i != option
                                                );
                                              return newData;
                                            } else {
                                              if (newData.options) {
                                                newData.options = [
                                                  ...newData.options,
                                                  option,
                                                ];
                                              }
                                              return newData;
                                            }
                                          } else {
                                            return {};
                                          }
                                        });
                                      }}
                                      checked={dataTransfer.options?.includes(
                                        option
                                      )}
                                      type="checkbox"
                                      className="mr-1"
                                    />
                                    <span className="text-xs">{option}</span>
                                  </div>
                                ))
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* Booking Summary */}
        <div
          className={cx(
            "mt-10 py-5 px-6 border-[1px] border-dotted bg-white shadow-sm",
            {
              hidden:
                dataRoomSelect?.length < dataBooking.totalRom || !bookingPage,
            }
          )}
        >
          <h3
            className={cx(
              "text-xl text-center pb-4 text-[var(--secondary-color)] font-bold border-b-[1px] border-[#f5f5f5]"
            )}
          >
            <FontAwesomeIcon
              icon={faCheckSquare}
              className="text-[#25ab4b] text-2xl mr-3"
            />
            Booking Summary
          </h3>

          <div className="py-4 lg:w-2/3 mx-auto">
            <div className="flex mt-1 text-[var(--text-hover-default)] items-center text-base font-bold pb-2">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              <span className="">
                {cruiseDetail.itineraries.find(
                  (i) => i.id == itinerariesSelect.current
                )?.name || cruiseDetail?.itineraries[0]?.name}
              </span>
            </div>
            <div className="flex mt-1 text-[var(--text-hover-default)] items-center text-base font-bold pb-2">
              <FontAwesomeIcon icon={faCheck} className="mr-2" />
              <span className="">
                Departure Date: {moment(date).format("YYYY/MM/DD")}
              </span>
            </div>
            <div className="py-2 border-t-[1px] border-b-[1px] border-dotted">
              {dataRoomSelect.map((item, index) => (
                <div
                  className="flex justify-between items-end bg-[#fbfbfb] mb-4"
                  key={index}
                >
                  <div className="flex">
                    <Image
                      alt="room"
                      src={item.image}
                      width={60}
                      height={53}
                      className="w-16 h-auto object-contain"
                    />
                    <div className="ml-2">
                      <p className="text-sm">
                        <span className="font-bold text-[var(--text-hover-default)]">
                          Room 1:
                        </span>
                        {item.nameRoom}
                      </p>
                      <p className="text-[var(--text-color-default)] text-sm">
                        - Included tax 10%, Service charge 5%
                      </p>
                    </div>
                  </div>

                  <div className="min-w-8">
                    <span className="text-[#fe8802] font-bold">
                      {item.price} $
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={cx("pb-2 border-b-[1px] border-dotted", {
                hidden: !dataTransfer.name,
              })}
            >
              <div className="flex items-end mt-1 text-[var(--text-hover-default)] font-bold">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="mr-2 relative bottom-1"
                />
                <span className="">Transportation:</span>

                <span className="block ml-2 text-sm text-[var(--text-color-default)]">
                  {dataTransfer.name}
                </span>
              </div>

              <div className="ml-2 text-[var(--text-color-default)] text-sm">
                <p className="mb-[2px]">
                  -Pick-up address: {dataTransfer.address}
                </p>
                {dataTransfer.options?.map((option, index) => (
                  <p key={index} className="mb-[2px]">
                    -{option}
                  </p>
                ))}
              </div>
            </div>

            <div
              className={cx("py-2 border-b-[1px] border-dotted", {
                hidden: !dataOtherService.length,
              })}
            >
              <div className="flex mt-1 text-[var(--text-hover-default)] font-bold">
                <FontAwesomeIcon icon={faCheck} className="mr-2" />
                <span className="text-sm"> Other services:</span>
              </div>

              <div className="text-[var(--text-color-default)] text-sm">
                {dataOtherService.map((service, index) => (
                  <p key={index} className="text-sm ml-3 font-normal">
                    -{service.name} (Departure :{service.time}, {service.adult}
                    Adult, {service.child} Children, {service.infant} Infant)
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div
          id="submit-booking"
          className="mt-10 bg-white rounded-md py-5 px-6 text-black"
        >
          <h6 className="text-center border-b-[1px] border-[#f5f5f5] text-[var(--text-hover-default)] text-2xl font-bold pb-3">
            <FontAwesomeIcon icon={faHeart} className="mr-2" />
            Contact Info
          </h6>
          <div className="grid grid-cols-3 text-xs">
            <div className="hidden lg:flex flex-col items-center mt-5 ">
              <p className="text-[var(--text-color-default)] text-sm">
                Book with{" "}
              </p>
              <Image
                alt="confidence"
                src={"/booking/choice2023.webp"}
                width={128}
                height={129}
                className="object-contain"
              />
              <p className="my-2">Travelers' Choice by Tripadvisor</p>
              <Image
                alt="confidence"
                src={"/booking/bestprice.jpg"}
                width={118}
                height={92}
                className="object-contain"
              />
              <p className="my-2">Best Price Guarantee Policy</p>
              <Image
                alt="confidence"
                src={"/booking/viet-logo.png"}
                width={118}
                height={92}
                className="object-contain"
              />
              <p className="my-2">
                International Tour License No.01-638/GPLHQT
              </p>
              <div className="h-[50px] flex my-1">
                <div className="bg-[url(/home/footer/chl_partner.png)] bg-no-repeat bg-[-66px_0] bg-[length:835px] w-[85px] h-full opacity-60 hover:opacity-100"></div>
                <div className="bg-[url(/home/footer/chl_partner.png)] bg-no-repeat bg-[-154px_0px] bg-[length:712px] w-[85px] h-full opacity-60 hover:opacity-100"></div>
                <div className="bg-[url(/home/footer/chl_partner.png)] bg-no-repeat bg-[-522px_0px] bg-[length:650px] w-[130px] h-full opacity-60 hover:opacity-100"></div>
              </div>
              <p className="my-2">
                Official Member: ATTA#4516, ASTA#900260032, FTA#3227385
              </p>
            </div>

            <div className="col-span-3 lg:col-span-2">
              <form
                className="block lg:grid grid-cols-2 gap-x-5 gap-y-3 mt-5"
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (dataRoomSelect?.length < dataBooking.totalRom)
                    setTextWarning("Please kindly select your rooms...");
                  else {
                    const dataRoomSelectSend = dataMartsRoom.current.map(
                      (item, index) => {
                        return {
                          nameRoom: dataRoomSelect.find(
                            (i) => i.indexRoom == index + 1
                          )?.nameRoom,
                          price: dataRoomSelect.find(
                            (i) => i.indexRoom == index + 1
                          )?.price,
                          indexRoom: index + 1,
                          ...item,
                        };
                      }
                    );
                    const dataSend = {
                      cruiseId: cruiseDetail.id,
                      fullName,
                      country,
                      email,
                      phone: `${phoneCountry} ${phone}`,
                      typeItineraries:
                        cruiseDetail.itineraries.find(
                          (i) => i.id == itinerariesSelect.current
                        )?.name || cruiseDetail?.itineraries[0].name,
                      date: moment(date).format("YYYY-MM-DD"),
                      totalRoom: dataBooking.totalRom,
                      totalAdult: dataBooking.dataAdult.reduce(
                        (pre, item, index) => (pre += item[`room${index + 1}`]),
                        0
                      ),
                      totalChildren:
                        dataBooking.dataChildren.reduce(
                          (pre, item, index) =>
                            (pre += item[`room${index + 1}`]),
                          0
                        ) +
                        dataBooking.dataInfant.reduce(
                          (pre, item, index) =>
                            (pre += item[`room${index + 1}`]),
                          0
                        ),
                      otherRequest,
                      dataRoomSelect: dataRoomSelectSend,
                      otherServices: dataOtherService,
                      dataTransfer,
                    };
                    const res = await bookingCruise(dataSend);
                    console.log("🚀 ~ onSubmit={ ~ res:", res);
                    if (res?.data) {
                      router.push("/booking/success");
                    }
                  }
                }}
              >
                <div className="">
                  <label className="block font-bold text-sm text-[var(--text-hover-default)] mb-2">
                    Full Name*
                  </label>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    name="name"
                    className="w-full text-sm px-3 py-3 outline-none border-[1px]"
                  />
                </div>
                <div className="w-full">
                  <label className="block font-bold text-sm text-[var(--text-hover-default)] mb-2">
                    Country*
                  </label>
                  <select
                    defaultValue={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full cursor-pointer text-sm pl-3 pr-7 lg:px-3 py-3 outline-none border-[1px]"
                  >
                    {countries.map((country) => (
                      <option key={country.code} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="">
                  <label className="block font-bold text-sm text-[var(--text-hover-default)] mb-2">
                    Email Address*
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    name="email"
                    type="email"
                    className="w-full text-sm px-3 py-3 outline-none border-[1px]"
                  />
                </div>
                <div className="">
                  <label className="block font-bold text-sm text-[var(--text-hover-default)] mb-2">
                    Phone*
                  </label>
                  <div className="relative w-full text-sm h-[46px] px-3 py-3 outline-none border-[1px]">
                    <select
                      id="select-phone"
                      defaultValue={phoneCountry}
                      onChange={(e) => setPhoneCountry(e.target.value)}
                      className="absolute cursor-pointer text-transparent bg-transparent top-0 px-3 z-[1] left-0 right-0 bottom-0 w-full text-sm py-3 outline-none"
                    >
                      {countries.map((country) => (
                        <option
                          key={country.code}
                          value={country.dial_code}
                          className="text-black"
                        >
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <label className="absolute top-0 left-3 bottom-0 flex items-center justify-center w-20 bg-white border-r-[1px]">{`${
                      countries.find((i) => i.dial_code == phoneCountry)?.code
                    }(${phoneCountry})`}</label>
                    <input
                      value={phone}
                      onChange={(e) => {
                        if (Number(e.target.value) > 0) {
                          setPhone(+e.target.value);
                        } else {
                          setPhone(0);
                        }
                      }}
                      required
                      name="phone"
                      className="outline-none absolute top-0 right-0 bottom-0 left-[90px] z-[2] pl-2"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="block font-bold text-sm text-[var(--text-hover-default)] mb-2">
                    Other Request
                  </label>
                  <textarea
                    value={otherRequest}
                    onChange={(e) => setOtherRequest(e.target.value)}
                    name="name"
                    className="w-full min-h-[160px] text-sm px-3 py-3 outline-none border-[1px]"
                  />
                </div>
                <span
                  className={cx("block py-1", {
                    "font-bold text-red-500 text-base": textWarning,
                  })}
                >
                  {textWarning ? textWarning : "{ * fields are required }"}
                </span>
                <button
                  type="submit"
                  className={cx(
                    "submit_search",
                    "col-span-2 w-full mx-2 rounded-xl p-3 font-bold text-base uppercase text-white bg-[#d0720b]"
                  )}
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Room Detail */}
      {dataRoomActive ? (
        <TypeRoomCruiseItem
          {...dataRoomActive}
          nameCruise={cruiseDetail.name}
          onClose={() => setRoomTypeActive(undefined)}
        />
      ) : (
        <></>
      )}
    </section>
  ) : (
    <></>
  );
}
