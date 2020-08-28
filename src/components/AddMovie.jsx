import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => {
      return [...prevMovies, { name: name, price: price }];
    });
  };

  return (
    <form onSubmit={addMovie}>
      <input
        placeholder="name"
        type="text"
        value={name}
        onChange={updateName}
      />
      <input
        placeholder="price"
        type="text"
        value={price}
        onChange={updatePrice}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
