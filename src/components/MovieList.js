import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import ShimmerUi from "./ShimmerUi";

const MovieList = ({ title, movies }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setLoading(true), 1000);
  }, []);
  return (
    <div className="px-6 text-white">
      <h1 className="tex-5xl font-bold py-4">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex gap-4">
          {movies?.map((movie) =>
            loading ? <MovieCard movie={movie} key={movie.id} /> : <ShimmerUi />
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
