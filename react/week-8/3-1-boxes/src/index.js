import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Box from './Box';

//hot replacement
if (module.hot) {
    module.hot.accept();
}

const App = () => {
    return (
        <Box width='400px' height='400px' color='green'>
            <Box width='300px' height='300px' color='blue'>
                <Box width='200px' height='200px' color='pink'>
                    <Box width='100px' height='30px' color='purple' />
                    <Box width='100px' height='30px' color='purple' />
                </Box>
            </Box>
        </Box>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
