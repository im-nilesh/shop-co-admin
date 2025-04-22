import React from "react";
import {
  Drawer,
  List,
  ListItem,
  Divider,
  Box,
  Typography,
  Button,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";

import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CategoryIcon from "@mui/icons-material/Category";
import Person2Icon from "@mui/icons-material/Person2";

const drawerWidth = 240;

const Sidebar = () => {
  const sections = [
    {
      title: "Overview",
      items: [
        { label: "Dashboard", icon: <DashboardIcon /> },
        { label: "Products", icon: <ProductionQuantityLimitsIcon /> },
        { label: "Caterogy", icon: <CategoryIcon /> },
      ],
    },
    {
      title: "Account",
      items: [{ label: "Profile", icon: <Person2Icon /> }],
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
      {/* Branding title */}
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          ByeWind
        </Typography>
      </Box>

      {/* Sections */}
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
              <ListItem key={idx} disablePadding>
                <Button
                  startIcon={item.icon}
                  fullWidth
                  sx={{
                    justifyContent: "flex-start",
                    padding: "10px 16px",
                    textTransform: "none",
                    color: "text.primary",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                    },
                  }}
                >
                  {item.label}
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Drawer>
  );
};

export default Sidebar;
