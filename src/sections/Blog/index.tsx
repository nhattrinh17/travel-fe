"use client";

import { BlogItem } from "@/components/BlogItem";
import { useAppDispatch } from "@/lib";
import { resetDataBlog, setLimitOrPageBlog } from "@/lib/redux/app/blog.slice";
import { Pagination } from "@/uiCore/Pagination";
import { useBlog, useBlogSuggest } from "@/utils/handleBlog";
import { useBlogCategories } from "@/utils/handleBlogCategory";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export function HomeBlogSection(): JSX.Element {
  const { data: dataCategories } = useBlogCategories();
  const searchParams = useSearchParams();
  const dataBlogSuggest = useBlogSuggest();
  const { data: dataBlog, pagination } = useBlog(
    searchParams.get("category") || ""
  );
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handlePageChange = (page: number) => {
    dispatch(
      setLimitOrPageBlog({
        page: page,
      })
    );
  };

  return (
    <main className="bg-white border-b">
      <div className="container py-8">
        <h1
          onClick={() => {
            dispatch(resetDataBlog());
            router.push("/blog");
          }}
          className="cursor-pointer text-center text-4xl font-bold text-[var(--secondary-color)] w-full relative line-text"
        >
          Blog
        </h1>
        <div className="grid grid-cols-3 gap-7 pt-10">
          <div className="col-span-3 lg:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-7">
            {dataBlog.map((blog, index) => (
              <BlogItem {...blog} key={index} />
            ))}
          </div>
          <div className="hidden lg:block col-span-1">
            <div>
              <h2 className="text-lg font-bold">Categories</h2>
              <div>
                {dataCategories?.map((category) => (
                  <div
                    key={category.id}
                    className="border-b border-gray-200 py-2"
                    onClick={() =>
                      router.push(`/blog?category=${category.slug}`)
                    }
                  >
                    <h3 className="transition-colors block py-1 font-semibold hover:text-[var(--text-hover-default)] text-[var(--text-color-default)] cursor-pointer text-base">
                      {category.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3">
              <h2 className="text-lg font-bold">Related blogs</h2>
              <div>
                {dataBlogSuggest?.map((blog) => (
                  <Link
                    href={`/blog/${blog.slug}`}
                    key={blog.id}
                    className="border-b border-[#cccccc9e] py-3 flex items-center gap-2 group"
                  >
                    <Image
                      alt="Blog"
                      src={blog.image}
                      width={80}
                      height={50}
                      className="w-1/4 h-full object-cover"
                    />
                    {/* <FontAwesomeIcon
                      icon={faRightLong}
                      className="text-[var(--text-color-default)] group-hover:animate-slideRight group-hover:text-[var(--text-hover-default)]"
                    /> */}
                    <h3 className="transition-colors block py-1 font-semibold hover:text-[var(--text-hover-default)] text-[var(--text-color-default)] cursor-pointer text-sm">
                      {blog.name}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Pagination
          //
          {...pagination}
          handleSetPage={handlePageChange}
        />
      </div>
    </main>
  );
}
