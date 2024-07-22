import { createSlice } from "@reduxjs/toolkit";

interface ReviewSliceDto {
  reviews: {
    id: number;
    date: string;
    fullName: string;
    title: string;
    image: string;
    phone: string;
    star: number;
    description: string;
    createdAt: string;
  }[];
  page: number;
  limit: number;
  total: number;
  refreshData: boolean;
}

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    reviews: [],
    limit: 10,
    page: 1,
    total: 0,
    refreshData: true,
  } as ReviewSliceDto,
  reducers: {
    setDataReviews: (state, action) => {
      state.reviews = [...state.reviews, ...action.payload?.data];
      state.total = action.payload?.total;
      state.page = action.payload.page;
      state.refreshData = false;
    },
    setLimitOrPageReview: (
      state,
      action: { payload: { limit?: number; page?: number } }
    ) => {
      state.limit = action.payload.limit ? action.payload.limit : state.limit;
      state.page = action.payload.page ? action.payload.page : state.page;
      state.refreshData = true;
    },
    resetDataReview: (state) => {
      state.reviews = [];
      state.page = 1;
      state.limit = 10;
      state.total = 0;
      state.refreshData = true;
    },

    refreshDataReview: (state) => {
      state.refreshData = true;
    },
  },
});

export const {
  refreshDataReview,
  resetDataReview,
  setDataReviews,
  setLimitOrPageReview,
} = reviewSlice.actions;

export default reviewSlice.reducer;
