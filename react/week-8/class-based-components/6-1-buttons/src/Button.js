import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <button className={this.props.type}>{this.props.text}</button>;
    }
}

export default Button;
