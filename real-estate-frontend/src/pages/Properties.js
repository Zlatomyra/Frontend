import { useEffect, useState } from "react";
import api from "../services/api";
import { Container, Typography, Alert, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

export default function Properties() {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");
  const [selectedProperty, setSelectedProperty] = useState(null); // для модалки

  useEffect(() => {
    api.get("/properties")
      .then(res => setProperties(res.data))
      .catch(() => setError("Failed to load properties"));
  }, []);

  const handleOpen = (property) => setSelectedProperty(property);
  const handleClose = () => setSelectedProperty(null);

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 3, color: "#555" }}>
        Properties
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}

      {properties.map((p) => (
        <div key={p.id} style={{ marginBottom: "16px", padding: "12px", backgroundColor: "#fefae0", borderRadius: "8px" }}>
          <Typography variant="h6">{p.title}</Typography>
          <Typography variant="subtitle1" color="text.secondary">Price: ${p.price}</Typography>
          <Typography variant="body2" color="text.secondary">Location: {p.location || "N/A"}</Typography>

          <Button 
            variant="outlined" 
            sx={{ marginTop: 1, backgroundColor: "#a8dadc", color: "#333" }}
            onClick={() => handleOpen(p)}
          >
            View Details
          </Button>
        </div>
      ))}

      {/* Модальне вікно для деталей */}
      <Dialog open={!!selectedProperty} onClose={handleClose}>
        {selectedProperty && (
          <>
            <DialogTitle>{selectedProperty.title}</DialogTitle>
            <DialogContent dividers>
              <Typography variant="subtitle1">Price: ${selectedProperty.price}</Typography>
              <Typography variant="subtitle2">Type: {selectedProperty.type}</Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                {selectedProperty.description || "No description available."}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1, color: "gray" }}>
                Location: {selectedProperty.location || "N/A"}
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} sx={{ color: "#f4a261" }}>Close</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Container>
  );
}