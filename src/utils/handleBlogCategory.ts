import { useAppDispatch, useAppSelector } from "@/lib";
import { useEffect } from "react";
import moment from "moment";
import { setDataBlogCategories } from "@/lib/redux/app/blogCategories.slice";
import { getAllBlogCategories } from "./api";

export const useBlogCategories = (limitCustom?: number) => {
  const { blogCategories, refreshData, page, limit } = useAppSelector(
    (state) => state.blogCategories
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (refreshData) {
        const res = await getAllBlogCategories(page, limitCustom || limit);
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataBlogCategories({ data, ...pagination }));
        }
      }
    }

    fetchData();
  }, [refreshData]);

  return {
    data:
      blogCategories.map((i) => {
        return {
          ...i,
          createdAt: moment(i.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        };
      }) || [],
  };
};
