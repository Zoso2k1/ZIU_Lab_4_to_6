import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme } from '../context/ThemeContext';

export default function AppHeader() {
  const { theme, toggleTheme } = useTheme();
  return (
    <AppBar position="fixed" sx={{ ml: 240 }}> {/* ml = szer. drawer */}
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Dashboard</Typography>
        <IconButton onClick={toggleTheme} color="inherit">
          <DarkModeIcon />
        </IconButton>
        <IconButton color="inherit">
          <NotificationsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
