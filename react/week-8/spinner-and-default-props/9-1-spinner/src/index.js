import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';

if (module.hot) {
    module.hot.accept();
}

class App extends React.Component {
    state = { isTimerOn: true };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isTimerOn: false });
        }, 3000);
    }

    renderContent() {
        if (this.state.isTimerOn) {
            return <Spinner />;
        }
        return <div>Hello World</div>;
    }

    render() {
        return <div className='border red'>{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
