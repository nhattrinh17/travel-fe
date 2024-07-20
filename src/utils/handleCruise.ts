import { useAppDispatch, useAppSelector } from "@/lib";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import {
  getAllCruise,
  getAllItinerariesCruise,
  getAllRoomCruise,
  getCruiseBySlug,
} from "./api";
import {
  resetDataCruise,
  setDataCruiseDetail,
  setDataCruises,
} from "@/lib/redux/app/cruise.slice";

export const useCruise = (
  resetCruiseDetail: boolean,
  idDestination?: number,
  idDetailLocation?: number
) => {
  const { cruises, refreshData, page, limit, total } = useAppSelector(
    (state) => state.cruise
  );
  const destinationRef = useRef(idDestination);
  const detailLocationRef = useRef(idDetailLocation);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (
        (refreshData ||
          idDestination !== destinationRef.current ||
          idDetailLocation !== detailLocationRef.current) &&
        idDestination
      ) {
        destinationRef.current = idDestination;
        detailLocationRef.current = idDetailLocation;
        const res = await getAllCruise(
          page,
          limit,
          idDestination,
          idDetailLocation
        );
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataCruises({ data, ...pagination, resetCruiseDetail }));
        }
      }
    }

    fetchData();
  }, [refreshData, idDestination, idDetailLocation]);

  return {
    data:
      cruises.map((i) => {
        return {
          ...i,
          travelerLoves: i.travelerLoves.split("*_*"),
          images: i.images.split("*_*"),
          isAllMeals: i.accompaniedServices.some((i) => i.slug == "allMeals"),
          createdAt: moment(i.createdAt).format("YYYY-MM-DD HH:mm:ss"),
          totalStar: 5,
        };
      }) || [],
    pagination: {
      total: total,
      limit: limit,
      page: page,
    },
  };
};

export const useCruiseDetail = (slug: string) => {
  const { cruiseDetail } = useAppSelector((state) => state.cruise);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (!cruiseDetail) {
        const res = await getCruiseBySlug(slug);
        if (res?.data) {
          const data = res.data;
          data.images = data.images.split("*_*");
          data.travelerLoves = data.travelerLoves.split("*_*");
          data.itineraries = data.itineraries.sort(
            (a: any, b: any) => a.day - b.day
          );
          data.isAllMeals = data.accompaniedServices.some(
            (i: any) => i.slug == "allMeals"
          );
          data.roomCruises = data.roomCruises.map((i: any) => {
            return {
              ...i,
              amenities: i.amenities.split("*_*"),
              images: i.images.split("*_*"),
              specialService: i.specialService.split("*_*"),
            };
          });
          data.totalStar = 4;
          dispatch(setDataCruiseDetail({ data }));
        }
      }
    }

    fetchData();
  }, []);

  return cruiseDetail;
};

export const useRoomCruise = (idCruise: number, refreshData: boolean) => {
  const [data, setData] = useState<
    {
      id: number;
      name: string;
      price: number;
      totalRooms: number;
      typeBed: number;
      isViewOcean: string;
      acreage: number;
      location: string;
      images: string;
      specialService: string;
      content: string;
      maxPerson: number;
      amenities: number;
    }[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      if (idCruise) {
        const res = await getAllRoomCruise(idCruise);
        if (res?.data) {
          const { data, pagination } = res?.data;
          setData(data);
        }
      }
    }

    fetchData();
  }, [idCruise, refreshData]);

  return data.map((i) => {
    return {
      ...i,
      isViewOcean: i.isViewOcean ? "Yes" : "No",
    };
  });
};

export const useItinerariesCruise = (
  idCruise: number,
  refreshData: boolean
) => {
  const [data, setData] = useState<
    {
      id: number;
      day: string;
      name: string;
      description: number;
      content: number;
    }[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      if (idCruise) {
        const res = await getAllItinerariesCruise(idCruise);
        if (res?.data) {
          const { data, pagination } = res?.data;
          setData(data);
        }
      }
    }

    fetchData();
  }, [idCruise, refreshData]);

  return data.map((i) => {
    return {
      ...i,
    };
  });
};
