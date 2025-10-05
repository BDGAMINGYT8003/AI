import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Layout from './components/Layout';

import CommunityScreen from './screens/CommunityScreen';
import AIScreen from './screens/AIScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';
import ProfileScreen from './screens/ProfileScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import MonetizationScreen from './screens/MonetizationScreen';
import CreatePostScreen from './screens/CreatePostScreen';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<CommunityScreen />} />
        <Route path="/ai" element={<AIScreen />} />
        <Route path="/marketplace" element={<MarketplaceScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/leaderboard" element={<LeaderboardScreen />} />
        <Route path="/monetization" element={<MonetizationScreen />} />
        <Route path="/create-post" element={<CreatePostScreen />} />
      </Routes>
    </Layout>
  );
}

export default App;