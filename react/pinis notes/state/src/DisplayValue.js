import React from "react";

class DisplayValue extends React.Component {
  state = { value: "", isOpen: false };
  handleClick = () => {
    console.log("im setting the state");
    this.setState({ value: "pini" });
  };
  render() {
    console.log("rendering displkay component");
    return (
      <div>
        {this.state.value}
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}
export default DisplayValue;
