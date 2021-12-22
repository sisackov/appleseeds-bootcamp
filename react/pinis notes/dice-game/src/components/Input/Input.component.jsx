import React from "react";
import "./input.styles.css";
class Input extends React.Component {
  state = { value: 100 };

  handleOnChange = (e) => {
    this.setState({ value: e.target.value },()=>{
      this.props.handlePointsToWin(this.state.value);
    });
  };

  render() {
    return (
      <input
        className="input"
        placeholder={this.props.placeholder}
        type={this.props.type}
        value={this.state.value}
        onChange={this.handleOnChange}
      />
    );
  }
}
export default Input;
