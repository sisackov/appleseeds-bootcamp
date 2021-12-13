import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//hot replacement
if (module.hot) {
    module.hot.accept();
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showBox: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            showBox: !prevState.showBox,
        }));
    }

    // React says we have to define render!!
    render() {
        return (
            <div className='container'>
                <h1>Hide & Seek</h1>
                <button className='btn' onClick={this.handleClick}>
                    Show / Hide
                </button>
                <div
                    className={this.state.showBox ? 'box-show' : 'box hide'}
                ></div>
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
