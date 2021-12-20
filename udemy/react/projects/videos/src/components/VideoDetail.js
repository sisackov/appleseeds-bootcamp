import React from 'react';

const VideoDetail = ({ video }) => {
    // return <div>{'Loading...' && video && video.snippet.title}</div>; shot circuit try
    if (!video) {
        return <div>Loading...</div>;
    }

    //below is multilevel destructuring
    const {
        snippet: { title, description },
        id: { videoId },
    } = video;
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div>
            <div className='ui embed'>
                <iframe title='embedded video player' src={videoSrc}></iframe>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
