"use client";

import { CruiseItem } from "@/components/CruiseItem";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { useCruiseFlashSale } from "@/utils/handleCruise";

export function Top10Cruise(): JSX.Element {
  const { data } = useCruiseFlashSale();

  return (
    <section className="bg-[#f1f1f1] py-5">
      <div className="container">
        <Link href={""} className="relative">
          <Image
            alt="iamge"
            src={"/home/top10Cruise/banner-sale.png"}
            width={798}
            height={234}
            className="w-full object-cover opacity-95 hover:opacity-100 h-[120px] lg:h-[166px]"
          />
          <button className="absolute text-white bg-[#f5a528cc] hover:bg-[var(--bg-footer-color)] font-bold px-4 py-3 rounded-3xl bottom-0 mb-2 left-1/2 -translate-x-1/2">
            7 Cruise Details
          </button>
        </Link>

        <Image
          alt="100%"
          src={"/home/top10Cruise/best-price-2.png"}
          width={110}
          height={81}
          className="mx-auto mt-4"
        />

        <h2 className="my-3 text-2xl font-bold text-[var(--secondary-color)] w-full text-center relative line-text">
          TOP 10 BEST HALONG BAY CRUISE DEALS RECOMMENDED FOR YOU
        </h2>

        <p className="text-[#666] text-sm text-center px-0 lg:px-12">
          The highly trusted collection of Best Halong Bay Cruises that is
          frequently updated by our Halong Cruise Experts depending much on the
          cruises' conditions: best facilities, unique experiences, best offers,
          high-end meals on board, professional staff, and especially excellent
          comments, feedback from our real valuable customers. We hope that you
          can select a suitable Halong bay cruise for your holiday and have
          unforgettable experiences beside your beloved ones.
          <br></br>
          <span className="font-bold">
            Save Time - Save Money - Travel more!
          </span>
        </p>
        {/* <div className="grid grid-cols-2 gap-5 pt-6">
          <CruiseItem {...topCruise[0]} />
        </div> */}
      </div>
      <div className="relative pt-5">
        <i
          onClick={() => {
            const preBtnSwiper = document.querySelector(".swiper-button-prev");
            if (preBtnSwiper) (preBtnSwiper as HTMLElement).click();
          }}
          className="hidden lg:block cursor-pointer opacity-60 hover:opacity-100  w-10 h-20 bg-[url(/share/back.svg)] bg-contain absolute left-8 top-1/3 -translate-y-1/2 "
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
            {data.map((cruise, index) => (
              <SwiperSlide key={index}>
                <CruiseItem {...cruise} marginBottom={80} />
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
            {data.slice(0, 9).map((cruise, index) => (
              <SwiperSlide key={index}>
                <CruiseItem {...cruise} marginBottom={80} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <i
          onClick={() => {
            const preBtnSwiper = document.querySelector(".swiper-button-next");
            if (preBtnSwiper) (preBtnSwiper as HTMLElement).click();
          }}
          className="hidden lg:block cursor-pointer opacity-60 hover:opacity-100  w-10 h-20 bg-[url(/share/next.svg)] bg-contain absolute right-8 top-1/3 -translate-y-1/2 "
        ></i>
      </div>

      <button className="container"></button>
    </section>
  );
}
