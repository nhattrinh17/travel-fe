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
  timeLaunched: number;
  styleCruise: string;
  createdAt: string;
  slug: string;
  totalRoom: number;
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
    maxAdult: number;
    maxChildren: number;
    amenities: string[]; // custom
  }[];
  otherServiceBookings: {
    name: string;
    description: string;
    options: string;
    type: number;
  }[];

  // custom
  totalStar: number;
  isAllMeals: boolean;
}

interface cruiseSlice {
  cruises: CruiseItem[];
  cruiseFashSale?: CruiseItem[];
  cruiseBudget?: CruiseItem[];
  cruiseLuxury?: CruiseItem[];
  cruiseDetail?: CruiseItem;
  page: number;
  limit: number;
  total: number;
  refreshData: boolean;
  booking: {
    date?: string;
    type: string;
    totalRom: number;
    dataAdult: { [key: string]: number }[];
    dataChildren: { [key: string]: number }[];
    dataInfant: { [key: string]: number }[];
    dataTypeRoom: { [key: string]: string }[];
  };
}

const cruiseSlice = createSlice({
  name: "cruise",
  initialState: {
    cruises: [],
    limit: 10,
    page: 1,
    total: 0,
    refreshData: true,
    booking: {
      date: undefined,
      totalRom: 1,
      dataAdult: [
        {
          room1: 2,
        },
      ],
      dataChildren: [
        {
          room1: 0,
        },
      ],
      dataInfant: [
        {
          room1: 0,
        },
      ],
      dataTypeRoom: [
        {
          room1: "Double",
        },
      ],
      type: "",
    },
  } as cruiseSlice,
  reducers: {
    setDataCruiseFashSale: (state, action) => {
      state.cruiseFashSale = action.payload?.data;
    },
    setDataCruiseBudget: (state, action) => {
      state.cruiseBudget = action.payload?.data;
    },
    setDataCruiseLuxury: (state, action) => {
      state.cruiseLuxury = action.payload?.data;
    },

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
        state.booking = {
          date: undefined,
          totalRom: 1,
          dataAdult: [
            {
              room1: 2,
            },
          ],
          dataChildren: [
            {
              room1: 0,
            },
          ],
          dataInfant: [
            {
              room1: 0,
            },
          ],
          dataTypeRoom: [
            {
              room1: "Double",
            },
          ],
          type: "",
        };
      }
      state.refreshData = false;
    },
    setDataBookingCruise: (
      state,
      action: {
        payload: {
          date?: string;
          type?: string;
          totalRom?: number;
          dataAdult?: { [key: string]: number }[];
          dataChildren?: { [key: string]: number }[];
          dataInfant?: { [key: string]: number }[];
          dataTypeRoom?: { [key: string]: string }[];
        };
      }
    ) => {
      if (action.payload.date) state.booking.date = action.payload.date;
      if (action.payload.dataAdult)
        state.booking.dataAdult = action.payload.dataAdult;
      if (action.payload.dataChildren)
        state.booking.dataChildren = action.payload.dataChildren;
      if (action.payload.dataInfant)
        state.booking.dataInfant = action.payload.dataInfant;
      if (action.payload.totalRom)
        state.booking.totalRom = action.payload.totalRom;
      if (action.payload.dataTypeRoom)
        state.booking.dataTypeRoom = action.payload.dataTypeRoom;
      if (action.payload.type) state.booking.type = action.payload.type;
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
  setDataCruiseLuxury,
  setDataCruiseFashSale,
  setDataCruiseBudget,
  refreshDataCruise,
  resetDataCruise,
  setDataCruises,
  setLimitOrPageCruise,
  resetDataCruiseDetail,
  setDataCruiseDetail,
  setDataBookingCruise,
} = cruiseSlice.actions;

export default cruiseSlice.reducer;
