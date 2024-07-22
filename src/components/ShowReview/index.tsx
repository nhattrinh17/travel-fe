"use client";

import { useAppDispatch } from "@/lib";
import {
  resetDataReview,
  setLimitOrPageReview,
} from "@/lib/redux/app/review.slice";
import { useReview } from "@/utils/handleReview";
import {
  faArrowDownLong,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Image from "next/image";
import { useEffect } from "react";

export function ShowReviewCruiseAndTour({
  idCruise,
  idTour,
}: {
  idCruise: number;
  idTour: number;
}): JSX.Element {
  const { data, pagination } = useReview(idCruise, idTour);
  const dispatch = useAppDispatch();

  const incrementPage = () => {
    dispatch(setLimitOrPageReview({ page: pagination.page + 1 }));
  };

  useEffect(() => {
    return () => {
      dispatch(resetDataReview());
    };
  }, []);

  return (
    <div className="">
      <div className="pb-2 border-b-[1px] border-[#ddd]">
        <p className="text-[var(--text-color-default)] text-sm">
          All reviews ({pagination.total})
        </p>
      </div>
      {data.map((review, index) => (
        <div
          key={index}
          className="grid grid-cols-4 py-4 border-b-[1px] border-[#ddd]"
        >
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-[150px] h-[150px] border-[1px] rounded-full">
              <Image
                alt="avatar"
                src={review.image || "/about-us/user3.jpeg"}
                width={100}
                height={100}
                className="w-[80%] h-[80%] object-cover rounded-full m-3"
              />
            </div>
            <span>{review.fullName}</span>
          </div>

          <div className="col-span-3">
            <div className="flex items-center">
              <h3 className="font-semibold text-base ">{review.title}</h3>
              <div className="flex items-center my-2 text-[var(--text-hover-default)]">
                <FontAwesomeIcon icon={faThumbsUp} className="mx-2" />
                {Array.from({ length: review.star }, (v, i) => i + 1).map(
                  (i, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className="mr-1 text-xs"
                    />
                  )
                )}
              </div>
            </div>
            <div className="pt-3">
              <p className="text-left text-[var(--text-color-default)]">
                <span
                  className="font-bold text-4xl text-[#bbb]"
                  style={{ fontFamily: "Georgia" }}
                >
                  “
                </span>
                {review.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      <div
        onClick={incrementPage}
        className={classNames("flex justify-end mt-3 cursor-pointer", {
          hidden: pagination.total < pagination.page * pagination.limit,
        })}
      >
        <div className="flex items-center">
          <span className="text-black text-sm">Show more reviews</span>
          <FontAwesomeIcon
            icon={faArrowDownLong}
            className="ml-2 text-[var(--text-hover-default)]"
          />
        </div>
      </div>
    </div>
  );
}
