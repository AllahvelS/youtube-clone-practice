import React, { useState } from "react";
import Searchbar from './Searchbar';

const Home = ({ setVideos }) => {
  return (
    <div>
      <Searchbar setVideos={setVideos} />
    </div>
  );
};

export default Home;



