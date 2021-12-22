import React from "react";

class Form extends React.Component {
  state = { name: "", age: "" };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //* nice trick to only have one handleChange function for all inputs
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //* now you can take the form values, do validation, give it to another component before submitting it to the backend
    console.log(this.state);
  };

  render() {
    return (
      //* this is controlled because im getting the value from my react state not from the DOM
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
          name="name"
        />
        <label>Age</label>
        <input
          type="number"
          onChange={this.handleChange}
          value={this.state.age}
          name="age"
        />
        <input type="submit" />
      </form>
    );
  }
}
export default Form;
