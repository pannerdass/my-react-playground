import { Link } from "react-router-dom";

export function Movies() {
  return (
    <>
      <h1>All Moveies</h1>
      <input type="button" value="back" />
      <Link to="1">Varisu</Link>
      <Link to="2">Thunivu</Link>
    </>
  );
}
