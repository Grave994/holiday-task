import React, { useState } from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logged in with:", { email, password });
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary" type="submit">
              Login
            </Button>
          </Grid>
          <Grid item xs={12} align="center">
            <Typography variant="body2">
              Don't have an account?{" "}
              <Link to="/">Register</Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Login;
