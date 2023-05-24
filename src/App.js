import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import { useState } from 'react';


//Components
import Header from './components/Header';
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import SearchBar from "./components/Searchbar";

//Css
import './App.css';








function App() {
  return (
    <div>
      <Header />
    </div>
  )
}

export default App;