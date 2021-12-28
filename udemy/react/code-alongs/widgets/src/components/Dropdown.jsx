import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        // below code closes the dropdown when user clicks outside of the dropdown
        const onBodyClick = (event) => {
            console.log('event.target: ', event.target);
            console.log('ref.current: ', ref.current);
            //below condition checks if the element clicked is inside the dropdown component
            if (ref.current.contains(event.target)) {
                // if the click is inside of the dropdown,
                // let the event be handled by the onClick
                // handler of the dropdown(which will close the dropdown after selecting an option)
                return;
            }
            // if the click is outside of the dropdown, close the dropdown
            setOpen(false);
        };
        //event listeners that were set with addEventListener will be called first(before React event listeners).
        // capture phase was added in React 17
        document.body.addEventListener('click', onBodyClick, { capture: true });

        return () => {
            // cleanup - when component unmounts remove event listener
            document.body.removeEventListener('click', onBodyClick, {
                capture: true,
            });
        };
    }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }

        return (
            <div
                key={option.value}
                className='item'
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        );
    });

    // when the user clicks on the 'item' div, it will first execute the onClick function,
    // and then bubble up to the onClick function of the 'ui selection dropdown' div.
    return (
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className='label'>{label}</label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${
                        open ? 'visible active' : ''
                    }`}
                >
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
