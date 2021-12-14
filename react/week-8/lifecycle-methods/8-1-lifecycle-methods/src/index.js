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
        this.state = { favoriteColor: 'blue' };
        this.updatedElem = React.createRef();
    }

    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => {
            this.setState({ favoriteColor: 'red' });
        }, 1500);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        // document.getElementById('updatedDiv').innerText = 'componentDidUpdate';//the vanilla js way
        this.updatedElem.current.innerText = `The updated favorite color is ${this.state.favoriteColor}`;
    }

    render() {
        return (
            <div className='container'>
                <h1>{`My favorite color is ${this.state.favoriteColor}`}</h1>
                <div id='updatedDiv' ref={this.updatedElem}></div>
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
