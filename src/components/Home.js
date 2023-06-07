import React, { useState } from "react";
import SearchBar from './SearchBar';

const Home = ({ setVideos }) => {
  return (
    <div>
      <SearchBar setVideos={setVideos} />
    </div>
  );
};

export default Home;



