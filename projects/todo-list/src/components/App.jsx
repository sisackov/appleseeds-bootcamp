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
            errorMsg: '',
        };
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        try {
            const { data } = await API.get('todoItems');
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

    handleCreate = async (newItem) => {
        try {
            const { data } = await API.post('/todoItems/', newItem);
            this.setState((state) => {
                return { data: [...state.data, data], showModal: false };
            });
        } catch (e) {
            this.setState({ errorMsg: e.message, showModal: false });
        }
    };

    handleUpdate = async (updatedItem) => {
        try {
            const { data } = await API.put(
                `/todoItems/${updatedItem.id}`,
                updatedItem
            );
            const newItems = this.state.data.map((item) =>
                item.id === updatedItem.id ? updatedItem : item
            );
            this.setState({ data: newItems, showModal: false });
        } catch (e) {
            this.setState({ errorMsg: e.message, showModal: false });
        }
        // console.log('Item updated: ', updatedItem);
        // this.setState({
        //     data: this.state.data.map((i) => (i.id === updatedItem.id ? updatedItem : i)), //TODO: update item
        //     showModal: false,
        // });
    };

    handleDelete = async (item) => {
        try {
            await API.delete(`/todoItems/${item.id}`);
            this.setState({
                data: this.state.data.filter((i) => i.id !== item.id),
            });
        } catch (e) {
            this.setState({ errorMsg: e.message });
        }
        // console.log('Item deleted: ', item);
        // this.setState({
        //     data: this.state.data.filter((i) => i.id !== item.id), //TODO: remove item
        // });
    };

    render() {
        const { data, selectedItem, showModal, errorMsg } = this.state;
        // console.log('data: ', data);
        return (
            <div>
                <div className='header'>
                    <h1>Todo List</h1>
                    <button onClick={this.openNewItemForm}>New Item</button>
                    <p>{errorMsg || '____'}</p>
                    {/* TODO:proper error message */}
                </div>
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
