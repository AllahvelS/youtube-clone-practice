
import React from 'react';
import Searchbar from './Searchbar';
import VideoCard from './VideoCard';
import './Videos.css'; 

const Videos = ({ videos, setVideos }) => {
    return (
        <div>
            <Searchbar setVideos={setVideos} videos={videos} disableMessage />
            <div className="video-grid">
                {videos?.map(video => <VideoCard key={video.id.videoId} video={video} />)}
            </div>
        </div>
    );
};

export default Videos;


