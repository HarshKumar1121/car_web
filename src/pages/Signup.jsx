import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer"); // buyer, renter, owner

  function handleSignup(e) {
    e.preventDefault();
    axios.post("http://localhost:4000/api/auth/signup", { email, password, role })
      .then(() => alert("Signup successful!"))
      .catch(() => alert("Signup failed"));
  }

  return (
    <Box sx={{ maxWidth: 320, mx: "auto", mt: 8 }}>
      <h2>Create Account</h2>
      <form onSubmit={handleSignup}>
        <TextField type="email" label="Email" required fullWidth margin="normal"
          value={email} onChange={e => setEmail(e.target.value)} />
        <TextField type="password" label="Password" required fullWidth margin="normal"
          value={password} onChange={e => setPassword(e.target.value)} />
        <TextField select label="Role" fullWidth margin="normal"
          value={role} onChange={e => setRole(e.target.value)}
          SelectProps={{ native: true }}>
          <option value="buyer">Buyer</option>
          <option value="renter">Renter</option>
          <option value="owner">Owner</option>
        </TextField>
        <Button type="submit" variant="contained" fullWidth>Sign Up</Button>
      </form>
    </Box>
  );
}
export default Signup;
