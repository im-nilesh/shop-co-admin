import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const AdminPanel = () => {
  return (
    <Grid container style={{ height: "100vh" }}>
      {/* Sidebar - 10% */}
      <Grid
        item
        xs={2}
        style={{
          backgroundColor: "#f5f5f5",
          padding: "16px",
          borderRight: "1px solid #ddd",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Sitemark-web
        </Typography>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Analytics" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Clients" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Tasks" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Feedback" />
          </ListItem>
        </List>
      </Grid>

      {/* Main Content - 90% */}
      <Grid item xs={10} style={{ padding: "16px" }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
        <Box>
          {/* Add your dashboard content here */}
          <Typography variant="body1">
            Welcome to the admin panel. Add your dashboard widgets here.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AdminPanel;
