import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Box from './Box';

//hot replacement
if (module.hot) {
    module.hot.accept();
}

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <h1>Boxes</h1>
                <div>
                    <Box width='400px' height='200px' color='green'></Box>
                    <Box width='200px' height='300px' color='red'></Box>
                    <Box width='500px' height='150px' color='yellow'></Box>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
