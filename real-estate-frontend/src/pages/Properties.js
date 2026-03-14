import { useEffect, useState } from "react";
import api from "../services/api";

function Properties() {

  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {

    api.get("/properties")
      .then(res => {
        setProperties(res.data);
      })
      .catch(() => {
        setError("Failed to load properties");
      });

  }, []);

  return (
    <div>

      <h2>Properties</h2>

      {error && <p>{error}</p>}

      {properties.map(p => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.price}</p>
        </div>
      ))}

    </div>
  );
}

export default Properties;