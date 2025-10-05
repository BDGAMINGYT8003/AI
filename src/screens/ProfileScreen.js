import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { userProfile } from '../data/mockData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedal, faFire, faStar, faTrophy, faGem, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const StreakRewardCard = ({ streak }) => (
  <Card sx={{ mt: 2, borderRadius: 4, background: 'linear-gradient(45deg, #FFC107 30%, #FF9800 90%)', color: 'white' }}>
    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
      <FontAwesomeIcon icon={faCalendarCheck} size="3x" />
      <Box sx={{ ml: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          {streak}-Day Streak!
        </Typography>
        <Typography variant="body2">
          You've earned a +50 credit bonus. Keep it up!
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

const StatCard = ({ icon, label, value }) => (
  <Card sx={{ textAlign: 'center', p: 2, borderRadius: 4 }}>
    <FontAwesomeIcon icon={icon} size="2x" color="primary" />
    <Typography variant="h6" fontWeight="bold" mt={1}>
      {value}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {label}
    </Typography>
  </Card>
);

const ProfileScreen = () => {
  const { name, avatar, level, karma, streak, badges } = userProfile;

  return (
    <Container maxWidth="sm" sx={{ pt: 2, pb: 2 }}>
      <Card sx={{ borderRadius: 4, p: 2, textAlign: 'center' }}>
        <Avatar
          alt={name}
          src={avatar}
          sx={{ width: 100, height: 100, margin: '0 auto 16px' }}
        />
        <Typography variant="h1" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Level {level}
        </Typography>
      </Card>

      {streak > 0 && <StreakRewardCard streak={streak} />}

      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <StatCard icon={faStar} label="Karma" value={karma} />
          </Grid>
          <Grid item xs={4}>
            <StatCard icon={faFire} label="Streak" value={`${streak} Days`} />
          </Grid>
          <Grid item xs={4}>
            <StatCard icon={faMedal} label="Badges" value={badges.length} />
          </Grid>
        </Grid>
      </Box>

      <Card sx={{ mt: 2, borderRadius: 4 }}>
        <CardContent>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Badges
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box>
            {badges.map((badge) => (
              <Chip key={badge} label={badge} sx={{ mr: 1, mb: 1 }} />
            ))}
          </Box>
        </CardContent>
      </Card>

      <Card sx={{ mt: 2, borderRadius: 4 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                component={RouterLink}
                to="/leaderboard"
                variant="outlined"
                fullWidth
                startIcon={<FontAwesomeIcon icon={faTrophy} />}
              >
                View Leaderboard
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                component={RouterLink}
                to="/monetization"
                variant="outlined"
                fullWidth
                startIcon={<FontAwesomeIcon icon={faGem} />}
              >
                Subscriptions & Points
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProfileScreen;