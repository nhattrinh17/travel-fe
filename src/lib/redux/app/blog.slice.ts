import { createSlice } from "@reduxjs/toolkit";

export interface BlogItemDto {
  id: number;
  blogCategoryId: string;
  name: string;
  description: string;
  image: string;
  content: string;
  view: number;
  createdAt: string;
  slug: string;
}
interface BlogSlice {
  blog: BlogItemDto[];
  blogSuggest: BlogItemDto[];
  blogDailyTour: BlogItemDto[];
  blogPackageTour: BlogItemDto[];
  blogCruise: BlogItemDto[];
  page: number;
  limit: number;
  total: number;
  refreshData: boolean;
}

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blog: [],
    blogSuggest: [],
    blogDailyTour: [],
    blogPackageTour: [],
    blogCruise: [],
    limit: 50,
    page: 1,
    total: 0,
    refreshData: true,
  } as BlogSlice,
  reducers: {
    setDataBlogSuggest: (state, action) => {
      state.blogSuggest = action.payload?.data;
    },
    setDataBlogTour: (state, action) => {
      state.blogDailyTour = action.payload?.dataBlogDaily;
      state.blogPackageTour = action.payload?.dataBlogPackage;
    },
    setDataBlogCruise: (state, action) => {
      state.blogCruise = action.payload?.data;
    },
    setDataBlog: (state, action) => {
      state.blog = action.payload?.data;
      state.total = action.payload?.total;
      state.page = action.payload.page;
      state.refreshData = false;
    },
    setLimitOrPageBlog: (
      state,
      action: { payload: { limit?: number; page?: number } }
    ) => {
      state.limit = action.payload.limit ? action.payload.limit : state.limit;
      state.page = action.payload.page ? action.payload.page : state.page;
      state.refreshData = true;
    },
    resetDataBlog: (state) => {
      state.blog = [];
      state.page = 1;
      state.limit = 10;
      state.total = 0;
      state.refreshData = true;
    },

    refreshDataBlog: (state) => {
      state.refreshData = true;
    },
  },
});

export const {
  setDataBlogSuggest,
  refreshDataBlog,
  resetDataBlog,
  setDataBlog,
  setLimitOrPageBlog,
  setDataBlogTour,
  setDataBlogCruise,
} = blogSlice.actions;

export default blogSlice.reducer;
