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
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SearchBar from "./components/Searchbar";

//Css
import './App.css';








function App() {
  // const [inputSearch, setInputSearch] = useState("") 
  
  
  return (
    <div>
      <Header />
      {/* <input 
        onChange={event => setInputSearch(event.target.value)}
        value = {inputSearch}
        placeholder="Search Video" //find something else for this one
        type = "text"
        /> */}

      <SearchBar />  
    </div>
  )
}

export default App;