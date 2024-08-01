"use client";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import Image from "next/image";
import { useState } from "react";
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
          modules={[FreeMode, Thumbs, Navigation]}
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
        <Swiper
          onSwiper={setImageActive}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
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
      </div>
    </div>
  );
}
