import moment from "moment/moment";
import React from "react";
import { Cell } from "./Cell";
import { Text } from "./Text";
export function Calender({ startDate, endDate, checkInDates }) {
  const color = {
    checkInDate: "#05C46B",
    missingDate: "#F7D5D4",
    default: "#E5E6E6",
  };

  const styles = { width: "320px" };
  const width = 11;
  const height = 11;
  const xPosition = 15;
  const yPosition = 15;
  const cellGap = 2;
  const dummyArr = [];
  const dynamicDummyArr = [];
  const dummyDays = [];
  const Days = ["S", "M", "T", "W", "T", "F", "S"];
  const Days_In_Month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const MonthsName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dummyMonthArr = [];
  function dynamicMonthBind(startDate) {
    //get monthIndex from given date
    let monthIndex = parseInt(moment(startDate).add(0, "month").month());

    //get total count of days in month
    let daysInMonth = Days_In_Month[monthIndex];

    //get start date  from given date,start date like (2023-02-01)
    let startDateofMonth = moment(startDate)
      .startOf("month")
      .format("YYYY-MM-DD");

    // get start day of month from given date,it provides index of day like if "Wednesday" mean "3"
    let startDayofMonth = moment(startDate).startOf("month").format("d");
    let dayIndex = 1;
    let startDay = parseInt(startDayofMonth);

    let columnId = 1;

    // x and y  used to place the position of cell
    let x = xPosition;
    let y = yPosition + (height + cellGap) * startDay;

    let monthStartPosition = 0;
    let monthEndPosition = 0;

    let today = moment().format("YYYY-MM-DD");

    for (let index = 1; index <= 5; index++) {
      monthStartPosition = x;
      for (dayIndex; dayIndex <= daysInMonth; dayIndex++) {
        let date = moment(startDateofMonth)
          .add(dayIndex - 1, "day")
          .format("YYYY-MM-DD");

        dynamicDummyArr.push({
          column: columnId,

          x: x,
          y: y,
          date: date,
          fill: getCellFillColor(startDate, today, date),
        });

        y = y + height + cellGap;
        //if loop check  bind next column or next week
        if ((dayIndex + startDay) % 7 === 0) {
          y = yPosition;
          x = x + width + cellGap;
          columnId = columnId + 1;
        }
      }
      monthEndPosition = x;

      dummyMonthArr.push({
        start: monthStartPosition,
        end: monthEndPosition,
        x: (monthStartPosition + monthEndPosition) / 2,
        y: 6,
        text: MonthsName[monthIndex],
      });

      //get next month index from given date
      monthIndex = parseInt(moment(startDate).add(index, "month").month());
      //  console.log(`monthIndex:${monthIndex},index:${index}`);
      daysInMonth += Days_In_Month[monthIndex];
    }
  }

  function isMissDate(startDate, currentDate, date) {
    return moment(date).isBetween(startDate, currentDate) || startDate === date;
  }
  function isCheckInDate(date) {
    return checkInDates.includes(date);
  }

  function getCellFillColor(startDate, currentDate, date) {
    if (isCheckInDate(date)) return color.checkInDate;
    else if (isMissDate(startDate, currentDate, date)) return color.missingDate;
    else return color.default;
  }

  function addDays() {
    let y = yPosition + 5;

    Days.forEach((x) => {
      dummyDays.push({ x: xPosition - 8, y: y, text: x });
      y = y + height + cellGap;
    });
  }

  addDays();
  dynamicMonthBind(startDate);

  return (
    <>
      <svg height="110" style={styles}>
        {dynamicDummyArr.map((c) => (
          <Cell
            x={c.x}
            y={c.y}
            width={width}
            height={height}
            date={c.date}
            fill={c.fill}
          />
        ))}

        {dummyDays.map((d) => (
          <Text x={d.x} y={d.y} text={d.text} />
        ))}
        {dummyMonthArr.map((d) => (
          <Text x={d.x} y={d.y} text={d.text} />
        ))}
      </svg>
    </>
  );
}
