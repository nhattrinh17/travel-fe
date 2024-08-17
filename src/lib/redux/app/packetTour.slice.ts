import { createSlice } from "@reduxjs/toolkit";

interface PacketTourSliceDto {
  packetTours: {
    id: number;
    name: string;
    title: string;
    description: string;
    image: string;
    createdAt: string;
    slug: string;
  }[];
  page: number;
  limit: number;
  total: number;
  refreshData: boolean;
}

const packetTourSlice = createSlice({
  name: "packetTour",
  initialState: {
    packetTours: [],
    limit: 30,
    page: 1,
    total: 0,
    refreshData: true,
  } as PacketTourSliceDto,
  reducers: {
    setDataPacketTours: (state, action) => {
      state.packetTours = action.payload?.data;
      state.total = action.payload?.total;
      state.page = action.payload.page;
      state.refreshData = false;
    },
    setLimitOrPagePacketTour: (
      state,
      action: { payload: { limit?: number; page?: number } }
    ) => {
      state.limit = action.payload.limit ? action.payload.limit : state.limit;
      state.page = action.payload.page ? action.payload.page : state.page;
    },
    resetDataPacketTour: (state) => {
      state.packetTours = [];
      state.page = 1;
      state.limit = 10;
      state.total = 0;
      state.refreshData = true;
    },

    refreshDataPacketTour: (state) => {
      state.refreshData = true;
    },
  },
});

export const {
  refreshDataPacketTour,
  resetDataPacketTour,
  setDataPacketTours,
  setLimitOrPagePacketTour,
} = packetTourSlice.actions;

export default packetTourSlice.reducer;
