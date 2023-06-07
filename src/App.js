
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from './components/Header';
import Home from  './components/Home';
import About from './components/About';
import Videos from './components/Videos';
import VideoPlayer from './components/VideoPlayer'; 
import ModalWindow from './components/ModalWindow';




import './App.css';

function App() {
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <Router>
      <div>
        <Header />
        <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>Open Modal</button>


        <Routes>
          <Route path="/" element={<Home setVideos={setVideos} />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Videos videos={videos} setVideos={setVideos} />} /> 

          <Route path="/videos/:videoId" element={<VideoPlayer />} />
        </Routes>

        {isModalOpen && <ModalWindow onClose={() => setIsModalOpen(false)} />}
      </div>
    </Router>
  );
}

export default App;
































