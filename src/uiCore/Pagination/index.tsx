import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

interface PaginationDto {
  page: number;
  total: number;
  limit: number;
  handleSetPage: (page: number) => void;
}

export function Pagination({
  page,
  total,
  limit,
  handleSetPage,
}: PaginationDto) {
  const totalPageShow = 7;
  const totalPage = Math.ceil(total / limit);
  const multiPage = totalPage > totalPageShow;
  const inLastSixPage = totalPage - totalPageShow < page;

  return (
    <div className={cx("wrapper", "flex justify-between")}>
      {/* Pre */}
      <div
        onClick={() => {
          if (page > 0) handleSetPage(page--);
        }}
        className="text-base flex items-center gap-2 text-[var(--text-color-default)] py-3 px-2 border-t-2 border-[transparent] hover:text-[#374151] hover:border-[#d1d5db] cursor-pointer"
      >
        <FontAwesomeIcon icon={faArrowLeftLong} />
        <span className="hidden lg:block">Previous</span>
      </div>

      {/* Page pagination */}
      {multiPage ? (
        inLastSixPage ? (
          <div className="flex text-base">
            {Array.from(
              { length: totalPageShow },
              (v, i) => totalPageShow + i
            ).map((item, index) => (
              <div key={index} className="">
                <span
                  onClick={() => handleSetPage(item)}
                  className={cx("border-t-2 block py-3 px-4 font-semibold", {
                    "text-[var(--secondary-color)] border-[var(--secondary-color)]":
                      page === item,
                    "text-[var(--text-color-default)] border-[transparent] hover:text-[#374151] hover:border-[#d1d5db] cursor-pointer":
                      page !== item,
                  })}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex text-base">
            {Array.from({ length: totalPageShow }, (v, i) => page - 3 + i).map(
              (item, index) => (
                <div key={index} className="">
                  <span
                    onClick={() => handleSetPage(item)}
                    className={cx("border-t-2 block py-3 px-4 font-semibold", {
                      "text-[var(--secondary-color)] border-[var(--secondary-color)]":
                        page === item,
                      "text-[var(--text-color-default)] border-[transparent] hover:text-[#374151] hover:border-[#d1d5db] cursor-pointer":
                        page !== item,
                    })}
                  >
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        )
      ) : (
        <div className="flex text-base">
          {Array.from({ length: totalPage }, (v, i) => i + 1).map(
            (item, index) => (
              <div key={index} className="">
                <span
                  onClick={() => handleSetPage(item)}
                  className={cx("border-t-2 block py-3 px-4 font-semibold", {
                    "text-[var(--secondary-color)] border-[var(--secondary-color)]":
                      page === item,
                    "text-[var(--text-color-default)] border-[transparent] hover:text-[#374151] hover:border-[#d1d5db] cursor-pointer":
                      page !== item,
                  })}
                >
                  {item}
                </span>
              </div>
            )
          )}
        </div>
      )}

      {/* Next */}
      <div
        onClick={() => {
          if (page < totalPage) handleSetPage(page++);
        }}
        className="text-base flex items-center gap-2 text-[var(--text-color-default)] py-3 px-2 border-t-2 border-[transparent] hover:text-[#374151] hover:border-[#d1d5db] cursor-pointer"
      >
        <span className="hidden lg:block">Next</span>
        <FontAwesomeIcon icon={faArrowRightLong} />
      </div>
    </div>
  );
}
