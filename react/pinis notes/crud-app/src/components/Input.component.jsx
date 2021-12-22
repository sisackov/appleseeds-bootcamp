import React, { Component } from "react";

class Input extends Component {
  state = { updatedName: "" };
  handleSubmit = () => {
    this.props.handleCallback(this.state, this.props.id);
  };
  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <label htmlFor={this.props.type}></label>
        <input
          type="text"
          id={this.props.type}
          name={this.props.type}
          placeholder={this.props.type}
          value={this.state.name}
          onChange={this.handleOnChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
export default Input;
