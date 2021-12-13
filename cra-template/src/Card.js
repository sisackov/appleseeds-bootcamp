import React from 'react';

const Card = (props) => {
    return (
        <div className='card'>
            <img alt='random' src={props.imgUrl}></img>
            <h1>{props.title}</h1>
            <p>{props.descr}</p>
            <a className='link' href={props.link1}>
                SHARE
            </a>
            <a className='link' href={props.link2}>
                EXPLORE
            </a>
        </div>
    );
};

export default Card;
