import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { token, logout } = useContext(AuthContext);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#a8dadc" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, color: "#333" }}>
          Real Estate
        </Typography>

        {!token && (
          <>
            <Button component={Link} to="/login" sx={{ color: "#333" }}>
              Login
            </Button>
            <Button component={Link} to="/register" sx={{ color: "#333" }}>
              Register
            </Button>
          </>
        )}

        {token && (
          <>
            <Button component={Link} to="/" sx={{ color: "#333" }}>
              Properties
            </Button>
            <Button component={Link} to="/add" sx={{ color: "#333" }}>
              Add Property
            </Button>
            <Button onClick={logout} sx={{ color: "#333" }}>
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}