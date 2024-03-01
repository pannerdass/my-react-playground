import { useParams } from "react-router-dom";

export function GetMovie() {
  const { id } = useParams();

  return (
    <>
      <h1>GetMovies {id}</h1>
    </>
  );
}
