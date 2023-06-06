
import React from 'react';
import SearchBar from './SearchBar';
import VideoCard from './VideoCard';
import './Videos.css'; 

const Videos = ({ videos, setVideos }) => {
    return (
        <div>
            <SearchBar setVideos={setVideos} videos={videos} disableMessage />
            <div className="video-grid">
                {videos?.map(video => <VideoCard key={video.id.videoId} video={video} />)}
            </div>
        </div>
    );
};

export default Videos;


