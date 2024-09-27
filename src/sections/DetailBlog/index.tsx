"use client";

import { LoadingModal } from "@/components/Loading";
import { useAppDispatch } from "@/lib";
import { resetDataBlog } from "@/lib/redux/app/blog.slice";
import {
  useBlog,
  useBlogSuggest,
  useDetailBlog,
  useIncrementViewBlog,
} from "@/utils/handleBlog";
import { useBlogCategories } from "@/utils/handleBlogCategory";
import {
  faCalendar,
  faEye,
  faRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function DetailBlogSection({ slug }: { slug: string }): JSX.Element {
  const { data: dataCategories } = useBlogCategories();
  const detailBlog = useDetailBlog(slug);
  useIncrementViewBlog(Number(detailBlog?.id));
  const dataBlogSuggest = useBlogSuggest();
  const router = useRouter();
  // const dispatch = useAppDispatch();

  return (
    <main className="bg-white border-b">
      <div className="container py-8 ">
        {/* <h1
          onClick={() => {
            dispatch(resetDataBlog());
            router.push("/blog");
          }}
          className="cursor-pointer text-center text-3xl font-bold text-[var(--secondary-color)] w-full relative line-text"
        >
          Blog
        </h1> */}
        <h1 className="cursor-pointer text-center text-4xl font-bold text-[var(--secondary-color)] w-full relative line-text">
          {detailBlog?.name || "Blog Detail"}
        </h1>

        {detailBlog ? (
          <div className="grid grid-cols-3 gap-7 pt-10">
            <article className="col-span-3 lg:col-span-2 ">
              <figure className="pt-[60%] relative">
                <Image
                  fill
                  alt="Image Blog"
                  src={detailBlog?.image || ""}
                  className="absolute top-0 bottom-0 left-0 right-0 "
                />
              </figure>

              <h1 className="text-2xl font-bold text-black mt-5">
                {detailBlog?.name}
              </h1>

              <section className="my-4">
                <div className="flex items-center gap-7">
                  <div className="flex items-center gap-1 text-[var(--text-color-default)]">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span>{moment(detailBlog?.createdAt).format("LL")}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[var(--text-color-default)]">
                    <FontAwesomeIcon icon={faEye} />
                    <span>{detailBlog?.view.toLocaleString()}</span>
                  </div>
                </div>
              </section>

              <section
                className="h-full"
                dangerouslySetInnerHTML={{
                  __html: detailBlog?.content || "",
                }}
              ></section>
            </article>
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
        ) : (
          <LoadingModal />
        )}
      </div>
    </main>
  );
}
