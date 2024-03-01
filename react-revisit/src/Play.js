import React from "react";

export function Play({ data, arr, handleChange }) {
  return (
    <div>
      Hi i am from play js {data}
      {arr.map((x) => (
        <p>{x}</p>
      ))}
      <input type="text" onChange={handleChange} />
    </div>
  );
}
