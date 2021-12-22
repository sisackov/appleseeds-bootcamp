import React from 'react';

function Input({ handleInput, userValue }) {
  return <input onChange={handleInput} value={userValue} />;
}

export default Input;
