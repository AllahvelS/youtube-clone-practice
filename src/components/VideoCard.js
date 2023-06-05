
import React from "react";
import { Link } from 'react-router-dom';
import './VideoCard.css'; 

const VideoCard = ({ video }) => {

    const videoId = video.id.videoId;
    const videoTitle = video.snippet.title;


    return (
        <Link to={`/videos/${videoId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="video-card">
                <img src={video.snippet.thumbnails.medium.url} alt={videoTitle} />
                <h4>{videoTitle}</h4>
            </div>
        </Link>
    );
}

export default VideoCard;



