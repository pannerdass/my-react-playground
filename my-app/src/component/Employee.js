import React from "react";

export default function Employee(props) {
  console.log(props);
  //const { item } = props;
  // props.name = "panner";
  return (
    <div>
      {props.name} {props.age}
      {/* {item.flag && <p>True </p>} */}
      <span>{props.flag.toString()}</span>
    </div>
  );
}
