"use client";

import { CruiseHomeLuxuryOrBudget } from "@/components/home/CruiseHomeLuxuryOrBudget";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import { useCruiseLuxury } from "@/utils/handleCruise";

export function LuxuryCruise(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);

  const { data } = useCruiseLuxury();

  return (
    <section ref={sectionRef} className="bg-[#f1f1f1] py-5">
      <div className="container">
        <h2 className="my-3 text-2xl font-bold text-[var(--secondary-color)] w-full text-center relative line-text">
          Luxury Cruises
        </h2>
      </div>
      <div className="relative container pt-5">
        <FontAwesomeIcon
          onClick={() => {
            if (sectionRef.current) {
              const preBtnSwiper = sectionRef.current.querySelector(
                ".swiper-button-prev"
              );
              if (preBtnSwiper) (preBtnSwiper as HTMLElement).click();
            }
          }}
          className="cursor-pointer w-5 h-5 absolute top-1/3 -translate-y-1/2 z-10 text-[#555555cc] bg-[#ffffff99] hover:bg-[#ffffffe6] drop-shadow-md p-3 rounded-full -left-2 "
          icon={faChevronLeft}
        />

        <div className="hidden lg:block">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={{}}
            modules={[Navigation]}
            className="swiper-luxury"
            loop
          >
            {data.map((cruise, index) => (
              <SwiperSlide key={index}>
                <CruiseHomeLuxuryOrBudget {...cruise} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="block lg:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            className="swiper-luxury"
            loop
          >
            {data.map((cruise, index) => (
              <SwiperSlide key={index}>
                <CruiseHomeLuxuryOrBudget {...cruise} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <FontAwesomeIcon
          onClick={() => {
            if (sectionRef.current) {
              const preBtnSwiper = sectionRef.current.querySelector(
                ".swiper-button-next"
              );
              if (preBtnSwiper) (preBtnSwiper as HTMLElement).click();
            }
          }}
          className="cursor-pointer w-5 h-5 absolute top-1/3 -translate-y-1/2 z-10 text-[#555555cc] bg-[#ffffff99] hover:bg-[#ffffffe6] drop-shadow-md p-3 rounded-full -right-2 "
          icon={faChevronRight}
        />
      </div>

      <div className="container flex justify-center">
        <button className="mx-auto text-sm font-bold text-[var(--text-hover-default)] w-fit px-10 py-2 rounded-3xl border-[2px] border-dotted border-[#0cab5b] mt-3 hover:bg-[#06b28b] hover:text-white ">
          View Luxury Cruises <span>{`»`}</span>
        </button>
      </div>
    </section>
  );
}
