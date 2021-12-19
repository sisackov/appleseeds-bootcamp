import React from 'react';
import InputText from './InputText';
import InputSelect from './InputSelect';
import './FormComponent.css';
import InputTextArea from './InputTextArea';

const INPUT_TYPE = {
    TEXT: 'text',
    SELECT: 'select',
    TEXTAREA: 'textarea',
};

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: props.data,
            isEnabled: props.isEnabled,
            showConfirmation: false,
            isError: false,
        };

        this.inputRef = React.createRef();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isEnabled !== this.props.isEnabled) {
            this.setState({
                isEnabled: this.props.isEnabled,
            });
        }
        if (prevProps.showConfirmation !== this.props.showConfirmation) {
            this.setState({
                showConfirmation: this.props.showConfirmation,
            });
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.parentSubmitHandler(this.state.formData);
    };

    inputFocusOut = (fieldKey, value) => {
        this.setState(() => {
            const newFormData = { ...this.state.formData };
            newFormData[fieldKey].value = value;
            return { formData: newFormData };
        });
    };

    renderContent() {
        const { formData } = this.state;
        const components = [];
        for (const key in formData) {
            const field = formData[key];
            switch (field.type) {
                case INPUT_TYPE.TEXT:
                    components.push(
                        <InputText
                            key={key}
                            stateKey={key}
                            label={field.label}
                            isEnabled={this.state.isEnabled}
                            inputValidator={(text) => {
                                return text.length > 0;
                            }}
                            inputFocusOut={this.inputFocusOut}
                        />
                    );
                    break;
                case INPUT_TYPE.SELECT:
                    components.push(
                        <InputSelect
                            key={key}
                            stateKey={key}
                            label={field.label}
                            isEnabled={this.state.isEnabled}
                            minValue={field.range[0]}
                            maxValue={field.range[1]}
                            inputFocusOut={this.inputFocusOut}
                        />
                    );
                    break;
                case INPUT_TYPE.TEXTAREA:
                    components.push(
                        <InputTextArea
                            key={key}
                            stateKey={key}
                            label={field.label}
                            isEnabled={this.state.isEnabled}
                            inputFocusOut={this.inputFocusOut}
                        />
                    );
                    break;
                default:
                    break;
            }
        }
        return components;
    }

    renderButtons() {
        if (this.state.isEnabled) {
            return (
                <button
                    type='submit'
                    className='field-button'
                    key='submitButton'
                >
                    Submit
                </button>
            );
        } else if (this.state.showConfirmation) {
            return (
                <div
                    className='field-button-container'
                    key='fieldButtonContainer'
                >
                    <button
                        key='confirmButton'
                        type='button'
                        className='field-button'
                        onClick={this.props.onConfirm}
                    >
                        Confirm
                    </button>
                    <button
                        key='editButton'
                        type='button'
                        className='field-button'
                        onClick={this.props.onEdit}
                    >
                        Edit
                    </button>
                    ;
                </div>
            );
        }
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1 key='formTitle'>{this.props.label}</h1>
                {this.renderContent()}
                {this.renderButtons()}
            </form>
        );
    }
}

export default FormComponent;
