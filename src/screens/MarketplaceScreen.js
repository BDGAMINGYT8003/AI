import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Tab,
  Tabs,
  Typography,
  Chip,
  Paper,
} from '@mui/material';
import { marketplaceItems } from '../data/mockData';

const MarketplaceItemCard = ({ item }) => (
  <Card sx={{ mb: 2, borderRadius: 4 }}>
    <CardContent>
      <Chip label={item.type} color="primary" size="small" sx={{ mb: 1 }} />
      <Typography variant="h6" component="div" fontWeight="bold">
        {item.title}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        by {item.author}
      </Typography>
      <Typography variant="body2">{item.description}</Typography>
    </CardContent>
    <Box sx={{ p: 2, pt: 0, display: 'flex', alignItems: 'center' }}>
      <Typography variant="body2" fontWeight="bold">
        {item.upvotes} Upvotes
      </Typography>
    </Box>
  </Card>
);

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`marketplace-tabpanel-${index}`}
      aria-labelledby={`marketplace-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
};

const CreatorSpotlight = () => (
  <Paper sx={{ mb: 2, p: 2, borderRadius: 4, background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', color: 'white' }}>
    <Typography variant="h6" fontWeight="bold">Creator Spotlight</Typography>
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704g" sx={{ mr: 2 }} />
      <Box>
        <Typography fontWeight="bold">VisionaryCreator</Typography>
        <Typography variant="body2">Known for stunning visual prompt packs.</Typography>
      </Box>
    </Box>
  </Paper>
);

const MarketplaceScreen = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const featuredItems = marketplaceItems.sort((a, b) => b.upvotes - a.upvotes).slice(0, 5);
  const promptBots = marketplaceItems.filter(item => item.type === 'Prompt Bot');
  const promptPacks = marketplaceItems.filter(item => item.type === 'Prompt Pack');

  return (
    <Container maxWidth="sm" sx={{ pt: 2, pb: 2 }}>
      <CreatorSpotlight />
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Marketplace tabs"
          variant="fullWidth"
        >
          <Tab label="Featured" />
          <Tab label="Prompt Bots" />
          <Tab label="Prompt Packs" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        {featuredItems.map((item) => (
          <MarketplaceItemCard key={item.id} item={item} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {promptBots.map((item) => (
          <MarketplaceItemCard key={item.id} item={item} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {promptPacks.map((item) => (
          <MarketplaceItemCard key={item.id} item={item} />
        ))}
      </TabPanel>
    </Container>
  );
};

export default MarketplaceScreen;