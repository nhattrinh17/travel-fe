import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperModule } from "swiper/types";

interface SwiperLayoutDto {
  data: any[];
  slidesPerViewMobile: number;
  slidesPerViewDesktop: number;
  spaceBetweenMobile: number;
  spaceBetweenDesktop: number;
  loop: boolean;
  ComponentRenderDeskTop: React.ElementType; // Điều chỉnh kiểu
  ComponentRenderMobile: React.ElementType;
  modules?: SwiperModule[];
}

export function SwiperLayout({
  data,
  loop,
  slidesPerViewDesktop,
  slidesPerViewMobile,
  spaceBetweenDesktop,
  spaceBetweenMobile,
  modules,
  ComponentRenderDeskTop,
  ComponentRenderMobile,
}: SwiperLayoutDto): JSX.Element {
  const sectionSwiperRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={sectionSwiperRef} className="relative">
      {modules?.includes(Navigation) && (
        <FontAwesomeIcon
          onClick={() => {
            if (sectionSwiperRef.current) {
              const preBtnSwiper = sectionSwiperRef.current.querySelector(
                ".swiper-button-prev"
              );
              console.log("🚀 ~ preBtnSwiper:", preBtnSwiper);
              if (preBtnSwiper) (preBtnSwiper as HTMLElement).click();
            }
          }}
          className="cursor-pointer w-5 h-5 absolute top-1/3 -translate-y-1/2 z-10 text-[#555555cc] bg-[#ffffff99] hover:bg-[#ffffffe6] drop-shadow-md p-3 rounded-full -left-5"
          icon={faChevronLeft}
        />
      )}

      <div className="hidden lg:block">
        <Swiper
          slidesPerView={slidesPerViewDesktop}
          spaceBetween={spaceBetweenDesktop}
          modules={modules}
          className="swiper-luxury"
          loop={loop}
          navigation={modules?.includes(Navigation)}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <ComponentRenderDeskTop {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="block lg:hidden">
        <Swiper
          slidesPerView={slidesPerViewMobile}
          spaceBetween={spaceBetweenMobile}
          modules={modules}
          className="swiper-luxury"
          loop
          navigation={modules?.includes(Navigation)}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <ComponentRenderMobile {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {modules?.includes(Navigation) && (
        <FontAwesomeIcon
          onClick={() => {
            if (sectionSwiperRef.current) {
              const preBtnSwiper = sectionSwiperRef.current.querySelector(
                ".swiper-button-next"
              );
              if (preBtnSwiper) (preBtnSwiper as HTMLElement).click();
            }
          }}
          className="cursor-pointer w-5 h-5 absolute top-1/3 -translate-y-1/2 z-10 text-[#555555cc] bg-[#ffffff99] hover:bg-[#ffffffe6] drop-shadow-md p-3 rounded-full -right-5 "
          icon={faChevronRight}
        />
      )}
    </div>
  );
}
