import React from 'react';
import {
  Avatar,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

const comments = [
  {
    user: { name: 'Commenter1', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705a' },
    text: 'This is an amazing result! Can you share the prompt?',
  },
  {
    user: { name: 'AI_Explorer', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
    text: 'Thanks! I\'m still tweaking it, but I\'ll share the workflow in the marketplace soon.',
  },
  {
    user: { name: 'Commenter2', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705b' },
    text: 'Looking forward to it!',
  },
];

const CommentThread = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle fontWeight="bold">Comment Thread</DialogTitle>
      <DialogContent>
        <List>
          {comments.map((comment, index) => (
            <React.Fragment key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar src={comment.user.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography fontWeight="bold">{comment.user.name}</Typography>
                  }
                  secondary={comment.text}
                />
              </ListItem>
              {index < comments.length - 1 && <Divider variant="inset" component="li" />}
            </React.Fragment>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
};

export default CommentThread;