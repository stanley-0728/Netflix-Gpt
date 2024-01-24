import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestions = () => {
  const movies = useSelector((store) => store.movie.nowPlaying);
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      <MovieList title={"Guntur Kaaram"} movies={movies} />
      
    </div>
  );
};

export default GptMovieSuggestions;
