import { useAppDispatch, useAppSelector } from "@/lib";
import { useEffect } from "react";
import moment from "moment";
import { setDataReviews } from "@/lib/redux/app/review.slice";
import { getAllReview } from "./api";

export const useReview = (idCruise: number, idTour: number) => {
  console.log("🚀 ~ useReview ~ idCruise:", idCruise);
  const { reviews, refreshData, page, limit, total } = useAppSelector(
    (state) => state.review
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (refreshData) {
        const res = await getAllReview(page, limit, idCruise, idTour);
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataReviews({ data, ...pagination }));
        }
      }
    }

    fetchData();
  }, [refreshData]);

  return {
    data:
      reviews.map((i) => {
        return {
          ...i,
          createdAt: moment(i.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        };
      }) || [],
    pagination: {
      limit,
      total,
      page,
    },
  };
};
