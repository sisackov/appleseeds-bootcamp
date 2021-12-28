import React, { useState, useEffect, useRef } from 'react';

const App = () => {
    const [editMode, setEditMode] = useState(false);
    const inputRef = useRef(null);
    /**
     * useRef is a hook that returns a mutable ref object whose .current
     * property is initialized to the passed argument (initialValue).
     * The returned object will persist for the full lifetime of the component.
     * refs can be used not only to access DOM nodes or React elements but also
     * to access mutable variables that you need to persist such as previous
     * state or props.
     */

    useEffect(() => {
        if (editMode) {
            inputRef.current.focus();
        }
    }, [editMode]);

    return (
        <div>
            {editMode && <input type='text' ref={inputRef}></input>}
            <button onClick={() => setEditMode(!editMode)}>
                {editMode ? 'Save' : 'Edit'}
            </button>
        </div>
    );
};

export default App;
