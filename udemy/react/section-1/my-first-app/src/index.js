// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
if (module.hot) {
    module.hot.accept();
}

const App = () => {
    return <div>Hi there! fff</div>;
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
