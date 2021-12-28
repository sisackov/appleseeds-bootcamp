import React, { useState, useEffect, useRef } from 'react';

/**
 * useRef is a hook that returns a mutable ref object whose .current
 * property is initialized to the passed argument (initialValue).
 * The returned object will persist for the full lifetime of the component.
 * refs can be used not only to access DOM nodes or React elements but also
 * to access mutable variables that you need to persist such as previous
 * state or props.
 */

{
    /* <iframe
    width='560'
    height='315'
    src='https://www.youtube.com/embed/t2ypzz6gJm0'
    title='YouTube video player'
    frameborder='0'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowfullscreen
></iframe>; */
}
const App = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }, [isPlaying]);

    return (
        <div>
            <div>
                <video width='550' height='315' ref={videoRef}>
                    <source
                        src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'
                        type='video/webm'
                    />
                    <source
                        src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
                        type='video/mp4'
                    />
                    Sorry your browser does not support HTML5 video.
                </video>
            </div>
            <button onClick={() => setIsPlaying(true)}>Play</button>
            <button onClick={() => setIsPlaying(false)}>Pause</button>
        </div>
    );
};

export default App;
