import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Quiz from './Quiz';

//hot replacement
if (module.hot) {
    module.hot.accept();
}

const App = () => {
    return (
        <Quiz
            title='How do you like front end?'
            question1='How much do you love front end?'
            question2='What is your favorite front end feature/topic?'
        />
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
