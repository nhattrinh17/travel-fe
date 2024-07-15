"use client";

import { topTour } from "@/mocks";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { TourItem } from "@/components/TourItem";
import { useRef } from "react";

export function Top10PacketTour(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="bg-[#f1f1f1] py-5">
      <div className="container">
        {/* <Link href={""} className="relative">
          <Image
            alt="iamge"
            src={"/home/top10Cruise/banner-sale.jpg"}
            width={1500}
            height={209}
            className="w-full object-contain opacity-95 hover:opacity-100"
          />
          <button className="absolute text-white bg-[#f5a528cc] hover:bg-[var(--bg-footer-color)] font-bold px-4 py-3 rounded-3xl bottom-0 mb-2 left-1/2 -translate-x-1/2">
            7 Tours Details
          </button>
        </Link> */}

        <Image
          alt="100%"
          src={"/home/top10Cruise/best-price-2.png"}
          width={110}
          height={81}
          className="mx-auto mt-4"
        />

        <h2 className="my-3 text-2xl uppercase font-bold text-[var(--secondary-color)] w-full text-center relative line-text">
          TOP 10 BEST PACKET TOUR DEALS RECOMMENDED FOR YOU
        </h2>

        <p className="text-[#666] text-sm text-center px-0 lg:px-12">
          The highly trusted collection of Best Tour that is frequently updated
          by our Halong Tour Experts depending much on the tours conditions:
          best facilities, unique experiences, best offers, high-end meals on
          board, professional staff, and especially excellent comments, feedback
          from our real valuable customers. We hope that you can select a
          suitable tour for your holiday and have unforgettable experiences
          beside your beloved ones.
          <br></br>
          <span className="font-bold">
            Save Time - Save Money - Travel more!
          </span>
        </p>
        {/* <div className="grid grid-cols-2 gap-5 pt-6">
          <CruiseItem {...topTour[0]} />
        </div> */}
      </div>
      <div className="relative pt-5">
        <i
          onClick={() => {
            if (sectionRef.current) {
              const preBtnSwiper = sectionRef.current.querySelector(
                ".swiper-button-prev"
              );
              if (preBtnSwiper) (preBtnSwiper as HTMLElement).click();
            }
          }}
          className="hidden lg:block cursor-pointer opacity-60 hover:opacity-100 w-10 h-20 bg-[url(/share/back.svg)] bg-contain absolute left-8 top-1/3 -translate-y-1/2 "
        ></i>
        <div className="container hidden lg:block">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            loop
          >
            {topTour.map((tour, index) => (
              <SwiperSlide key={index}>
                <TourItem {...tour} typeShow="home" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="container block lg:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            loop
          >
            {topTour.map((tour, index) => (
              <SwiperSlide key={index}>
                <TourItem {...tour} typeShow="home" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <i
          onClick={() => {
            if (sectionRef.current) {
              const preBtnSwiper = sectionRef.current.querySelector(
                ".swiper-button-next"
              );
              if (preBtnSwiper) (preBtnSwiper as HTMLElement).click();
            }
          }}
          className="hidden lg:block cursor-pointer opacity-60 hover:opacity-100 w-10 h-20 bg-[url(/share/next.svg)] bg-contain absolute right-8 top-1/3 -translate-y-1/2 "
        ></i>
      </div>

      <button className="container"></button>
    </section>
  );
}
