import { useAppDispatch, useAppSelector } from "@/lib";
import { useEffect } from "react";
import moment from "moment";
import { setDataBlog } from "@/lib/redux/app/blog.slice";
import { getAllBlog } from "./api";

export const useBlog = (idBlogCategory?: number) => {
  const { blog, refreshData, page, limit, total } = useAppSelector(
    (state) => state.blog
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (refreshData || idBlogCategory) {
        const res = await getAllBlog(page, limit, idBlogCategory);
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataBlog({ data, ...pagination }));
        }
      }
    }

    fetchData();
  }, [refreshData, idBlogCategory]);

  return {
    data:
      blog.map((i) => {
        return {
          ...i,
          createdAt: moment(i.createdAt).format("YYYY-MM-DD HH:mm:ss"),
        };
      }) || [],
    pagination: {
      page,
      limit,
      total,
    },
  };
};
