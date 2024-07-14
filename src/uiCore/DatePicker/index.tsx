"use client";

import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import "./overwiteDatePicker.css";

const cx = classNames.bind(styles);

function ShowDateFormat({
  date,
  dateFormat,
}: {
  date: Date;
  dateFormat?: string;
}): JSX.Element {
  const dateStr = moment(date).format(dateFormat || "YYYY-MM-DD HH:mm:ss");

  return (
    <div className={cx("box-date")}>
      <FontAwesomeIcon icon={faCalendarDays} className={cx("box-date__icon")} />
      <span className={cx("box-date__str")}>{dateStr}</span>
    </div>
  );
}

export function DatePickerCustomer({
  endDate,
  selectsRange,
  startDate,
  onChangePicker,
  datePicker,
  onChangeRange,
  dateFormat,
  title,
  showDate,
  minDate,
}: {
  title?: string;
  dateFormat?: string;
  datePicker?: string;
  startDate?: string;
  endDate?: string;
  selectsRange: boolean;
  showDate: boolean;
  onChangeRange?: ({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate: string;
  }) => void;
  onChangePicker?: (date: string) => void;
  minDate: Date;
}): JSX.Element {
  const [startDateCus, setStartDateCus] = useState(
    startDate ? new Date(startDate) : new Date()
  );
  const [endDateCus, setEndDateCus] = useState(
    endDate ? new Date(endDate) : new Date()
  );
  const [dateCusPicker, setDateCusPicker] = useState(
    datePicker ? new Date(datePicker) : new Date()
  );
  const [openSelectDate, setOpenSelectDate] = useState(!showDate);

  useEffect(() => {
    if (startDateCus && endDateCus) {
      const startDateISO = moment(startDateCus).format(
        dateFormat || "YYYY-MM-DD HH:mm:ss"
      );
      const endDateISO = moment(endDateCus).format(
        dateFormat || "YYYY-MM-DD HH:mm:ss"
      );

      onChangeRange &&
        onChangeRange({ startDate: startDateISO, endDate: endDateISO });
    }
    if (dateCusPicker) {
      console.log("🚀 ~ useEffect ~ dateCusPicker:", dateCusPicker);
      const dateCusISO = moment(dateCusPicker).format(
        dateFormat || "YYYY-MM-DD HH:mm:ss"
      );

      onChangePicker && onChangePicker(dateCusISO);
    }
  }, [startDateCus, endDateCus, dateCusPicker]);

  return (
    <div className={cx("wrapper")}>
      {title ? <h2 className={cx("title")}>{title}</h2> : <></>}
      {selectsRange ? (
        <div
          className={cx("wrapper__date", {
            hidden: !showDate,
            flex: showDate,
          })}
          onClick={() => setOpenSelectDate(true)}
        >
          <ShowDateFormat date={startDateCus} dateFormat={dateFormat} />
          <span className={cx("wrapper__date--line")}>-</span>
          <ShowDateFormat date={endDateCus} dateFormat={dateFormat} />
        </div>
      ) : (
        <div
          className={cx("wrapper__date", {
            hidden: !showDate,
            flex: showDate,
          })}
          onClick={() => setOpenSelectDate(true)}
        >
          <ShowDateFormat date={startDateCus} dateFormat={dateFormat} />
        </div>
      )}
      {openSelectDate ? (
        selectsRange ? (
          <DatePicker
            dateFormat={dateFormat}
            onChange={(dates: any) => {
              setStartDateCus(dates[0]);
              setEndDateCus(dates[1]);
              if (!dates?.includes(null)) setOpenSelectDate(false);
            }}
            onClickOutside={() => setOpenSelectDate(false)}
            startDate={startDateCus}
            endDate={endDateCus}
            selectsRange={selectsRange}
            renderDayContents={(day) => <span>{day}</span>}
            inline
          />
        ) : (
          <DatePicker
            onChange={(date: any) => {
              setDateCusPicker(date);
              setOpenSelectDate(false);
            }}
            selected={startDateCus}
            onClickOutside={() => setOpenSelectDate(false)}
            inline
            minDate={minDate}
          />
        )
      ) : (
        <></>
      )}
    </div>
  );
}
