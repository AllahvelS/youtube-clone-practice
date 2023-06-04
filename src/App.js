



import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from  './components/Home';
import About from './components/About';
import Videos from './components/Videos';
import VideoPlayer from './components/VideoPlayer'; 

import './App.css';

function App() {
  const [videos, setVideos] = useState([]);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home setVideos={setVideos} />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Videos videos={videos} setVideos={setVideos} />} /> 
          <Route path="/videos/:videoId" element={<VideoPlayer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






























