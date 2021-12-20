import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    // return <div key={video.id.videoId}>{video.snippet.title}</div>;
    return (
        //using the arrow function in onClick in order to pass the video w/o setting state for video
        <div onClick={() => onVideoSelect(video)} className='item video-item'>
            <img
                className='ui image'
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
            />
            <div className='content'>
                <div className='header'>{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;
