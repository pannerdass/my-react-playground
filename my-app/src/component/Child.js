import React from "react";

export default function Child(props) {
  const styles = {
    backgroundColor: props.flag ? "#222222" : "red",
  };

  return (
    <div
      key={props.id}
      style={styles}
      onClick={() => props.changeFlag(props.id)}
    >
      <h1>{props.name}</h1>
      <div>
        <span>{props.age}</span>
      </div>
    </div>
  );
}
