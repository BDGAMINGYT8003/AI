import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const DailyChallengeCard = () => {
  return (
    <Card sx={{ mb: 2, borderRadius: 4, background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)', color: 'white' }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          <FontAwesomeIcon icon={faLightbulb} style={{ marginRight: '8px' }} />
          Daily AI Challenge
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Today's Theme: **"Futuristic Cityscapes at Dusk"**
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Create an image or text based on the theme and tag it with #DailyChallenge to participate!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" sx={{ color: 'primary.main', bgcolor: 'white' }}>
          View Winners
        </Button>
      </CardActions>
    </Card>
  );
};

export default DailyChallengeCard;