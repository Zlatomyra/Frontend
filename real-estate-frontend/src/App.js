import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Properties from "./pages/Properties";
import AddProperty from "./pages/AddProperty";

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Properties</Link> | 
        <Link to="/add">Add Property</Link> |
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddProperty />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;