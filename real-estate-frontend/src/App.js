import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Properties from "./pages/Properties";
import AddProperty from "./pages/AddProperty";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Properties />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/add" element={<AddProperty />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;