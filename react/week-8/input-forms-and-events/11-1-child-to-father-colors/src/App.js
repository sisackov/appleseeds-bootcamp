import React from 'react';
import CustomButton from './CustomButton';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedColor: '',
        };
    }

    handleCustomButtonClick = (color) => {
        this.setState({ selectedColor: color });
    };

    renderButtons = () => {
        return ['blue', 'red', 'yellow'].map((color) => {
            return (
                <CustomButton
                    key={`customButton-${color}`}
                    color={color}
                    handleButtonClick={this.handleCustomButtonClick}
                />
            );
        });
    };

    render() {
        return (
            <div>
                {this.renderButtons()}
                <h1>The color selected is: {this.state.selectedColor}</h1>
            </div>
        );
    }
}

export default App;
