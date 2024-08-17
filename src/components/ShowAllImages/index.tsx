"use client";

import {
  faChevronLeft,
  faChevronRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "next/image";
import { useRef, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const cx = classNames.bind({});

export function PopupShowAllImages({
  images,
  title,
  onCancel,
  imageActiveInit = 0,
}: {
  images: string[];
  title: string;
  onCancel: () => void;
  imageActiveInit?: number;
}): JSX.Element {
  const [imageActive, setImageActive] = useState<any>(null);

  // Create a ref to store the Swiper instance
  const swiperRef = useRef<any>(null);

  return (
    <div
      onClick={onCancel}
      className={cx(
        "fixed top-0 left-0 right-0 bottom-0 z-20 p-10 bg-[#021d1acc] h-full w-full overflow-hidden"
      )}
    >
      <FontAwesomeIcon
        onClick={onCancel}
        icon={faXmark}
        className="absolute top-6 right-6 text-white text-2xl cursor-pointer"
      />
      <h3 className="text-white mb-4 text-center font-semibold">{title}</h3>
      <div className="mb-5 h-[70%]">
        <Swiper
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: imageActive }}
          modules={[FreeMode, Thumbs]}
          className="swiper__image--tour-active"
          initialSlide={imageActiveInit}
        >
          {images?.map((image: string, index: number) => (
            <SwiperSlide key={index}>
              <Image
                onClick={(e) => e.stopPropagation()}
                alt={title}
                src={image}
                width={820}
                height={440}
                className="w-2/3 mx-auto h-full object-contain "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="relative">
        <FontAwesomeIcon
          onClick={(e) => {
            e.stopPropagation();
            if (swiperRef.current) {
              swiperRef.current.swiper.slidePrev(); // Move to the previous slide
            }
          }}
          className="hidden lg:block cursor-pointer w-5 h-5 absolute top-1/3 z-10 text-[#555555cc] bg-[#ffffff99] hover:bg-[#ffffffe6] drop-shadow-md p-3 rounded-full -left-5 "
          icon={faChevronLeft}
        />
        <Swiper
          ref={swiperRef} // Attach the ref to Swiper
          onSwiper={setImageActive}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          navigation={{
            enabled: true,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper-image-bottom"
          initialSlide={imageActiveInit}
        >
          {images?.map((image: string, index: number) => (
            <SwiperSlide key={index}>
              <Image
                onClick={(e) => e.stopPropagation()}
                alt={title}
                src={image}
                width={820}
                height={440}
                className="w-full h-full object-cover "
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <FontAwesomeIcon
          onClick={(e) => {
            e.stopPropagation();
            if (swiperRef.current) {
              swiperRef.current.swiper.slideNext(); // Move to the next slide
            }
          }}
          className="hidden lg:block cursor-pointer w-5 h-5 absolute top-1/3 z-10 text-[#555555cc] bg-[#ffffff99] hover:bg-[#ffffffe6] drop-shadow-md p-3 rounded-full -right-5 "
          icon={faChevronRight}
        />
      </div>
    </div>
  );
}
