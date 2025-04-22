// src/components/Dashboard.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold">
        Dashboard Overview
      </Typography>
      <Typography sx={{ mt: 2 }}>
        This is your main dashboard screen. You can load analytics and Firebase
        data here.
      </Typography>
    </Box>
  );
};

export default Dashboard;
