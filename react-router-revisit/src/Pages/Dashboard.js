import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Dashboard() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="habit">Habit</Link>
          </li>
          <li>
            <Link to="users">Users</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
