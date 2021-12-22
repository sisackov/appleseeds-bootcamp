import React, { Component } from "react";

class Input extends Component {
  state = { update: "", create: "" };
  handleSubmit = () => {
    this.props.handleCallback(this.state, this.props.id);
  };
  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <>
        <input
          type="text"
          name={this.props.type}
          placeholder={this.props.type}
          value={this.state[this.props.type]}
          onChange={this.handleOnChange}
        />
        <button onClick={this.handleSubmit}>{this.props.type}</button>
      </>
    );
  }
}
export default Input;
