import React from 'react';

class InputSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isError: false,
        };
        this.stateKey = props.stateKey;
        this.minValue = props.minValue;
        this.maxValue = props.maxValue;

        this.inputRef = React.createRef();
    }

    onFocusOut = (e) => {
        e.preventDefault();
        this.props.inputFocusOut(this.stateKey, this.state.value);
    };

    renderSelectOptions() {
        const options = [];
        for (let i = this.minValue; i <= this.maxValue; i++) {
            options.push(
                <option key={i} value={i}>
                    {i}
                </option>
            );
        }
        return options;
    }

    render() {
        return (
            <div className='field'>
                <label className='field-label'>{this.props.label}</label>
                <select
                    className='field-input'
                    ref={this.inputRef}
                    value={this.state.value}
                    disabled={!this.props.isEnabled}
                    onChange={(e) => this.setState({ value: e.target.value })}
                    onBlur={this.onFocusOut}
                >
                    {this.renderSelectOptions()}
                </select>
            </div>
        );
    }
}

export default InputSelect;
