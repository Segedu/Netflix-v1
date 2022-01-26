import React from 'react';
import './VideoPlayer.module.css';

function VideoPlayer({ movieToPlay }) {
    return <div>
        <iframe src={movieToPlay.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>;
}

export default VideoPlayer;
