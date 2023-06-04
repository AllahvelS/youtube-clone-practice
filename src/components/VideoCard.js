// export default function VideoCard() {
//     return (
//         <div>
            
//         </div>
//     )
// }

import React from "react";
import './VideoCard.css'; 

const VideoCard = ({ video }) => {
    return (
        <div className="video-card">
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            <h4>{video.snippet.title}</h4>
        </div>
    );
}

export default VideoCard;
