import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faRocket, faStore, faUser } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

const StyledNavLink = styled(NavLink)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.text.secondary};
  text-decoration: none;
  padding: 8px 0;
  font-size: 12px;

  &.active {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  svg {
    font-size: 20px;
    margin-bottom: 4px;
  }
`;

const BottomNavigationBar = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Box display="flex" justifyContent="space-around">
        <StyledNavLink to="/" end>
          <FontAwesomeIcon icon={faHome} />
          <span>Feed</span>
        </StyledNavLink>
        <StyledNavLink to="/ai">
          <FontAwesomeIcon icon={faRocket} />
          <span>AI</span>
        </StyledNavLink>
        <StyledNavLink to="/marketplace">
          <FontAwesomeIcon icon={faStore} />
          <span>Market</span>
        </StyledNavLink>
        <StyledNavLink to="/profile">
          <FontAwesomeIcon icon={faUser} />
          <span>Profile</span>
        </StyledNavLink>
      </Box>
    </Paper>
  );
};

export default BottomNavigationBar;