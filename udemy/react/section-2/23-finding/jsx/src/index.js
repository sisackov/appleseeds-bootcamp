// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
}

// Create a react component
const App = () => {
    const buttonText = { text: 'Click me' };
    const labelText = 'Enter name:';

    //Since for is a reserved word in JavaScript, React elements use htmlFor instead.
    return (
        <div>
            <label className='label' htmlFor='name'>
                {labelText}
            </label>
            <input id='name' type='text' />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText.text}
            </button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
