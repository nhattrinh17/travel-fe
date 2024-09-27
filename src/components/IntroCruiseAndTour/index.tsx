"use client";

import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import { PopupShowAllImages } from "../ShowAllImages";

export function IntroCruiseAndTour({
  description,
  title,
  textListCruise,
  images,
}: {
  title: string;
  description: string;
  textListCruise?: string;
  images?: string[];
}): JSX.Element {
  const [showAllImage, setShowAllImage] = useState(false);

  return (
    <section className="bg-[#f1f1f1]">
      <div className="container py-6">
        <Image
          alt="100%"
          src={"/home/top10Cruise/best-price-2.png"}
          width={110}
          height={81}
          className="mx-auto mt-4"
        />

        <h1 className="my-3 text-2xl font-bold text-[var(--secondary-color)] w-full text-center relative line-text">
          {title}
        </h1>
        <div className="text-[#666] text-sm text-center px-0 lg:px-12 bg-white py-6 mt-10 relative arrow-top">
          <div
            className="pb-3"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>

          {images?.length ? (
            <div className={classNames("block pt-[50%] lg:pt-[29%] relative")}>
              <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {images?.slice(0, 2).map((image, index) => (
                    <Image
                      key={index}
                      alt="image"
                      src={image}
                      width={1074}
                      height={537}
                      className={classNames("basis-full lg:basis-1/2", {
                        "hidden lg:block": index > 0,
                      })}
                    />
                  ))}
                </div>
                <span
                  onClick={() => setShowAllImage((pre) => !pre)}
                  className={classNames(
                    "block absolute right-2 bottom-3 text-white text-base cursor-pointer hover:underline",
                    {
                      hidden: !images?.length || images?.length < 2,
                    }
                  )}
                >
                  See all {images?.length} photos
                </span>
              </div>

              {showAllImage ? (
                <PopupShowAllImages
                  images={images}
                  onCancel={() => setShowAllImage(false)}
                  title=""
                />
              ) : (
                <></>
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {textListCruise ? (
        <div className="pb-5">
          <Image
            alt="icon"
            src={"/share/icon-halongbaycruises.svg"}
            width={93}
            height={93}
            className="mx-auto w-16"
          />
          <h2 className="my-3 uppercase text-2xl font-bold text-[var(--secondary-color)] w-full text-center relative line-text">
            {textListCruise}
          </h2>
        </div>
      ) : (
        <></>
      )}
    </section>
  );
}
