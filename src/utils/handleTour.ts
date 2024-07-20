import { useAppDispatch, useAppSelector } from "@/lib";
import { useEffect, useRef, useState } from "react";
import moment from "moment";
import {
  resetDataTour,
  setDataTours,
  setDataToursNav,
} from "@/lib/redux/app/tour.slice";
import { getAllItinerariesTour, getAllTour, getAllTourNav } from "./api";
import { calculateTotalLikes } from "@/share";

// export const useTour = (packetTourId: number, type?: number) => {
//   const { tours, refreshData, page, limit, total } = useAppSelector(
//     (state) => state.tour
//   );
//   const packetTourRef = useRef(packetTourId);
//   const typeTourRef = useRef(type);
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     async function fetchData() {
//       if (
//         refreshData ||
//         packetTourId !== packetTourRef.current ||
//         type !== typeTourRef.current
//       ) {
//
//         packetTourRef.current = packetTourId;
//         typeTourRef.current = type;
//         const res = await getAllTour(page, limit, packetTourId, type);
//         if (res?.data) {
//           const { data, pagination } = res?.data;
//           dispatch(setDataTours({ data, ...pagination }));
//         }
//         dispatch(setLoadingApp({ loading: false }));
//       }
//     }

//     fetchData();
//   }, [refreshData, packetTourId, type]);

//   return {
//     data:
//       tours.map((i) => {
//         return {
//           ...i,
//           isFlashSale: i.isFlashSale ? "Run flash sales" : "Normal",
//           createdAt: moment(i.createdAt).format("YYYY-MM-DD HH:mm:ss"),
//         };
//       }) || [],
//     pagination: {
//       total: total,
//       limit: limit,
//       page: page,
//     },
//   };
// };

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

export const useHomeTour = (
  packetTourId: number | undefined,
  sort: string,
  typeSort: string
) => {
  const { refreshData, tours } = useAppSelector((state) => state.tour);

  const packetTourRef = useRef(packetTourId);
  const sortTourRef = useRef(sort);
  const typeSortTourRef = useRef(typeSort);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (
        (refreshData ||
          packetTourId !== packetTourRef.current ||
          sort !== sortTourRef.current ||
          typeSort !== typeSortTourRef.current) &&
        packetTourId
      ) {
        packetTourRef.current = packetTourId;
        sortTourRef.current = sort;
        typeSortTourRef.current = typeSort;
        const res = await getAllTour(packetTourId, sort, typeSort);
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataTours({ data, ...pagination }));
        }
      }
    }

    fetchData();
  }, [packetTourId, sort]);

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
