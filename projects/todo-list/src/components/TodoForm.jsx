import React, { Fragment } from 'react';
import InputText from './InputText';
import InputTextArea from './InputTextArea';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: {},
            isNew: true,
            title: '',
            description: '',
            location: '',
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.item.title !== this.props.item.title) {
            console.log('prevProps: ', prevProps);
            console.log('this.props: ', this.props);

            const { title, description, location } = this.props.item;
            this.setState({
                item: this.props.item,
                isNew: !title,
                title: title,
                description: description || '',
                location: location || '',
            });
        }
    }

    handleInputUpdate = (fieldName, text) => {
        this.setState({
            [fieldName]: text,
        });
        console.log(
            'Change detected. State updated ' + fieldName + ' = ' + text
        );
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { item, isNew, title, description, location } = this.state;
        if (title && description) {
            item.title = title;
            item.description = description;
            item.location = location;
            item.modifiedAt = new Date();
            this.props.handleSave(item, isNew);
        } //TODO validate or show error
    };

    render() {
        return (
            <Fragment>
                <h1>{`${this.state.isNew ? 'New' : 'Update'} TODO Form`}</h1>
                <form onSubmit={this.handleSubmit}>
                    <InputText
                        inputName='title'
                        label='Title'
                        inputValue={this.state.title}
                        inputValidator={(text) => {
                            return text.length > 0;
                        }}
                        inputFocusOut={this.handleInputUpdate}
                    />
                    <InputTextArea
                        inputName='description'
                        label='Description'
                        inputValue={this.state.description}
                        inputValidator={(text) => {
                            return text.length > 0;
                        }}
                        inputFocusOut={this.handleInputUpdate}
                    />
                    <InputText
                        inputName='location'
                        label='Location'
                        inputValue={this.state.location}
                        inputFocusOut={this.handleInputUpdate}
                    />
                    <div className='field'>
                        <button
                            type='button'
                            className='field-button'
                            onClick={this.handleSubmit}
                        >
                            Save
                        </button>
                    </div>
                </form>
            </Fragment>
        );
    }
}

export default TodoForm;
