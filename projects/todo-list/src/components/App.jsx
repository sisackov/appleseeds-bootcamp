import React from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidV4 } from 'uuid';
import API from '../api/mockApi';
import TodoCards from './TodoCards';
import Modal from './Modal';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selectedItem: { title: '' },
            showModal: false,
            isLoading: false,
        };
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        try {
            const { data } = await API.get('avatars');
            this.setState({ data, isLoading: false });
        } catch (e) {
            this.setState({ errorMsg: e.message });
        }
    }

    openNewItemForm = () => {
        this.setState({
            showModal: true,
            selectedItem: { title: '' },
        });
    };

    handleSave = (item, isNew) => {
        if (isNew) {
            this.handleCreate(item);
        } else {
            this.handleUpdate(item);
        }
    };

    handleEditClick = (item) => {
        console.log('handleEditClick: ', item);
        this.setState({
            showModal: true,
            selectedItem: item,
        });
    };

    handleCreate = (item) => {
        console.log('Item new: ', item);
        item.id = uuidV4();
        this.setState({
            data: [...this.state.data, item], //TODO: spread operator
            showModal: false,
        });
    };

    handleUpdate = (item) => {
        console.log('Item updated: ', item);
        this.setState({
            data: this.state.data.map((i) => (i.id === item.id ? item : i)), //TODO: update item
            showModal: false,
        });
    };

    handleDelete = (item) => {
        console.log('Item deleted: ', item);
        this.setState({
            data: this.state.data.filter((i) => i.id !== item.id), //TODO: remove item
        });
    };

    render() {
        const { data, selectedItem, showModal } = this.state;
        // console.log('data: ', data);
        return (
            <div>
                <h1>Todo List</h1>
                <button onClick={this.openNewItemForm}>New Item</button>
                <TodoCards
                    data={data}
                    handleEdit={this.handleEditClick}
                    handleDelete={this.handleDelete}
                />
                <Modal
                    show={showModal}
                    handleClose={() => this.setState({ showModal: false })}
                >
                    <TodoForm
                        item={selectedItem}
                        handleSave={this.handleSave}
                    />
                </Modal>
                {/*  */}
            </div>
        );
    }
}

export default App;
