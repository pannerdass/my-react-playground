import { Link, Outlet } from "react-router-dom";

export function MovieLayOut() {
  return (
    <>
      <Link to="/Movie/NewMovie">New Movie</Link>
      <br />
      <Link to="/Movie/Movies">Movies</Link>
      <Outlet />
    </>
  );
}
