import React from 'react';
import { Box, Toolbar } from '@mui/material';
import Sidebar from './Sidebar';
import AppHeader from './AppHeader';
import StatsGrid from './StatsGrid';

export default function DashboardLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <AppHeader />
        <Toolbar /> {}
        <Box sx={{ p: 3 }}>
          <StatsGrid />
          {}
        </Box>
      </Box>
    </Box>
  );
}