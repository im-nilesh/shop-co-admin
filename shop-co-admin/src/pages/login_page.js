import React from "react";
import { Box, Button, TextField, Typography, Paper, Grid } from "@mui/material";

const LoginPage = () => {
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
          <Box component="form" noValidate autoComplete="off">
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="normal"
              type="email"
            />
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: "16px" }}
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
