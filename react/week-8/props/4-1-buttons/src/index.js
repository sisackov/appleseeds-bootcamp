import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button';

//hot replacement
if (module.hot) {
    module.hot.accept();
}

const App = () => {
    return (
        <div className='container'>
            <Button type='btn bold' text='Important' />
            <Button type='btn' text='Not Important' />
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
