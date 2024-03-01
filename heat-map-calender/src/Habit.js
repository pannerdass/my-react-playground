import React from "react";
import { Calender } from "./Calender";

export function Habit(props) {
  return (
    <>
      <div className="bg-white  rounded-lg shadow-lg flex flex-col p-5 m-3 ">
        <div className="flex justify-between pb-10">
          <div className="font-bold text-lg">{props.title}</div>
          <div></div>
        </div>
        <div className="flex justify-between pb-10 font-bold text-lg">
          <div>1</div>
          <div>100</div>
          <div>1</div>
        </div>
        <div className="">
          <Calender
            startDate={props.startDate}
            endDate={props.endDate}
            checkInDates={props.checkInDates}
          />
        </div>
      </div>
    </>
  );
}
