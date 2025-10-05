import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

const leaderboardData = [
  { rank: 1, name: 'PromptGod', karma: 15200, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704a' },
  { rank: 2, name: 'AI_Whisperer', karma: 14800, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704b' },
  { rank: 3, name: 'CreativeFlow', karma: 13500, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704c' },
  { rank: 4, name: 'ImageWizard', karma: 12000, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
  { rank: 5, name: 'SynthwaveSamurai', karma: 11500, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e' },
];

const LeaderboardScreen = () => {
  return (
    <Container maxWidth="sm" sx={{ pt: 2, pb: 2 }}>
      <Card sx={{ borderRadius: 4 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <FontAwesomeIcon icon={faTrophy} size="2x" color="gold" />
            <Typography variant="h1" fontWeight="bold" sx={{ ml: 2 }}>
              Top Creators
            </Typography>
          </Box>
          <List>
            {leaderboardData.map((user, index) => (
              <React.Fragment key={user.rank}>
                <ListItem>
                  <Typography variant="h6" sx={{ mr: 2, minWidth: 24, textAlign: 'center' }}>
                    {user.rank}
                  </Typography>
                  <ListItemAvatar>
                    <Avatar src={user.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={user.name}
                    secondary={`Karma: ${user.karma}`}
                    primaryTypographyProps={{ fontWeight: 'bold' }}
                  />
                </ListItem>
                {index < leaderboardData.length - 1 && <Divider variant="inset" component="li" />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LeaderboardScreen;