import React from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Chip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { userProfile } from '../data/mockData';

const getTitleFromPathname = (pathname) => {
  switch (pathname) {
    case '/':
      return 'Community Feed';
    case '/ai':
      return 'AI Tools';
    case '/marketplace':
      return 'Marketplace';
    case '/profile':
      return 'Profile';
    case '/leaderboard':
      return 'Leaderboard';
    case '/monetization':
      return 'Subscriptions & Points';
    default:
      return 'Project Chimera';
  }
};

const TopAppBar = () => {
  const location = useLocation();
  const title = getTitleFromPathname(location.pathname);

  return (
    <AppBar position="fixed" color="background" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Chip
          icon={<FontAwesomeIcon icon={faCoins} />}
          label={userProfile.credits}
          color="primary"
          variant="outlined"
        />
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;