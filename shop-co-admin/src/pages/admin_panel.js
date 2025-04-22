import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FolderIcon from "@mui/icons-material/Folder";
import BusinessIcon from "@mui/icons-material/Business";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HistoryIcon from "@mui/icons-material/History";

const drawerWidth = 240;

const Sidebar = () => {
  const sections = [
    {
      title: "Favorites",
      items: [
        { label: "Overview", icon: <FavoriteIcon /> },
        { label: "Projects", icon: <FolderIcon /> },
      ],
    },
    {
      title: "Dashboards",
      items: [
        { label: "Overview", icon: <DashboardIcon /> },
        { label: "eCommerce", icon: <BusinessIcon /> },
        { label: "Projects", icon: <FolderIcon /> },
      ],
    },
    {
      title: "Pages",
      items: [
        { label: "User Profile", icon: <AccountCircleIcon /> },
        { label: "Overview", icon: <DashboardIcon /> },
        { label: "Projects", icon: <FolderIcon /> },
        { label: "Campaigns", icon: <ArticleIcon /> },
        { label: "Documents", icon: <ArticleIcon /> },
        { label: "Followers", icon: <PeopleIcon /> },
      ],
    },
    {
      title: "Account",
      items: [{ label: "Settings", icon: <SettingsIcon /> }],
    },
    {
      title: "Recently",
      items: [{ label: "History", icon: <HistoryIcon /> }],
    },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#f9fafb",
          borderRight: "1px solid #e0e0e0",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          ByeWind
        </Typography>
      </Box>
      {sections.map((section, index) => (
        <Box key={index}>
          <Divider />
          <List>
            <Typography
              variant="subtitle2"
              sx={{ pl: 2, pt: 1 }}
              color="text.secondary"
            >
              {section.title}
            </Typography>
            {section.items.map((item, idx) => (
              <ListItem button key={idx}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Drawer>
  );
};

export default Sidebar;
