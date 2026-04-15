import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography, Divider, Avatar, Box } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';

const navItems = [
  { text: 'Dashboard', icon: <DashboardIcon /> },
  { text: 'Zadania', icon: <AssignmentIcon /> },
  { text: 'Ustawienia', icon: <SettingsIcon /> },
];

const DRAWER_WIDTH = 240;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          bgcolor: 'primary.main',
          color: 'white',
        },
      }}
    >
      <Toolbar>
        <Typography variant="h6" fontWeight="700">TodoApp</Typography>
      </Toolbar>
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.2)' }} />
      <List>
        {navItems.map(item => (
          <ListItemButton key={item.text} sx={{ color: 'white' }}>
            <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
        <Avatar sx={{ bgcolor: 'primary.dark' }}>U</Avatar>
        <Typography variant="body2">Użytkownik</Typography>
      </Box>
    </Drawer>
  );
}
