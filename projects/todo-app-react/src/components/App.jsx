import React, { Fragment } from 'react';
import './App.css';
import {
    getFromLocalStorage,
    initStorage,
    saveToLocalStorage,
} from '../utils/utils';
import ActionItemComponent from './ActionItemComponent';
import { v4 as uuidv4 } from 'uuid';

export const ITEM_TYPE = {
    NEW: 0,
    EXISTING: 1,
    DELETED: 3,
};

function ActionItem(id, text, type) {
    this.id = id;
    this.text = text;
    this.createdAt = new Date().toLocaleString();
    this.type = type;
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actionItems: [],
        };
    }

    initData = () => {
        initStorage();

        return (
            getFromLocalStorage('actionItems') || [
                new ActionItem(uuidv4(), '', ITEM_TYPE.NEW),
            ]
        );
    };

    componentDidMount() {
        const items = this.initData();
        this.setState({
            actionItems: items,
        });
    }

    updateStateAndSave = (items) => {
        saveToLocalStorage('actionItems', items);
        this.setState({ actionItems: items });
    };

    createHandler = (text) => {
        const items = this.state.actionItems;
        const newItem = items.pop();
        newItem.text = text;
        newItem.createdAt = new Date().toLocaleString();
        newItem.type = ITEM_TYPE.EXISTING;
        items.push(newItem);
        items.push(new ActionItem(uuidv4(), '', ITEM_TYPE.NEW));
        this.updateStateAndSave(items);
    };

    updateHandler = (id, text) => {
        const items = this.state.actionItems;
        const updated = items.find((item) => item.id === id);
        updated.text = text;
        this.updateStateAndSave(items);
    };

    deleteHandler = (id) => {
        const items = this.state.actionItems;
        const deleted = items.find((item) => item.id === id);
        deleted.type = ITEM_TYPE.DELETED;
        this.updateStateAndSave(items);
    };

    renderContent() {
        const { actionItems } = this.state;
        console.log(actionItems);
        return (
            <Fragment>
                {actionItems.map((item) => {
                    return (
                        <div className='field' key={`item-row-${item.id}`}>
                            <ActionItemComponent
                                item={item}
                                label={item.text}
                                isDisabled={item.type === ITEM_TYPE.DELETED}
                                onCreate={this.createHandler}
                                onUpdate={this.updateHandler}
                                onDelete={this.deleteHandler}
                            />
                        </div>
                    );
                })}
            </Fragment>
        );
    }

    render() {
        return <div className='app-container'>{this.renderContent()}</div>;
    }
}

export default App;
