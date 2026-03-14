import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Typography, TextField, Button, Alert } from "@mui/material";
import api from "../services/api";

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }
    try {
      const res = await api.post("/login", { email, password });
      login(res.data.token);
      setError("");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <Container sx={{ marginTop: 4, maxWidth: 400 }}>
      <Typography variant="h4" sx={{ marginBottom: 2, color: "#555" }}>
        Login
      </Typography>
      {error && <Alert severity="error" sx={{ marginBottom: 2 }}>{error}</Alert>}
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        sx={{ marginBottom: 2, backgroundColor: "#fefae0" }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        variant="outlined"
        sx={{ marginBottom: 2, backgroundColor: "#fefae0" }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        fullWidth
        sx={{ backgroundColor: "#f4a261", color: "#333" }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Container>
  );
}