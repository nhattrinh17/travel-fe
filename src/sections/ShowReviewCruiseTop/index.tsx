"use client";

import { useReview } from "@/utils/handleReview";
import { faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

export function ShowReviewCruiseTop({
  idCruise,
}: {
  idCruise: number;
}): JSX.Element {
  // Review
  const { data, pagination } = useReview(idCruise, 0);
  const reviewShowTop = data[Math.ceil(Math.random() * data?.length) - 1];
  const [showMore, setShowMore] = useState(false);

  return (
    <div className=" hidden lg:flex col-span-1 flex-col py-3 items-center">
      <div className="w-28 h-28">
        <Image
          alt=""
          src={reviewShowTop?.image || "/detailCruise/avatar-default.jpg"}
          width={90}
          height={90}
          className="w-full h-full rounded-full border-[1px] p-2 border-[#dfdfdf] object-cover"
        />
      </div>
      <div className="flex items-center my-2 text-[var(--text-hover-default)]">
        <FontAwesomeIcon
          icon={faThumbsUp}
          className="p-1 text-xs rounded-full border-[1px]"
        />
        {Array.from({ length: 5 }, (v, i) => i + 1).map((i, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className="mr-1 w-[10px]"
          />
        ))}
      </div>
      <p
        className={classNames("text-center text-[#666] text-sm", {
          "h-28 overflow-hidden": !showMore,
        })}
      >
        <i className="text-4xl font-[Aria] font-bold">“</i>
        {reviewShowTop?.description ||
          `Rosie from Inside travel Vietnam was great organising our Renea
      Cruise to Bai Tu Long Bay in Vietnam. Everything was excellent,
      highly recommend.`}
        <span className="font-bold block">
          {reviewShowTop?.title ||
            `Bai Tu Long Bay Cruise organised by Rosie from Inside Travel
        Vietnam -`}
        </span>
        {reviewShowTop?.fullName}
      </p>
      <span
        onClick={() => {
          setShowMore(!showMore);
        }}
        className="text-[var(--text-hover-default)] text-xs cursor-pointer mt-1"
      >
        {showMore ? "Hide..." : "Read more..."}
      </span>
    </div>
  );
}
