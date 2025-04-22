import React from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";

const NotificationItem = ({ text, time }) => (
  <ListItem alignItems="flex-start" sx={{ px: 0 }}>
    <ListItemText
      primary={
        <Typography variant="body2" fontWeight={500}>
          {text}
        </Typography>
      }
      secondary={
        <Typography variant="caption" color="text.secondary">
          {time}
        </Typography>
      }
    />
  </ListItem>
);

const ActivityItem = ({ avatar, text, time }) => (
  <ListItem alignItems="flex-start" sx={{ px: 0 }}>
    <ListItemAvatar>
      <Avatar alt="avatar" src={avatar} />
    </ListItemAvatar>
    <ListItemText
      primary={<Typography variant="body2">{text}</Typography>}
      secondary={
        <Typography variant="caption" color="text.secondary">
          {time}
        </Typography>
      }
    />
  </ListItem>
);

const ContactItem = ({ avatar, name }) => (
  <ListItem sx={{ px: 0 }}>
    <ListItemAvatar>
      <Avatar alt={name} src={avatar} />
    </ListItemAvatar>
    <ListItemText primary={<Typography variant="body2">{name}</Typography>} />
  </ListItem>
);

const RightPanel = () => {
  return (
    <Box
      width="18%"
      minWidth={250}
      px={2}
      py={3}
      sx={{
        bgcolor: "#f9f9fb",
        borderLeft: "1px solid #e0e0e0",
        height: "100vh",
      }}
    >
      <Typography variant="h6" fontWeight={600} gutterBottom>
        Notifications
      </Typography>
      <List dense>
        <NotificationItem text="You fixed a bug." time="Just now" />
        <NotificationItem text="New user registered." time="59 minutes ago" />
        <NotificationItem text="You fixed a bug." time="12 hours ago" />
        <NotificationItem
          text="Andi Lane subscribed to you."
          time="Today, 11:59 AM"
        />
      </List>

      <Typography variant="h6" fontWeight={600} gutterBottom mt={3}>
        Activities
      </Typography>
      <List dense>
        <ActivityItem
          avatar="https://i.pravatar.cc/30?img=1"
          text="Changed the style."
          time="Just now"
        />
        <ActivityItem
          avatar="https://i.pravatar.cc/30?img=2"
          text="Released a new version."
          time="59 minutes ago"
        />
        <ActivityItem
          avatar="https://i.pravatar.cc/30?img=3"
          text="Submitted a bug."
          time="12 hours ago"
        />
        <ActivityItem
          avatar="https://i.pravatar.cc/30?img=4"
          text="Modified A data in Page X."
          time="Today, 11:59 AM"
        />
        <ActivityItem
          avatar="https://i.pravatar.cc/30?img=5"
          text="Deleted a page in Project X."
          time="Feb 2, 2025"
        />
      </List>

      <Typography variant="h6" fontWeight={600} gutterBottom mt={3}>
        Contacts
      </Typography>
      <List dense>
        <ContactItem
          avatar="https://i.pravatar.cc/30?img=6"
          name="Natali Craig"
        />
        <ContactItem avatar="https://i.pravatar.cc/30?img=7" name="Drew Cano" />
        <ContactItem avatar="https://i.pravatar.cc/30?img=8" name="Andi Lane" />
        <ContactItem
          avatar="https://i.pravatar.cc/30?img=9"
          name="Koray Okumus"
        />
        <ContactItem
          avatar="https://i.pravatar.cc/30?img=10"
          name="Kate Morrison"
        />
        <ContactItem
          avatar="https://i.pravatar.cc/30?img=11"
          name="Melody Macy"
        />
      </List>
    </Box>
  );
};

export default RightPanel;
