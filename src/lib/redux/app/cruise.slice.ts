import { createSlice } from "@reduxjs/toolkit";

interface CruiseItem {
  id: number;
  name: string;
  destinationId: number;
  detailLocationId: number;
  contentBrief: string;
  detail: string;
  images: any;
  discount: number;
  isFlashSale: boolean;
  travelerLoves: any;
  price: number;
  totalRoom: number;
  timeLaunched: number;
  styleCruise: string;
  createdAt: string;
  slug: string;
  totalRom: number;
  itineraries: { day: number; id: number; name: string; content: string }[];
  specialOffers: { id: number; name: string; content: string }[];
  accompaniedServices: { id: number; name: string; slug: string }[];
  roomCruises: {
    cruiseId: number;
    name: string;
    price: number;
    totalRooms: number;
    typeBed: string;
    isViewOcean: boolean;
    acreage: number;
    location: string;
    images: string[]; // custom
    specialService: string[]; // custom
    content: string;
    maxPerson: number;
    amenities: string[]; // custom
  }[];

  // custom
  totalStar: number;
  isAllMeals: boolean;
}

interface cruiseSlice {
  cruises: CruiseItem[];
  cruiseDetail?: CruiseItem;
  page: number;
  limit: number;
  total: number;
  refreshData: boolean;
}

const cruiseSlice = createSlice({
  name: "cruise",
  initialState: {
    cruises: [],
    limit: 10,
    page: 1,
    total: 0,
    refreshData: true,
  } as cruiseSlice,
  reducers: {
    setDataCruiseDetail: (state, action) => {
      state.cruiseDetail = action.payload.data;
    },
    resetDataCruiseDetail(state) {
      state.cruiseDetail = undefined;
    },
    setDataCruises: (state, action) => {
      state.cruises = action.payload?.data;
      state.total = action.payload?.total;
      state.page = action.payload.page;
      if (action.payload.resetCruiseDetail) {
        state.cruiseDetail = undefined;
      }
      state.refreshData = false;
    },
    setLimitOrPageCruise: (
      state,
      action: { payload: { limit?: number; page?: number } }
    ) => {
      state.limit = action.payload.limit ? action.payload.limit : state.limit;
      state.page = action.payload.page ? action.payload.page : state.page;
    },
    resetDataCruise: (state) => {
      state.cruises = [];
      state.page = 1;
      state.limit = 10;
      state.total = 0;
      state.refreshData = true;
    },

    refreshDataCruise: (state) => {
      state.refreshData = true;
    },
  },
});

export const {
  refreshDataCruise,
  resetDataCruise,
  setDataCruises,
  setLimitOrPageCruise,
  resetDataCruiseDetail,
  setDataCruiseDetail,
} = cruiseSlice.actions;

export default cruiseSlice.reducer;
