import React from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  CircularProgress,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';

const ImageGenScreen = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isGenerated, setIsGenerated] = React.useState(false);

  const handleGenerate = () => {
    setIsLoading(true);
    setIsGenerated(false);
    setTimeout(() => {
      setIsLoading(false);
      setIsGenerated(true);
    }, 2000);
  };

  return (
    <Container maxWidth="sm" sx={{ pt: 2, pb: 2 }}>
      <Typography variant="h1" align="center" gutterBottom>
        Image Generation
      </Typography>
      <Paper sx={{ p: 2, mb: 2, borderRadius: 4 }}>
        <TextField
          fullWidth
          label="Enter your prompt"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel>Style</InputLabel>
          <Select label="Style" defaultValue="cinematic">
            <MenuItem value="cinematic">Cinematic</MenuItem>
            <MenuItem value="photorealistic">Photorealistic</MenuItem>
            <MenuItem value="anime">Anime</MenuItem>
            <MenuItem value="3d-render">3D Render</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleGenerate}
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress size={24} /> : 'Generate'}
        </Button>
      </Paper>

      <Paper
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 300,
          borderRadius: 4,
        }}
      >
        {isLoading ? (
          <CircularProgress />
        ) : isGenerated ? (
          <img
            src="https://picsum.photos/seed/ai-image/600/300"
            alt="Generated content"
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }}
          />
        ) : (
          <Typography color="text.secondary">
            Your generated image will appear here
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default ImageGenScreen;