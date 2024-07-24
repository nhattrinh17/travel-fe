import { useAppDispatch, useAppSelector } from "@/lib";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import {
  getAllCruise,
  getAllCruiseSort,
  getAllItinerariesCruise,
  getAllRoomCruise,
  getCruiseBySlug,
} from "./api";
import {
  resetDataCruise,
  setDataCruiseBudget,
  setDataCruiseDetail,
  setDataCruiseFashSale,
  setDataCruiseLuxury,
  setDataCruises,
} from "@/lib/redux/app/cruise.slice";

export const useCruise = (
  sort: string,
  typeSort: string,
  idDestination?: number,
  idDetailLocation?: number,
  search?: string
) => {
  console.log("🚀 ~ sort:", sort);
  const { cruises, refreshData, page, limit, total } = useAppSelector(
    (state) => state.cruise
  );
  const destinationRef = useRef(idDestination);
  const detailLocationRef = useRef(idDetailLocation);
  const searchRef = useRef(search);
  const sortTourRef = useRef(sort);
  const typeSortTourRef = useRef(typeSort);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (
        refreshData ||
        idDestination !== destinationRef.current ||
        search !== searchRef.current ||
        idDetailLocation !== detailLocationRef.current ||
        sort !== sortTourRef.current ||
        typeSort !== typeSortTourRef.current
      ) {
        console.log("Fetching data cruise home...");
        destinationRef.current = idDestination;
        detailLocationRef.current = idDetailLocation;
        sortTourRef.current = sort;
        typeSortTourRef.current = typeSort;
        searchRef.current = search;
        const res = await getAllCruise(
          page,
          limit,
          sort,
          typeSort,
          idDestination,
          idDetailLocation,
          search
        );
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataCruises({ data, ...pagination }));
        }
      }
    }

    fetchData();
  }, [refreshData, idDestination, idDetailLocation, sort, typeSort]);

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

export const useCruiseFlashSale = () => {
  const { cruiseFashSale } = useAppSelector((state) => state.cruise);

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (cruiseFashSale == undefined) {
        const res = await getAllCruiseSort(1, 20, "isFlashSale", "DESC");
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataCruiseFashSale({ data }));
        }
      }
    }

    fetchData();
  }, []);

  return {
    data:
      cruiseFashSale?.map((i) => {
        return {
          ...i,
          travelerLoves: i.travelerLoves.split("*_*"),
          images: i.images.split("*_*"),
          isAllMeals: i.accompaniedServices.some((i) => i.slug == "allMeals"),
          createdAt: moment(i.createdAt).format("YYYY-MM-DD HH:mm:ss"),
          totalStar: 5,
        };
      }) || [],
  };
};

export const useCruiseBudget = () => {
  const { cruiseBudget } = useAppSelector((state) => state.cruise);

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (cruiseBudget == undefined) {
        const res = await getAllCruiseSort(1, 20, "price", "DESC");
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataCruiseBudget({ data }));
        }
      }
    }

    fetchData();
  }, []);

  return {
    data:
      cruiseBudget?.map((i) => {
        return {
          ...i,
          travelerLoves: i.travelerLoves.split("*_*"),
          images: i.images.split("*_*"),
          isAllMeals: i.accompaniedServices.some((i) => i.slug == "allMeals"),
          createdAt: moment(i.createdAt).format("YYYY-MM-DD HH:mm:ss"),
          totalStar: 5,
        };
      }) || [],
  };
};

export const useCruiseLuxury = () => {
  const { cruiseLuxury } = useAppSelector((state) => state.cruise);

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (cruiseLuxury == undefined) {
        const res = await getAllCruiseSort(1, 20, "price", "ASC");
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataCruiseLuxury({ data }));
        }
      }
    }

    fetchData();
  }, []);

  return {
    data:
      cruiseLuxury?.map((i) => {
        return {
          ...i,
          travelerLoves: i.travelerLoves.split("*_*"),
          images: i.images.split("*_*"),
          isAllMeals: i.accompaniedServices.some((i) => i.slug == "allMeals"),
          createdAt: moment(i.createdAt).format("YYYY-MM-DD HH:mm:ss"),
          totalStar: 5,
        };
      }) || [],
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
  }, [cruiseDetail]);

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
