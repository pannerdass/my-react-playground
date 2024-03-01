import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Movies } from "./pages/Movies";
import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";
import { NewMovies } from "./pages/NewMovie";
import { MovieLayOut } from "./pages/MovieLayOut";
import { GetMovie } from "./pages/GetMovie";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <br />

        <Link to="/Contact">Contact</Link>
        <br />
        <Link to="/Movie">Movie</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Movie" element={<MovieLayOut />}>
          <Route index element={<Movie />}></Route>
          <Route path="NewMovie" element={<NewMovies />}></Route>
          <Route path="Movies">
            <Route index element={<Movies />}></Route>
            <Route path=":id" element={<GetMovie />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
