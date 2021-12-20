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

    handleCopyClick = () => {
        this.inputRef.current.select();
        // document.execCommand('copy');//deprecated
        navigator.clipboard.writeText(this.inputRef.current.value);
    };

    render() {
        return (
            <div className='container'>
                <h1>What is the meaning of life</h1>
                <textarea
                    ref={this.inputRef}
                    name='meaningOfLife'
                    id='meaningOfLifeAnswerTextArea'
                    cols='30'
                    rows='10'
                ></textarea>
                <button onClick={this.handleCopyClick}>Copy</button>
            </div>
        );
    }
}

export default App;
