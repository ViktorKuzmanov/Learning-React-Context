import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const greenBackground = { backgroundColor: "green" };

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div style={greenBackground}>
      <h3>Movies app</h3>
      <p>Number of movies: {movies.length}</p>
    </div>
  );
};

export default Nav;
