import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div className='container'>
                <h1>Focus on the input</h1>
                <input type='text' ref={this.inputRef} />
            </div>
        );
    }
}

export default App;
