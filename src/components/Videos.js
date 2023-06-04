// import VideoCard from './VideoCard';


// export default function Videos () {
//     return
// }

import React from "react";
import VideoCard from './VideoCard';
import './Videos.css'; 

const Videos = ({ videos }) => {
    return (
        <div className="video-grid">
            {videos.map(video => <VideoCard key={video.id.videoId} video={video} />)}
        </div>
    );
}

export default Videos;
