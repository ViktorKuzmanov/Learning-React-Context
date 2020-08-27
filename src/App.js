import React from "react";
import MoviesList from "./components/MoviesList";
import { MovieProvider } from "./context/MovieContext";
import Nav from "./components/Nav";

function App(props) {
  return (
    <MovieProvider>
      <Nav />
      This is app component
      <MoviesList />
    </MovieProvider>
  );
}

export default App;
