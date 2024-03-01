import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Habit() {
  return (
    <>
      <Link to="/habit/new">Add New</Link>
      {/* <div>
        <p>All habits</p>
      </div> */}
      <div>
        <p>All habits</p>
      </div>
    </>
  );
}
