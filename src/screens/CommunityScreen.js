import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Fab, Tooltip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PostCard from '../components/PostCard';
import OnboardingChecklist from '../components/OnboardingChecklist';
import DailyChallengeCard from '../components/DailyChallengeCard';
import { communityPosts } from '../data/mockData';

const CommunityScreen = () => {
  return (
    <Container maxWidth="sm" sx={{ pt: 2, pb: 2 }}>
      <DailyChallengeCard />
      <OnboardingChecklist />
      {communityPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <Tooltip title="Create Post">
        <Fab
          color="primary"
          aria-label="add"
          component={RouterLink}
          to="/create-post"
          sx={{
            position: 'fixed',
            bottom: 72,
            right: 16,
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </Fab>
      </Tooltip>
    </Container>
  );
};

export default CommunityScreen;