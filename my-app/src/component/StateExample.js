import React, { useState } from "react";
import Employee from "./Employee";
import { sampleData } from "../utlis/datasource";

function StateExample() {
  const [employeeArr, AddEmployee] = useState([
    "Employee-1",
    "Employee-2",
    "Employee-3",
  ]);

  function buttonClick() {
    AddEmployee((preState) => {
      return [...preState, `Employee-${preState.length + 1}`];
    });
  }

  return (
    <>
      <div>
        <input type="button" value="click me" onClick={buttonClick} />
      </div>
      <div>
        {employeeArr.map((emp) => (
          <p>{emp}</p>
        ))}
      </div>
    </>
  );
}

export default StateExample;
