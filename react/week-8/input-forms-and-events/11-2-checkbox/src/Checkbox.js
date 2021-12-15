import React from 'react';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            defaultSelected: this.props.selected,
        };
    }

    render() {
        return (
            <div>
                <input
                    type='checkbox'
                    defaultChecked={this.state.defaultSelected}
                    style={{
                        width: '20px',
                        height: '20px',
                        fontSize: '20px',
                    }}
                ></input>
                <span>{this.state.text}</span>
            </div>
        );
    }
}

export default Checkbox;
