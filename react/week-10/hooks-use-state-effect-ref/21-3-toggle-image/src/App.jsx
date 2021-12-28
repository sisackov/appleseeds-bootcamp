import React, { useState, useRef } from 'react';
import funny1color from './images/funny-1-color.jpg';
import funny1bw from './images/funny-1-bw.jpg';
import funny2color from './images/funny-2-color.jpg';
import funny2bw from './images/funny-2-bw.jpg';

/**
 * useRef is a hook that returns a mutable ref object whose .current
 * property is initialized to the passed argument (initialValue).
 * The returned object will persist for the full lifetime of the component.
 * refs can be used not only to access DOM nodes or React elements but also
 * to access mutable variables that you need to persist such as previous
 * state or props.
 */
const App = () => {
    const [is1Hovered, setIs1Hovered] = useState(false);
    const [is2Hovered, setIs2Hovered] = useState(false);
    const f1color = useRef(funny1color);
    const f1bw = useRef(funny1bw);
    const f2color = useRef(funny2color);
    const f2bw = useRef(funny2bw);

    return (
        <div>
            <div>
                <img
                    onMouseOver={() => setIs1Hovered(true)}
                    onMouseOut={() => setIs1Hovered(false)}
                    src={is1Hovered ? f1color.current : f1bw.current}
                    alt='funny1'
                />
            </div>
            <div>
                <img
                    onMouseOver={() => setIs2Hovered(true)}
                    onMouseOut={() => setIs2Hovered(false)}
                    src={is2Hovered ? f2color.current : f2bw.current}
                    alt='funny2'
                />
            </div>
        </div>
    );
};

export default App;
