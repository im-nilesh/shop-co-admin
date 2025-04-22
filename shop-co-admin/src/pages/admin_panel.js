import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/admin_sidebar";
import Dashboard from "./dashboard_page";
import Products from "./products_page";
import Category from "./category_page";
import Profile from "./profile_page";

const drawerWidth = 240;

const AdminPanel = () => {
  const [currentScreen, setCurrentScreen] = useState("Dashboard");

  const renderScreen = () => {
    switch (currentScreen) {
      case "Dashboard":
        return <Dashboard />;
      case "Products":
        return <Products />;
      case "Caterogy":
        return <Category />;
      case "Profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar onMenuSelect={setCurrentScreen} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#fff",
          minHeight: "100vh",
          p: 3,
          ml: `${drawerWidth}px`,
        }}
      >
        {renderScreen()}
      </Box>
    </Box>
  );
};

export default AdminPanel;
