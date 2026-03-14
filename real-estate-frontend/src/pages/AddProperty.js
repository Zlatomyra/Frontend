import { useState } from "react";
import api from "../services/api";
import { Container, Typography, TextField, Button, MenuItem } from "@mui/material";

export default function AddProperty() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Apartment");

  const addProperty = async () => {
    await api.post("/properties", {
      id: Date.now(),
      title,
      price: Number(price),
      description,
      location,
      type,
      owner_id: 1
    });
    setTitle(""); setPrice(""); setDescription(""); setLocation(""); setType("Apartment");
  };

  return (
    <Container sx={{ marginTop: 4, maxWidth: 400 }}>
      <Typography variant="h4" sx={{ marginBottom: 2, color: "#555" }}>
        Add Property
      </Typography>
      <TextField fullWidth label="Title" variant="outlined" sx={{ marginBottom: 2, backgroundColor: "#fefae0" }}
        value={title} onChange={(e) => setTitle(e.target.value)} />
      <TextField fullWidth label="Price" variant="outlined" sx={{ marginBottom: 2, backgroundColor: "#fefae0" }}
        value={price} onChange={(e) => setPrice(e.target.value)} />
      <TextField fullWidth label="Description" variant="outlined" sx={{ marginBottom: 2, backgroundColor: "#fefae0" }}
        value={description} onChange={(e) => setDescription(e.target.value)} />
      <TextField fullWidth label="Location" variant="outlined" sx={{ marginBottom: 2, backgroundColor: "#fefae0" }}
        value={location} onChange={(e) => setLocation(e.target.value)} />
      <TextField select fullWidth label="Type" variant="outlined" sx={{ marginBottom: 2, backgroundColor: "#fefae0" }}
        value={type} onChange={(e) => setType(e.target.value)}>
        {["Apartment", "House", "Studio"].map(t => <MenuItem key={t} value={t}>{t}</MenuItem>)}
      </TextField>
      <Button variant="contained" fullWidth sx={{ backgroundColor: "#f4a261", color: "#333" }}
        onClick={addProperty}>
        Add
      </Button>
    </Container>
  );
}