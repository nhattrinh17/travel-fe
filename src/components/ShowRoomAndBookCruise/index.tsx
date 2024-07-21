"use client";

import { useAppDispatch, useAppSelector } from "@/lib";
import { DatePickerCustomer } from "@/uiCore";
import { faCheckSquare } from "@fortawesome/free-regular-svg-icons";
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
  const [showDetailSpecial, setShowDetailSpecial] = useState<number[]>([]);

  const [itinerariesSelect, setItinerariesSelect] = useState(
    cruiseDetail?.itineraries[0].name || ""
  );

  //   total person
  const [refreshDataMarts, setRefreshDataMarts] = useState(true);
  const dataMartsRoom =
    useRef<
      { typeRoom: string; adult: number; child: number; infant: number }[]
    >();
  const boxSelectRoomRef = useRef<HTMLDivElement>(null);

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
                { length: cruiseDetail.totalStar },
                (v, i) => i + 1
              ).map((i, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className="ml-1 w-[10px]"
                />
              ))}
            </div>
          </h3>
          <div className="flex items-center text-[#888888] text-[13px]">
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
            defaultValue={itinerariesSelect}
            onChange={(e) => setItinerariesSelect(e.target.value)}
            className={cx(
              "cursor-pointer w-full bg-transparent outline-none text-white border-b-[1px] border-b-[#fff] border-dashed flex items-center justify-between"
            )}
          >
            {cruiseDetail.itineraries.map((item, index: number) => (
              <option
                value={item.name}
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
              (pre, item, index) => (pre += item[`room${index + 1}`]),
              0
            )}
            Adult(s),
            {dataBooking.dataChildren.reduce(
              (pre, item, index) => (pre += item[`room${index + 1}`]),
              0
            ) +
              dataBooking.dataInfant.reduce(
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
              setRefreshDataMarts(true);
            } else {
              router.push(`/booking/cruise?name=${cruiseDetail.slug}`);
            }
          }}
          className={cx(
            "submit_search",
            "mx-2 rounded-xl w-[230px] p-3 uppercase text-white bg-[#d0720b]"
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
      {/* Cruise Booking */}
      <div className="">
        {dataMartsRoom.current?.map((item, index) => (
          <div key={index} className="py-5 px-3 bg-white shadow-sm mt-10">
            <div className="flex items-end justify-center text-lg text-[var(--secondary1-color)]">
              <FontAwesomeIcon
                icon={faBed}
                className="text-xl mr-1 relative -top-1"
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
            <div className="mt-6 border-[1px] border-[#ddd] border-r-0 flex bg-[var(--secondary1-color)]">
              <div className="flex-1 border-r-[1px] text-center border-[#ddd] px-3 py-[6px] text-white font-bold">
                <span>Room's info</span>
              </div>
              <div className="border-r-[1px] text-center border-[#ddd] px-3 py-[6px] text-white font-bold w-[10%]">
                <span>Pax</span>
              </div>
              <div className="border-r-[1px] text-center border-[#ddd] px-3 py-[6px] text-white font-bold w-[10%]">
                <span>Total in USD</span>
              </div>
              <div className="border-r-[1px] text-center border-[#ddd] px-3 py-[6px] text-white font-bold w-[10%]">
                <span>Notes</span>
              </div>
              <div className="border-r-[1px] text-center border-[#ddd] px-3 py-[6px] text-white font-bold w-[10%]">
                <span>Select</span>
              </div>
            </div>
            {cruiseDetail.roomCruises
              .filter(
                (room) =>
                  room.maxAdult >= item.adult &&
                  room.maxChildren >= item.child + item.infant &&
                  room.typeBed
                    .toLowerCase()
                    .includes(item.typeRoom.toLowerCase())
              )
              .map((room1, index1) => (
                <div
                  key={index1}
                  className="grid grid-cols-10 items-start border-[1px] border-[#ddd] border-r-0 "
                >
                  <div className="py-1 px-1 border-r-[1px] border-[#ddd] flex col-span-6">
                    <Image
                      alt="room"
                      src={room1.images[0]}
                      width={60}
                      height={53}
                      className="w-16 h-auto object-contain"
                    />
                    <div className="flex-1 ml-2">
                      <h4 className="text-base text-[var(--text-hover-default)] mb-1 font-bold">
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
                  <div className="flex items-center justify-between border-r-[1px] h-full text-center border-[#ddd] px-3 py-[6px]col-span-1">
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
                  <div className="border-r-[1px] w-full h-full text-center border-[#ddd] px-3 py-[6px]col-span-1">
                    <span className="text-[#fc8f30] h-full font-bold text-lg flex items-center justify-center">
                      {room1.price}$
                    </span>
                  </div>
                  <div className="border-r-[1px] h-full text-center border-[#ddd] px-3 py-[6px]col-span-1">
                    <span></span>
                  </div>
                  <div className="border-r-[1px] h-full flex justify-center text-center border-[#ddd] px-3 py-[6px]col-span-1">
                    <input
                      type="radio"
                      name={`select-room-${index}`}
                      className="bg-[var(--text-color-default)] checked:bg-red"
                    />
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
      {/* Room Detail */}
      {roomTypeActive != undefined ? (
        <TypeRoomCruiseItem
          {...cruiseDetail.roomCruises[roomTypeActive]}
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
