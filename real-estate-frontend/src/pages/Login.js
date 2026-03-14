import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {

  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {

    if (username === "") {
      setError("Username required");
      return;
    }

    login("fake-token");

  };

  return (
    <div>

      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

      {error && <p>{error}</p>}

    </div>
  );
}

export default Login;