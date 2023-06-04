// let api_key = 'AIzaSyAXWfFA6F3wHvBhRPrUt_6ZZs-bC4owfxk'
// let video_http = "https://www.googleapis.com/youtube/v3/videos?"

// fetch(video_http + new URLSearchParams({
//   key: api_key,
//   part: 'snippet',
//   chart: 'mostPopular',
//   maxResult: 1,
//   regionCode: 'IN'
// }))
// .then(response => response.json())
// .then(data =>{
//   console.log(data)
// })

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from 'react';





//Components
import Header from './components/Header';
import Home from './components/Home'
import About from './components/About'
import SearchBar from './components/Searchbar';

//Css
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* Define your routes using the Routes component */}
        <Routes>
          {/* Define individual routes using the Route component */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <SearchBar />
    </Router>
  );
}


export default App;