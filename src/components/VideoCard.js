
import React from "react";
import { Link } from 'react-router-dom';
import './VideoCard.css'; 

const VideoCard = ({ video }) => {
    return (
        <div className="video-card">
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            <h4>{video.snippet.title}</h4>
            <Link to={`/videos/${video.id.videoId}`}>Watch Video</Link>
        </div>
    );
}

export default VideoCard;



