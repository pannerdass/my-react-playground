import React, { useState } from "react";
import { sampleData } from "../utlis/datasource";
import Child from "./Child";

export default function Parent() {
  const [sample, setSample] = useState(sampleData());

  function changeFlag(id) {
    console.log(id);
    // console.log(sample);

    setSample((preData) => {
      return preData.map((data) => {
        return data.id === id ? { ...data, flag: !data.flag } : data;
      });

      //     const newSampleData = [];

      //   for (let index = 0; index < preData.length; index++) {
      //     const element = preData[index];
      //     if (element.id === id) {
      //       const changeData = {
      //         ...element,
      //         flag: !element.flag,
      //       };

      //       newSampleData.push(changeData);
      //     } else {
      //       newSampleData.push(element);
      //     }
      //   }

      //   return newSampleData;
    });
  }

  return (
    <div>
      {sample.map((x) => {
        return (
          <Child
            key={x.id}
            id={x.id}
            name={x.name}
            age={x.age}
            flag={x.flag}
            changeFlag={changeFlag}
          />
        );
      })}
    </div>
  );
}
