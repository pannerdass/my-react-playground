import React, { useEffect, useState } from "react";

export default function ApiTextBox() {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [display, setDisplay] = useState([]);

  function onChangeEvent(e) {
    console.log(e.target.value);
    setLoading(true);
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    fetch(`http://localhost:7001/user?search=${searchValue}`)
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setDisplay(json);
        console.log(json);
      });

    console.log("use effect called");
  }, [searchValue]);

  return (
    <div>
      <input type="text" placeholder="search" onChange={onChangeEvent} />
      {isLoading && <h1>Loading......</h1>}
      {!isLoading && display.map((x) => <div key={x.name}>{x.name}</div>)}
    </div>
  );
}
