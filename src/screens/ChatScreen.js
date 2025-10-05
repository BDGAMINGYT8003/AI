import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  TextField,
  IconButton,
  Paper,
  Typography,
  Avatar,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ChatMessage = ({ message, isUser }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: isUser ? 'flex-end' : 'flex-start',
      mb: 2,
    }}
  >
    {!isUser && (
      <Avatar sx={{ bgcolor: 'primary.main', mr: 1 }}>AI</Avatar>
    )}
    <Paper
      elevation={1}
      sx={{
        p: 1.5,
        borderRadius: 3,
        backgroundColor: isUser ? 'primary.main' : 'background.paper',
        color: isUser ? 'white' : 'text.primary',
        maxWidth: '80%',
      }}
    >
      <Typography variant="body1">{message}</Typography>
    </Paper>
  </Box>
);

const ChatScreen = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I assist you today?', isUser: false },
    { text: 'Tell me a fun fact about space.', isUser: true },
    { text: 'Certainly! A day on Venus is longer than a year on Venus. It rotates incredibly slowly.', isUser: false },
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isUser: true }]);
      setInputValue('');

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "That's an interesting question! Let me check on that for you.", isUser: false },
        ]);
      }, 1500);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 105px)' }}>
      <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
        ))}
        <div ref={chatEndRef} />
      </Box>
      <Paper
        elevation={3}
        component="form"
        onSubmit={(e) => { e.preventDefault(); handleSend(); }}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', m: 1 }}
      >
        <TextField
          fullWidth
          variant="standard"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          InputProps={{ disableUnderline: true, sx: { ml: 1 } }}
        />
        <IconButton color="primary" type="submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </IconButton>
      </Paper>
    </Container>
  );
};

export default ChatScreen;