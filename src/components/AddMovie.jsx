import React, { useState } from "react";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

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
