import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/admin_sidebar";
import Topbar from "../components/admin_topbar";

const AdminPanel = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <Box sx={{ flexGrow: 1 }}>
        {/* Top navigation bar */}
        <Topbar />

        {/* Page-specific content goes here */}
        {/* Example component: Overview section */}
        <Box p={3}>Overview content...</Box>
      </Box>
    </Box>
  );
};
export default AdminPanel;
