import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//hot replacement
if (module.hot) {
    module.hot.accept();
}

const COUNTER_MAX = 10;
const COUNTER_MIN = -10;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    getLabelClass() {
        if (this.state.counter > 0) {
            return 'counter positive';
        } else if (this.state.counter < 0) {
            return 'counter negative';
        }
        return 'counter zero';
    }

    handleClick = (ev) => {
        const isIncrement = ev.target.innerText === 'Increment';
        if (isIncrement && this.state.counter < COUNTER_MAX) {
            this.setState({ counter: this.state.counter + 1 });
        } else if (!isIncrement && this.state.counter > COUNTER_MIN) {
            this.setState({ counter: this.state.counter - 1 });
        }
    };

    render() {
        return (
            <div className='container'>
                <h1>Click Counter</h1>
                <div>
                    <button className='btn' onClick={this.handleClick}>
                        Increment
                    </button>
                    <span className={this.getLabelClass()}>
                        {this.state.counter}
                    </span>
                    <button className='btn' onClick={this.handleClick}>
                        Decrement
                    </button>
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
