import React from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Chip,
} from '@mui/material';

const CreatePostScreen = () => {
  return (
    <Container maxWidth="sm" sx={{ pt: 2, pb: 2 }}>
      <Typography variant="h1" align="center" gutterBottom>
        Create a New Post
      </Typography>
      <Paper sx={{ p: 2, borderRadius: 4 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          label="What's on your mind?"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Image URL (optional)"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Tags (e.g., #AI, #Art)"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Box sx={{ mb: 2 }}>
          <Chip label="#AI" sx={{ mr: 1, mb: 1 }} />
          <Chip label="#Art" sx={{ mr: 1, mb: 1 }} />
        </Box>
        <Button variant="contained" color="primary" fullWidth>
          Post
        </Button>
      </Paper>
    </Container>
  );
};

export default CreatePostScreen;