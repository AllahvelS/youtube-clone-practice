import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from 'react';


// Css
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);  // Declare a videos state

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
        {/* Pass the setVideos function to the SearchBar component */}
        <SearchBar setVideos={setVideos} />
        {/* Render the Videos component passing the videos state */}
        <Videos videos={videos} />
      </div>
    </Router>
  );
}

export default App;



























function App() {
  return (
    <div>
      <Header />
    </div>
  )
}
