import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-48 ">
      <img src={movie?.show?.image?.medium} alt="card" />
    </div>
  );
};

export default MovieCard;
