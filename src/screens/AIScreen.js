import React from 'react';
import { Box, Tabs, Tab, Container } from '@mui/material';
import ChatScreen from './ChatScreen';
import ImageGenScreen from './ImageGenScreen';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faImage } from '@fortawesome/free-solid-svg-icons';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`ai-tabpanel-${index}`}
      aria-labelledby={`ai-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const AIScreen = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ p: 0 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="AI tools tabs"
          variant="fullWidth"
        >
          <Tab icon={<FontAwesomeIcon icon={faCommentDots} />} label="Chat" />
          <Tab icon={<FontAwesomeIcon icon={faImage} />} label="Image" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ChatScreen />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ImageGenScreen />
      </TabPanel>
    </Container>
  );
};

export default AIScreen;