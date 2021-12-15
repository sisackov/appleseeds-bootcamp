import React from 'react';

class CustomButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnColor: this.props.color,
        };
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.handleButtonClick(this.state.btnColor);
    };

    render() {
        return (
            <button
                onClick={this.handleClick}
                style={{
                    background: this.state.btnColor,
                    width: '100px',
                    height: '50px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    display: 'block',
                }}
            >
                {this.state.btnColor}
            </button>
        );
    }
}

export default CustomButton;
