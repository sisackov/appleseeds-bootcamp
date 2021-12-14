import React from 'react';

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.colors = ['red', 'green', 'yellow', 'blue', 'orange'];
        this.intervalId = 0;
        this.state = { colorIndex: 0, isBox: true };
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.intervalId = setInterval(this.incrementColorIndex, 1000);
    }

    incrementColorIndex = () => {
        console.log('incrementColorIndex');
        if (this.state.colorIndex < this.colors.length) {
            this.setState({ colorIndex: this.state.colorIndex + 1 });
        } else {
            clearInterval(this.intervalId);
            this.setState({ isBox: false });
        }
    };

    updateBox = () => {
        console.log('updateBox', this.state.colorIndex);
        if (this.state.isBox) {
            return this.colors[this.state.colorIndex];
        }
        return 'blue';
    };

    render() {
        return (
            <div
                className={this.state.isBox ? 'box' : 'box circle'}
                style={{
                    width: this.props.width,
                    height: this.props.height,
                    backgroundColor: this.updateBox(),
                }}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Box;
