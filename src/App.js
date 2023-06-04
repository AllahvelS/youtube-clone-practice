


import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useState } from 'react';

// Components
import Header from './components/Header';
import Home from  './components/Home';
import About from './components/About';
import SearchBar from './components/SearchBar';
import Videos from './components/Videos';  // Rename this to 'SearchResults' if you wish
import VideoPlayer from './components/VideoPlayer'; 

// Css
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);

  return (
    <Router>
      <div>
        <Header />
        <SearchBar setVideos={setVideos} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Videos videos={videos} />} />  // Added this line
          <Route path="/videos/:videoId" element={<VideoPlayer />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;




























