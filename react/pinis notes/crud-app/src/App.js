import React, { Component } from "react";

import API from "./api/mockApi";
import Card from "./components/Card.component";
import Input from "./components/Input.component";

class App extends Component {
  state = { data: null, errorMsg: "", isLoading: false };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const { data } = await API.get("avatars");
      this.setState({ data, isLoading: false });
    } catch (e) {
      this.setState({ errorMsg: e.message });
    }
  }

  create = async (value) => {
    try {
      if (value.name.length < 6) {
        //! our own errors that will be catched.
        throw new Error("must be more than 5 letters");
      }
      const newItem = {
        name: value.name,
      };
      const { data } = await API.post("/avatars/", newItem);

      this.setState((state) => {
        return { data: [...state.data, data] };
      });
    } catch (e) {
      this.setState({ errorMsg: e.message });
    }
  };

  delete = async (id) => {
    await API.delete(`/avatars/${id}`);
    console.log(this.state.data);
    const data = this.state.data.filter((el) => el.id !== id);
    console.log(data);
    this.setState({ data });
  };

  update = async (value, id) => {
    const updatedItem = {
      name: value.updatedName,
    };
    const { data } = await API.put(`avatars/${id}`, updatedItem);
    console.log("data", data);
    const index = this.state.data.findIndex((el) => el.id === id);
    const newItems = [...this.state.data];
    newItems[index] = data;
    this.setState({ data: newItems });
  };

  renderData = () => {
    return (
      <div>
        {this.state.data.map((el) => {
          return (
            <div key={el.id}>
              <Card data={el} />
              <Input
                type="updatedName"
                handleCallback={this.update}
                id={el.id}
              />
              <button onClick={() => this.delete(el.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.state.isLoading && <div>loading....</div>}
        {this.state.data && this.renderData()}
        <Input type="name" handleCallback={this.create} />
        {<h3 style={{ color: "red" }}>{this.state.errorMsg}</h3>}
      </div>
    );
  }
}

export default App;
