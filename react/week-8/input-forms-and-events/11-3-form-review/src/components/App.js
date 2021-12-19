import React from 'react';
import './App.css';
import InputText from './InputText';

const DISPLAY_STATE = {
    INITIAL: 'initial',
    PLAYING: 'playing',
    ENDED: 'ended',
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayState: DISPLAY_STATE.INITIAL,
        };
    }

    renderContent() {
        if (this.state.displayState === DISPLAY_STATE.INITIAL) {
            return (
                <InputText
                    label='Target Score'
                    parentSubmitHandler={this.initializeGame}
                    inputValidator={(text) => {
                        let score = parseInt(text);
                        return score && score > 0;
                    }}
                />
            );
        }
    }

    render() {
        return <div className='app-container'>{this.renderContent()}</div>;
    }
}

export default App;
