// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

// import { useState } from 'react';


// //Components
// import Header from './Components/Header';
// import Home from './Components/Home'
// import About from './Components/About'
// import SearchBar from './Components/Searchbar';

// //Css
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Header />
//         {/* Define your routes using the Routes component */}
//         <Routes>
//           {/* Define individual routes using the Route component */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//       <SearchBar />
//     </Router>
//   );
// }


// export default App;


import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from 'react';

// Components
import Header from './components/Header'  ;
import Home from  './components/Home';
import About from './components/About';
import SearchBar from './components/Searchbar';
import Videos from './components/Videos';  // Import Videos component

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
