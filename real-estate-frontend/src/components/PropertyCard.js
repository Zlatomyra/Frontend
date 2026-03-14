import { Card, CardContent, Typography } from "@mui/material";

export default function PropertyCard({ property }) {
  return (
    <Card sx={{ marginBottom: 2, backgroundColor: "#fefae0" }}>
      <CardContent>
        <Typography variant="h6" sx={{ color: "#555" }}>{property.title}</Typography>
        <Typography sx={{ color: "#777" }}>${property.price}</Typography>
      </CardContent>
    </Card>
  );
}