import { useAppDispatch, useAppSelector } from "@/lib";
import { useEffect, useState } from "react";
import moment from "moment";
import {
  BlogItemDto,
  setDataBlog,
  setDataBlogTour,
  setDataBlogSuggest,
  setDataBlogCruise,
} from "@/lib/redux/app/blog.slice";
import { getAllBlog, getDetailBlogBySlug } from "./api";

export const useBlogSuggest = () => {
  const { blogSuggest } = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      console.log("🚀 ~ fetchData ~ blogSuggest.length:", blogSuggest.length);
      if (blogSuggest.length == 0) {
        const res = await getAllBlog(1, 10, 0, "createdAt", "DESC");
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataBlogSuggest({ data }));
        }
      }
    }

    fetchData();
  }, []);

  return [...blogSuggest];
};

export const useBlogTour = () => {
  const { blogDailyTour, blogPackageTour } = useAppSelector(
    (state) => state.blog
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      const [resBlogDaily, resBlogPackage] = await Promise.all([
        getAllBlog(1, 10, 1),
        getAllBlog(1, 10, 2),
      ]);
      if (resBlogDaily?.data || resBlogPackage?.data) {
        dispatch(
          setDataBlogTour({
            dataBlogDaily: resBlogDaily?.data?.data || [],
            dataBlogPackage: resBlogPackage?.data?.data || [],
          })
        );
      }
    }

    fetchData();
  }, []);

  return { blogDailyTour, blogPackageTour };
};

export const useBlogCruise = () => {
  const { blogCruise } = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      const res = await getAllBlog(1, 10, 0, "createdAt", "DESC");
      if (res?.data) {
        const { data } = res?.data;
        dispatch(setDataBlogCruise({ data }));
      }
    }

    fetchData();
  }, []);

  return { blogCruise };
};

export const useBlog = (blogCategory?: string) => {
  const { blog, refreshData, page, limit, total } = useAppSelector(
    (state) => state.blog
  );
  const { blogCategories } = useAppSelector((state) => state.blogCategories);

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (refreshData || blogCategory) {
        const idBlogCategory =
          blogCategories.find((c) => c.slug === blogCategory)?.id || 0;
        const res = await getAllBlog(page, limit, idBlogCategory);
        if (res?.data) {
          const { data, pagination } = res?.data;
          dispatch(setDataBlog({ data, ...pagination }));
        }
      }
    }

    fetchData();
  }, [refreshData, blogCategory]);

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

export const useDetailBlog = (slug: string) => {
  const [data, setData] = useState<BlogItemDto>();

  useEffect(() => {
    async function fetchData() {
      const res = await getDetailBlogBySlug(slug);
      if (res?.data) {
        setData(res.data);
      }
    }

    fetchData();
  }, []);

  return data;
};
