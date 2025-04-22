import React from "react";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import HistoryIcon from "@mui/icons-material/History";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Topbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={3}
      py={1.5}
      sx={{ borderBottom: "1px solid #e0e0e0", backgroundColor: "#fff" }}
    >
      {/* Left side: breadcrumb navigation */}
      <Box display="flex" alignItems="center" gap={1.5}>
        <DashboardIcon sx={{ color: "#757575" }} />
        <StarBorderIcon sx={{ color: "#757575" }} />
        <Typography variant="body2" color="text.secondary">
          Dashboards
        </Typography>
        <Typography variant="body2">/</Typography>
        <Typography variant="body2" fontWeight="bold">
          Default
        </Typography>
      </Box>

      {/* Right side: search and actions */}
      <Box display="flex" alignItems="center" gap={1.5}>
        <TextField
          size="small"
          variant="outlined"
          placeholder="Search"
          InputProps={{
            startAdornment: <SearchIcon sx={{ mr: 1, color: "#757575" }} />,
            sx: { borderRadius: 2, fontSize: 14 },
          }}
        />
        <IconButton>
          <WbSunnyIcon />
        </IconButton>
        <IconButton>
          <HistoryIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <DashboardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
