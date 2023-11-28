

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

// components
import { Navbar, Feed, SearchFeed, VideoDetails, ChannelDetails } from './components';

const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor: "#000"}}>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/videos/:id' element={<VideoDetails />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
                <Route path='/channel/:id' exact element={<ChannelDetails />} />
            </Routes>

        </Box>
    </BrowserRouter>
  )


export default App
