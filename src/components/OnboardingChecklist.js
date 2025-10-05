import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  LinearProgress,
  Typography,
} from '@mui/material';

const checklistItems = [
  { id: 1, label: 'Try the AI text generator' },
  { id: 2, label: 'Create your first AI image' },
  { id: 3, label: 'Make your first community post' },
  { id: 4, label: 'Share a workflow' },
];

const OnboardingChecklist = () => {
  const [checked, setChecked] = useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const progress = (checked.length / checklistItems.length) * 100;

  return (
    <Card sx={{ mb: 2, borderRadius: 4 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Getting Started Checklist
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(
              progress
            )}%`}</Typography>
          </Box>
        </Box>
        <FormGroup>
          {checklistItems.map((item) => (
            <FormControlLabel
              key={item.id}
              control={
                <Checkbox
                  checked={checked.indexOf(item.id) !== -1}
                  onChange={handleToggle(item.id)}
                />
              }
              label={item.label}
            />
          ))}
        </FormGroup>
      </CardContent>
    </Card>
  );
};

export default OnboardingChecklist;