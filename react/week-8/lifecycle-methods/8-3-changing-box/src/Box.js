import React from 'react';

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showBoxPhase: 0 };
    }

    componentDidMount() {
        console.log('componentDidMount');
        setTimeout(() => {
            this.setState({ showBoxPhase: 1 });
        }, 1000);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        setTimeout(() => {
            this.setState({ showBoxPhase: 2 });
        }, 4000);
    }

    getBoxClassName = () => {
        switch (this.state.showBoxPhase) {
            case 0:
                return 'box';
            case 1:
                return 'box-animation';
            default:
                return 'hidden';
        }
    };

    render() {
        return (
            <div
                className={this.getBoxClassName()}
                style={{
                    width: this.props.width,
                    height: this.props.height,
                    backgroundColor: this.props.color,
                }}
            >
                {this.props.children}
            </div>
        );
    }
}

export default Box;
