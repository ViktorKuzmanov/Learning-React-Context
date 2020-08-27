import React from "react";
import MoviesList from "./components/MoviesList";
import { MovieProvider } from "./context/MovieContext";

function App(props) {
  return (
    <MovieProvider>
      This is app component
      <MoviesList />
    </MovieProvider>
  );
}

export default App;
