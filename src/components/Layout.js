import React from 'react';
import { Box, Toolbar } from '@mui/material';
import BottomNavigationBar from './BottomNavigationBar';
import TopAppBar from './TopAppBar';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden',
        bgcolor: 'background.default',
      }}
    >
      <TopAppBar />
      <Toolbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          overflowY: 'auto',
          pb: '72px', // Padding for bottom nav
        }}
      >
        {children}
      </Box>
      <BottomNavigationBar />
    </Box>
  );
};

export default Layout;