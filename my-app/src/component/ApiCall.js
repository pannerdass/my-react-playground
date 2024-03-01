import React, { useEffect, useState } from "react";

export default function ApiCall() {
  const [user, setUser] = useState([]);
  console.log("calling");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) =>
        setUser((preState) => {
          return [...preState, ...json];
        })
      );
  }, []);
  console.log(user);
  return (
    <div>
      {user.map((x) => {
        return <p key={x.id}>{x.title}</p>;
      })}
    </div>
  );
}
