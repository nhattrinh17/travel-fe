import { useAppDispatch, useAppSelector } from "@/lib";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import {
  setDataTourFlashSle,
  setDataTourTopDaily,
  setDataTours,
  setDataToursNav,
} from "@/lib/redux/app/tour.slice";
import {
  getAllItinerariesTour,
  getAllTour,
  getAllTourNav,
  getAllTourSort,
} from "./api";
import { calculateTotalLikes } from "@/share";

export const useTourNav = () => {
  const { tourNav, refreshDataNav, page, limit, total } = useAppSelector(
    (state) => state.tour
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (refreshDataNav) {
        const res = await getAllTourNav();
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataToursNav({ data, ...pagination }));
        }
      }
    }

    fetchData();
  }, [refreshDataNav]);

  return {
    data:
      tourNav.map((i) => {
        return {
          ...i,
          like: calculateTotalLikes(i.createdAt),
          image: i.images.split("*_*")[0],
        };
      }) || [],
    pagination: {
      total: total,
      limit: limit,
      page: page,
    },
  };
};

export const usePackageOrDailyTour = (
  packetTourId: number | undefined,
  sort: string,
  typeSort: string,
  search: string
) => {
  console.log("🚀 ~ sort:", sort, typeSort);
  const { refreshData, tours } = useAppSelector((state) => state.tour);

  const packetTourRef = useRef(packetTourId);
  const sortTourRef = useRef(sort);
  const typeSortTourRef = useRef(typeSort);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (
        refreshData ||
        packetTourId !== packetTourRef.current ||
        sort !== sortTourRef.current ||
        typeSort !== typeSortTourRef.current
      ) {
        packetTourRef.current = packetTourId;
        sortTourRef.current = sort;
        typeSortTourRef.current = typeSort;
        const res = await getAllTour(packetTourId, search, sort, typeSort);
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataTours({ data, ...pagination }));
        }
      }
    }

    fetchData();
  }, [packetTourId, sort, typeSort, search, refreshData]);

  return tours.map((tour) => {
    return {
      ...tour,
      travelerLoves: tour.travelerLoves.split("*_*"),
      images: tour.images.split("*_*"),
      isAllMeals: tour.accompaniedServices.some((i) => i.slug == "allMeals"),
      totalStar: 5,
    };
  });
};

export const useHomeTourForType = (
  typeTour: number,
  sort: string,
  typeSort: string,
  search: string
) => {
  const { refreshData, tours } = useAppSelector((state) => state.tour);
  console.log("🚀 ~ refreshData: 11111111", refreshData);

  const typeTourRef = useRef(typeTour);
  const sortTourRef = useRef(sort);
  const typeSortTourRef = useRef(typeSort);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (
        refreshData ||
        typeTour !== typeTourRef.current ||
        sort !== sortTourRef.current ||
        typeSort !== typeSortTourRef.current
      ) {
        typeTourRef.current = typeTour;
        sortTourRef.current = sort;
        typeSortTourRef.current = typeSort;
        const res = await getAllTourSort(
          1,
          40,
          typeTour,
          sort,
          typeSort,
          search
        );
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataTours({ data, ...pagination }));
        }
      }
    }

    fetchData();
  }, [typeTour, sort, typeSort, search, refreshData]);

  return tours.map((tour) => {
    return {
      ...tour,
      travelerLoves: tour.travelerLoves.split("*_*"),
      images: tour.images.split("*_*"),
      isAllMeals: tour.accompaniedServices.some((i) => i.slug == "allMeals"),
      totalStar: 5,
    };
  });
};

export const useTourFlashSale = () => {
  const { tourFlashSle } = useAppSelector((state) => state.tour);

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (tourFlashSle == undefined) {
        const res = await getAllTourSort(1, 20, 0, "isFlashSale", "DESC");
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataTourFlashSle({ data }));
        }
      }
    }

    fetchData();
  }, []);

  return {
    data:
      tourFlashSle?.map((i) => {
        return {
          ...i,
          travelerLoves: i.travelerLoves.split("*_*"),
          images: i.images.split("*_*"),
          isAllMeals: i.accompaniedServices.some((i) => i.slug == "allMeals"),
          createdAt: moment(i.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        };
      }) || [],
  };
};

export const useTourTopDaily = () => {
  const { tourTopDaily } = useAppSelector((state) => state.tour);

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (tourTopDaily == undefined) {
        const res = await getAllTourSort(1, 10, 1, "price", "ASC");
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataTourTopDaily({ data }));
        }
      }
    }

    fetchData();
  }, []);

  return {
    data:
      tourTopDaily?.map((i) => {
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

export const useItinerariesTour = (idTour: number, refreshData: boolean) => {
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
      if (idTour) {
        const res = await getAllItinerariesTour(idTour);
        if (res?.data) {
          const { data, pagination } = res?.data;
          setData(data);
        }
      }
    }

    fetchData();
  }, [idTour, refreshData]);

  return data.map((i) => {
    return {
      ...i,
    };
  });
};
