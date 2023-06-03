import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import { useState } from 'react';


//Components
import Header from './Components/Header';
import Home from './Components/Home'
import About from './Components/About'
import SearchBar from './Components/Searchbar';

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