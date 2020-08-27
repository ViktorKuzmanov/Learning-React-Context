import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    { name: "Movie1", price: "$11", id: 111 },
    { name: "Movie2", price: "$22", id: 222 },
    { name: "Movie3", price: "$33", id: 333 },
  ]);

  return <MovieContext.Provider>{props.children}</MovieContext.Provider>;
};
