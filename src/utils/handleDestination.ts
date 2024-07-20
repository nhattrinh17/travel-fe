import { useAppDispatch, useAppSelector } from "@/lib";
import { useEffect } from "react";
import moment from "moment";
import { setDataDestinations } from "@/lib/redux/app/destination.slice";
import { getAllDestination } from "./api";

export const useDestination = (limitCustom?: number) => {
  const { destinations, refreshData, page, limit } = useAppSelector(
    (state) => state.destination
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (refreshData) {
        const res = await getAllDestination(page, limitCustom || limit);
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataDestinations({ data, ...pagination }));
        }
      }
    }

    fetchData();
  }, [refreshData]);

  return {
    data:
      destinations.map((i) => {
        return {
          ...i,
          createdAt: moment(i.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        };
      }) || [],
  };
};
