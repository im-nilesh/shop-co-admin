import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase"; // Ensure this import is correct

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      // Authenticate user with Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin"); // Redirect to AdminPanel on success
    } catch (err) {
      console.error("Login error:", err); // Log the error details
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <Grid
      container
      style={{
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12} sm={8} md={4}>
        <Paper elevation={3} style={{ padding: "32px" }}>
          <Typography variant="h5" align="center" gutterBottom>
            Admin Login
          </Typography>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleLogin}
          >
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <Typography
                color="error"
                variant="body2"
                style={{ marginTop: "8px" }}
              >
                {error}
              </Typography>
            )}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: "16px" }}
              type="submit"
            >
              Login
            </Button>
          </Box>
          <Typography
            variant="body2"
            align="center"
            style={{ marginTop: "16px" }}
          >
            Forgot your password? Contact support.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
