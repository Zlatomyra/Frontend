import { useState, useContext } from "react";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { Container, Typography, TextField, Button, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async () => {
    if (!name || !email || !password) {
      setError("All fields are required");
      setSuccess("");
      return;
    }
    try {
      const res = await api.post("/register", { name, email, password });
      // Після успішної реєстрації автоматично логін
      const loginRes = await api.post("/login", { email, password });
      login(loginRes.data.token); // зберігаємо токен
      navigate("/"); // переходимо на Properties
    } catch (err) {
      setError(err.response?.data?.detail || "Registration failed");
      setSuccess("");
    }
  };

  return (
    <Container sx={{ marginTop: 4, maxWidth: 400 }}>
      <Typography variant="h4" sx={{ marginBottom: 2, color: "#555" }}>
        Register
      </Typography>
      {error && <Alert severity="error" sx={{ marginBottom: 2 }}>{error}</Alert>}
      {success && <Alert severity="success" sx={{ marginBottom: 2 }}>{success}</Alert>}
      <TextField fullWidth label="Name" variant="outlined" sx={{ marginBottom: 2, backgroundColor: "#fefae0" }}
        value={name} onChange={(e) => setName(e.target.value)} />
      <TextField fullWidth label="Email" variant="outlined" sx={{ marginBottom: 2, backgroundColor: "#fefae0" }}
        value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField fullWidth label="Password" type="password" variant="outlined" sx={{ marginBottom: 2, backgroundColor: "#fefae0" }}
        value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" fullWidth sx={{ backgroundColor: "#f4a261", color: "#333" }}
        onClick={handleRegister}>
        Register
      </Button>
    </Container>
  );
}