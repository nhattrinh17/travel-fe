"use client";
import {
  faArrowsUpDownLeftRight,
  faBed,
  faEye,
  faLocationDot,
  faShip,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "next/image";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

interface Params {
  name: string;
  maxAdult: number;
  maxChildren: number;
  totalRooms: number;
  isViewOcean: boolean;
  typeBed: string;
  acreage: number;
  location: string;
  specialService: string[];
  amenities: string[];
  images: string[];
  content: string;
  nameCruise: string;
  onClose: () => void;
}

export function TypeRoomCruiseItem({
  acreage,
  amenities,
  content,
  images,
  isViewOcean,
  location,
  maxAdult,
  maxChildren,
  name,
  nameCruise,
  onClose,
  specialService,
  totalRooms,
  typeBed,
}: Params): JSX.Element {
  const [imageActive, setImageActive] = useState<any>(null);

  return (
    <div
      className="fixed left-0 right-0 bottom-0 top-0 py-4 bg-[#0000003b] z-20 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white shadow-md mx-auto rounded-md p-3 w-full lg:w-[950px] animate-slideDownSort"
      >
        <h4 className="text-[var(--secondary-color)] text-xl font-semibold">
          <FontAwesomeIcon icon={faShip} className="mr-2" />
          {nameCruise}
        </h4>
        <div
          onClick={onClose}
          className="cursor-pointer p-2 absolute top-1 right-1 text-[var(--text-color-default)]"
        >
          <FontAwesomeIcon icon={faXmark} className="text-xl" />
        </div>
        <div className="p-4 grid grid-cols-2 gap-5">
          <div>
            <Swiper
              thumbs={{ swiper: imageActive }}
              slidesPerView={1}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, FreeMode, Thumbs]}
              className="mySwiper"
              loop
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                    alt="image room"
                    src={img}
                    width={444}
                    height={265}
                    className="w-full object-contain"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="mt-2">
              <Swiper
                onSwiper={setImageActive}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper-bottom"
              >
                {images.slice(0, 4).map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      alt={image}
                      src={image}
                      width={820}
                      height={440}
                      className="w-full object-contain "
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div>
            <h5
              className={cx(
                "text-[var(--text-hover-default)] font-bold text-xl relative text-center",
                "text-main"
              )}
            >
              <p className="relative z-[3] bg-white inline-block">{name}</p>
            </h5>
            <div className="flex justify-center">
              {specialService.map((item, index) => (
                <span
                  key={index}
                  className="block mr-2 rounded-sm bg-[#DDD] text-[10px] text-[var(--text-color-default)] py-1 px-2"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-[var(--text-color-default)] py-2">{content}</p>
            <ul className="text-[var(--text-color-default)] text-xs flex items-center pt-1 pb-3">
              <li className="mx-2 ">
                <FontAwesomeIcon className="mr-2" icon={faUser} />
                <span>{maxAdult + maxChildren}</span>
              </li>
              <li
                className={cx("flex items-center mx-2 ", {
                  hidden: !isViewOcean,
                })}
              >
                <FontAwesomeIcon className="mr-2" icon={faEye} />
                <span>Ocean View</span>
              </li>
              <li className="flex items-center mx-2 ">
                <FontAwesomeIcon className="mr-2" icon={faBed} />
                <span>{typeBed}</span>
              </li>
              <li className="flex items-center mx-2 ">
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faArrowsUpDownLeftRight}
                />
                <span>{acreage}m²</span>
              </li>
              <li className="flex items-center mx-2 ">
                <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
                <span>{location}</span>
              </li>
            </ul>

            <p
              className={cx(
                "text-center relative text-[var(--text-color-default) text-base] py-1",
                "text-main"
              )}
            >
              <span className="inline-block bg-white relative z-[1]">
                Amenities
              </span>
            </p>
            <div className="grid grid-cols-2 gap-3">
              {amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex text-[var(--text-color-default)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
