import React, { useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([
    { name: "Movie1", price: "$11", id: 111 },
    { name: "Movie2", price: "$22", id: 222 },
    { name: "Movie3", price: "$33", id: 333 },
  ]);
  return (
    <div>
      {movies.map((movie) => (
        <li>{movie.name}</li>
      ))}
    </div>
  );
};

export default MovieList;
