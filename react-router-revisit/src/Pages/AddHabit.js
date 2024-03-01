import React from "react";
import { useNavigate } from "react-router-dom";

export function AddHabit() {
  const navigate = useNavigate();

  function back() {
    debugger;
    navigate("/");
  }

  return (
    <>
      <div>New Habit</div>
      <input type="button" onClick={back} value="Back" />
    </>
  );
}
