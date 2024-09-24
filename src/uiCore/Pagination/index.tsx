import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

interface PaginationDto {
  page: number;
  total: number;
  limit: number;
  handleSetPage: (page: number) => void;
}

export function Pagination({}: PaginationDto) {
  return (
    <div className={cx("wrapper", "flex justify-between")}>
      <div className="flex"></div>
    </div>
  );
}
