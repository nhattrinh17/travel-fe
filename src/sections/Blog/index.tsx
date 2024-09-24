"use client";

import { BlogItem } from "@/components/BlogItem";
import { Pagination } from "@/uiCore/Pagination";
import { useBlog } from "@/utils/handleBlog";
import { useBlogCategories } from "@/utils/handleBlogCategory";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function HomeBlogSection(): JSX.Element {
  const { data: dataCategories } = useBlogCategories();
  console.log("🚀 ~ HomeNewsSection ~ dataCategories:", dataCategories);
  const { data: dataBlog, pagination } = useBlog();

  return (
    <main className="container py-8">
      <h1 className="text-center text-3xl font-bold text-[var(--secondary-color)] w-full relative line-text">
        Blog
      </h1>
      <div className="grid grid-cols-3 gap-3 pt-10">
        <div className="col-span-2 grid grid-cols-2 gap-1">
          {dataBlog.map((blog, index) => (
            <BlogItem {...blog} key={index} />
          ))}
        </div>
        <div className="col-span-1">
          <div>
            <h2 className="text-lg font-bold">Categories</h2>
            <div>
              {dataCategories?.map((category) => (
                <div
                  key={category.id}
                  className="border-b border-gray-200 py-2"
                >
                  <h3 className="transition-colors block py-1 font-semibold hover:text-[var(--text-hover-default)] text-[var(--text-color-default)] cursor-pointer text-base">
                    {category.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold">Related news</h2>
            <div>
              {dataBlog.reverse()?.map((category) => (
                <div
                  key={category.id}
                  className="border-b border-[#cccccc9e] py-3 flex items-center gap-2 group"
                >
                  <FontAwesomeIcon
                    icon={faRightLong}
                    className="text-[var(--text-color-default)] group-hover:animate-slideRight group-hover:text-[var(--text-hover-default)]"
                  />
                  <h3 className="transition-colors block py-1 font-semibold hover:text-[var(--text-hover-default)] text-[var(--text-color-default)] cursor-pointer text-sm">
                    {category.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Pagination {...pagination} handleSetPage={(page) => console.log(page)} />
    </main>
  );
}
