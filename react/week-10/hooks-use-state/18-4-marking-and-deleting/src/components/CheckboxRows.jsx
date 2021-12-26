import React, { useState } from 'react';

const CHECKBOX_ITEMS = ['one', 'two', 'three', 'four', 'five'];

const CheckboxRows = () => {
    const [checks, setChecks] = useState(CHECKBOX_ITEMS);
    const [selected, setSelected] = useState([]);

    const handleSelectClick = (index) => {
        const ind = selected.indexOf(index);
        const newSelected =
            ind < 0
                ? [...selected, index]
                : [...selected.slice(0, ind), ...selected.slice(ind + 1)];
        setSelected(newSelected);
    };

    const handleDelete = () => {
        const newChecks = checks.filter(
            (_, index) => selected.indexOf(index) < 0
        );
        setChecks(newChecks);
        setSelected([]);
    };

    const handleReset = () => {
        setChecks(CHECKBOX_ITEMS);
        setSelected([]);
    };

    const renderRows = checks.map((item, index) => {
        return (
            <div className={`row`} key={item}>
                <input
                    type='checkbox'
                    checked={selected.indexOf(index) >= 0}
                    onChange={() => handleSelectClick(index)}
                />
                <span>{item}</span>
            </div>
        );
    });

    return (
        <div className='content'>
            <div className='buttons'>
                <button onClick={() => handleDelete()}>Delete</button>
                <button onClick={() => handleReset()}>Reset</button>
            </div>
            {renderRows}
        </div>
    );
};

export default CheckboxRows;
