import React from 'react';
import './VideoPlayer.module.css';

function VideoPlayer({ movieToPlay }) {
    return <div>
        <iframe src={movieToPlay.video}></iframe>
    </div>;
}

export default VideoPlayer;
