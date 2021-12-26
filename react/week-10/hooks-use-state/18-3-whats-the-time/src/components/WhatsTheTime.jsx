import React, { useState } from 'react';

const WhatsTheTime = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    const handleSecondsChange = ({ target: { value: secs } }) => {
        setSeconds(secs);
        setMinutes(secs / 60);
        setHours(secs / 3600);
    };

    const handleMinutesChange = ({ target: { value: mins } }) => {
        setMinutes(mins);
        setSeconds(mins * 60);
        setHours(mins / 60);
    };

    const handleHoursChange = ({ target: { value: hrs } }) => {
        setHours(hrs);
        setMinutes(hrs * 60);
        setSeconds(hrs * 3600);
    };

    const inputs = [
        {
            stateVar: seconds,
            label: 'Seconds',
            value: 0,
            handle: handleSecondsChange,
        },
        {
            stateVar: minutes,
            label: 'Minutes',
            value: 0,
            handle: handleMinutesChange,
        },
        {
            stateVar: hours,
            label: 'Hours',
            value: 0,
            handle: handleHoursChange,
        },
    ];

    const renderInputs = inputs.map((item) => {
        return (
            <div className={`row`} key={item.label}>
                <label className={`form-label`}>{item.label}</label>
                <input
                    className={`form-input`}
                    type='number'
                    value={item.stateVar}
                    onChange={item.handle}
                />
            </div>
        );
    });
    return <div className='content'>{renderInputs}</div>;
};

export default WhatsTheTime;
