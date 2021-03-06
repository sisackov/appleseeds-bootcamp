import React from 'react';

class InputText extends React.Component {
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
        if (this.validator && this.validator(this.state.term)) {
            this.props.inputFocusOut(this.stateKey, this.state.term);
        } else {
            this.inputRef.current.style.borderColor = 'red';
        }
    };

    render() {
        return (
            <div className='field'>
                <label className='field-label'>{this.props.label}</label>
                <input
                    className='field-input'
                    ref={this.inputRef}
                    type='text'
                    value={this.state.term}
                    disabled={!this.props.isEnabled}
                    onChange={(e) => this.setState({ term: e.target.value })}
                    onBlur={this.onFocusOut}
                />
            </div>
        );
    }
}

export default InputText;
