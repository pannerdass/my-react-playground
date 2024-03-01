import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieList } from "./MovieList";

export function Movie({ setParentBackGround }) {
  const imageBaseAddress = "https://image.tmdb.org/t/p/original";
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    searchMovie(search);
  }, [search]);

  async function searchMovie(name) {
    if (name !== "" && name.length > 1) {
      var result = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=c392f220008562c5fa96269537c563bb&query=${name}`
      );
      var movieNames = result.data.results.map((x) => ({
        id: x.id,
        name: x.title,
      }));
      //  movieNames = movieNames.slice(0, 5);
      setList(movieNames);
      //console.log(movieNames);
    } else {
      setList([]);
    }
  }

  async function getMovieDetailsById(id) {
    if (id === "") return false;

    var details = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=c392f220008562c5fa96269537c563bb`
    );
    let imageName = details.data.backdrop_path;
    setParentBackGround(`${imageBaseAddress}${imageName}`);
    console.log(details.data);
  }
  const [text, setText] = useState("This is some text with a word to replace");

  const handleClick = () => {
    const replacedText = text.replace("word", "<strong>word</strong>");
    setText(replacedText);
  };
  return (
    <div className="max-w-md">
      {/* <div>
        <p>{text}</p>
        <button className="bg-slate-700" onClick={handleClick}>
          Replace
        </button>
      </div> */}

      <div className="pt-2">
        <input
          type="text"
          className="bg-gray-200 rounded-lg p-2 border-2 border-blue-500 w-64 text-orange-500 focus:shadow-outline"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="max-h-40 w-64 overflow-auto rounded-md border-2 bg-black opacity-75 text-white text-center">
          {list.map((x) => {
            return (
              <MovieList
                key={x.id}
                id={x.id}
                name={x.name}
                highlight={search}
                movieDetails={getMovieDetailsById}
              />
            );
          })}
        </div>
      </div>
      <div className="max-w-lg mt-36 rounded-lg border-2 flex flex-row justify-between">
        <div>ssdf</div>
        <div>dfdf</div>
      </div>
    </div>
  );
}
