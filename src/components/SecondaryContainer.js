import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie.nowPlaying);

  return (
    movies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-40 relative z-10 md:pl-12 pl-4  ">
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Upcoming Movies"} movies={movies} />
          <MovieList title={"Popular Movies"} movies={movies} />
          <MovieList title={"Trending Playing"} movies={movies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
