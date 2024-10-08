import { createSlice } from "@reduxjs/toolkit";

interface TourItem {
  id: number;
  packetTourId: string;
  type: string;
  name: string;
  totalStar: number;
  contentBrief: string;
  detail: string;
  images: string;
  totalRoms: number;
  price: number;
  stars: number;
  discount: number;
  timeLaunched: number;
  isFlashSale: boolean;
  travelerLoves: string;
  createdAt: string;
  specialOffers: { id: number; name: string; content: string }[];
  accompaniedServices: { id: number; name: string; slug: string }[];
  itineraries: { id: number }[];
  slug: string;
}

interface TourSliceDto {
  tours: TourItem[];
  tourFlashSle?: TourItem[];
  tourTopDaily?: TourItem[];
  tourNav: TourItem[];
  page: number;
  limit: number;
  total: number;
  refreshData: boolean;
  refreshDataNav: boolean;
}

const tourSlice = createSlice({
  name: "tour",
  initialState: {
    tourNav: [],
    tours: [],
    limit: 20,
    page: 1,
    total: 0,
    refreshData: true,
    refreshDataNav: true,
  } as TourSliceDto,
  reducers: {
    setDataTourFlashSle: (state, action) => {
      state.tourFlashSle = action.payload.data;
    },

    setDataTourTopDaily: (state, action) => {
      state.tourTopDaily = action.payload.data;
    },
    setDataToursNav: (state, action) => {
      state.tourNav = action.payload?.data;
      state.total = action.payload?.total;
      state.page = action.payload.page;
    },
    setDataTours: (state, action) => {
      state.tours = action.payload?.data;
      state.total = action.payload?.total;
      state.page = action.payload.page;
      state.refreshData = false;
    },
    setLimitOrPageTour: (
      state,
      action: { payload: { limit?: number; page?: number } }
    ) => {
      state.limit = action.payload.limit ? action.payload.limit : state.limit;
      state.page = action.payload.page ? action.payload.page : state.page;
    },
    resetDataTour: (state) => {
      state.tours = [];
      state.page = 1;
      state.limit = 10;
      state.total = 0;
      state.refreshData = true;
    },

    refreshDataTour: (state) => {
      state.refreshData = true;
    },
  },
});

export const {
  //
  setDataTourFlashSle,
  setDataTourTopDaily,
  refreshDataTour,
  resetDataTour,
  setDataTours,
  setLimitOrPageTour,
  setDataToursNav,
} = tourSlice.actions;

export default tourSlice.reducer;
