import React from 'react';

class InputTextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            isError: false,
        };
        this.stateKey = props.stateKey;
        this.validator = props.inputValidator;

        this.inputRef = React.createRef();
    }

    onFocusOut = (e) => {
        e.preventDefault();
        if (this.validator && !this.validator(this.state.term)) {
            this.inputRef.current.style.borderColor = 'red';
        }
        this.props.inputFocusOut(this.stateKey, this.state.term);
    };

    render() {
        return (
            <div className='field'>
                <label className='field-label'>{this.props.label}</label>
                <textarea
                    className='field-input'
                    ref={this.inputRef}
                    value={this.state.term}
                    disabled={!this.props.isEnabled}
                    onChange={(e) => this.setState({ term: e.target.value })}
                    onBlur={this.onFocusOut}
                />
            </div>
        );
    }
}

export default InputTextArea;
