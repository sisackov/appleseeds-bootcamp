import "./App.css";
import { v4 as uuidv4 } from "uuid";
import React from "react";
import Input from "./Input";

class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "Pini" },
      { id: 2, name: "Timmy" },
    ],
  };

  handleCreate = (value) => {
    const id = uuidv4();
    const newItem = {
      id,
      name: value.create,
    };
    this.setState({ items: [...this.state.items, newItem] });
  };

  handleDelete = (id) => {
    const filteredList = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items: filteredList });
  };

  handleUpdate = (value, id) => {
    const items = this.state.items;
    const item = items.find((item) => item.id === id);
    const index = items.findIndex((item) => item.id === id);

    const editedItem = {
      ...item,
      name: value.update,
    };
    //* first solution
    // const newItems = [...items];
    // newItems[index] = editedItem;
    // this.setState({ items: newItems });

    //*second solution
    this.setState({
      items: this.state.items.map((item) => {
        return item.id === id ? editedItem : item;
      }),
    });
  };

  displayItems = () => {
    return this.state.items.map((item, i) => {
      return (
        <div key={i}>
          {item.name}
          <Input
            type="update"
            handleCallback={this.handleUpdate}
            id={item.id}
          />
          <button onClick={() => this.handleDelete(item.id)}>Delete</button>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="App">
        <h1>CRUD!!!</h1>
        {this.displayItems()}
        <Input type="create" handleCallback={this.handleCreate} />
      </div>
    );
  }
}

export default App;
