import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  let interval = null;

  function handleEvent(e) {
    let name = e.target.name;
    let count = counter;
    if (name === "increase") {
      setCounter(count + 1);
    } else if (name === "decrease") {
      setCounter(count - 1);
    } else {
    }
  }

  function startTimer() {
    interval = setInterval(counterState, 1000);
  }
  function counterState() {
    //debugger;
    let count1 = counter;
    setCounter(count1 - 1);
  }
  function stopTimer() {
    clearInterval(interval);
  }

  return (
    <div>
      <label>{counter}</label>
      <div>
        <button name="increase" onClick={handleEvent}>
          Increase
        </button>
        <button name="start" onClick={startTimer}>
          Start
        </button>
        <button name="stop" onClick={stopTimer}>
          Stop
        </button>
        <button name="decrease" onClick={handleEvent}>
          Decrease
        </button>
      </div>
    </div>
  );
}
