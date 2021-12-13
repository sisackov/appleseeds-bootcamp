import React from 'react';

const Box = (props) => {
    return (
        <div
            style={{
                width: props.width,
                height: props.height,
                backgroundColor: props.color,
                margin: '20px auto',
                padding: '20px',
            }}
        >
            {props.children}
        </div>
    );
};

export default Box;
