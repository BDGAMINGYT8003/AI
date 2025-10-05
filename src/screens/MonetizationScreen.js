import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faRocket, faStar } from '@fortawesome/free-solid-svg-icons';

const SubscriptionTier = ({ icon, title, price, features, primary = false }) => (
  <Card sx={{ borderRadius: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <FontAwesomeIcon icon={icon} size="2x" color={primary ? 'white' : 'primary'} />
        <Typography variant="h5" fontWeight="bold" sx={{ ml: 2 }}>
          {title}
        </Typography>
      </Box>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {price}
      </Typography>
      <Box component="ul" sx={{ p: 0, listStyle: 'none' }}>
        {features.map((feature) => (
          <Typography component="li" key={feature} sx={{ mb: 1 }}>
            ✓ {feature}
          </Typography>
        ))}
      </Box>
    </CardContent>
    <CardActions>
      <Button variant={primary ? 'contained' : 'outlined'} color="primary" fullWidth>
        {primary ? 'Get Started' : 'Upgrade'}
      </Button>
    </CardActions>
  </Card>
);

const MonetizationScreen = () => {
  return (
    <Container maxWidth="md" sx={{ pt: 2, pb: 2 }}>
      <Typography variant="h1" align="center" gutterBottom>
        Unlock Your Potential
      </Typography>

      <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={12} md={4}>
          <SubscriptionTier
            icon={faStar}
            title="Freemium"
            price="$0/mo"
            features={['Basic AI Models', '100 Daily Credits', 'Community Access']}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <SubscriptionTier
            icon={faRocket}
            title="Standard"
            price="$10/mo"
            features={['Advanced AI Models', '500 Daily Credits', 'Workflow Sharing']}
            primary
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <SubscriptionTier
            icon={faGem}
            title="Pro"
            price="$20/mo"
            features={['All AI Models', 'Unlimited Credits', 'Priority Support']}
          />
        </Grid>
      </Grid>

      <Card sx={{ mt: 4, borderRadius: 4, textAlign: 'center' }}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Purchase Point Packs
          </Typography>
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Need more credits? Get a one-time boost.
          </Typography>
          <Chip label="Coming Soon!" color="secondary" sx={{ mb: 2 }} />
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <Button variant="outlined" fullWidth disabled>100 Credits</Button>
            </Grid>
            <Grid item xs={6} md={3}>
              <Button variant="outlined" fullWidth disabled>500 Credits</Button>
            </Grid>
            <Grid item xs={6} md={3}>
              <Button variant="outlined" fullWidth disabled>1000 Credits</Button>
            </Grid>
            <Grid item xs={6} md={3}>
              <Button variant="outlined" fullWidth disabled>5000 Credits</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MonetizationScreen;