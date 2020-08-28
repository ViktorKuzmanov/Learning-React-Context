import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovie] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <form>
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
