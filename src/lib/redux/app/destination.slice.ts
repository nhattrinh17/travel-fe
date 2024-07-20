import { createSlice } from "@reduxjs/toolkit";

interface destinationSlice {
  destinations: {
    id: number;
    name: string;
    title: string;
    description: string;
    image: string;
    slug: string;
    createdAt: string;
    detailLocations: {
      id: number;
      title: string;
      name: string;
      slug: string;
      images: string;
      description: string;
    }[];
  }[];
  page: number;
  limit: number;
  total: number;
  refreshData: boolean;
}

const destinationSlice = createSlice({
  name: "destination",
  initialState: {
    destinations: [],
    limit: 10,
    page: 1,
    total: 0,
    refreshData: true,
  } as destinationSlice,
  reducers: {
    setDataDestinations: (state, action) => {
      state.destinations = action.payload?.data;
      state.total = action.payload?.total;
      state.page = action.payload.page;
      state.refreshData = false;
    },
    setLimitOrPageDestination: (
      state,
      action: { payload: { limit?: number; page?: number } }
    ) => {
      state.limit = action.payload.limit ? action.payload.limit : state.limit;
      state.page = action.payload.page ? action.payload.page : state.page;
    },
    resetDataDestination: (state) => {
      state.destinations = [];
      state.page = 1;
      state.limit = 10;
      state.total = 0;
      state.refreshData = true;
    },

    refreshDataDestination: (state) => {
      state.refreshData = true;
    },
  },
});

export const {
  refreshDataDestination,
  resetDataDestination,
  setDataDestinations,
  setLimitOrPageDestination,
} = destinationSlice.actions;

export default destinationSlice.reducer;
