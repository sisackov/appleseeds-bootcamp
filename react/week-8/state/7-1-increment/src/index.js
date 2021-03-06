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
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    }

    // React says we have to define render!!
    render() {
        return (
            <div className='container'>
                <h1>Click Counter</h1>
                <div>
                    <button className='btn' onClick={this.handleClick}>
                        Increment
                    </button>
                    <span className='counter'>{this.state.counter}</span>
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
