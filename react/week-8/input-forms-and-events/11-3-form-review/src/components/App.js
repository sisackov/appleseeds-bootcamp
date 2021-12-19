import React, { Fragment } from 'react';
import './App.css';
import FormComponent from './FormComponent';

const DISPLAY_STATE = {
    COLLECT_DATA: 'collectData',
    CONFIRM_DATA: 'confirmData',
    SUBMIT_DATA: 'submitData',
};

function FormDataObject(label, value, type, range) {
    this.label = label;
    this.value = value;
    this.type = type;
    this.range = range;
}

class FormData {
    constructor(firstName, lastName, age, description, range) {
        this.firstName = new FormDataObject(
            'First Name',
            firstName || 'John',
            'text'
        );
        this.lastName = new FormDataObject(
            'Last Name',
            lastName || 'Doe',
            'text'
        );
        this.age = new FormDataObject(
            'Age',
            age || 15,
            'select',
            range || [15, 120]
        );
        this.description = new FormDataObject(
            'Free Text',
            description || '',
            'textarea'
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayState: DISPLAY_STATE.COLLECT_DATA,
            formData: new FormData(),
        };
    }

    componentDidMount() {
        this.setState({
            formData: new FormData(),
        });
    }

    onFormSubmit = (formData) => {
        this.setState({
            displayState: DISPLAY_STATE.CONFIRM_DATA,
        });
    };

    onConfirmHandler = () => {
        this.setState({
            displayState: DISPLAY_STATE.SUBMIT_DATA,
        });
    };

    onEditHandler = () => {
        this.setState({
            displayState: DISPLAY_STATE.COLLECT_DATA,
        });
    };

    renderContent() {
        return (
            <Fragment>
                <FormComponent
                    isEnabled={
                        this.state.displayState === DISPLAY_STATE.COLLECT_DATA
                    }
                    showConfirmation={
                        this.state.displayState === DISPLAY_STATE.CONFIRM_DATA
                    }
                    label='Data Collection Form'
                    data={this.state.formData}
                    parentSubmitHandler={this.onFormSubmit}
                    onConfirm={this.onConfirmHandler}
                    onEdit={this.onEditHandler}
                />
                {this.state.displayState === DISPLAY_STATE.SUBMIT_DATA ? (
                    <h2 style={{ textAlign: 'center' }}>
                        Form was successfully submitted
                    </h2>
                ) : null}
            </Fragment>
        );
    }

    render() {
        return <div className='app-container'>{this.renderContent()}</div>;
    }
}

export default App;
