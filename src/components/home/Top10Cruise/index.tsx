"use client";

import { CruiseItem } from "@/components/CruiseItem";
import { topCruise } from "@/mocks";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";

export function Top10Cruise(): JSX.Element {
  return (
    <section className="bg-[#f1f1f1] py-10">
      <div className="container">
        <Link href={""} className="relative">
          <Image
            alt="iamge"
            src={"/home/top10Cruise/banner-sale.jpg"}
            width={1500}
            height={209}
            className="w-full object-contain opacity-95 hover:opacity-100"
          />
          <Link
            href={""}
            className="absolute text-white bg-[#f5a528cc] hover:bg-[var(--bg-footer-color)] font-bold px-4 py-3 rounded-3xl bottom-0 mb-2 left-1/2 -translate-x-1/2"
          >
            7 Cruise Details
          </Link>
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
        <div className="relative">
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
            {topCruise.map((cruise, index) => (
              <SwiperSlide key={index}>
                <CruiseItem {...cruise} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
