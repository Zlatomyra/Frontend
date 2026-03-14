import { useState } from "react";
import api from "../services/api";

function AddProperty() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const addProperty = () => {

    api.post("/properties", {
      id: Date.now(),
      title: title,
      price: Number(price),
      owner_id: 1
    });

  };

  return (
    <div>

      <h2>Add Property</h2>

      <input
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addProperty}>
        Add
      </button>

    </div>
  );
}

export default AddProperty;