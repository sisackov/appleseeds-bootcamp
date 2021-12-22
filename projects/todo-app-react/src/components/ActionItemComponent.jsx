import React from 'react';
import { ITEM_TYPE } from './App';

class InputText extends React.Component {
    constructor(props) {
        super(props);
        const { item } = props;
        this.state = {
            item: item,
            term: item.text,
        };
    }

    getButtons = () => {
        const { term, item } = this.state;
        if (item.type === ITEM_TYPE.NEW) {
            return (
                <div className='button-container'>
                    <button
                        className='field-button'
                        onClick={() => this.props.onCreate(term)}
                    >
                        Create New
                    </button>
                </div>
            );
        } else if (item.type === ITEM_TYPE.EXISTING) {
            return (
                <div className='button-container'>
                    <button
                        className='field-button'
                        onClick={() => this.props.onUpdate(item.id, term)}
                    >
                        Update
                    </button>
                    <button
                        className='field-button'
                        onClick={() => this.props.onDelete(item.id)}
                    >
                        Delete
                    </button>
                </div>
            );
        }
    };

    render() {
        return (
            <div className='field'>
                <label className='field-label'>{this.props.label}</label>
                <input
                    className='field-input'
                    type='text'
                    value={this.state.term}
                    disabled={this.props.isDisabled}
                    onChange={(e) => this.setState({ term: e.target.value })}
                />
                <div>{this.getButtons()}</div>
            </div>
        );
    }
}

export default InputText;
