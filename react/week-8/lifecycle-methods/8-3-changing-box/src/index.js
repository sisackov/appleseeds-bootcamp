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
                <h1>Changing Box</h1>
                <div>
                    <Box width='400px' height='400px' color='white'></Box>
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
