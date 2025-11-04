import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    axios.post("http://localhost:4000/api/auth/login", { email, password })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        alert("Login success!");
        window.location.href = "/";
      })
      .catch(() => alert("Login failed"));
  }

  return (
    <Box sx={{ maxWidth: 320, mx: "auto", mt: 8 }}>
      <h2>Log In</h2>
      <form onSubmit={handleLogin}>
        <TextField type="email" label="Email" required fullWidth margin="normal"
          value={email} onChange={e => setEmail(e.target.value)} />
        <TextField type="password" label="Password" required fullWidth margin="normal"
          value={password} onChange={e => setPassword(e.target.value)} />
        <Button type="submit" variant="contained" fullWidth>Log In</Button>
      </form>
    </Box>
  );
}
export default Login;
