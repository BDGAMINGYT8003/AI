import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  IconButton,
  Snackbar,
  Typography,
} from '@mui/material';
import CommentThread from './CommentThread';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUp,
  faArrowDown,
  faComment,
  faShare,
} from '@fortawesome/free-solid-svg-icons';

const PostCard = ({ post }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [votes, setVotes] = useState(post.upvotes);
  const [voted, setVoted] = useState(null); // 'up', 'down', or null

  const handleShare = () => {
    navigator.clipboard.writeText('https://project-chimera.dev/post/' + post.id);
    setSnackbarOpen(true);
  };

  const handleVote = (type) => {
    if (type === 'up') {
      if (voted === 'up') {
        setVotes(votes - 1);
        setVoted(null);
      } else if (voted === 'down') {
        setVotes(votes + 2);
        setVoted('up');
      } else {
        setVotes(votes + 1);
        setVoted('up');
      }
    } else if (type === 'down') {
      if (voted === 'down') {
        setVotes(votes + 1);
        setVoted(null);
      } else if (voted === 'up') {
        setVotes(votes - 2);
        setVoted('down');
      } else {
        setVotes(votes - 1);
        setVoted('down');
      }
    }
  };

  return (
    <Card sx={{ mb: 2, borderRadius: 4 }}>
      <CardHeader
        avatar={<Avatar src={post.user.avatar} />}
        title={post.user.name}
        subheader={`Karma: ${post.user.karma}`}
        titleTypographyProps={{ fontWeight: 'bold' }}
      />
      <CardContent>
        <Typography variant="body1" color="text.primary" paragraph>
          {post.text}
        </Typography>
        {post.image && (
          <CardMedia
            component="img"
            image={post.image}
            alt="Post content"
            sx={{ borderRadius: 3, mt: 1, mb: 1 }}
          />
        )}
        <Box>
          {post.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" sx={{ mr: 1, mb: 1 }} />
          ))}
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={() => handleVote('up')} color={voted === 'up' ? 'primary' : 'default'}>
          <FontAwesomeIcon icon={faArrowUp} />
        </IconButton>
        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
          {votes}
        </Typography>
        <IconButton onClick={() => handleVote('down')} color={voted === 'down' ? 'secondary' : 'default'}>
          <FontAwesomeIcon icon={faArrowDown} />
        </IconButton>
  const [commentsOpen, setCommentsOpen] = useState(false);
        <IconButton sx={{ ml: 'auto' }} onClick={() => setCommentsOpen(true)}>
          <FontAwesomeIcon icon={faComment} />
          <Typography variant="body2" sx={{ ml: 1 }}>
            {post.comments}
          </Typography>
        </IconButton>
        <IconButton onClick={handleShare}>
          <FontAwesomeIcon icon={faShare} />
        </IconButton>
      </CardActions>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        message="Link copied to clipboard!"
      />
      <CommentThread open={commentsOpen} onClose={() => setCommentsOpen(false)} />
    </Card>
  );
};

export default PostCard;