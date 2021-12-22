import React from 'react';

function Avatar({ name, img }) {
  return (
    <div className='avatar'>
      <h4>{name}</h4>
      <img src={img} alt='Avatar' />
    </div>
  );
}

export default Avatar;
