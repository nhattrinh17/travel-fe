import { createSlice } from "@reduxjs/toolkit";

interface BlogCategoriesSlice {
  blogCategories: {
    id: number;
    name: string;
    description: string;
    image: string;
    createdAt: string;
  }[];
  page: number;
  limit: number;
  total: number;
  refreshData: boolean;
}

const blogCategoriesSlice = createSlice({
  name: "blogCategories",
  initialState: {
    blogCategories: [],
    limit: 30,
    page: 1,
    total: 0,
    refreshData: true,
  } as BlogCategoriesSlice,
  reducers: {
    setDataBlogCategories: (state, action) => {
      state.blogCategories = action.payload?.data;
      state.total = action.payload?.total;
      state.page = action.payload.page;
      state.refreshData = false;
    },
    setLimitOrPageBlogCategories: (
      state,
      action: { payload: { limit?: number; page?: number } }
    ) => {
      state.limit = action.payload.limit ? action.payload.limit : state.limit;
      state.page = action.payload.page ? action.payload.page : state.page;
      state.refreshData = true;
    },
    resetDataBlogCategories: (state) => {
      state.blogCategories = [];
      state.page = 1;
      state.limit = 10;
      state.total = 0;
      state.refreshData = true;
    },

    refreshDataBlogCategories: (state) => {
      state.refreshData = true;
    },
  },
});

export const {
  refreshDataBlogCategories,
  resetDataBlogCategories,
  setDataBlogCategories,
  setLimitOrPageBlogCategories,
} = blogCategoriesSlice.actions;

export default blogCategoriesSlice.reducer;
