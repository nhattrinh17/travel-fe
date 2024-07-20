import { useAppDispatch, useAppSelector } from "@/lib";
import { useEffect } from "react";
import moment from "moment";
import { setDataPacketTours } from "@/lib/redux/app/packetTour.slice";
import { getAllPacketTour } from "./api";
import { calculateTotalLikes } from "@/share";

export const usePacketTour = (limitCustom?: number) => {
  const { packetTours, refreshData, page, limit } = useAppSelector(
    (state) => state.packetTour
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (refreshData) {
        const res = await getAllPacketTour(page, limitCustom || limit);
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataPacketTours({ data, ...pagination }));
        }
      }
    }

    fetchData();
  }, [refreshData]);

  return {
    data:
      packetTours.map((i) => {
        return {
          ...i,
          like: calculateTotalLikes(i.createdAt),
          createdAt: moment(i.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        };
      }) || [],
  };
};
