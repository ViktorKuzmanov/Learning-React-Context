import React from "react";
import MoviesList from "./components/MoviesList";
import { MovieProvider } from "./context/MovieContext";
import Nav from "./components/Nav";
import AddMovie from "./components/AddMovie";

function App(props) {
  return (
    <MovieProvider>
      <Nav />
      <AddMovie />
      This is app component
      <MoviesList />
    </MovieProvider>
  );
}

export default App;
