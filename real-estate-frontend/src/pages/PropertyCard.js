import { Card, CardContent, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useState } from "react";

export default function PropertyCard({ property }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card sx={{ marginBottom: 2, backgroundColor: "#fefae0" }}>
        <CardContent>
          <Typography variant="h6">{property.title}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Price: ${property.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Location: {property.location || "N/A"}
          </Typography>

          {/* Кнопка для перегляду деталей */}
          <Button 
            variant="outlined" 
            sx={{ marginTop: 1, backgroundColor: "#a8dadc", color: "#333" }}
            onClick={handleOpen}
          >
            View Details
          </Button>
        </CardContent>
      </Card>

      {/* Modal для детальної інформації */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{property.title}</DialogTitle>
        <DialogContent dividers>
          <Typography variant="subtitle1">Price: ${property.price}</Typography>
          <Typography variant="subtitle2">Type: {property.type}</Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            {property.description || "No description available."}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1, color: "gray" }}>
            Location: {property.location || "N/A"}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "#f4a261" }}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}